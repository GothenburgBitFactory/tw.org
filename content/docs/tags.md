---
title: "Taskwarrior - Tags &amp; Virtual Tags"
---

# Tags & Virtual Tags

The basic tag syntax is very powerful and simple to use.
There are two ways to use this, shown here:

    $ task +HOME list
    $ task -WORK list

These two commands illustrate the complete tag interface.
The first command is a filter that lists only tasks that have the `HOME` tag.
The second command is a filter that lists only tasks that *do not* have the `WORK` tag.
The + and -
syntax therefore means presence and absence of a tag.
This is simple to use, and can be combined like this:

    $ task +HOME -WORK list

This shows tasks that have the `HOME` tag, but do not have the `WORK` tag.
This is a very simple and easy to use mechanism, but it does require that your tasks are properly tagged.
In other words, it is based directly on task metadata.

A tag may be any single word that does not start with a digit, punctuation, or mathematical operator.

## Complex Filters

Some Taskwarrior filters are simple in concept, but the syntax is not that straightforward.
For example, to determine whether a task has a due date that falls on the current day, you need to use this filter:

    $ task due.after:yesterday and due.before:tomorrow list

This filters tasks with a due date during the narrow time window of 'today'.
Note that it is not sufficient to just specify the date, because due dates all have associated times (defaulting to 0:00:00), and if you want to match the date, you need to consider the time.
So for example, this command *does not*
list tasks due today:

    $ task due:today list

Instead, this filter matches tasks with a due date of today, and a time of 0:00.
In order to see all tasks due today, you need to provide proper range bracketing.

## Simplification

Here is where virtual tags can help, by providing a simple tag interface to more complex state conditions of the task.
There is a virtual tag, named `TODAY` that can be used in filters, and it means that instead of this filter:

    $ task due.after:yesterday and due.before:tomorrow list

We can now use this:

    $ task +TODAY list

Which is a much simpler way of filtering tasks due today.
Because this is a tag interface, we can also invert it:

    $ task -TODAY list

This shows only tasks that are not due today.

Virtual tags are built in to Taskwarrior.
They are evaluated at run time, which means they do not require direct metadata, and therefore do not occupy space in the database, but are determined according to the state of the task in the same way that the complex filter example above is determined.

Thus virtual tags combine the simplicity of the tag interface with more complex defined conditions, for convenience.

## Supported Virtual Tags

Since version 2.2.0, Taskwarrior has supported virtual tags, and the list will continue to grow.
Here is the full list of supported virtual tags:

* `BLOCKED`   - Is the task dependent on another incomplete task?
* `UNBLOCKED` - The opposite of `BLOCKED`, for convenience. Note `+BLOCKED` == `-UNBLOCKED` and vice versa.
* `BLOCKING`  - Does another task depend on this incomplete task?
* `DUE`       - Is this task due within 7 days? Determined by `rc.due`
* `DUETODAY`  - Is this task due sometime today?
* `TODAY`     - Is this task due sometime today?
* `OVERDUE`   - Is this task past its due date?
* `WEEK`      - Is this task due this week? {{< label >}}2.3.0{{< /label >}}
* `MONTH`     - Is this task due this month? {{< label >}}2.3.0{{< /label >}}
* `QUARTER`   - Is this task due this quarter? {{< label >}}2.6.0{{< /label >}}
* `YEAR`      - Is this task due this year? {{< label >}}2.3.0{{< /label >}}
* `ACTIVE`    - Is the task active, i.e. does it have a start date?
* `SCHEDULED` - Is the task scheduled, i.e. does it have a scheduled date?
* `PARENT`    - Is the task a hidden parent recurring task? {{< label >}}2.3.0{{< /label >}}
* `CHILD`     - Is the task a recurring child task?
* `UNTIL`     - Does the task expire, i.e. does it have an until date?
* `WAITING`   - Is the task hidden, i.e. does it have a wait date?
* `ANNOTATED` - Does the task have any annotations?
* `READY`     - Is the task pending, not blocked, and either not scheduled, or scheduled before now. {{< label >}}2.4.0{{< /label >}}
* `YESTERDAY` - Was the task due yesterday? {{< label >}}2.4.0{{< /label >}}
* `TOMORROW`  - Is the task due tomorrow? {{< label >}}2.4.0{{< /label >}}
* `TAGGED`    - Does the task have any tags?
* `PENDING`   - Is the task in the pending state? {{< label >}}2.4.0{{< /label >}}
* `COMPLETED` - Is the task in the completed state? {{< label >}}2.4.0{{< /label >}}
* `DELETED`   - Is the task in the deleted state? {{< label >}}2.4.0{{< /label >}}
* `UDA`       - Does the task contain any UDA values? {{< label >}}2.5.0{{< /label >}}
* `ORPHAN`    - Does the task contain any orphaned UDA values? {{< label >}}2.5.0{{< /label >}}
* `PRIORITY`  - Does the task have a priority? {{< label >}}2.5.0{{< /label >}}
* `PROJECT`   - Does the task have a project? {{< label >}}2.5.0{{< /label >}}
* `LATEST`    - Is the task the most recently added task? {{< label >}}2.5.0{{< /label >}}
