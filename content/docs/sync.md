---
title: "Taskwarrior - Syncing Tasks"
---

# Syncing Tasks

Taskwarrior supports "syncing" tasks between multiple "replicas".
For example, you might sync tasks between a laptop and a desktop machine.

## Sync Overview

Changes to tasks are synchronized to a server using the `task sync` command.
This command sends any new local changes to the server, and applies any changes on the server that it has not seen before.
It takes two `task sync` calls for a change to get from one replica to another: one on the source, to send the change; and one on the destination, to receive the change.

For example, on the laptop:
```
$ task add +homework finish odd exercises in section 3.2
$ task sync
```

and later on the desktop:
```
$ task sync
$ task +homework list
ID Age  Tags     Description                             Urg 
 3 2h   homework finish odd exercises in section 3.2      0.8
```

NOTE: The sync mechanics are implemented by [TaskChampion](https://github.com/GothenburgBitFactory/taskchampion).
Thus any tool that uses TaskChampion can synchronize with Taskwarrior.

### Do Not Use External Sync Tools

Past versions of Taskwarrior used a simpler format for storing task data, and with some care it was possible to use file-synchronization tools like Syncthing or `rsync` to synchronize tasks.
As of Taskwarrior 3.0, tasks are stored in a local database in a format that is not amenable to this sort of synchronization.
While they may work most of the time, such configurations can cause corruption and are not supported.

## How To Sync

To set up sync, you will need a server.
Two options are available:

 - One of the commercial cloud-storage providers; or
 - A TaskChampion sync server running on an Internet-accessible system of your own or provided by someone else.

Taskwarrior can use a cloud-storage provider, such as AWS S3 or Google Cloud Storage, to synchronize tasks.
This carries a small cost, and also requires some expertise in the cloud provider configuration to set up.
Some S3-compatible storage services are also supported.

The [TaskChampion sync server](https://github.com/GothenburgBitFactory/taskchampion-sync-server) is easy to run on a server such as a VPS or web hosting provider.
It can be deployed in a variety of ways and can be configured simply for a single-user or extended to support multiple users.
The [sync server documentation](https://gothenburgbitfactory.org/taskchampion-sync-server/) describes the server configuration options in detail.

Refer to the [`task-sync(5)`](https://taskwarrior.org/docs/man/task-sync.5/) manpage for details on configuring synchronization.
