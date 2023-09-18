---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "PeriodSymbols not working"
---

Back to the [FAQ](/support/faq)

Q: PeriodSymbols not working

Hi.

I am trying to display the completed tasks over the last 7 days. I have tried

task completed end.after:-7days
but this just lists all completed tasks. Today is monday and I would like to list all completed tasks for the previous week. What am I doing wrong? I am using version 2.5.1 Thank you

A: Just try

 

task completed end.after:today-7days

