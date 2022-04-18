---
title: "Taskwarrior - FAQ"
topic: "Timewarrior"
question: "Starting several tasks at once - is it possible with timewarrior?"
---

Back to the [FAQ](/support/faq)

Q: starting several tasks at once - is it possible with timewarrior?

Hi, I am starting to use timewarrior together with Taskwarrior. I tried to track several tasks ato once. An example scenario is that alongside a research bit that I am doing (task 7) it I also have to e-mail a colleague (task 9). That initial time that I spend is necessary for both tasks. So I would like to start both, then stop e-mail (done) but continue with the research bit. I could of course do:

7 start, 7 stop, 9 start, 9 stop, 7 start

instead I would much rather prefer:

7 9 start, 7 stop, 9 stop

So tasks 7 and 9 would have different lengths; on timeline they would be overlapping, but 9 would be longer than 5.

Is this kind of scenario possible? 

With Taskwarrior I can start several tasks at once, but timewarrior is only tracking one of them (despite they have different labels) as per timew summary.

I understand that multitasking in ideal circumstances is a thing that should not be done, but it is also a reality of life we have to cope with this and it would be good to be able to record time for overlapping tasks. 

A: Timewarrior does not support overlapping time, which includes the notion of several tasks started at once, this is why Timewarrior stops tracking the previous interval, and tracks a new one, when a task is started.

There is a difference between starting a task, and working on a task.
Timewarrior only cares about the latter.

