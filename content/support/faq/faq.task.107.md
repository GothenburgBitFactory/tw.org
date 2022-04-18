---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I show more detail at a time for the \"due\" column?"
---

Back to the [FAQ](/support/faq)

Q: How can I show more detail at a time for the "due" column?

Very sorry if this has been asked before; looked just about everywhere: documentation, asked questions, Internet, even poked at source (though my knowledge of C++ is limited).

Is there a way to show more information at a time for the age, remaining, and countdown formats for the due column?

For example, showing both hours and minutes remaining at the same time: 2 hours 35 minutes

Without looking at each task individually, it can be ambiguous to know if 1 hour remaining means 1 hour 5 minutes, or 1 hour 55 minutes.

If this something that can be done, is it best done directly through task, via code, utilizing UDA, or something else?

A: You have options - you can change the format of data in the reports.
Take a look at the options:

$ task columns
Then look at the report definitions:

$ task show report.long
...
The column configurations can use any of the available variations.
See this for more details: https://taskwarrior.org/docs/report.html

