---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Less verbose info report"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Less verbose info report

Is there any way not to include the history in the info report? Sometimes it can get pretty long.
{{< /question >}}
{{< answer >}}
There are two ways of reducing this:

1. Set journaling off:

$ task config journal.info off

2. Deleting your undo.data file.
This file grows and grows, but if you don't mind losing the ability to undo changes, you can just regularly delete this, and the info report will be smaller and run faster.
 Comment
{{< /answer >}}
