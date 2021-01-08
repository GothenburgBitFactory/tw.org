#!/usr/bin/env python3

import datetime
import json
import os
import sys
import re

from github import Github

# Keywords used to search for projects
KEYWORDS = ['taskwarrior', 'timewarrior', 'taskserver']

# The number of days at which point we consider a repository obsolete (3 years)
DAYS_OBSOLETE = 3 * 365

# The date format we get as a response from the APIs
DATE_FMT = "%Y-%m-%dT%H:%M:%SZ"

# Files to always and never include
SCRIPT_DIR = os.path.dirname(os.path.realpath(__file__))
ALWAYS_INCLUDED_PATH = os.path.join(SCRIPT_DIR, 'always_include.json')
NEVER_INCLUDED_PATH  = os.path.join(SCRIPT_DIR, 'never_include.json')


def search_github(client, keyword):
    """ Search GitHub for repos where `keyword` is contained in the description or name. """
    results = []

    query = '%s+in:description,name,topic' % keyword
    for repo in client.search_repositories(query, sort='stars', order='desc'):
        results.append(from_github_repo(repo))

    return results


def from_github_repo(repo):
    """Convert repo object from GitHub v3 API to our own format """
    data = {}

    # Base info
    data['author'] = [repo.owner.login]
    data['category'] = 'Unknown'
    data['compatibility'] = '2.4.1+'
    data['language'] = [repo.language]
    data['name'] = repo.name
    data['url'] = data['url_src'] = repo.html_url
    data['obsolete'] = False
    data['stars'] = repo.stargazers_count
    # data['verified'] = ...

    # Oddly the `license` isn't exposed by the library and would
    # normally require an additional request.
    data['license'] = repo._rawData['license']['name'] if repo._rawData['license'] else None

    # Description and dependent fields
    data['description'] = data['descriptionText'] = repo.description
    data['theme'] = get_themes(repo.description)

    # Last update timestamp and dependent fields
    data['last_update'] = repo.updated_at
    data['obsolete'] = is_obsolete(repo.updated_at)

    return data


def is_obsolete(updated_at):
    """ A repo is considered obsolete after 3 years of inactivity """
    elapsed = datetime.datetime.now() - updated_at
    return elapsed.days > (3 * 365)


def get_themes(description):
    """ Tries to extract theme info from the description """
    if not description:
        return []

    theme = []
    description = description.lower()

    if 'android' in description:
        theme.append('Android')
    if 'git' in description:
        theme.append('Git')
    if 'gui' in description \
            or 'gtk' in description \
            or 'graphic' in description:
        theme.append('GUI')
    if 'ledger' in description:
        theme.append('Ledger')
    if 'mail' in description:
        theme.append('Mail')
    if 'os x' in description or 'osx' in description:
        theme.append('OSX')
    if 'time' in description:
        theme.append('Time')
    if 'vim' in description:
        theme.append('Vim')
    if 'web' in description:
        theme.append('Web')
    if 'xmpp' in description:
        theme.append('XMPP')

    return theme


def filter_repos(repositories):
    """Removes duplicates and blacklisted entries based on the url """
    result = []
    blacklisted = set(x['url'] for x in load_file(NEVER_INCLUDED_PATH))
    seen = set()

    for repo in repositories:
        url = repo['url']

        if url in blacklisted or url in seen:
            continue

        seen.add(repo['url'])
        result.append(repo)

    return result


def load_file(filepath):
    with open(filepath) as f:
        return json.load(f)


def usage():
    return "USAGE: %s [output_file]\n\n  output_file - optional, defaults to stdout\n" % sys.argv[0]


if __name__ == '__main__':
    # Get the output argument, or write to stdout
    if len(sys.argv) == 1:
        fout = sys.stdout
    elif len(sys.argv) == 2:
        fout = open(sys.argv[1], mode='w')
    else:
        exit('ERROR: too many arguments\n\n%s' % usage())

    # Get the API keys from the environment and build the clients
    GITHUB_API_KEY = os.getenv('GITHUB_API_KEY')
    if not GITHUB_API_KEY:
        exit('ERROR: the environment variable GITHUB_API_KEY is not set')
    github_client = Github(GITHUB_API_KEY)

    # Perform the search
    repos = load_file(ALWAYS_INCLUDED_PATH)
    for keyword in KEYWORDS:
        repos.extend(search_github(github_client, keyword))

    # Remove duplicates and output
    repos = filter_repos(repos)
    json.dump(repos, fout, indent=2, sort_keys=True, default=str)

