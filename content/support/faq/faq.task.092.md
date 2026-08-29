---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Why is a task with due date today overdue and how would I change that?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Why is a task with due date today overdue and how would I change that?

Tasks which have a due date of today are considered overdue in my task installation. This surprises me since for me a task would be overdue after today. I was thinking that this is also Taskwarrior's point of view since there is something like color.due.today for example which in my case is consequently overwritten by overdue of cause.

The datetime related settings in my .taskrc are the following

dateformat=D.M.Y
dateformat.annotation=D.M.
dateformat.report=D.M.Y (A)
dateformat.info=A, d. B Y
nothing which would relate the hour of the day which I might have passed.

How can I make overdue apply only to tasks that have a due date from yesterday?
{{< /question >}}
{{< answer >}}
If you have a dateformat that does not include time, then a default time of 0:00:00 is assumed, which in almost every case is in the past, hence overdue.
You can change your dataformat to include time, then you'll specify the date and time for due dates, and that makes the 'overdue' status more obvious.
{{< /answer >}}
