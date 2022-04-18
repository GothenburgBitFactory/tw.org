---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Filter for cases where wait date was accidentally set after due date."
---

Back to the [FAQ](/support/faq)

Q: Filter for cases where wait date was accidentally set after due date.

I keep getting the warning that the wait date is after due date. How can I search for those cases? task '( due < wait)' list doesn't work (says expression cannot be evaluated).

A: That doesn't work because the list report has a filter that conflicts with your filter.

The wait date implies status:waiting which conflicts with the list report's filter which include status:pending.
Can't have both.
Try this:

$ task due \< wait all
The all report has no filter.
You must escape the < so your shell doesn't intercept it as a redirect. You can also do this:

$ task due.before:wait all

