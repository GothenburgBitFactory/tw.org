---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I stop a recurrence?"
---

Back to the [FAQ](/support/faq)

Q: How do I stop a recurrence?

If I have a recurring task, how do I stop it from recurring? I know about the `until` keyword, but that presumes that I know ahead of time that the recurrence will stop. How do I stop a recurring task retroactively, as it were? Is it just a matter of setting an `until` in the past?

A: Try this:

$ task status:recurring all
Then delete the task that shows.

