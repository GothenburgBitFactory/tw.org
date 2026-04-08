---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Sort by date modified"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Sort by date modified

How can I sort the tasks by date modified?
{{< /question >}}
{{< answer >}}
You could define a report.

Btw. if you name the report mod as in this example, you have also a solution for your other question. Instead of Nope, try again. you will get (most likely) No matches.

 A simple one would be

task config report.sortMod.columns      id,modified,description
task config report.sortMod.description  sort by date modified
task config report.sortMod.filter       status:pending
task config report.sortMod.sort         modified-
If you use for the sort qualifier modified+, you will get the oldest task at the top of the list. To get the report type

task sortMod

A: You can also use a one-time override for this, although creating/modifying a report is the correct answer:

$ task rc.report.list.sort=modified- list
{{< /answer >}}
