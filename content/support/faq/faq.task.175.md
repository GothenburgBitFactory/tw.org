---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Urgency coefficient to 0 for a specific tag"
---

Back to the [FAQ](/support/faq)

Q: Urgency coefficient to 0 for a specific tag

I would like to create the tag +contact, and use Taskwarrior (also as) as a contact manager to save info on people (phone numbers, emails, etc). However, I don't want these to increase the urgency as time goes by. I would like to know if it's possible to set urgency=0 for all tasks that have "contact" tag. Thank you

A: Urgency is a polynomial value, and while you can set the coefficient for a specific tag to zero, and therefore eliminate one term, this does not affect other terms.

Urgency is not intended to be something you can manipulate and set to zero.
It is instead the aggregate of subtle influences that are deliberately based on metadata.
It is an emergent value, and not directly under your control.

Instead, you might wish to set a negative coefficient for a specific tag, which will have the effect of reducing the urgency, scaled by the coefficient.
This will lower urgency, not zero it.

