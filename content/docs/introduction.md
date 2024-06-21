---
title: "Taskwarrior - Introduction"
---

# Introduction

Hello, and welcome to Taskwarrior.
This is the first of many tutorials, and covers first-time use.

## First Time Use

As a first-time user, you are going to need a configuration file and a data directory.
Taskwarrior will create both of these for you, in your home directory, the first time you run Taskwarrior.
Here is an example:

```
$ task version
A configuration file could not be found in ~

Would you like a sample /home/alice/.taskrc created, so taskwarrior can
proceed? (yes/no) yes

task 2.4.4 built for linux
Copyright (C) 2006 - 2016 P. Beckingham, F. Hernandez.

Taskwarrior may be copied only under the terms of the MIT license, which may
be found in the taskwarrior source kit.

Documentation for taskwarrior can be found using 'man task', 'man taskrc',
'man task-color', 'man task-sync' or at https://taskwarrior.org
```

Answer `yes` to the question.
After creating the missing file and directory, you'll see the current version displayed.
The configuration file that was just created contains very little.

```
$ cat ~/.taskrc
# [Created by task 2.4.4.dev 7/12/2015 09:09:09]
# Taskwarrior program configuration file.
# For more documentation, see https://taskwarrior.org or try 'man task',
# 'man task-color', 'man task-sync' or 'man taskrc'

# Here is an example of entries that use the default, override and blank values
#   variable=foo   -- By specifying a value, this overrides the default
#   variable=      -- By specifying no value, this means no default
#   #variable=foo  -- By commenting out the line, or deleting it, this uses the default

# Use the command 'task show' to see all defaults and overrides

# Files
data.location=~/.task

# Color theme (uncomment one to use)
#include /usr/local/share/doc/task/rc/light-16.theme
#include /usr/local/share/doc/task/rc/light-256.theme
#include /usr/local/share/doc/task/rc/dark-16.theme
#include /usr/local/share/doc/task/rc/dark-256.theme
#include /usr/local/share/doc/task/rc/dark-red-256.theme
#include /usr/local/share/doc/task/rc/dark-green-256.theme
#include /usr/local/share/doc/task/rc/dark-blue-256.theme
#include /usr/local/share/doc/task/rc/dark-violets-256.theme
#include /usr/local/share/doc/task/rc/dark-yellow-green.theme
#include /usr/local/share/doc/task/rc/dark-gray-256.theme
```

There is only one entry in this file for `data.location`.
This is because Taskwarrior has a built-in set of sensible defaults, and this configuration file only contains overrides to those defaults.

That configuration variable named `data.location` points to your task data directory, which contains an SQLite database.
The database is currently empty because there are no tasks yet.

```
$ ls ~/.task
taskchampion.sqlite3
```

Typically, you won't need to look in that directory.
