---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do you delete a recurring task?"
---

Q: Delete a recurring task template

How do you delete a recurring task?

task ID delete
says task is not deletable.

A: The easiest way would be

task ID modify until:-1d
It will be deleted the next time you run a report.

A: I've noticed that the recurring task templates do not in fact expire, though the individual task instances do. That means that periodically you should do `task status:recurring until.before:today ids` to list the IDs of expired templates, then either delete them manually from .task/pending.data or write a script to do so (using an editor like Vim makes the manual deletion easy).

A: You can clear the "Recur:" field when editing the specific parent task with

task ID edit
from 

Recur:  annual
to

Recur: 
and save. 

After that you can easily delete the task, because its no longer a recurring one.
