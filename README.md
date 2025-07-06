# taskwarrior.org Site Repository

This repository contains the content of [taskwarrior.org](https://taskwarrior.org), the website for the [Taskwarrior](https://github.com/GothenburgBitFactory/taskwarrior) project.

## Contributing

To clone this repository, run
```shell
git clone https://github.com/GothenburgBitFactory/tw.org
```

For minor changes, it is perfectly fine to simply change the relevant Markdown files and make a pull request.

For more complex changes, here is how to build the documentation locally:

1. Install [hugo](https://gohugo.io/getting-started/quick-start/).
2. Run
   ```shell
   hugo server -D -w
   ```
   This defaults to running a web server on `http://localhost:1313`.  
   If you are running on an external host, try
   ```shell
   hugo server -D -w --bind 0.0.0.0 -b http://<hostname>
   ```

## Updating Taskwarrior Versions

To record a new release of Taskwarrior, run `bin/tw-release vX.Y.Z` and make a PR for the result.

## Updating Tools

This repository has automation for searching GitHub for projects related to Taskwarrior and including them in the "Tools" page.

On first usage, generate API tokens and store them safely for later:

* [GitHub](https://github.com/settings/tokens): requires no special scopes


Then set up the Python 3 environment:

```sh
# Create a virtual environment to avoid clobbering global installation
$ python3 -m venv venv

# Activate the virtual environment
$ source venv/bin/activate

# Install dependencies
$ pip install -r bin/requirements.txt
```


Then create the `update_tools.sh` script by copying the sample, and set API keys there. This file will be ignored and should not be committed.


Now that everything is set up, the tools can be updated by running `update_tools.sh`:

```sh
$ source venv/bin/activate
$ ./update_tools.sh
```

Repositories that are **always included** are listed in `tools/always_include.json`. Repositories that are **always ignored** are listed in `tools/never_include.json`. This can be modified and committed to the repository.

