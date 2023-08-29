---
title: "Taskwarrior - Taskserver Installation from Git-Repository"
---

# [2.3] Installation

Installing Taskserver from git is a matter of cloning the git repository and building the server.

## Dependencies

Before building the software, you will need to satisfy the dependencies by installing the following:

- `git`
- GnuTLS (likely `libgnutls-dev`, ideally version 3.2 or newer)
- `libuuid`
- CMake (2.8 or newer)
- `make`
- A C++ Compiler (GCC 4.7 or Clang 3.0 or newer)

Note that some OSes (Darwin, FreeBSD, ...) include `libuuid` functionality in libc.

You don't necessarily need the latest version of all components, but it is a good idea if you can.
GnuTLS is a security component, and as such, it is very important that it is current.
Using GnuTLS version 2.12.x is neither adequately secure, nor production quality.

## Clone

Now clone the repository like this:

```
$ git clone https://github.com/GothenburgBitFactory/taskserver.git taskserver.git
...
```

It is highly recommended that you build the stable version.
This involves simply moving on to the next step, ['Build'](#build).
Only under special circumstances should you build the unstable development version.

The unstable development version is at no point guaranteed to work or even compile.
The only time it does stabilize is right at the end of the development cycle, and in that case, you should wait until the release, so you are running a supported version.

The stable version is always merged to the `master` branch, which is the default branch, so ordinarily nothing needs to be done.
To build an unstable branch, first determine which branch by looking at the available branches:

```
$ cd taskd.git
$ git branch -a
* master
  remotes/origin/1.1.0
  remotes/origin/1.1.1
  remotes/origin/1.2.0
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
```

The convention we use is that `master` represents the stable release.
The numbered branches represent the latest development (1.2.0, the 'highest' branch number, ending in '.0') and a patch branch (1.1.1, ending in a non-zero number).

Patch branches are reserved for emergency releases, so in this example you would choose to build 1.2.0 as the latest development branch like this:

```
$ git checkout 1.2.0
Branch 1.2.0 set up to track remote branch 1.2.0 from origin.
Switched to a new branch '1.2.0'

$ git submodule init
Submodule 'src/libshared' (https://github.com/GothenburgBitFactory/libshared.git) registered for path 'src/libshared'

$ git submodule update
Cloning into 'src/libshared'...
remote: Counting objects: 2180, done.
remote: Compressing objects: 100% (1379/1379), done.
remote: Total 2180 (delta 1640), reused 1018 (delta 796)
Receiving objects: 100% (2180/2180), 373.50 KiB | 244.00 KiB/s, done.
Resolving deltas: 100% (1640/1640), done.
Submodule path 'src/libshared': checked out '2b0b70d90acb9a3ff3548befab9db8beb85a0c2d'
```

## Build

Now build the Taskserver.

```
$ cd taskd.git
$ cmake -DCMAKE_BUILD_TYPE=release .
...
$ make
...
```

## Test

Having built the server, now build and run the unit tests.
Although this is an optional step, it is a good idea to know whether the build works on your platform.

```
$ cd test
$ make
...
$ ./run_all

Pass:     2920
Fail:        0
Skipped:     0
Runtime:     1 seconds

$ cd ..
$
```

This example shows that all 2,920 tests pass.
If you see test failures, stop and report them.
Note that there are some unit tests that fail if you have not built the latest commit.
Seeing 4 test failures may mean all is well.
Seeing 30 failures does not.

## Install

Now install Taskserver.
This copies files into the right place, and installs man pages.

```
$ sudo make install
...
```

## Verify

Run the `taskd` command to verify that the server is installed, and the location is in your `$PATH`.
You should see something like this:

```
$ taskd

Usage: taskd -v|--version
       taskd -h|--help
       taskd diagnostics
       taskd validate <JSON | file>
       taskd help [<command>]

Commands run only on server:
       taskd add     [options] org   <org>
       taskd add     [options] group <org> <group>
       taskd add     [options] user  <org> <user>
       taskd config  [options] [--force] [<name> [<value>]]
       taskd init    [options]
       taskd remove  [options] org   <org>
       taskd remove  [options] group <org> <group>
       taskd remove  [options] user  <org> <user>
       taskd resume  [options] org   <org>
       taskd resume  [options] group <org> <group>
       taskd resume  [options] user  <org> <user>
       taskd server  [options] [--daemon]
       taskd status  [options]
       taskd suspend [options] org   <org>
       taskd suspend [options] group <org> <group>
       taskd suspend [options] user  <org> <user>

Commands run remotely:
       taskd client  [options] <host:port> <file> [<file> ...]

Common Options:
  --quiet        Turns off verbose output
  --debug        Generates debugging diagnostics
  --data <root>  Data directory, otherwise $TASKDDATA
  --NAME=VALUE   Temporary configuration override
```
