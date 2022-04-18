---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Why the date \"18 January 2038\" with :later or :someday?"
---

Back to the [FAQ](/support/faq)

Q: Why the date "18 January 2038" with :later or :someday?
I would like to know what is the significance of the date "18 of January of 2038" which is issued when :later or :someday is used, in particular with wait.

Is there something that the Taskwarrior developers know about the future that we don't?

A: The simple answer: This date is the most far in the future date that can be represented safely on a computer.

The technical answer: This is a software limitation of how dates are represented in today's computers, in particular in Unix based systems. If you have heard about the 2000 year bug, well there's another one in 2038. This Wikipedia article explains it really well.

A: At some point we'll keep stored dates in ISO form, not 32-bit epoch form, which will allow any date. It is also possible that we use 64-bit time_t. But not yet.

