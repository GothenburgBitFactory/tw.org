---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I modify an existing annotation?"
---

Back to the [FAQ](/support/faq)

Q: How do I modify an existing annotation?

I have an annotation I want to modify. I can find no docs or previous questions relating to that. Is it even possible?

A: There are several ways to change an annotation.
To make a small modification, such as a spelling correction, the modify command will update annotations also:

$ task <id> modify /teh/the/
For larger changes, use the edit command, which gives you complete access to all editable attributes:

$ task <id> edit
Last (and by all means least) you can simply remove an annotation and add it back:

$ task <id> denotate teh
$ task <id> annotate Investigate the problem

