---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Annotations vs dependencies"
---

Back to the [FAQ](/support/faq)

Q: Annotations vs dependencies

Annotating vs dependencies

Most tasks involve lots of little tasks and it's usually practical to make dependencies. I find the easiest way to read them is to annotate.
So a typical task looks like this

ID  Project   Description
99  thatthing  do this important  thing
               9/1/2014 did this one thing, now on to that other thing,
               9/2/2014 did that other thing, waiting on something
               9/2/2014 remember to do this other thing while you're waiting
               9/2/2014 almost done, talk to that one guy about that thing
The problem is annotations multiply like rabbits and I'll have to go in and comment out some annotations, no big deal.
May not be right since a task is often dependendent on some annotation within it, but still a lot easier to read than.

And it's easier to type

task add foo pro:projectfoo
Project 99 created.
task 99 annotate bar
task 99 annotate foobar
Instead of

task add foo pro:projectfoo
task add bar pro:projectfoo
task add foobar pro:projectfoo
task 99 mod dep:100,101
Mainly though it's just easier to read annotations below the projects.
What am I doing wrong or what do you usually do?

A: The issue you are referring to is one that has been asked many times before in different forms.
People end up "misusing" annotations to add things that should instead be "subtasks". Much like the last example you provide.
This is currently an open issue pending design and implementation.

I thought it was reported already given it has been discussed several times but I couldn't find the ticket for it.
You can now find it at TW-1412.

In the meantime, I'd recommend using the last approach and use dependencies instead.

As for annotations, try to think of them as "extra task information" and not "things that you did or still need to do".
If you feel tempted to create an annotation that includes the words do, did, wait(ing), remember, need,... you should probable be creating a task and using due: ,wait: or some other functionality.

If you are wondering then what should you use annotations for, consider this example:

ID  Project   Description
99  happyhouse Buy a SpringleTrumper online.
               9/1/2014 The online price is 50$. A bit more than I was planning to spend.
(create subtask "ask john about it")
               9/2/2014 I asked John and he told me it was indeed too expensive. It should be less than 10$  (mark subtask "ask john" as done; create subtask "call the shop")
               9/4/2014 Talked to the service, the price was indeed wrong. One zero too many.
(mark subtask "call the shop" as done)
               9/4/2014 Bought online. Should arrive in 3 days.
(set task to wait for 3 days)
               9/7/2014 Arrived. Everything ok.
(set task to done)
the part in parenthesis reflects my actions and is not part of the annotation.

