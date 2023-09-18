---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "dependencies and recurrence?"
---

Back to the [FAQ](/support/faq)

Q: dependencies and recurrence?

task 2.5.1 built for linux

I have two recurring tasks, one due every Monday, and one due every Tuesday.
I would like to make each individual Tuesday task "depend" on the related Monday task.
I can't figure out how to do that.

I tried

task add Monday Task due 2016-08-08T09:00 wait:due-3d recur:weekly

task add Tuesday Task due:2016-08-09T09:00 wait:due-3d recur:weekly depends:1
but the created tasks are all blocked by the recurrence template itself, not by the tasks created by template.

Is this possible?  (That is, without manually associating the tasks every week.)

A: Not supported automatically.
You'd have to manually adjust the dependencies every time.

