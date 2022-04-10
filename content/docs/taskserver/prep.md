---
title: "Taskwarrior - Taskserver Preparation"
---

# [1] Preparation

Installing and operating a server is not a casual task.
You need to prepare.

## Backup Your Data

Let\'s reinforce a good habit and make a backup copy of your data first.
Here is a very easy way to back up your data:

```
$ cd ~/.task
$ tar czf task-backup-$(date +'%Y%m%d').tar.gz *
```

Now move that file somewhere safe.
All software contains bugs, so make regular backups.

## Choose a Machine

A suitable machine to run your Taskserver is one that is always available.
If you have such a machine, or have access to a hosted machine, that is ideal.

If your machine is not continuously available, it can still be a suitable Taskserver because the sync mechanism doesn\'t require continuous access.
When a client cannot sync, it simply accumulates local, unpropagated changes until it can sync.

A laptop is a poor choice for a Taskserver host.

## Choose a Port

By default, Taskserver uses port 53589.
You can choose any port you wish, provided it is unused.
If you choose a port number that is under 1024, then Taskserver must run as root, which is not recommended.

## User/Group

Ideally you will create a new user and group solely to run the Taskserver.
This helps you keep the data secure from other users on the machine, as well as controlling the privileges of Taskserver.

## Firewall

Depending on what devices you use to access your server, you may need to configure the firewall to allow incoming TCP/IP traffic on your chosen port.
