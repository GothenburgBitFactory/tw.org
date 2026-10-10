---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Setting multiple urgency coefficients for one uda"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Setting multiple urgency coefficients for one uda

Hi all

I'm trying to set a variety of urgencies for a uda value of 'size'.

I'm following the example here: https://taskwarrior.org/docs/udas.html

It demonstrates how to set a common urgency coefficient for all values, but I would like different coefficients for each value, eg 1, 2, 3 for small, medium, large, respectively.

Is this possible?

Regards

Ed
{{< /question >}}
{{< answer >}}
Yes, this is supported, depending on the version you have (2.4.3 or later).
What you are describing matches the setup for the priority UDA.
In your case, you need this:

urgency.uda.size.1.coefficient=...
urgency.uda.size.2.coefficient=...
urgency.uda.size.3.coefficient=...
If you run man taskrc and search for 'URGENCY' you'll see all the settings discussed.
{{< /answer >}}
