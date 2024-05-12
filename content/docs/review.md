---
title: "Taskwarrior - Tasksh Review"
---

# Tasksh Review

Beginning with release {{< label >}}1.1.0{{< /label >}} the Taskwarrior shell (`tasksh`) has a `review` command that lets you review your tasks.

Reviewing your task list is important because you need to make sure you work on the more urgent tasks first, and also make sure your list is up-to-date.
Only with accurate metadata (due dates, priorities, ...) will your task list reflect real world needs.
Periodic review will help you maintain the right due dates, priorities, dependencies, tags, project assignments and so on, while removing tasks that are no longer needed.

Here is a quick demo of the review feature:

## How it Works

Ideally you would review your task list regularly, once a week.
If you find yourself making no changes to the tasks, perhaps you should review less often.
The goal is for the review process to be effective at cleaning up the list, but not a burden, or a waste of time.

Tasksh implements the review by creating a Taskwarrior report just for this purpose.
It is named `_reviewed` and simply lists the UUID values of tasks that need to be reviewed.
This report then drives an interactive session where you go through that list of tasks one at a time, and have the chance to modify, skip or mark the task as reviewed.

When you mark a task as reviewed, Tasksh adds a `reviewed` timestamp to the task, as a [UDA](../udas/) defined for this purpose.
This attribute is used in the `_reviewed` report filter to make sure you don't review the same task more often than weekly.

The combination of the `reviewed` timestamp, and the `_reviewed` report means that if you were to review all your tasks today, then immediately performing another review would yield no tasks to review.
After a week has passed, you will be able to review all the tasks again.

This ability to 'resume' a review session means that you can stop a review session at any time, and resume later.
You can even specify how many tasks you would like to review, which means you can review a small set of tasks more frequently, making the review process shorter.

When you first review, Tasksh will automatically configure Taskwarrior to create the `_reviewed` report, and the `reviewed` UDA.
Once the report is created, you can modify it.
Here is the report definition:

```
$ task show report._reviewed

Config Variable              Value
---------------------------- -------------------------------------------------------
report._reviewed.columns     uuid
report._reviewed.description Tasksh review report.  Adjust the filter to your needs.
report._reviewed.filter      ( reviewed.none: or reviewed.before:now-1week ) and
                             ( +PENDING or +WAITING )
report._reviewed.sort        reviewed+,modified+
```

The filter term `reviewed.before:now-1week` can be changed to suit your needs.

## Launch Tasksh

Launch tasksh, and you will immediately see a summary of available commands, followed by a prompt:

```
$ tasksh

tasksh 1.1.0

    tasksh> review [N]       Task review session, with optional cutoff after N tasks
    tasksh> list             Or any other Taskwarrior command
    tasksh> diagnostics      Tasksh diagnostics
    tasksh> help             Tasksh help
    tasksh> exec ls -al      Any shell command.  May also use '!ls -al'
    tasksh> quit             End of session. May also use 'exit'

tasksh> 
```

You see here that `review` is one of the commands.
You can simply start a review session, which can be quit at any time:

```
tasksh> review
...
```

Or you can review a fixed quantity of tasks:

```
tasksh> review 12
...
```

Reviewing a fixed quantity can help you iteratively review all your tasks at convenient times, without having to go through the entire list at once.
