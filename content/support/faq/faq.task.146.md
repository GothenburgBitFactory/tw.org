---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Duplication of recurring tasks in syncing"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Duplication of recurring tasks in syncing

I'm having troubles since I added a recurring task (red pills, daily). I compiled myself TaskWarrior 2.5.1 from the source on linux and in cygwin. Taskserver is freecinc.com. The issue is that every time I sync between the two machines, the task gets duplicated. 

I noticed that the win machine assigns the mask index as a float, while the linux machine does it as an integer. Could this be the source of the issue? Any pointer?
{{< /question >}}
{{< answer >}}
This is a known problem (https://github.com/GothenburgBitFactory/taskserver/issues/46).
The workaround is to enable recurrence on only one of the clients, in your case this should be the Linux client.
So disable recurrence on the Cygwin client with:

cygwin> task config recurrence off

{{< /answer >}}
