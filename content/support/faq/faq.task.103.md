---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I sort by most recently added tasks?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How can I sort by most recently added tasks?

I would like to sort the output of `task list` with the most recently added tasks appearing at the bottom. Is this possible?
{{< /question >}}
{{< answer >}}
Yes, try this asa one-off:

$ task rc.report.list.sort=entry+ list
To make this permanent:

$ task config report.list.sort entry+
{{< /answer >}}
