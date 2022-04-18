---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Can I add custom statuses, like \"Cancelled\" or \"Waiting on others\"?"
---

Back to the [FAQ](/support/faq)

Q: Can I add custom statuses, like "Cancelled" or "Waiting on others"?

I'd like to be able to have more task statuses than are available by default.
Is that possible to do?  If so, how?

More concretely, I have two additional states I'd like to represent:

"Cancelled", for an item that went onto my task list but that can now be removed because it no longer needs to be completed.
I don't like deleting items, because then there's no record of it having been there in the first place.
"Waiting on others", for an item that cannot be completed until someone else does something.
(The wording is difficult here, because "waiting" means something else in TaskWarrior already.)
How can I accomplish this?

A: No, custom status values are not accepted.
After all, Taskwarrior wouldn't know what you mean, and some functionality depends on known states.

Instead, you can add a UDA field, for example named 'detail', and you can store your extended status there.
See https://taskwarrior.org/docs/udas.html.

