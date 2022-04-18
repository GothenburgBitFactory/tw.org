---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Which task generated the error?"
---

Back to the [FAQ](/support/faq)

Q: Which task generated the error?

I woke up this morning and ran task, and it gave me this warning:

 

Warning: You have specified that the 'wait' date is after the 'scheduled' date.
 

How can I figure out which task it is referring to, without editing each individual task to see?

A: Use a filter:

$ task wait.after:scheduled all

