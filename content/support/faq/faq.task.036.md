---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Sync not working!"
---

Back to the [FAQ](/support/faq)

Q: Sync not working!
Hello!

I have installed task from Ubuntu repositories.

task --version returns 2.2.0.
I want to sync it with the taskserver made available by mirakel.
So, I have added these lines to ~/.taskrc:

taskd.server=azapps.de:6544
taskd.credentials=XXXXXXXXXXXX
taskd.certificate=/home/YYYYYY/.task/client.pem
taskd.ca=/home/YYYYYY/.task/ca.pem
taskd.key=/home/YYYYYY/.task/client.key.pem
But task sync produces the error:

$ task sync
[task next sync]
No matches.
task show produces the error:

Your .taskrc file contains these unrecognized variables:
  taskd.ca
  taskd.certificate
  taskd.key
Obviously, I am doing something wrong. But I am not able to figure out the error even after reading the documentation.

Also, there is no 'Register' link on the Q&A forum. I could not ask this question there.

Please let me know if you need any further information to troubleshoot.

A: The sync command was only introduced in task 2.3.0.

The reason you are getting those errors is because task 2.2.0 didn't have those settings.

As for why it didn't complain about the sync command, it's because it was treated as a filter, effectively listing only tasks that have "sync" in the description.
