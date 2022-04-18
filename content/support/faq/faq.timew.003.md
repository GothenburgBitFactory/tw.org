---
title: "Taskwarrior - FAQ"
topic: "Timewarrior"
question: "How to shorten yesterday's task?"
---

Back to the [FAQ](/support/faq)

Q: timewarrior: how to shorten yesterday's task?

Timewarrior is very neat. I can modify today's tasks easily by first getting their ids, then using shorten. However mistakes that I get come from not stopping the task and now it spans 2 days. How can I shorten that task effectively, if it started yesterday and ended yesterday? IDs change every day, it seems.

A: OK, I know I can shorten it for the adequate number of hours if it still remains on today's list (i.e. started at 00:00). Say I have task from yesterday starting at 22:00, completed at 22:30 and I forgot to complete it in Taskwarrior. I remember about this today at 10:30. If I do:

timew status :ids
It will give me the task ID of `@1` and it would have duration for 10 hours and 30 minutes. (Which is slightly misleading - it only has this duration because it is counted from 00:00). I can shorten it properly by doing:

timew shorten @1 13.5h
It will correctly make the task 30 minutes long in timewarrior and it will no longer be on today's list. If I still need to adjust this yesterday's  task, I cannot do it.

