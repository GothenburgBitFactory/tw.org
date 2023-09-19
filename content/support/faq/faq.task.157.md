---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Report sorting on the fly"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Report sorting on the fly

Is it possible to change the sorting of a report on the fly on the commandline?
{{< /question >}}
{{< answer >}}
Yes.
Here is an example for the next report:

$ task rc.report.next.sort=due-,urgency- next

{{< /answer >}}
