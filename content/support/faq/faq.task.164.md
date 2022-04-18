---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Editing failed with exit code 256"
---

Back to the [FAQ](/support/faq)

Q: Editing failed with exit code 256

When I run 

task N edit
I am taken to vim, I make my edits, but upon returning to task, I get the error:

Editing failed with exit code 256
Subsequent attempts to edit the task are then met with 

Task is already being edited.

Any thoughts on what is going on here?

A: You said vim, but I get the impression you really meant gvim.
If so, it's probably the forking nature of gvim and you'll need to use 'gvim -f'.

