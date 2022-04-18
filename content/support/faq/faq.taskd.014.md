---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "sync failed after six weeks usage on one client"
---

Back to the [FAQ](/support/faq)

Q: sync failed after six weeks usage on one client

Hi there, and thanks for an awesome and truly unique Taskwarrior.

After using taskd on my own server during two months, one client stills syncs fine but one other client fails to sync with this error:

Sync failed.
The Taskserver returned error: 500 ERROR: Could not find common ancestor for 33d0af5b-222a-4982-b533-46c50d723bb7. Did you skip the 'task sync init' requirement?

And yes I did 'task sync init' two months ago, at least on the first client. Am I supposed to do this with subsequent clients, or will it then erase what is on the server?

Sine it worked perfectly for six weeks I suspect something has gone wrong, what can I do?

A: Here is how to fix this:

Let's call your working client the primary, and all the other clients secondary.

1) On your taskserver, make a backup of the data, and delete the taskserver data for your user.
It's safe - we just backed it up.

$ tar czvf server.backup.tar.gz$TASKDDATA/Orgs
$ rm $TASKDDATA/Orgs/$ORG/users/$UUID/tx.data
2) On the primary client, backup the data, remove the invalid backlog.data file (this is safe), and push all data to the clean server.
This 'task sync init' is something you only do once per setup, for one client only.
It establishes a full copy of the data on the server, so that all subsequent transactions are just small deltas.

$ tar czvf primary.backup.tar.gz ~/.task/{pending,completed}.data
$ rm ~/.task/backlog.data
$ task sync init
3) On all secondary clients, make a backup of the data, then perform a regular sync to download all data from the server.

$ tar czvf secondary.backup.tar.gz ~/.task
$ rm ~/.task/{pending,completed,backlog}.data
$ task sync
If any step fails, stop and please report.
But don't worry - you made backups.

