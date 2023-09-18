---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I import holidays from holidata?"
---

Back to the [FAQ](/support/faq)

Q: How do I import holidays from holidata?

I was able to wget the 2015.json file from holidata.
I tried doing task import 2015.json, but it added the holidays as tasks.
Is there special syntax to do this automatically, or do we need to hand-edit the holiday file and/or add the dates to .taskrc?

A: There is a script to automatically update your holiday files, called update-holidays.pl, and it's part of the distribution.

