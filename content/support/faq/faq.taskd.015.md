---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "Can on-modify hook be triggered by a taskserver sync?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Can on-modify hook be triggered by a taskserver sync?

My desktop computer is almost always running, and it is successfully syncing with my taskserver and updating Timewarrior via the hook script.
I have all of my devices sync with the taskserver every few minutes.
However, when I change active task on a device other than my desktop, Timewarrior is not modified even though the active task on my desktop is.
Is there an easy way to make it so that when a taskserver sync changes the active task, the "on-modify" hook is triggered in order to update Timewarrior?
{{< /question >}}
{{< answer >}}
Tasks modified via sync do not trigger hooks.
This means there is no way to make this work at the moment.
There is a future plan for allowing this.

Note that your sync "every few minutes" means that even if this did work, Timewarrior could be "a few minutes" off.
{{< /answer >}}
