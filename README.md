# taskwarrior.org Site Repository

This repository contains the content of the taskwarrior.org site.


## To Clone this Repository:

   git clone https://github.com/GothenburgBitFactory/tw.org.git


## Instruction For Updating tw.org/html/tools

On first usage, generate API tokens and store them safely for later:

* [GitHub](https://github.com/settings/tokens): requires no special scopes


Then setup the Python 3 environment:

```sh
# Create a virtual environment to avoid clobbering global installation
$ python3 -m venv venv

# Activate the virtual environment
$ source venv/bin/activate

# Install dependencies
$ pip install -r requirements.txt
```


Then create the `update_tools.sh` script by copying the sample, and set API keys there. This file will be ignored and should not be committed.


Now that everything is setup, the tools can be updated by running `update_tools.sh`:

```sh
$ source venv/bin/activate
$ ./update_tools.sh
```

Repositories that are **always included** are listed in `tools/always_include.json`. Repositories that are **always ignored** are listed in `tools/never_include.json`. This can be modified and committed to the repository.

