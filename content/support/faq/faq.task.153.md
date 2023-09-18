---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I clear age of a task?"
---

Back to the [FAQ](/support/faq)

Q: How do I clear age of a task?

For some tasks, instead of recurrence (because they don't have a regular time period), I like to just move them to a next day (due and wait), so I don't have to create them again.
What's the best way to reset the age of the tasks for these?

A: Modifying the entry date is what you want:

$ task <id> modify entry:now

