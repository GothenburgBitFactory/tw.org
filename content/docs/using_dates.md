---
title: "Taskwarrior - Using Dates Effectively"
---

### Using Dates Effectively

A task does not require a due date, and can simply be a statement of need:

    $ task add Send Alice a birthday card

However this is exactly the kind of task can benefit from having a due date, and
perhaps several other dates also.

There are several dates that can decorate a task, each with its own meaning and
effects. You can choose to use some, all or none of these, but like all
Taskwarrior features, they are there in case your needs require it, but you do
not pay a performance or friction penalty by not using them.

[]{#due}

#### The `due` Date

Use a `due` date to specify the exact date by which a task must be completed.
This corresponds to the last possible moment when the task can be considered
on-time. Using our example, we can set the `due` date to be Alice\'s birthday
(line breaks added for clarity):

    $ task add Send Alice a birthday card \
               due:2016-11-08

Now your task has an associated `due` date, to help you determine when you need
to work on it. But what effect does this have on Taskwarrior? How can it be used
to best advantage?

We call the `due` date of a task \'metadata\'. As such, it is just a piece of
data associated with the task, and therefore it can become part of a filter:

    $ task due:today list
    ...

This is one way to find out if any of your tasks are due today. You could also
use:

    $ task +TODAY list
    ...

That is an example of a virtual tag, `TODAY`, which is not a real tag, but is
something you can query, and is equivalent to the previous example. Additionally
you can use `DUE` which filters tasks that have a due date in the next week, or
`WEEK` for all tasks due this week, including `YESTERDAY`, `TOMORROW`, `MONTH`
and `YEAR`.

You can find tasks that have any due date at all:

    $ task due.any: list
    ...

Or no due date:

    $ task due.none: list
    ...

There is also an `overdue` report that makes use of the `OVERDUE` virtual tag,
to show you what is already late. If you run the `calendar` report, your due
date will be highlighted on it.

What we see here is that Taskwarrior leverages the metadata to drive various
features. Several reports will sort by `due` date, and as we see above, a task
that has a due date now belongs on your schedule.

[]{#scheduled}

#### The `scheduled` Date

A `scheduled` date is different from a `due` date, and represents the earliest
opportunity to work on a task. Let\'s continue with the same example above. You
need to send a brithday card to Alice, but her birthday isn\'t until November,
so it\'s not the kind of task that can be done in advance. Ideally this would be
done a few days ahead of the `due` date:

    $ task add Send Alice a birthday card \
               due:2016-11-08 \
               scheduled:2016-11-04

This means that you need to send Alice a birthday card, no later than
2016-11-08, and no earlier than 2016-11-04.

If a task has a `scheduled` date, then once that date passes, the task is
considered ready, and there is a `ready` report and a `READY` virtual tag for
this:

    $ task ready
    ...
    $ task +READY list
    ...

Tasks that have no `scheduled` date are considered always ready. Again, metadata
drives the sophistication of your task list.

[]{#wait}

#### The `wait` Date

Many people do not like to look at long task lists, finding them daunting, or
just distracting. You can add a `wait` date to a task, which has the effect of
hiding the task from you until that date. In our example, Alice\'s birthday
isn\'t close yet, so we applied a `scheduled` date to indicate that we should
not begin the task yet, as it is not ready. Now let\'s add a `wait` date to the
task:

    $ task add Send Alice a birthday card \
               due:2016-11-08 \
               scheduled:2016-11-04 \
               wait:november

Here the task is given a `wait` date of 2016-11-01, via the useful shortcut
\'november\', which means the task will not appear on lists until November. At
that time, it will reappear, but it will still not be ready until 2016-11-04.

You can view all the hidden waiting tasks using the `waiting` report:

    $ task waiting
    ...

There is a `WAITING` virtual tag to select these tasks, but note that you have
to use the `all` report with it, otherwise you get conflicts with the other
reports that specify a \'pending\' status, because a waiting task is not
pending.

[]{#until}

#### The `until` Date

Now suppose I miss Alice\'s birthday completely. Shame on me. The task would be
overdue, but this is the kind of task where I don\'t want to complete it late,
I\'d rather just forget it, and wish Alice a belated happy birthday in person. I
could simple delete or complete the task, but there is another option, which is
to add an `until` date:

    $ task add Send Alice a birthday card \
               due:2016-11-08 \
               scheduled:2016-11-04 \
               wait:november \
               until:2016-11-10

This means that on 2016-11-10, the task self destructs, and is automatically
deleted. This might be the right thing to do for a birthday card task, but is
not suitable for a \"Pay the rent\" task. Beware!

There is a DOM-based shortcut you can use, to make the command above a ittle
more formulaic:

    $ task add Send Alice a birthday card \
               due:2016-11-08 \
               scheduled:due-4d \
               wait:due-7d \
               until:due+2d

This are evaluated only at task creation time, so if you change the due date,
you also need to change the other dates. Note there is an `UNTIL` virtual tag to
show you all tasks that are set to auto-expire.

[]{#other}

#### Other Dates

There are other dates associated with a task, but these are more for internal
use, and are less useful for you.

Each task has an `entry` date which records when it was created. Each completed
or deleted task has an `end` date, which records when it was completed or
deleted. An active, or started task has a `start` date, but only while it is in
the active state. Finally, every task has a `modification` date, which records
when it was last modified. This is used as a hint when tasks are being synced.

In addition, you may find you have a use case for a different kind of date for
your task lists. For example, you may adhere to an agile development process,
and a task may be assigned to a sprint, and that sprint may be identified by its
end date. You can add arbitrary dates like this to Taskwarrior by defining a
[User Defined Attribute](/docs/udas.html) (UDA) and then storing that metadata
with your tasks. In this case, Taskwarrior will do nothing with your UDA but
store it, and let you use it in reports and filters.

[]{#urgency}

#### Urgency

The presence and values of date metadata in your tasks affects the urgency
calculations. For example, if a task is blocked by a dependency, the urgency is
reduced. Similarly tasks that are ready have an elevated urgency.

[]{#also}

#### See Also

For other discussions of dates see:

-   [Date & Time](/docs/dates.html)
-   [Named Dates](/docs/named_dates.html)
-   [User Defined Attributes](/docs/udas.html)
-   [Best Practices](/docs/best-practices.html)
-   [Urgency](/docs/urgency.html)
:::
