---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Excluding tasks from a report?"
---

Back to the [FAQ](/support/faq)

Q: Excluding tasks from a report?

I mainly rely on tags for making reports

task +somebody >> myreport.txt
task +someoneelse >> myreport.txt
 

Is there a way to exclude tasks that contain a certain tag, or that are low priority?

task +somebody -dothislater >> myreport.txt
task +someoneelse -waitingonsomething >> myreport.txt
task +someoneelse -pri:L>> myreport.txt<Paste>

A: Actually, you are providing your answer.

task +somebody -dothislater >> myreport.txt
Is exactly how you should do it.

As for being or not being of a given priority, try:

task +someoneelse pri:L>> myreport.txt  (for priority low)
task +someoneelse pri.isnt:L>> myreport.txt  (for any priority but low)
You should also check

man task
man taskrc
as these provide most of the information

