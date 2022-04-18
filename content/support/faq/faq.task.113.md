---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to specify default project properties?"
---

Back to the [FAQ](/support/faq)

Q: How to specify default project properties?

I'd like to set default properties (tags, priority and so on) for a project, so that, each new task in the project will have some attributes set, e.g.

task add project:kitchen repair microwave
will add tag +home and priority:M for this task (and each task in the project garden).

 

Right now It should be possible to do this using hook, but this will require some coding and user will need to store project settings in a separate file (not in ~/.taskrc).

A: There is default.project, default.due.

If you need more, then yes, and on-add hook would be needed.

