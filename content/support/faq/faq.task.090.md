---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "What is the best way to move Taskwarrior with personal files and configs, to a new machine?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### What is the best way to move Taskwarrior with personal files and configs, to a new machine?

Sometimes I want to install task, and sync it up, on a "new" machine; either a replacement for my primary machine, or just another task install on a secondary box.

 

I've had to do this a few times, and had to collect up all *.data files, and .taskrc, and certs, etc, and I find the process picky and error-prone, is there a better way?
{{< /question >}}
{{< answer >}}
Since you are using a taskserver, you don't need to copy the *.data files, you can let sync handle that.
Here are the steps I would follow on a new machine:

Install Taskwarrior
On new machine: 

$ cd
$ scp old-machine:.taskrc .
$ mkdir .task
$ scp old-machine:.task/*pem .
$ scp -r old-machine:.task/hooks .task/
On new machine: 

$ task sync
{{< /answer >}}
