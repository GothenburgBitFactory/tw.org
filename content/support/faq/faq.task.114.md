---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to copy group of tasks?"
---

Back to the [FAQ](/support/faq)

Q: How to copy group of tasks?

I have a rather large set of tasks (~30) grouped in a tasklist, e.g. project:server1 (or tag +server1). Now I want to copy this taskset into another project (or tag), e.g. project:server2. How this can be done aside from manually adding each task using `task add` command?

Use case is quite simple: I have a tasklist to setup one server, I'd like to copy it, edit a bit and use to setup another system and so on. Each host can be processed independently, so single taskset can't be reused here.

A: You can duplicate the tasks, and using a feature (en-passant) that modifies tasks, you can achieve what you want:

$ task project:server1 duplicate project:server2
The project:server1 is the filter used to drive the duplicate command, then the project:server2 is a set of modifications to apply.

