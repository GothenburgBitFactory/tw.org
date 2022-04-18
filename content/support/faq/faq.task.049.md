---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I add tasks in batch mode?"
---

Back to the [FAQ](/support/faq)

Back to the [FAQ](/support/faq)

Q: How can I add tasks in batch mode?
I want to add a text file with a list of tasks in its task's syntax via a single command:

Water the plants. pro:garden recur:3days due:tom
Bring car to the workshop. due:eow
Fill out tax declaration. due:20140514
Call Tom re. idea +1 123 45678 sched:tom
...
How can I do that?

A: Another variant which could be done as function as well.

sed 's/^/task add /' my_task.txt | $SHELL

A: Your task list is delimited by new lines, so we can use bash's default IFS. 

Add the following function to ~/.aliases (ensure it is sourced by your shell).

function tbatch() { while read -r task; do (task add "$task"); done < "$1" }
Start your shell anew and try it:

tbatch my_tasks.txt
 

This does not check against valid syntax. Any invalid line is not being added by task (see the output for details).

