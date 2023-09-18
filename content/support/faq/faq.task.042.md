---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I prevent renumbering of tasks' ids?"
---

Back to the [FAQ](/support/faq)

Q: How can I prevent renumbering of tasks' ids?
After I have marked a task as complete or have deleted it, the ids of the remaining change. How can I prevent task of doing so?

A: You can disable the renumber, but it's there for a reason, a very good reason, which is performance.
Without the renumbering, Taskwarrior response time will grow proportional to the total number of pending and completed tasks.

See ID Numbers for details.

A: I use the approach Paul describes to populate a count of items in my in bucket without renumbering tasks behind my back:

task +in +PENDING count rc.gc=off 2> /dev/null
It's necessary to redirect stderr to prevent task from outputting this:

Configuration override rc.gc:off

A: A task disappeared from pending.data. Every time you run a command that displays task IDs, it first performs a garbage collect which moves tasks around between pending.data and completed.data, wakes up waiting tasks, and so on. You can append to your next task command the following:

rc.gc=off
e.g.

task list rc.gc=off

