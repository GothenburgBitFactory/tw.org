---
title: "Taskwarrior - 30-Second Tutorial"
---

# 30-Second Tutorial

Let's get started. Here's a quick demonstration showing how to perform basic
task management.

Here is an explanation of what is happening. First add two tasks.

    $ task add Read Taskwarrior documents later
    Created task 1.

    $ task add priority:H Pay bills
    Created task 2.

Easy. Do you see that second one has a High priority? Now look at those tasks,
using the report `next`. Notice that the two tasks are ordered by urgency, and
the urgency is affected by the priority, among other things.

    $ task next

    ID Age P Description                      Urg
    -- --- - -------------------------------- ----
     2 10s H Pay bills                           6
     1 20s   Read Taskwarrior documents later    0

Suppose the bills are paid and we wish to mark task 2 as completed.

    $ task 2 done
    Completed task 2 'Pay bills'.
    Completed 1 task.

Now we can omit the `next` command, because it is the default command.

    $ task

    ID Age Description                      Urg
    -- --- -------------------------------- ----
     1 5m  Read Taskwarrior documents later    0

Task 2 is now gone. Notice that no visible tasks have a priority set, and so the
priority column is not shown. Now we can delete that remaining task, because we
are already using the tutorial.

    $ task 1 delete
    Permanently delete task 1 'Read Taskwarrior documents later'? (yes/no) y
    Deleting task 1 'Read Taskwarrior documents later'.
    Deleted 1 task.

    $ task
    No matches.

That is all you *need* to know. These four commands (add, done, delete, next)
will allow you to use Taskwarrior effectively. If you are new to Taskwarrior, it
is recommended that you stop here, go and start to manage your task list for a
while. We don't want you to be overwhelmed at a time when you just need a way
to organize and get things done.

When you are comfortable with basic Taskwarrior usage, there are many other
features you can learn about. While you are not expected to learn all of them,
or even find them useful, you might just find exactly what you need.
