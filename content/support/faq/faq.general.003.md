---
title: "Taskwarrior - FAQ"
topic: "General"
question: "What is the project's coding style?"
---
Back to the [FAQ](/support/faq)

{{< question "What is the project's coding style?" >}}
Is there somewhere information about the coding style for the different programming languages used?
{{< /question >}}
{{< answer >}}
Make all changes and additions such that they blend in perfectly with the surrounding code, so it looks like only one person worked on the source, and that person is rigidly consistent.

That's the general guideline, but to be more explicit about it, here are some of the rules:

* Use 2 spaces to indent, and no tabs
* Surround operators, expression terms with a space
* Stick to an 80 column maximum where possible, although exceptions for readability are fine, if limited
* No cuddled braces

https://github.com/GothenburgBitFactory/taskwarrior/blob/develop/doc/devel/contrib/coding_style.md
{{< /answer >}}
