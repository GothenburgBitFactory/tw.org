---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I sort a report by tasks' due-dates and then their descriptions?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How do I sort a report by tasks' due-dates and then their descriptions?
{{< /question >}}
{{< answer >}}
Take a report, here the "list" report as example and modify it to meet your own requirements (expecially the variable called report.list.sort):

$ task show report.list

Config Variable         Value

report.list.columns     id,project,priority,due,start.active,entry.age,description

report.list.description Lists all pending tasks

report.list.filter      status:pending

report.list.labels      ID,Proj,Pri,Due,Active,Age,Description

report.list.sort        due+,priority-,start-,project+
The new report is called "own":

$ task config report.own.columns "id,project,priority,due,start.active,entry.age,description"

$ task config report.own.description "Lists all pending tasks (sorted by due and description)"

$ task config report.own.filter "status:pending"

$ task report.own.labels "ID,Proj,Pri,Due,Active,Age,Description"

$ task config report.own.labels "ID,Proj,Pri,Due,Active,Age,Description"

$ task config report.own.sort "due+,description+"
Confirm every question with yes

Are you sure you want to add 'report.own.sort' with a value of 'due+,description+'? (yes/no) yes

Config file /home/ddeimeke/.taskrc modified.
Check the configuration

$ task show report.own

Config Variable        Value
report.own.columns     id,project,priority,due,start.active,entry.age,description

report.own.description Lists all pending tasks (sorted by due and description)

report.own.filter      status:pending

report.own.labels      ID,Proj,Pri,Due,Active,Age,Description

report.own.sort        due+,description+
Try it with task own
{{< /answer >}}
