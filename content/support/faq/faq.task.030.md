---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I find the parent of a recurring task if no child is left?"
---

Back to the [FAQ](/support/faq)

Q: How can I find the parent of a recurring task if no child is left?

A: I think he means to find the recurring task if there are not any children with status pending.

A: You can use the following to list all the parents:

task all status:recurring
You can add more search terms as usual. For example, to find the recurring task to change your brita water filter:

task all status:recurring brita
