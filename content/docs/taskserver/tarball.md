---
title: "Taskwarrior - Taskserver Installation from Tarball"
---

# [2.2] Installation

Installing Taskserver from a tarball is a matter of downloading the tarball, extracting it, satisfying dependencies and building the server.

## Dependencies

Before building the software, you will need to satisfy the dependencies by installing the following:

- GnuTLS (likely `libgnutls-dev`, ideally version 3.2 or newer)
- `libuuid`
- CMake (2.8 or newer)
- `make`
- A C++ Compiler (GCC 4.7 or Clang 3.0 or newer)

Note that some OSes (Darwin, FreeBSD, ...) include `libuuid` functionality in libc.

You don\'t necessarily need the latest version of all components, but it is a good idea if you can.
GnuTLS is a security component, and as such, it is very important that it is current.
Using GnuTLS version 2.12.x is neither adequately secure, nor production quality.

## Download

The next step is to obtain the code.
This means getting the Task Server 1.0.0 (or newer) source tarball.
You should check for the latest stable release here: <https://taskwarrior.org/download/>

You can download the tarball with `curl`, as an example of just one of many ways to download the tarball.

```
$ curl -LO {{< project "taskd" "stable" "url" >}}
```

## Build

Expand the tarball, and build the Taskserver.

```
$ tar xzf taskd-{{< project "taskd" "stable" "version" >}}.tar.gz
$ cd taskd-{{< project "taskd" "stable" "version" >}}
$ cmake -DCMAKE_BUILD_TYPE=release .
...
$ make
...
```

## Install

Now install Taskserver.
This copies files into the right place, and installs man pages.

```
$ sudo make install
...
```

## Verify

Run the `taskd` command to verify that the server is installed, and the location is in your `$PATH`. You should see something like this:

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
