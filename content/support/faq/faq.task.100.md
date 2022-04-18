---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "recurring tasks with a wait?"
---

Back to the [FAQ](/support/faq)

Q: recurring tasks with a wait?

There are some tasks that I want to do daily, or weekly. And I only want to see them when they need to be done. I have a 'daily checklist' for my GTD-workflow. And I would like to see the item only on the day it self. 

Now, when I add a recurring tasks with a wait period. like this: 

task add Daily Checklist recur:1day wait:today due:tomorrow
I expect that when I mark the 'Daily Checklist' of today as done, that no other items show up. But after some time, they tend to end up multiply times on my list. 

How should I add this functionality? Or am I just forgetting to check it off sometimes and does that cause the duplicates. I just want to set the wait date relative to the due date. 

A: This is possible now with https://github.com/tbabej/taskwarrior-shift-all-recurrence-hook .

