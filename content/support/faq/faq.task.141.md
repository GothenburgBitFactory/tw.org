---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "filter based on count?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### filter based on count?

I have a custom report with this filter:

report.soon.filter=(status:pending or status:waiting) due.before:30d
 that lets me see some upcoming "waiting" tasks, but not all of them

Is there a filter option that says "show me 15 tasks" ?

I know I can use head, but piping the output means I lose colors and such.
{{< /question >}}
{{< answer >}}
https://taskwarrior.org/docs/examples.html

Use this:

task ... limit:15

{{< /answer >}}
