---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Is it possible to specify urgency when no project is assigned ?"
---

Back to the [FAQ](/support/faq)

Back to the [FAQ](/support/faq)

{{< question >}}
### Is it possible to specify urgency when no project is assigned?
The idea behind this question is when you quickly add a task (just not to forget it), but don't have the time to classify it precisely (with tags and or projects)

This way when task next is launched, the "new and unspecified" task jumps to the top of the list so that I can classify them in priority (once correctly classified, they will drop at their expected urgency level)
{{< /question >}}
{{< answer >}}
Taskwarrior calculates "urgency" based on several values called coefficients.

These can be listed using task show coeff and by reading the manpage man taskrc.

Given that the coefficients are designed to *raise* the urgency of tasks that have additional metadata (has tags, has project, has due date, ...), you cannot start with high urgency and then lower it by adding metadata. This will cause tasks with more metadata to have lower urgency than those with less metadata.

Another more functional solution is to create a set of preset reports that only show tasks that are missing certain information or that require reviewing or additional details.

For instance, add this to your .taskrc:

report.review.columns             id,description
report.review.labels              ID,Description
report.review.description         Lists tasks the most urgent tasks
report.review.sort                id+
report.review.filter              proj: tags: due: pri: (add more filters here)
and customize the report.review.filter line to match what you consider new and unspecified tasks.

Then you can simply run task review to list tasks that require further metadata processing.
{{< /answer >}}
