---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do recurring tasks work?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How do recurring tasks work?
How do recurring tasks work?  (A guide to recurring tasks)
{{< /question >}}
{{< answer >}}
This guide is written for task version 2.3.0.

Due to inconsistencies and general lack of documentation, I thought it would be useful to write this, both as a personal reference and for others who need it.

General Info
First, you should read this: https://taskwarrior.org/docs/recurrence.html.
It covers some basic information about recurring tasks.

The mental model you should be working with is that, when you create a recurring task, you create a template from which little children task instances are spawned.
Taskwarrior uses the due, recur, mask, and until fields to determine when to spawn children task instances.

Change Propagation
This is one of the key ambiguities to understand when working with recurring tasks.
Currently, Taskwarrior has certain bugs that contribute to this.
(See
TW-1293 - Modifying or deleting a child task does not propagate if there are no siblings RESOLVED  and
TW-1294 - Modifying a child task does not propagate to parent RESOLVED
).

Modifying a child task
When you modify a child task (includes the commands modify, prepend, append, annotate, and possibly others), Taskwarrior will check if there are other child tasks (sibling tasks).
If there are, task will ask whether or not to propagate the changes to the other tasks.
if you choose yes, the changes will be propagated to the sibling tasks, but NOT to the parent task.
This means that child tasks that are spawned in the future will not have these changes.

If you want to change all child tasks, including future ones, you should instead modify the parent task template.

Modifying a parent task
When you modify a parent task, the changes will be applied to the parent task.
If there are any children, you will be asked whether or not to propagate the changes, and if you choose yes, the changes will be propagated as expected.
However, there is a special case (see next section).

Changing recurrence period or start date
Due to how Taskwarrior tracks the spawning of child tasks (using due, recur, mask, and until fields), trying to modify these attributes on the parent task template directly will result in weird behavior.
Thus, if you want to change due or recur (the start date or recurrence period), the best approach is to duplicate the parent task template, applying any needed changes, then delete the original task template.
This will also reset the mask on the new parent task, so Taskwarrior knows what child tasks it needs to spawn.

Deleting a child task
This is almost identical to modifying a child task (see above), HOWEVER, if you choose to propagate the deletion, the parent task WILL also be deleted, unlike with modifications.
Note that this prompt to propagate only appears if there are sibling tasks (i.e., at least one other child task, or more than one child task all together), so it is not a reliable way of deleting or stopping a recurring task template.

Deleting a parent task
You can't do it directly.
The best way would be to modify the until field to a suitable date (try -1d if you're feeling lazy).
If there are any child tasks, you will be asked to propagate the changes, as per the modifying parent tasks section above.
Child tasks who have passed their until date will be expired and deleted.

However, the parent task template will not be expired and deleted, though it will stop spawning children tasks.
That means that parent task "zombies" can accumulate in your tasks files, increasing task ID numbers and generally taking up room.
You can periodically clean up these tasks by running 

task status:recurring until.before:today ids
to get a list of IDs of dead parent tasks.
Actually removing the tasks is left as an exercise for the reader (since you can't delete them with Taskwarrior, remember?).

Ideas to try: write a script to delete the lines from ~/.task/pending.data, or delete the lines manually (ID numbers correspond to line numbers in pending.data.
Make sure you delete from the bottom up so the line numbers don't shift as you are working.)

You can use this script to clean up expired task templates: https://gist.github.com/darkfeline/7d138198b68271a9f6fe  Read the code to see what it does, and modify it if needed.
{{< /answer >}}
