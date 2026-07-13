---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Can I add an indicator for the UDA value?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Can I add an indicator for the UDA value?

Something like this

uda.<name>.<value>.indicator=U
uda.priority.H.indicator=??
{{< /question >}}
{{< answer >}}
An indicator format shows the presence or absence of data, not the presence of absence of a specific value, so to answer the question title, yes, see "{{man taskrc}}". To the specific example in the question, no.

{{< /answer >}}
