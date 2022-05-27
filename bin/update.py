#!/usr/bin/env python3

import datetime
import json
import os
import sys
import time
from enum import IntEnum
from github import Github
from json import JSONDecodeError


class LogLevel(IntEnum):
    TRACE = 0
    DEBUG = 1
    INFO = 2
    WARN = 3
    ERROR = 4


# Keywords used to search for projects
KEYWORDS = [
    "taskwarrior",
    "taskserver"
]

# The number of days at which point we consider a repository dormant (3 years)
DAYS_DORMANT = 3 * 365

# Repositories to always and never include
SCRIPT_DIR = os.path.dirname(os.path.realpath(__file__))
BLACKLIST_PATH = os.path.join(SCRIPT_DIR, "blacklist.json")
INCLUDE_PATH = os.path.join(SCRIPT_DIR, "include.json")


def log_message(message, *args, label=None):
    if label is None:
        print(message.format(*args))
    else:
        print("[{}]".format(label), message.format(*args))


def log_trace(message, *args):
    if LOG_LEVEL > LogLevel.TRACE:
        return
    log_message(message, *args, label="TRACE")


def log_debug(message, *args):
    if LOG_LEVEL > LogLevel.DEBUG:
        return
    log_message(message, *args, label="DEBUG")


def log_info(message, *args):
    if LOG_LEVEL > LogLevel.INFO:
        return
    if LOG_LEVEL == LogLevel.INFO:
        log_message(message, *args)
    else:
        log_message(message, *args, label="INFO")


def log_warn(message, *args):
    if LOG_LEVEL > LogLevel.WARN:
        return
    log_message(message, *args, label="WARN")


def log_error(message, *args):
    if LOG_LEVEL > LogLevel.ERROR:
        return
    log_message(message, *args, label="ERROR")


def search_github(names, keywords):
    """
    Search GitHub for repos where `keyword` is contained in the description, name, or topic.
    """
    client = Github(GITHUB_API_KEY)

    results = []

    log_debug("Processing {} manual entries", len(names))
    for name in names:
        log_debug("Querying GitHub for repository '{}'", name)
        results.append(from_github_repo(client.get_repo(name)))

    log_debug("Processing {} keywords", len(keywords))
    for keyword in keywords:
        for qualifier in ["topic", "name,description"]:
            log_info("Querying GitHub for repositories with keyword '{}' in '{}'...", keyword, qualifier)
            repos = client.search_repositories(keyword, **{"in": f"{qualifier}"})

            for repo in repos:
                results.append(from_github_repo(repo))
                log_debug("Adding '{}' as {}", repo.html_url, len(results))

                sleep_period = calculate_sleep(repo.raw_headers)

                log_debug("Sleeping {:.3f} s", sleep_period)
                time.sleep(sleep_period)

    log_info("Received {} entries from GitHub", len(results))

    return results


def from_github_repo(repo):
    """
    Convert repo object from GitHub v3 API to our own format

    description: description of the tool
    dormant:     flag indicating whether the tool is deemed dormant or not
    language:    language the tool is written in
    license:     license the tool is released under
    name:        name of the tool
    owner:       owner of the tool's repository
    rating:      rating of the tool
    updated:     date the tool was last updated
    url:         url of the tool's repository
    """
    data = {
        "description": repo.description,
        "dormant": is_dormant(repo.pushed_at) or repo.archived,
        "language": [repo.language if repo.language is not None else "N/A"],
        # Oddly the `license` isn't exposed by the library and would normally require an additional request.
        "license": repo._rawData["license"]["name"] if repo._rawData["license"] else None,
        "name": repo.name,
        "owner": [repo.owner.login],
        "rating": repo.stargazers_count,
        "updated": repo.pushed_at.date(),
        "url": repo.html_url,
    }

    return data


def is_dormant(pushed_at):
    """
    A repo is considered dormant after 3 years of inactivity
    """
    elapsed = datetime.datetime.now() - pushed_at
    return elapsed.days > DAYS_DORMANT


def calculate_sleep(headers):
    resource_name = headers['x-ratelimit-resource'].capitalize()
    remaining_requests = int(headers['x-ratelimit-remaining'])
    max_requests = headers['x-ratelimit-limit']
    reset_time = float(headers['x-ratelimit-reset'])

    log_trace("{} rate limit: {} of {} requests remaining",
              resource_name,
              remaining_requests,
              max_requests)

    current_time = time.time()
    diff = reset_time - current_time if reset_time > current_time else 0
    log_trace("{:.3f} s until rate limit reset ({})", diff, reset_time)
    sleep_period = diff / remaining_requests if remaining_requests > 0 else diff + 5

    return sleep_period


def filter_tools(inputs):
    """
    Removes duplicates and blacklisted entries based on the url
    """
    results = []
    blacklist = load_file(BLACKLIST_PATH)
    seen = set()

    for tool in inputs:
        url = tool["url"]

        if url in seen:
            log_debug("Dropping '{}' because it is a duplicate", url)
            continue
        elif url in blacklist:
            log_debug("Dropping '{}' because it {}", url, blacklist[url])
            continue

        log_debug("Keeping '{}'", url)
        seen.add(url)
        results.append(tool)

    return results


def load_file(filepath):
    try:
        with open(filepath) as f:
            return json.load(f)
    except FileNotFoundError:
        log_info("File '{}' not found!", filepath)
        return dict()
    except JSONDecodeError:
        log_warn("Could not parse file '{}'!", filepath)
        return dict()


def usage():
    return "USAGE: %s [output_file]\n\n  output_file - optional, defaults to stdout\n" % sys.argv[0]


if __name__ == "__main__":
    LOG_LEVEL = LogLevel[os.getenv("LOG_LEVEL") or "INFO"]
    log_debug("Log level set to '{}'", str(LOG_LEVEL.name))

    GITHUB_API_KEY = os.getenv("GITHUB_API_KEY")
    if not GITHUB_API_KEY:
        log_error("The environment variable GITHUB_API_KEY is not set!")
        exit(1)

    output = None

    if len(sys.argv) == 1:
        log_debug("Will write output to stdout")
        output = sys.stdout
    elif len(sys.argv) == 2:
        log_debug("Will write output to {}", sys.argv[1])
        output = open(sys.argv[1], mode="w")
    else:
        log_error("Too many arguments!")
        print(usage())
        exit(1)

    includes = load_file(INCLUDE_PATH)
    includes["github"] = [] if "github" not in includes else includes["github"]
    includes["manual"] = [] if "manual" not in includes else includes["manual"]

    log_info("Updating tool listing...")
    log_info("Querying GitHub...")
    tools = search_github(includes["github"], KEYWORDS)
    log_info("Adding {} manual includes ...", len(includes["manual"]))
    tools.extend(includes["manual"])
    log_info("Filtering {} tools ...", len(tools))
    tools = filter_tools(tools)
    log_debug("Sorting tools...")
    tools.sort(key=lambda x: x.get("url") if x.get("url") is not None else "")
    log_info("Writing {} tools to {} ...", len(tools), output.name)
    json.dump(tools, output, indent=2, sort_keys=True, default=str)
    log_info("Update complete.")
