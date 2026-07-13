---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Archiving Tasks"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Archiving Tasks

What is the best practice for "archiving" ( ? ) a task – that is, removing it from the task list, but not marking it done or deleting it?

Use Case

The meeting I was scheduled to attend today (in my task list) has been postponed to next week, when I am unable to attend. I can't mark today's meeting done, but if I delete it, I have no record of when the meeting took place (next week). This record is useful to check later that I received the minutes, or just to check in future when that meeting actually took place.
{{< /question >}}
{{< answer >}}
There is only the completed and deleted states for a task, but you do have the option of storing the reason in another attribute.

Deleting a task really only marks it as deleted. This means it doesn't go away, and remains available for reference. I would suggest deleting the task, and adding an annotation at the same time, like this:

$ task <id> delete 'Meeting rescheduled'
Or instead, complete the task with an annotation:

$ task <id> done 'Meeting rescheduled'
There are many ways to think of completed and deleted tasks.
If you think of deleted as simply meaning 'Removed from my list', perhaps that now fits your model.
{{< /answer >}}
