---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I filter for a text AND without specific due date (equivalent to google search -keyword)?"
---

Back to the [FAQ](/support/faq)

Q: How can I filter for a text AND without specific due date (equivalent to google search -keyword)?

A: Your question doesn't make much sense, since a task can only have one due date.
You can do

task due.is:date1 due:isnt:date2 list
But again, that's just the same as using only the "due.is" filter.

If you meant filtering the task description, you can similarly do

task desc.has:foo desc.hasnt:bar list

