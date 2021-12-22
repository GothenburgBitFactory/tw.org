---
title: "Taskwarrior - ID Numbers"
---

### ID Numbers

Taskwarrior assigns ID numbers to tasks. The ID number is actually a simple line
count of the entries in the `pending.data` file. When a task is completed or
deleted, it is moved to the `completed.data` file, and loses the ID. All tasks,
pending or otherwise, have a UUID, and are always addressable by UUID.

By keeping the tasks in two separate files, average performance is improved.
This works because most of the commands and reports are based on only the
pending tasks, which are in the `pending.data` file. This file tends to
stabilize at a constant size, regardless of the amount of work you are getting
done \[1\]. The `completed.data` file, on the other hand, grows unbounded. This
means that some reports, such as the `completed` or `all` report will run slower
over time because there is more data to read and display.

One nice side effect of this mechanism is that the ID numbers of pending tasks
remain small, and less prone to error during data entry.

One downside is that ID numbers change occasionally, although in a predictable
way.

[]{#gc}

#### Garbage Collection

When a task is marked as deleted, it gets a new status, and an `end` attribute,
among other things. The task is written back into the `pending.data` file, but
it doesn\'t belong there - it belongs in the `completed.data` file. There is an
operation called Garbage Collection (gc) that is automatically run by
taskwarrior to move tasks into the correct files. When moving tasks between the
files, ID numbers are affected, because they are simply line numbers in the
`pending.data` file.

But gc is only run occasionally: it is run immediately before any command that
displays ID numbers, such as a report, but not when a task is modified in any
way. The reason is concerned with general usage. Here is a typical taskwarrior
usage scenario for a few commands:

    $ task list
    ...
    $ task 34 done
    $ task 45 modify priority:H
    $ task 56 delete
    $ task list
    ...

The first command shows a report that contains ID numbers. The next three
commands use the ID numbers shown in the report. The last command shows ID
numbers again. Clearly, while the middle three commands are being run, it would
be a mistake to renumber any tasks. When the last command is run, new ID numbers
are shown, and any subsequent commands would use those. This is why only
commands that display ID numbers perform a gc first.

[]{#config}

#### Configuration

The `gc` configuration setting may be set to \'off\' to disable the gc
operation. This has the effect of letting data accumulate in the `pending.data`
file, and effectively making the ID numbers static. This slows down almost every
command. Disabling gc should be used on a per-command basis, if at all, in this
way:

    $ task rc.gc=off list
    ...

The setting can be made permanent, but this is not recommended.

[\[1\] Based on more than 7 years of monitored usage.]{.small}
