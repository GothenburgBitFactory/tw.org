---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "task list output customization"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### task list output customization

In Taskwarrior 2.4.0 the output of task list has more columns than in the previous stable version and the listing is wider than the 80 columns that my default terminal has. I have searched in the taskrc manual page but could not find a way to remove some of the columns from the "task list" command.
{{< /question >}}
{{< answer >}}
Please use

task show list
to see every config item related to list.

 

$ task show report.list.columns

 

Config Variable     Value                                                                                                                                     

report.list.columns id,start.age,entry.age,depends.indicator,priority,project,tags,recur.indicator,scheduled.countdown,due,until.age,description.count,urgency
After that you can do a

task config report.list.columns id,start,...
and add all columns you want to see.
{{< /answer >}}
