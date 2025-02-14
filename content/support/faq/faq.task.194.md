---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I remove all colors from output?"
---

Back to the [FAQ](/support/faq)

Q: How can I remove all colors from output?

A: Use the color=off override, like this, to disable all color:

$ task rc.color=off ...

A: You can try do so:

task | cat
For me, it clears all color.

