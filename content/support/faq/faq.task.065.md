---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How does task id numbering work and how do I keep them below 1000?"
---

Back to the [FAQ](/support/faq)

Q: How does task id numbering work and how do I keep them below 1000?
I have quite a few recurring tasks, several daily ones which are responsible for bumping up the task id number each day.

I'm hoping you can ELI5 how the task id's increment in light of recurring/completed/deleted tasks.

Also how do keep the number relative to the number of actual tasks?  ie, at the moment I have 266 tasks but the numbering is over 300/

A: Take a look at the online docs: https://taskwarrior.org/docs/ids.html

Short answer: 'id' is the line number inside the pending.data file.
To keep task IDs under 1000, keep the number of pending, recurring and waiting tasks under 1000.
The discrepancy between the 266 and 300 are the hidden tasks, which are those with a wait date, and the recurring template tasks.

