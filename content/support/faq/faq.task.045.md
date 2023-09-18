---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to show tasks done today?"
---

Back to the [FAQ](/support/faq)

Q: How to show tasks done today?
'm feeling stupid as it should be trivial. I've completed some tasks with:

   <id> done

And I want to get tasks I completed today. I tried:

   end:today list

   done:today list

   status:Completed list

But none of them are showing anything.

 

EDIT: I'm using tasksh

UPDATE: See comments on Renato's accepted answer

A: You can use one of:

task com
task completed
to list tasks completed.

The list report omits completed tasks by default, which is why you were not getting any completed task.

 

As for selecting by completion date, filtering on end: is currently not listed in the man page but is supported as long as you use with an interval.

The following examples should work:

task com end.after:today
task completed end.after:today

