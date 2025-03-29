---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Activity report for a time period."
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Activity report for a time period.

This seems so simple - I would like a report of all of my activity for the last week (or other range). That includes any activity - e.g. adding an annotation should be shown.

It seems like this should be simple, but I'm just not seeing how. The "last modified" field appears to have the data needed, but I don't see how to use that field in a filter.
{{< /question >}}
{{< answer >}}
Found it! By examining the output of "task show", I spotted some reports using the "modified" field for sorting. Some experimentation showed that field is updated on every event I cared about, such as adding an annotation.

My filter looks similar to:

task modified.before:today+1w modified.after:today-1w all
{{< /answer >}}
