---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "recurring tasks with flexible wait/due dates?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### recurring tasks with flexible wait/due dates?

Let's say I have a recurring task like "give medicine to cat" that recurs every 30 days, with wait set to "due-1days".

So the task instances might be due Feb 13, March 14, April, 13, etc

But the important thing is the next instance should be due 30 days after the COMPLETION of the previous instance. For example, let's say I forget to do my task (or cannot do it) and instead of doing it on Feb 13, I do it on Feb 23.

Now the next instance is due March 14, but that is too soon because the medicine has to be given 30 days after the last time it was given. So the real due date should be Feb 23 + 30 days.

These kinds of tasks come up a lot. You should do them every X days, but if you forget and do it late, the next instance should be the current instance's completion date + X days, so it should be flexible.

The other thing is that new instances shouldn't be created automatically even when the user is inactive, but should be one new instance per one completed instance. Like if I have a task "take medicine" which recurs daily, if I forget a few days I should not have 4 instances of the same task, which is obviously wrong. There should just be one instance, notifying the user to take the medicine 1 time, not 4 times at once.

Is there any way to do any of this?
{{< /question >}}
{{< answer >}}
You're describing a style of recurrence that we don't really have a name for, and have not yet implemented. Here is a detailed description of how recurrence works today:

https://taskwarrior.org/docs/recurrence.html

Here is a sample of some requests which discuss how recurrence will work in future releases:

https://github.com/GothenburgBitFactory/taskwarrior/issues/270
https://github.com/GothenburgBitFactory/taskwarrior/issues/1534
https://github.com/GothenburgBitFactory/taskwarrior/issues/1318
https://github.com/GothenburgBitFactory/taskwarrior/issues/1775
https://github.com/GothenburgBitFactory/taskwarrior/issues/178
https://github.com/GothenburgBitFactory/taskwarrior/issues/203
https://github.com/GothenburgBitFactory/taskwarrior/issues/97
https://github.com/GothenburgBitFactory/taskwarrior/issues/146
You have ideas - please make sure they are represented in the above list, and so can be considered when the work begins.
{{< /answer >}}
