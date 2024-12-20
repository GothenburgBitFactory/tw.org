---
title: "Taskwarrior - Upgrading to Taskwarrior 3"
---

# Upgrading to Taskwarrior 3

Taskwarrior 3 feels much like Taskwarrior 2.x: the command-line interface has not changed.
However, the way tasks are stored and synchronized has been completely rewritten.
To upgrade, you will need to import your task data into Taskwarrior 3.
Read on for details.

## Upgading Your Tasks

Install Taskwarrior 3, then import your tasks.
Taskwarrior hooks run during import, so disable them during this invocation with `rc.hooks=0`:

```
task import-v2 rc.hooks=0
```

### Task Storage

Taskwarrior 2.x stored tasks in files with the `.data` suffix.
Taskwarrior 3.x stores tasks in `taskchampion.sqlite3` in your task directory.

After importing your tasks, you may back up or remove the `*.data` files in that directory, as they are no longer used.
Taskwarrior will issue a warning on every run as long as the `*.data` files still exist.

## Upgrading Sync

Taskwarrior 2 used `taskd` as a server for its synchronization.
Taskwarrior 3 has a completely new sync implementation, and does not interface with `taskd`.
If you have been sync'ing tasks, you will need to adopt a new approach.

The recommended solution as of Taskwarrior 3.0 is to use a cloud-storage backend.
See the `task-sync(5)` manpage for details on how to configure the new sync implementation.
