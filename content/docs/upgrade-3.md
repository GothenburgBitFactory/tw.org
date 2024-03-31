---
title: "Taskwarrior - Upgrading to Taskwarrior 3"
---

# Upgrading to Taskwarrior 3

Taskwarrior 3 feels much like Taskwarrior 2.x: the command-line interface has not changed.
However, the way tasks are stored and synchronized has been completely rewritten.
To upgrade, you will need to export your tasks from Taskwarrior 2 and re-import them into Taskwarrior 3.
Read on for details.

## Upgading Your Tasks

_Before_ installing Taskwarrior 3, export all of your tasks:

```shell
task export > all-tasks.json
```

Then, install Taskwarrior 3 and re-import your tasks.
Taskwarrior hooks run during import, so disable them during this invocation with `rc.hooks=0`:

```shell
task import rc.hooks=0 all-tasks.json
```

### Task Storage

Your tasks are now stored in `taskchampion.sqlite3` in your task directory.
If you'd like, you may delete the `*.data` files in that directory, as they are no longer used.

## Upgrading Sync

Taskwarrior 2 used `taskd` as a server for its synchronization.
Taskwarrior 3 has a completely new sync implementation, and does not interface with `taskd`.
If you have been sync'ing tasks, you will need to adopt a new approach.

The recommended solution as of Taskwarrior 3.0 is to use a cloud-storage backend.
See the `task-sync(5)` manpage for details on how to configure the new sync implementation.
