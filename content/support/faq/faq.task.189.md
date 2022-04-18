---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Understanding reports"
---

Back to the [FAQ](/support/faq)

Q: Understanding reports

How can I find out which reports I should modify if I want to change the report format for

$ task next

and

$ task due:...

A: In the first example, you want to modify the next report, which means modifying one or more of these settings:

$ task show report.next
Config Variable         Value                                                                                                                          

report.next.columns     id,start.age,entry.age,depends,priority,project,tags,recur,scheduled.countdown,due.relative,until.remaining,description,urgency

report.next.description Most urgent tasks

report.next.filter      status:pending limit:page

report.next.labels      ID,Active,Age,Deps,P,Project,Tag,Recur,S,Due,Until,Description,Urg

report.next.sort        urgency-
In the second, that's not a report, just a filter.
Perhaps that is using the default report, but that depends on what you set it to.

Take a look here, to learn about customizing reports:

https://taskwarrior.org/docs/report.html<Paste>

