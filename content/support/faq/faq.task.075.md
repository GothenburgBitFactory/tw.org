---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Custom report by tag, project and dependency"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Custom report by tag, project and dependency

I'm pretty ignorant when it comes to making custom reports so bear with me.

I need a report/script that generates a list of tasks grouped by tag.

What I do now:

$ task +joe > list.txt
$ task +bob >> list.txt
$ task +mary >> list.txt
$ task +harry >> list.txt
$ task +lary >> list.txt
This groups it all into one file that's easy to print out and review with others, but I'm sure there's a smarter way.

It would also be nice to have each section of the list separated by a header like

"Tasks involving: LARRY"

....

"Tasks involving: MARY"

...

etc

 

The other thing I would like is to list projects by project name and dependency.
Then my tasks are sorted by the people involved and the project dependencies (as they pertain to the same project).

 

How do I set this up as one command?
{{< /question >}}
{{< answer >}}
The simplest way is to put the above commands in a shell script.
Insert an 'echo' command between task commands to create titles.
{{< /answer >}}
