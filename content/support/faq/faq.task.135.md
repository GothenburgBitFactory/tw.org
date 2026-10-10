---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Task with no ID"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Task with no ID

When I set in ~/.taskrc:

report.list.filter=-home
suddenly a task with no ID ('-') named 'Test' appears.

If I comment previous line this task does not appear in 'task list'. And it does not appear in 'task list -home'.

Is this a bug? I don't remember if it was me who created such task.
{{< /question >}}
{{< answer >}}
As answered via IRC, I should append 'status:pending' to my filter, which is the default behaviour. 'Test' must be and old task.

Use 'task show' to see default filters.

A: Right. Only pending tasks have IDs.

{{< /answer >}}
