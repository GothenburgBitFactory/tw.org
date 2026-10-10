---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Modifying a completed task"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Modifying a completed task

Hi, I'm trying to uncomplete a task.

I've found its UUID: 4d1e6695-3f5b-4ed0-a719-c23ed7d71d7d

But I can't find any way of modifying it.

If I use this command: task status:completed 4d1e6695-3f5b-4ed0-a719-c23ed7d71d7d

Then I get this response: [task next status:completed 4d1e6695-3f5b-4ed0-a719-c23ed7d71d7d] No matches.

That I understand. Its irritating that 'next' is assumed, but I understand why it doesn't find the task.

If I try this command: task all status:completed 4d1e6695-3f5b-4ed0-a719-c23ed7d71d7d

Then it finds the task, but NOT if I append 'modify': task all status:completed 4d1e6695-3f5b-4ed0-a719-c23ed7d71d7d modify +test

Result: No matches.

What am I missing?

Thanks

Ed
{{< /question >}}
{{< answer >}}
When you don't provide a command, the rc.default.command is assumed, in this case 'next'.
In your second example you are combining the 'all' command, which is a read-only report, with the 'modify' command, and you can only specify one, so Taskwarrior assumes 'all' is the command, and 'modify' is part of the filter.

You want this:

task 4d1e6695-3f5b-4ed0-a719-c23ed7d71d7d modify status:pending
This is the general form of write-commands - to the left of the command you see a filter which identifies tasks, and on the right of the command you see modifications.
So the above means: find the task with uuid 4d1e6695-3f5b-4ed0-a719-c23ed7d71d7d, and modify it by setting the status attribute to pending.
{{< /answer >}}
