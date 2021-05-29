#!/usr/bin/env python3

import datetime
import json
import os
import sys
from enum import IntEnum

from github import Github


class LogLevel(IntEnum):
    DEBUG = 0
    INFO = 1
    WARN = 2
    ERROR = 3


# Keywords used to search for projects
KEYWORDS = ["taskwarrior", "taskserver"]

# The number of days at which point we consider a repository obsolete (3 years)
DAYS_OBSOLETE = 3 * 365

# Repositories to always and never include
SCRIPT_DIR = os.path.dirname(os.path.realpath(__file__))
BLACKLIST_PATH = os.path.join(SCRIPT_DIR, "blacklist.json")
INCLUDE_PATH = os.path.join(SCRIPT_DIR, "include.json")


def log_message(message, *args, label=None):
    if label is None:
        print(message.format(*args))
    else:
        print("[{}]".format(label), message.format(*args))


def log_debug(message, *args):
    if LOG_LEVEL > LogLevel.DEBUG:
        return
    log_message(message, *args, label="DEBUG")


def log_info(message, *args):
    if LOG_LEVEL > LogLevel.INFO:
        return
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

    for name in names:
        log_debug("Pulling Github for repository '{}'", name)
        results.append(from_github_repo(client.get_repo(name)))

    for keyword in keywords:
        log_debug("Querying Github for repositories with keyword '{}'", keyword)
        query = "{}+in:description,name,topic".format(keyword)
        for repo in client.search_repositories(query, sort="stars", order="desc"):
            results.append(from_github_repo(repo))

    return results


def from_github_repo(repo):
    """
    Convert repo object from GitHub v3 API to our own format

    description: description of the tool
    language:    language the tool is written in
    license:     license the tool is released under
    name:        name of the tool
    obsolete:    flag indicating whether the tool is deemed obsolete or not
    owner:       owner of the tool's repository
    rating:      rating of the tool
    updated:     date the tool was last updated
    url:         url of the tool's repository
    """
    data = {
        "description": repo.description,
        "language": [repo.language if repo.language is not None else "N/A"],
        # Oddly the `license` isn't exposed by the library and would normally require an additional request.
        "license": repo._rawData["license"]["name"] if repo._rawData["license"] else None,
        "name": repo.name,
        "obsolete": is_obsolete(repo.updated_at),
        "owner": [repo.owner.login],
        "rating": repo.stargazers_count,
        "updated": repo.updated_at.date(),
        "url": repo.html_url,
    }

    return data


def is_obsolete(updated_at):
    """
    A repo is considered obsolete after 3 years of inactivity
    """
    elapsed = datetime.datetime.now() - updated_at
    return elapsed.days > DAYS_OBSOLETE


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
            log_debug("Dropping '{}' because it is a duplicate", tool["url"])
            continue
        elif url in blacklist:
            log_debug("Dropping '{}' because it {}", tool['url'], blacklist[url])
            continue

        seen.add(tool["url"])
        results.append(tool)

    return results


def load_file(filepath):
    try:
        with open(filepath) as f:
            return json.load(f)
    except FileNotFoundError:
        return dict()


def usage():
    return "USAGE: %s [output_file]\n\n  output_file - optional, defaults to stdout\n" % sys.argv[0]


if __name__ == "__main__":
    LOG_LEVEL = LogLevel[os.getenv("LOG_LEVEL") or "INFO"]
    log_message("Log level set to '{}'", str(LOG_LEVEL.name))

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

    log_message("Updating tool listing")
    log_info("Querying Github for tools with keywords {}", KEYWORDS)
    tools = search_github(includes["github"], KEYWORDS)
    log_info("Adding {} manual includes ...", len(includes["manual"]))
    tools.extend(includes["manual"])
    log_info("Filtering {} tools ...", len(tools))
    tools = filter_tools(tools)
    log_debug("Sorting tools...")
    tools.sort(key=lambda x: x.get("url") if x.get("url") is not None else "")
    log_info("Writing {} tools to {} ...", len(tools), output.name)
    json.dump(tools, output, indent=2, sort_keys=True, default=str)
    log_message("Update complete.")
