---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Reporting/column formats for duration type UDAs"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Reporting/column formats for duration type UDAs

I am experimenting with a duration type UDA, which I try to use to record tasks' time estimates (and, later, perhaps, to use them for day planning).

I have a number of questions whichmight be related to column formats:

Can I alter duration presentation mode? By default it gives me the ISO format (e.g. PT1H), but it is less intuitive for me as e.g. 1h, 30m etc.
In the sorting settings of the report, can I refer to an "indicator" format of a duration type UDA? That is, it would only look at it whether it has or has not a duration attribute (and, therefore, I could include a break between tasks which have estimates and those which do not)?
{{< /question >}}
{{< answer >}}
There is no support for UDA rendering formats.
I suggest you submit a feature request.

Report breaks are triggered by the underlying value, not the display format, so that won't have the effect you want.

{{< /answer >}}
