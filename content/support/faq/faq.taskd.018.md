---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "Taskserver migration"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Taskserver migration

Are there any best practices in migrating a taskserver?
I want to move a super smooth running taskserver from a Mac to a Raspberry Pi and I would like to do a full migration (with historical data etc.) instead of a new setup.
{{< /question >}}
{{< answer >}}
While this is not a tested formula, I would recommend:

* Build taskd on the rPI, install it.
* Make sure it works: taskd diag
* Create a tarball of the $TASKDDATA dir on the Mac.
* Keep that tarball as a backup.
* Copy tarball to the rPI and unpack.
* Verify permissions.
* You'll need to set up permissions so that the entire data tree is read/write to the user that will launch taskd.
* Set $TASKDDATA accordingly.
* Launch server on rPI, check log for the presence of positive messages and lack of negative messages.
* Back up the client.
* Modify the taskd.server config entry to point to the rPI, and test sync.
* If there are problems, it's most likely file permission, firewall or networking.
{{< /answer >}}
