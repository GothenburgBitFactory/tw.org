---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Is it possible to sync per-context?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Is it possible to sync per-context?

Hi,

I want to use Taskwarrior at home and at work, but I don't want to store personal tasks in the work computer. Is it possible to sync a subset of the database, for example, only a context 'work'?

Thanks,
{{< /question >}}
{{< answer >}}
Sync is not a filtered operation, so no, this is not supported.

 

But there are options.

One configuration file, two task databases

$ alias taskw='TASKDATA=~/.taskwork task'
$ alias taskp='TASKDATA=~/.taskpers task'
$
$ taskw add This is a work task
$ taskp add This is a personal task
This keeps your data in separated databases, but because it uses the same configuration file, sync will get messed up.
You probably want...

 

Two configuration files, two task databases

$ alias taskw='TASKRC=~/.taskrc_work task'
$ alias taskp='TASKRC=~/.taskrc_pers task'
$
$ taskw add This is a work task
$ taskw sync
...
$ taskp add This is a personal task
$ taskp sync
Error
The idea is that the .taskrc_work file configures the Taskserver, but the .taskrc_pers file does not.
Each of the configuration files must use a separate database, ie the data.location setting in each file needs to be different.
{{< /answer >}}
