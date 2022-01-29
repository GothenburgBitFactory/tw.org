---
title: "Taskwarrior - Best Practices"
---

# Best Practices

If you have installed Taskwarrior and gone through the intro and some of the
tutorials, you may be wondering how to start using some features to help you
organize your work. This is a simple tutorial, not intended to be complete, or
methodology-specific, but just a start, to get you thinking about your task
list, and how you might better rely on it.

The default report (the report that runs when you just enter `task`) is the
`next` report. This is a report where the tasks are sorted by urgency, with the
most urgent at the top. The report cuts off after one page, so it is really just
a list of the most urgent tasks. With a few tips to follow, the `next` report
can be your most valuable resource. Here are the tips for making the `next`
report work in your favor.

## Tips

You'll notice that these tips are all about providing more context and metadata
for tasks. If all you need is a simple shopping list, then switch back to pencil
and paper, you'll be happier. But if you want some sophistication and the
ability to manipulate and view the data\...

-   Capture all the tasks and details that you can. Getting the information off
    your mind and onto the list reduces the amount of details you need to
    remember, and reduces the things you might forget.

-   Assign a project to your tasks if possible:

        task ID modify project:Home

-   Assign due dates where appropriate, for the important tasks:

        task ID modify due:31st

    Don't overdo this though, as a delay might force you to spend too much time
    reorganizing everything.

-   When you start working on a task, mark it started:

        task ID start

    This is a great reminder after a weekend, of what you were doing on Friday
    that should be continued.

-   If you know the priority of a task:

        task ID modify priority:M

    But don't fall into the trap of shifting the priorities too often, as
    you'll waste a lot of time.

-   Add useful tags to a task:

        task ID modify +problem +house

    This is very useful for filtering.

-   Add the special tag +next to a task, to boost its urgency:

        task ID modify +next

-   Represent dependencies, where appropriate, because there is a big difference
    in the urgency of a blocking task, than that of a blocked task:

        task ID modify depends:OTHER_ID

-   Try not to have large, long-term tasks that will sit on your list forever.
    It can be very satisfying and motivating to complete tasks, so create more,
    but smaller, tasks. Don't have a 'learn Japanese' task, instead have a
    'Complete chapter 1' task instead, it's more readily achievable, and you
    can more easily see progress, which can be motivating.

## How That Helps

The `next` report is sorted by urgency. Urgency is just a number, but a number
calculated using a polynomial that considers many aspects of your tasks. What
this means is that the more information you provide with your tasks, the more
accurate the `next` report becomes, and the more closely it approximates your
own notion of urgency.

If you follow the above tips, your `next` report output should be starting to
get useful. Furthermore, by modifying the urgency coefficients, you can make the
`next` report adopt your own notion of whether, for example, a priority setting
is more important than a specific project. Here are some changes you could make:

    task config urgency.user.tag.problem.coefficient 4.5

This means that any task having the `+problem` tag gets an urgency boost.
Conversely, you can reduce the urgency for unimportant things, using negative
coefficients:

    task config urgency.user.tag.later.coefficient -6.0

If you have a project that is more important, you can boost the whole project:

    task config urgency.user.project.Home.coefficient 2.9

Suppose you do not agree that a blocked task should have a reduced urgency.
Override it:

    task config urgency.blocked.coefficient 0.0

A zero coefficient means that blocked tasks now have *no* effect on the urgency.

## Describe Carefully

Providing good descriptions for your tasks is enormously helpful. Here is a very
bad example of a task:

    task add Renovate the kitchen

While that may well be a perfect description of what you will be doing at the
highest level, it is potentially an open-ended task, for which progress will be
very hard to assess. This will be a task that sits on your task list for some
time, and is not very helpful - you learn nothing from it, and its presence on
the list will become demotivating.

A much better approach would be this:

    task add project:Kitchen Select floor tiles
    task add project:Kitchen Measure counter-top
    task add project:Kitchen Design placement of electrical outlets
    task add project:Kitchen Locate ideal placement for extractor duct
    task add project:Kitchen Select and order counter-top material
    task add project:Kitchen Talk to the Electrician about when the work can start
    ...

Here `Kitchen` is now a project name, and the tasks represent smaller units of
work. While this means more time will be spent breaking down the larger tasks,
but planning is important.

With smaller tasks, you have the opportunity to establish links between your
tasks. For example, it would be wise to plan the placement of electrical outlets
before asking the Electrician to start work. Measuring the counter-top is also
needed before ordering the material. These are examples where you could use task
dependencies to formalize the sequence.

If you are wanting to estimate the completion of the project, having more tasks
and more details will improve your ability to estimate. With enough detail in
the tasks, you are more likely to be able to estimate the work.

Break down tasks into smaller tasks - the extra effort required to be more
precise can pay off in terms of efficiently performing the work in the right
sequence, at the right time.

## Review Your Tasks

Go over your list periodically and correct any erroneous data, like an incorrect
due date, or a priority that no longer applies because of external factors, or
even delete tasks that are no longer relevant. This keeps your list current and
up to date, more accurately reflecting the work you need to accomplish. Accurate
metadata and good urgency coefficients mean that Taskwarrior's idea of urgency
more closely matches yours. That will be a big help.

Consider installing and using the Taskwarrior Shell
([tasksh](https://taskwarrior.org/news/news.20160905.2.html)) program, which
among a few other things provides a `review` command that helps you cycle
through your task list and keep it current.

Some would argue that spending as little time on your task list as possible
means more time for doing work. While this is true, it does assume that you are
doing the *right* work. Good advice would be to spend as little time as you can
on the task list, but enough to make sure that it is up to date, correct and
complete. Then rely on the tools, and go get some work done.

## Common Sense

Use a task list, look at it often, correct any mistakes and remove items that no
longer apply. Choose a methodology that works for you (GTD, Pomodoro \...) or
devise your own - it's not complicated. Be consistent. Backup your data.

## Future Enhancements

We are always looking into better ways to represent your task list, better ways
to display it, and better ways to support methodologies that work. We will be
adding features that help in some way, for some people, and we will be
correcting what is not working. Taskwarrior is a toolkit, and a comprehensive
one, intended to support the different ways people do work. You will not need
every feature, but everyone uses a different set of features, according to their
own approach. But every feature that you do use will help you work with your
list better.
