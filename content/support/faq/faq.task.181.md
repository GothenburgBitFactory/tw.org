---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "some commands modify complete tasks"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### some commands modify complete tasks

Some commands modify completed tasks despite:

default.command=next

report.next.filter=status:pending limit:page

When I try:

$task better done

It modifies a current task matching "better" as well as 4 completed tasks.

In fact:

$task better

Only returns the status:pending task, but any modification like done or modify due:today changes completed and current tasks.
{{< /question >}}
{{< answer >}}
You're doing two different things:

'task better done' is modifying any task with the 'better' substring.
'task better' is adding 'better' to the filter of the default command.
The default command does not affect any other commands.
Typically you would specify an ID/UUID for a task to modify.
But in your case your are specifying a text pattern, which could apply to many tasks.
This is functioning as designed.

{{< /answer >}}
