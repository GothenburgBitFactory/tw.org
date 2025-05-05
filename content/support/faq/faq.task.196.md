---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Possible to have scheduled/wait values persist?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Possible to have scheduled/wait values persist?
Perhaps if I explain my workflow using another task system my question will make more sense.

My primary task view that I work from, my $(task next) as it were, is to group by priority, sort by priority descending, sort by start date with overdue fading off the bottom, and I filter out start dates in the future. Mentally, the start date for me is the soonest date that I'd consider working the task. I work primarily from the priority and my start date fields, with due being used minimally and only for externally imposed hard deadlines.

In Taskwarrior, it seems the fields I'd use are either scheduled/waiting. I've tried doing such things as:

report.foo.sort=priority-,scheduled-,description+
report.foo.filter=scheduled<tomorrow or scheduled:none
I've also tried with the waiting field. In both cases, it appears that Taskwarrior removes those values as soon as the target time passes, and changes the status from scheduled/waiting to pending.

Is there any configuration that would enable me to keep those data values after the time passes so that I can still use it in reports? I'm open to any other suggestions as well to get a configutation to fit my workflow.
{{< /question >}}
{{< answer >}}
This might just be a terminology problem.
Have you applied a 'scheduled' date to your tasks?

Take a look at this page, and verify that the meanings of scheduled, start, due and wait match your expectations:

Glossary of Terms

The glossary is not (yet) complete, but it does contain definitions for all the dates associated with a task.
{{< /question >}}
{{< answer >}}
I think the real problem was incomplete testing and a messed up filter on my part. I've got my first report roughed out now. % cat .taskrc | grep mySchedule report.mySchedule.description=My Task Report report.mySchedule.columns=id,priority,scheduled,description report.mySchedule.labels=ID,PRI,Schedule,Description report.mySchedule.sort=priority-,scheduled-,description+ report.mySchedule.filter=end:none and (scheduled.before:now or scheduled:none) I'll just have to clean up the formatting and coloring a bit and rewrite most of the built-in reports to be scheduled-centric instead of due-centric, then I'll be able to cut the tether with my old task system. I'm really hoping that $(task next) weighting system will work well using a scheduled-centric paradigm. Are the built-in reports (the exact filters, columns, sorting, etc used for each) documented anywhere?

A: the builtins are not documented as such, but you can see all the details with, for example: {noformat} $ task show report.list ... {noformat}

{{< /answer >}}
