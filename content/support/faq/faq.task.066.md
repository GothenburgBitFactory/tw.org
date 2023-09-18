---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Batch delete by tag or description."
---

Back to the [FAQ](/support/faq)

Q: Batch delete by tag or description.
The issue I have with recurring tasks is how many of them show up and how they seem to multiply like rabbits.

Can I delete all recurring tasks containing a certain description or a tag in one swoop, instead of deleting them by id?

The other problem is when I batch delete it asks me if "Do you want to delete all pending recurrences of this same task?"  So if I'm deleting 200 tasks, I have to one by one say no or it will delete the parent recurring task.
Is there a work around for this?

Sorry if my questions are a little confusing.
Let's say I have a daily recurring task called " take out garbage".

task add take out garbage recur:daily due:today +garbage.
This creates a child task today, tomorrow and the next day, etc.
Several days later if I haven't been deleting the children tasks I'll have 10 or so tasks that I need to delete. One way to do it is one by one:

task 124 125 126 127 128 130 del

Permanently delete task 124 'take out garbage'? (yes/no/all/quit) a

Deleting task 124

This is a recurring task.
Do you want to delete all pending recurrences of this same task (yes/no)
If I answer yes to this, then it deletes all of the tasks AND the parent task.
This is not what I want, so I have to select "no" for each task  one by one to prevent the parent task from being deleted.
Kind of a drag.

What I'm asking is if there's a better way.
Say, deleting all recurring instances of a task by tag instead of having to specify each task id, without deleting the parent task?

A: Maybe you have to understand a basic concept.

In case you want to delete by tag or description, you should take a look, which tasks match your filter:

task +tag all
The "all"-report does not have any filters applied to the resultset of "task +tag", it shoes the tasks your query would delete if you replace "all" with "delete".

So maybe the result of

task +tag status:pending all
is more like the resultset you wish to delete.

You can find the parent tasks with

task +tag status:recurring all

