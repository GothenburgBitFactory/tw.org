---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Create recurring task with due date the date instance was created"
---

Back to the [FAQ](/support/faq)

Q: Taskwarrior: create recurring task with due date the date instance was created

I would like to create a recurring task to remind me to process my GTD intray (it can be used also to implement any other habit), that has the due date of the instance equal the day the instance was created, and it expires (gets deleted) after 24 hours after the instance was created.

So every day a new instance gets created, and if I don't mark it done, it gets deleted automatically by Taskwarrior at the end of the day. The following day a new instance gets created and again it expires after 24 hours unless I mark it done

The furthest I got is 

task add due:today until:due+1day recur:daily
But this doesn't work as expected: The due date of 'today' is in relation to the parent task, that it should not create tasks after 'today'.

Having the instance task have the due date set to current day would be useful because I could see the task with the +DUETODAY virtual tag, and it makes sense because it's something that must be accomplished that day

Thank you for any suggestions

A: I think you need  due:23:45  (or some specific time of day) to accomplish this.

