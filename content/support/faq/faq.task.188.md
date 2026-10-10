---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Create task with a context does not apply the filter to the task"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Create task with a context does not apply the filter to the task

HI guys,

 

I'm working on my Project, I'm trying to work with context as documented in the man page.

 

For this a context was define as documented in the code block below.

While the task list command does display task with the context define filter, the task add command doesn't apply the filter to new created tasks. Different filter were use. The behavior appeared to be always the same.

 

Test case:

task context define ST project:Studium.ST
task context ST
Context 'ST' set. Use 'task context none' to remove.
task add "Unterlagen sortieren"
Created task 355.
akendo@x240 ~/o/I/S/P/taskwarrior.git> task 355
No command specified - assuming 'information'.
Name Value 
ID 355
Description Unterlagen sortieren 
Status Pending
Entered 19.06.2016 18:04 (1s) 
Last modified 19.06.2016 18:04 (1s)

 

I would expect that setting up a context would imply to new create task to be in the same context as well.

Is this intended or not?
{{< /question >}}
{{< answer >}}
Context was designed to be a persistent, meta-filter reducing the task list to a given context (like work, home, shopping etc) following the GTD(tm) idea that you con only perform tasks that are in the context you are in right now. It was a conscious decision for the context feature to affect only reporting actions. Let's say you were at home, using the home context to show only tasks relevant to that context, but you suddenly have ideas for tasks to perform in other contexts, it is important to allow the user to quickly input any task, any time, without having to disable the context filters first.

{{< /answer >}}
