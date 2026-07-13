---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Trigger task creation when a particular task is completed"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Trigger task creation when a particular task is completed

Any suggestions how to implement this in Taskwarrior? I'm guessing a hook script that on-modify inspects the modified task and executes task add if needed?
{{< /question >}}
{{< answer >}}
I found exactly what I needed:

https://github.com/JensErat/task-relative-recur

{{< /answer >}}
