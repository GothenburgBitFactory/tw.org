---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Shortcut: verify latest modification?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Shortcut: verify latest modification?

Let's say I do:

task 1 modify due:1w
Modifying task 1 'test'.
Modified 1 task.

Now I'd like to verify my latest changes if everything is correct.

Which command would show me the task that was last one to be modified?
{{< /question >}}
{{< answer >}}
This will show you the last task added in version 2.5.0+:

$ task +LATEST
But there is no record made of the last task modified.
{{< /answer >}}
