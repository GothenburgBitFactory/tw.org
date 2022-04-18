---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Increase a task's due date relative the previous due date instead of the current date?"
---

Back to the [FAQ](/support/faq)

Q: Increase a task's due date relative the previous due date instead of the current date?

I guess I am basically looking for a “postpone” function that I can bind to an alias. So if a task is due in 2 days, but I realize I will not finish it on time. I would like to increase the due date with 1 day. Currently what I would do is to set due:3d, but I am using vit and it would be nice just to hit one key on the currently highlighted task and have its due date increased in one-day increments.
I tried due:+1d and due:-1d, but those set the due date relative the current day (just like due:1d) instead of relative the previous due date.

A: While this is not a vit answer, this is how the command line tool delays a task by a week:

$ task <id> modify due:due+1wk

A: make a .vitrc shortcut. Note also that there are prompt history. So if you type, e.g., "mdue:due+1wk", if you want to do the same thing on a different task, you can just do "m". Let me know if you have trouble making a .vitrc shortcut to do what you want.

