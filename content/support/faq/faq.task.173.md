---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Why recurring tasks not in today list?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Why recurring tasks not in today list?

I added task:

task add «task1» due:We recur:weekly
Today is Wednesday why this task not in that report?

task due:today list
{{< /question >}}
{{< answer >}}
Because if today is Wednesday, the due:We means next Wednesday.

{{< /answer >}}
