---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to avoid side effects in Taskwarrior query?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How to avoid side effects in Taskwarrior query?
I use some Python script to include information from Taskwarrior into other places of my Desktop Environment. I hook a function before presenting the prompt of my zsh, for example, that warns me with a custom message, if there are no tasks active.

The way I try to get the necessary information from Taskwarrior in Python is to use subprocess.check_output or subprocess.Popen.
Unfortunately Taskwarrior is not only delivering the queried tasks to stdout, but presents additional strings which are not caught by check_output or Popen.
This string is show the

"No matches.
                                                                                                          

There are local changes.
Sync required."
message or in case the querry has a result, only "There are local changes.
Sync required.".
This output does not seem to be a result that is directly delivered by the query otherwise it would be part of  the result object in the Python Script. Instead it appears wherever the script was called (For this example it is the zsh Prompt) while the resulting list of tasks is delived to the resulting oject in the python script.
How is it possible to avoid this sideeffect?
{{< /question >}}
{{< answer >}}
if you don't want to have the value set in your taskrc, you can override it at runtime with do something like `task +ACTIVE status:pending count rc.verbose=off`.

A: I would recommend you to use tasklib python library for the job:

$ task add sample started task

Created task 1.

$ task 1 start

 

>>> from tasklib.task import TaskWarrior
>>> tw = TaskWarrior()
>>> tw.tasks.filter("+ACTIVE")
[sample started task]
 

 More documentation may be found here: https://tasklib.readthedocs.org/en/latest/
 {{< /answer >}}
