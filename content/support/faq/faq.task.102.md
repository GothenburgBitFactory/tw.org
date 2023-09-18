---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to modify task list spacing?"
---

Back to the [FAQ](/support/faq)

Q: How to modify task list spacing?

In the default task list output in v2.4.0 some tasks that correspond to the same project are listed together surrounded by blank lines. Is it possible to modify the output of task list so that these blank lines are removed?

A: Yes.
What you're seeing there is a demonstration of listing breaks, that group together tasks, when they are sorted.
See the definition for the list report:

$ task show report.list.sort
report.list.sort        start-,due+,project+/,urgency-
See the "/" at the end of "project+/"?  That means break on project.
Remove that, and the gap goes away.

