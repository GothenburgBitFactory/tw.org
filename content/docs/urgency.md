---
title: "Taskwarrior - Urgency"
---

# Urgency

Taskwarrior has a `next` report, which is sorted by decreasing urgency.
If that measure of urgency represents or approximates your idea of what is important, then the tasks you should start next will appear near the top of that list.
But what is *urgency*?

Sometimes a task list is driven by dependency, due date or perhaps priority.
In these situations it is relatively easy to select a task to work on next.
There are times however, when this is less clear and you would like to see tasks listed in some kind of common-sense order that embodies several factors.

Urgency is a numeric score Taskwarrior assigns to each task.
It is based on a dozen or more factors that combine to form an overall urgency score.
Now this is not going to be a complete and accurate representation of urgency for many reasons, primarily because each of us has different criteria when judging the importance of a task.
But it will *approximate* urgency, and that is the goal.

There are many other real-life examples of algorithms that are used to approximate qualities: the Apgar Score that assesses the health of newborns, Google's Page Rank that measures the importance of a web link, or credit ratings.
These examples all approximate, but cannot perfectly represent, a complex concept.

Taskwarrior uses a polynomial expression to calculate urgency.
This is a simple sum of terms, where each term represents some measurable quality of a task.
For example, the priority of a task is an indicator of its urgency.
A high priority is more urgent than a medium priority and so on.
Even a low priority is more urgent than no priority.
Priority settings should therefore contribute to the urgency score.

Similarly, if a task is `waiting`, the urgency score should be reduced.
If a task has a due date, then the closeness of that deadline should affect urgency.
If a task is overdue, it should have a greater impact on urgency.

In this way, the different terms can each contribute to the overall score, but there is a further need to identify which terms are important to you.
This is achieved with configurable coefficients for each term.
The urgency coefficients and their default values are:

    urgency.user.tag.next.coefficient           15.0 # +next tag
    urgency.due.coefficient                     12.0 # overdue or near due date
    urgency.blocking.coefficient                 8.0 # blocking other tasks
    urgency.uda.priority.H.coefficient           6.0 # high Priority
    urgency.uda.priority.M.coefficient           3.9 # medium Priority
    urgency.uda.priority.L.coefficient           1.8 # low Priority
    urgency.scheduled.coefficient                5.0 # scheduled tasks
    urgency.active.coefficient                   4.0 # already started tasks
    urgency.age.coefficient                      2.0 # coefficient for age
    urgency.annotations.coefficient              1.0 # has annotations
    urgency.tags.coefficient                     1.0 # has tags
    urgency.project.coefficient                  1.0 # assigned to any project
    urgency.user.project.My Project.coefficient  5.0 # assigned to project:"My Project"
    urgency.waiting.coefficient                 -3.0 # waiting task
    urgency.blocked.coefficient                 -5.0 # blocked by other tasks

The first coefficient has a value of 15.0, which is the highest value.
This means that any task with the `+next` tag has an urgency score of at least 15.0.
The `+next` tag is known as a 'special tag', which is simply a tag that triggers some behavior in taskwarrior - in this case it elevates the urgency score.
Because the coefficient has the largest value, it indicates that the
`+next` tag has the greatest influence on urgency.

The next most significant term is for tasks with a due date, then blocking tasks and so on.
Note that blocked tasks have a coefficient of -5.0, which means that they reduce the urgency score.

The lowest coefficient, that of annotations, has a value of 1.0. This means that a task with more annotations is more urgent than a task with fewer.
The value of
1.0 means this is a weak contributor to urgency, but nevertheless means that tasks with lots of annotations are an indicator of some kind of focus of activity.
You may not agree with this assessment however, and so you might set this coefficient to 0, which means you want the term to have no effect on urgency.

The urgency caused by tags and annotations is further modified by the number of tags/annotations present: The factor is 0.8 for one, 0.9 for two and 1.0 for more.

## Customizing Coefficients

The default coefficients have been chosen to represent all of the terms in a simple, common-sense way.
While these do not necessarily reflect your own judgement, they should be considered a decent starting point.

Before you make adjustments to these values, it is recommended that you use the next report as-is for a while.
This will let you evaluate how effective the values are for your particular style.
For example, you might realize that tasks that are already started contribute unfairly to the urgency score.
But it is useful to arrive at this conclusion based on usage, rather than simply reading the coefficient values above.
But once you are familiar with the urgency scores and have developed a sense that things need to be tweaked, go ahead and change the values.

Suppose you consider priority to be the most important factor.
You might want to simply increase the value from 6.0 to 10.0. You might also want to reduce several other coefficients.
Of course, you are free to do anything you choose, but it is important to bear in mind that any one term in the polynomial should not dominate the expression.
For example, setting a value of 30.0 while all the other values are under 10.0 would be a mistake, because then there is really only one factor influencing urgency, and it will likely not reflect any subtleties.

A more extreme example would be to set the coefficient for priority to 1.0, and all the other values to 0. This would result in a next report that is identical to one sorted only on priority.

Adjustments to the coefficients should also be small.
A good approach is to make all adjustments either the addition or subtraction of 1.0 to a value, thus limiting the effects of a change.
The urgency algorithm is a subtle interplay of several factors, and that is one of its main strengths.
