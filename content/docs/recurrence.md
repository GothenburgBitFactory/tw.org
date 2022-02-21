---
title: "Taskwarrior - How Recurrence Works"
---

# How Recurrence Works

A recurring task is a task with a due date that keeps coming back as a reminder.
Here is an example:

    task add Pay the rent due:1st recur:monthly until:2015-03-31
    Created task 123.

This task has a due date, a monthly recurrence, and an optional until date
coinciding with the end of the lease.

A recurring task is given a status of `recurring` which hides it from view,
although you can see it in the `all` report. The recurring task you create is
called the template task, from which recurring tasks instances are created. So
the template remains hidden, and the recurring instances that spawn from it are
the tasks that you will see and complete.

Here is a look at the template task:

    $ task 123 info

    Name        Value
    ID          123
    Description Pay the rent
    Status      Recurring
    Recurrence  monthly
    Entered     2014-03-01 12:13:28 (42 secs)
    Due         2014-04-01 00:00:00
    Until       2015-03-31 00:00:00
    UUID        64bcf8fd-74d5-40d2-9e57-1d6a5922cdfc
    Urgency     2.4

Now if you run a report, such as `task list`, you will see the first instance of
that recurring task generated. We can take a look at the instance:

    $ task 124 info

    Name        Value
    ID          124
    Description Pay the rent
    Status      Pending
    Recurrence  monthly
    Parent task 64bcf8fd-74d5-40d2-9e57-1d6a5922cdfc
    Mask Index  0
    Entered     2014-03-01 12:17:03 (15 secs)
    Due         2014-04-01 00:00:00
    Until       2015-03-31 00:00:00
    UUID        29d2df7a-1165-4559-b974-a727519e00f1
    Urgency     2.4

Notice how the instance has a status `pending`, and a reference back to the
template task (Parent task). In addition you can see it inherited the recurrence
and description, and if there was a project, priority and tags, those would also
be inherited.

The recurring instance has an attribute named \'Mask Index\', which is zero.
This indicates that it is the first of the many recurring task instances, the
counting being zero-based.

Now if we look back at the template task, we see changes:

    $ task 123 info

    Name          Value
    ID            123
    Description   Pay the rent
    Status        Recurring
    Recurrence    monthly
    Mask          -
    Entered       2014-03-01 12:13:28 (3 mins)
    Due           2014-04-01 00:00:00
    Until         2015-03-31 00:00:00
    Last modified 2014-03-01 12:17:03 (24 secs)
    UUID          64bcf8fd-74d5-40d2-9e57-1d6a5922cdfc
    Urgency       2.4

    Date                Modification
    2014-03-01 12:17:03 Mask set to '-'.
                        Modified set to '2014-03-01 12:17:03'.

The template task now has a `mask` attribute, and some change history. That
`mask` is a string of task statuses. It has a value of `-` which indicates that
one instance was created, task 124, because it is one character long. The `-`
means that instance is still pending. This is how the template task keeps track
of what it does and does not need to generate. When the task instance changes
status that `-` becomes `+` (completed) or `X` (deleted) or `W` (waiting).

Note that you never directly interact with task 123, the template task. It is
hidden for a reason. Instead, you interact with the recurring task instances,
and in most cases, changes are propagated to the template task and optionally
other sibling tasks.

In this example one task instance is generated for the next due period. This is
because the configuration setting `recurrence.limit` is set to 1, the default.
If this number is increased to 2, then you would see the next 2 instances
generated. Note that this only generates two steps into the future, without
regard for whether those two instances are completed or not - don\'t expect to
complete the first task and see a new one pop up immediately.
