---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Can I add a start date to each recurring task?"
---

Back to the [FAQ](/support/faq)

Q: Can I add a start date to each recurring task?
Is it possible to set the start date of a recurring task to the date that the task is due?

A: You can do this now, but only using shell tricks.
For example:

$ task 123 modify start:$(task _get 456.due)
This is untested, but serves to illustrate that there are ways to manipulate data in the shell that are not available inside Taskwarrior.
The upcoming 2.4.0 release will greatly improve this and will support what you are looking for - stay tuned.

