---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Append to UDA field"
---

Back to the [FAQ](/support/faq)

Q: Append to UDA field
I have a UDA field and I would like to append to it - similar to how annotate works.
Is this possible?

A: No, you'll have to do this, assuming it's a string:

$ task <id> modify uda_field:uda_field+' more text'

