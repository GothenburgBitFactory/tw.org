---
title: "Taskwarrior - ID Numbers"
---

# ID Numbers

Taskwarrior keeps the current tasks (mostly pending and recurring tasks) in the "working set," and assigns ID numbers to them.
The ID number is the index (1-based) of the tasks in the working set.
When a task is completed or deleted, it is moved out of the working set, and loses the ID.
All tasks, in the working set or otherwise, have a UUID, and are always addressable by UUID.

By having a working set, average performance is improved.
This works because most of the commands and reports are based on only the pending tasks, which are in the working set.
The working set tends to stabilize at a constant size, regardless of the amount of work you are getting done [1].
The total number of tasks, on the other hand, grows unbounded.
This means that some reports, such as the `completed` or `all` report will run slower over time because there is more data to read and display.

One nice side effect of this mechanism is that the ID numbers of pending tasks remain small, and less prone to error during data entry.

One downside is that ID numbers change occasionally, although in a predictable way.

## Rebuilding

When a task is marked as deleted, it gets a new status, and an `end` attribute, among other things.
The task is still in the working set, but it doesn't belong there.
There is an operation called "rebuilding" that is automatically run by taskwarrior to move tasks out of the working set.
When moving tasks out of the working set, the ID numbers are changed, because they should be a sequence with no gaps assigned to all tasks in the working set.

But rebuilding is only run occasionally: it is run immediately before any report that displays ID numbers, but not when a task is modified in any way.
The reason is concerned with general usage.
Here is a typical taskwarrior usage scenario for a few commands:

```
$ task list
...
$ task 34 done
$ task 45 modify priority:H
$ task 56 delete
$ task list
...
```

The first command shows a report that contains ID numbers.
The next three commands use the ID numbers shown in the report.
The last command shows ID numbers again.
Clearly, while the middle three commands are being run, it would be a mistake to renumber any tasks.
When the last command is run, new ID numbers are shown, and any subsequent commands would use those.
This is why only reports that display ID numbers perform a rebuild first.

## Configuration

The `gc` configuration setting may be set to 'off' to disable the rebuild operation.
This has the effect of letting data accumulate in the working set, and effectively making the ID numbers static.
This slows down almost every command.
Disabling the rebuild operation should be used on a per-command basis, if at all, in this way:

```
$ task rc.gc=off list
...
```

The setting can be made permanent, but this is not recommended.

[1] Based on more than 7 years of monitored usage.
