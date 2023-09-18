---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Is it possible to color all task having a specific tag?"
---

Back to the [FAQ](/support/faq)

Q: Is it possible to color all task having a specific tag?

Is it possible to color all task have a specific tag? 

I know I can colorize tasks having tags (e.g. task config color.tagged grey225).

In my case it would be nice to have tasks tagged with "foo" colorizied in different color that other tagged tasks. Can this be done in task 2.3.0?

A: Sure, just create several rules like this:

task config color.tag.foo grey225
task config color.tag.bar red
See 'man taskrc' for full details.

