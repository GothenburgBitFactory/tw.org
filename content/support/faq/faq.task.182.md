---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "define report based on other report?"
---

Back to the [FAQ](/support/faq)

Q: define report based on other report?

Is there, by chance, a shortcut to defining a report based on another report?

 

For example, something like

 

report.soon.justlike=report.waiting
report.soon.description="just one change"
 

so that I don't have to redefine an entire report just to make one little change, and then maybe later if I change one, the other will change along with it?

A: No, this doesn't exist.
Creating a report like this would involve copying and editing:

task show report.waiting >> ~/.taskrc
edit ~/.taskrc

