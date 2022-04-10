---
title: "Taskwarrior - Taskserver Syncing"
---

# [5] Syncing Taskwarrior

You are now ready to sync your Taskwarrior client.
You will do this differently depending on whether this is the first sync per device, or one of the many subsequent syncs.

## First Time Sync

The first time you sync is special - the client sends all your pending tasks to the server.
This is something you should only do once.
Run this:

```
$ task sync init
Please confirm that you wish to upload all your pending tasks to the Task Server (yes/no) yes
Syncing with host.domain:53589

Sync successful.  2 changes uploaded.
```

You should get an indication that tasks were uploaded, in this case 2 of them.

## General Sync

After the first time sync, you switch and just use this command:

```
$ task sync
Syncing with host.domain:53589

Sync successful.  No changes.
```

This will give you feedback about what happened.
Please note that it is perfectly safe to run this command as often as you wish.
Syncing is safe and does not consume great system resources.

Note that if your client is a mobile device, a sync command may consume some of your data usage.
Act accordingly.

But it does require network connectivity, and if there is no connectivity you will be notified.
It is not a problem if a sync fails because of this, because the next sync that works will catch up with all the changes, and do the right merging.

Taskwarrior and Taskserver were designed to work together, and tolerate intermittent connectivity.

## Sync Reminder

After you modify data locally, Taskwarrior will start notifying you that you need to sync, after commands, like this:

```
$ task project:foo list
No matches.
There are local changes.  Sync required.
```

This is just a reminder to sync.
Respond with a sync, and the reminder goes away:

```
$ task sync
Syncing with :

Sync successful.  1 changes uploaded.
```

If you do not respond with a sync, then local changes accumulate unseen by other clients.
When you do eventually sync, the data will be properly propagated, so it is a question of whether you *need* current data on the server.
It is perfectly fine to allow *weeks* to go by without a sync.
