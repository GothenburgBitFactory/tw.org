---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Recurring weekly task at specific time"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Recurring weekly task at specific time

How can I add a recurring task at 08:00 every Tuesday? This adds the task:

    task add project:Home Washing due:tue recur:weekly

but I'd like to specify a time as well.
{{< /question >}}
{{< answer >}}
Simply put the time in the due date, and the weekly recurrence will match it:

$ task add ... due:2016-06-14T08:00 recur:weekly
This is already answered here:
https://taskwarrior.org/docs/examples.html#recur

{{< /answer >}}
