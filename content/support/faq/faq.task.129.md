---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Find what tasks are associated with a mis-named project"
---

Back to the [FAQ](/support/faq)

Q: Find what tasks are associated with a mis-named project

Hello - I'm finding that Taskwarrior is like vim, you learn something new every day, and it's wonderfully deep. But alas, my taskwarrior-fu is still green like a grasshopper, so I need to rely on the good support of the TW team.

I renamed the project on a couple of tasks, from Sys.sipxecs to Sys.sipXecs, but when I run "task proj" I see:

Sys 69
...
  sipXecs 4
  sipxecs 2
...
I want to find those two tasks that seem to be still linked to the old name. How do I suss this out? 

A: You can find these using a filter.
Try one of these:

$ task pro:Sys.sipxecs all
$ task project.contains:sipxecs all
$ task all pro \~ sipxecs
The last example puts the all command before the attribute pro because projects is also a command, and task treats the first command-like argument as a command.

The all report is important here, because it has no filter, and therefore the results are exactly what you enter on the command line. For example, if the two tasks are already completed, using list will not find them.
The info report also has no filter.

