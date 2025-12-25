---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "What should I never, ever do?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### What should I never, ever do?
{{< /question >}}
{{< answer >}}
Parse the data file yourself
Use Dropbox and assume that it merges tasks
Track time using Taskwarrior, until it actually supports that feature
Write a third-party script that ignores $(task --version)

A: Never ever manipulate the data files with an editor or self-written scripts and programs.

Note: I don't think that deserves a "never ever". I've modified the data files by hand (and by script) with no issues. A better qualification is "make sure you know what you're doing" and "don't complain if something breaks".
{{< /answer >}}
