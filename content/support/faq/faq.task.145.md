---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to create a task and start it directly"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How to create a task and start it directly

Is it possible to create a task and start it directly? Is there something like a return-value to use?

something like:

task $(task add some thing) start
{{< /question >}}
{{< answer >}}
You can do this:

$ task add ... start:now

{{< /answer >}}
