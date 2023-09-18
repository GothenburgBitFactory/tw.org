---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Setting the deadline for the whole project in Taskwarrior"
---

Back to the [FAQ](/support/faq)

Q: Setting the deadline for the whole project in Taskwarrior

I know that I can easily set a deadline for a single task

     task ID modify due:31st

But is there any built-in way to set the deadline for the whole project? I know I could use some scripting/grepping/cutting/etc., but maybe there's no need to do it?

A: A project is simply an attribute of a task, and doesn't have its own metadata. This means there is no due date for a project, just for the tasks.

A: You can use something like this:

task project:MyProject modify due:2weeks
This command sets due date to all tasks in selected project.

