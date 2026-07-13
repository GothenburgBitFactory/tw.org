---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to add 'active' filter in complicated query?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How to add 'active' filter in complicated query?
If I do so:

task due.before:3d or priority:H or active
I have such response:

There are not enough operands for the 'or' operator.
{{< /question >}}
{{< answer >}}
"active" is a report and not a filter.

Try

task \( due.before:3d or priority:H \) active
{{< /answer >}}
