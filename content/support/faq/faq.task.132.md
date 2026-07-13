---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Can you show the days of the week in the due column?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Can you show the days of the week in the due column?

Something like...

Due:

2016-04-26 Tuesday

Rather than...

Due:

2016-04-26
{{< /question >}}
{{< answer >}}
Yes.
Take a look at:

$ man taskrc
Look for report.x.dateformat.
{{< /answer >}}
