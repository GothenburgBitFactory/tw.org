---
title: "Clog - Clone"
---

[]{#how}

### How To Build Clog

This is for developers. Specifically those who know how to use tools, satisfy
dependencies, and want to set up a development environment. It is not
user-friendly.

You\'ll need these tools:

-   [git](https://git-scm.com/)
-   [cmake](https://cmake.org)
-   make
-   C++ compiler, currently gcc 4.7+ or clang 3.3+ for full C++11 support
-   Python 2.7 or later (for tests)

[]{#clone}

### Cloning the Repo

    $ git clone --recursive https://github.com/GothenburgBitFactory/clog.git clog.git

[]{#stable}

### Building the Stable Version

The master branch always represents the more recently released version, and
should be your preferred choice.

    $ cd clog.git
    $ git checkout master                # Master is the stable branch.
    $ cmake -DCMAKE_BUILD_TYPE=release . # 'release' for performance.
    $ make                               # Just build it.

[]{#build}

### Building the Dev Branch

The dev branch is always the highest numbered branch, in this example, `1.4.0`.

    $ cd clog.git
    $ git checkout 1.4.0                 # Dev branch
    $ git submodule init && git submodule update # Fetch the submodule
    $ cmake -DCMAKE_BUILD_TYPE=debug .   # debug or release. Default: neither.
    $ make VERBOSE=1                     # Shows details

Build the debug type if you want symbols in the binary for debugging.

Note: the development branch is not always stable, doesn\'t always pass tests,
and sometimes doesn\'t even compile. Choose wisely.

[]{#tests}

### Running the Test Suite

There are C++ and Python, build and run them:

    $ cd clog.git/test
    $ make VERBOSE=1     # Shows details
    $ ./run_all          # Runs all tests silently > all.log
    $ ./problems         # Find errors in all.log

[]{#patch}

### Submitting a Patch

Talk to us first - make sure you are working on something that is wanted.
Patches will not be applied simply because you did the work, or because it was
easy, or because you want it. Instead, the change has to be considered right for
the project.

Remember the various forms of documentation involved, and the test suite. Work
on the dev branch, not `master`. When you are are ready to submit, do this:

    $ git commit

Follow the standard form for commit messages, which looks like this:

    Category: Short message

    - Details
    - Details

Here is a good example:

    TW-1636: UUID with numeric-only first segment is not parsed properly

    - Switched Nibbler::getUUID to Nibbler::getPartialUUID, which caused partial
      UUID matching to fail sometimes.
    - Changed precedence to search for UUID before ID, which solves the numeric
      UUID problem.

Create the patch using this:

    $ git format-patch HEAD^

Mail the patch to <taskwarrior-dev@googlegroups.com> or attach it to the
appropriate ticket in the [bug
tracker](https://github.com/GothenburgBitFactory/clog/issues). If you do the
latter, make sure someone knows about it, or it could go unnoticed.

Expect feedback. It is unlikely your patch will be accepted unmodified. Usually
this is because you violated the coding style, worked in the wrong branch, or
*forgot* about documentation and unit tests.
:::
