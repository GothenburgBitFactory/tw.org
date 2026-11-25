---
title: 'Taskwarrior - task-iterative.5 for task-3.6.0'
viewport: 'width=device-width, initial-scale=1'
layout: single
---
# NAME

task-iterative - Iterative tasks for the Taskwarrior command line todo
manager.

# DESCRIPTION

An iterative task repeats at an interval, such as weekly, every other
Tuesday or six weeks after it was last done. Only one copy of the task
exists at a time. Completing it creates the next one, with its dates
moved forward to the next interval. How the next interval is chosen
depends on the iteration type.

Iterative tasks are an alternative to recurring tasks. A task cannot be
both recurring and iterative.

# EXPERIMENTAL

The UI and behavior of iterative tasks are subject to change in minor
versions based on user feedback. However, the database format is stable
and we're confident this will replace the recurrence system in a future
release.

# CREATING AN ITERATIVE TASK

A task becomes iterative when it has all of:

**iter:&lt;interval&gt;**  
How often the task repeats. See INTERVALS below.

**iter\_type:fixed|fixed+|chained**  
How the next date is chosen. See ITERATION TYPES below.

At least one of due, scheduled or wait  
The date that moves forward each interval. See DATES below.

For example:

        $ task add Pay rent iter:monthly iter_type:fixed due:2026-11-20
        $ task add Take out the bins iter:weekly iter_type:fixed+ due:friday
        $ task add Haircut iter:6wk iter_type:chained scheduled:today

Adding iter and iter\_type to an existing pending or waiting task makes
it iterative.

# ITERATION TYPES

**fixed**  
The next due date is the next interval from when the task was originally
due. If rent is due on the 20th of the month, the next due date is the
20th of the next month, whether it was paid on the 15th, the 20th or the
25th.

**fixed+**  
The next due date is the next interval from when the task was originally
due, on or after now. Missed intervals are skipped. If the garbage bins
go out every week but two weeks were missed while on vacation, they do
not need to go out several days in a row to catch up.

**chained**  
The next due date is the next interval from when the task was completed.
If a haircut is due every six weeks and one was done today, the next is
six weeks from today, even if this one was three weeks late or two days
early.

Short forms are also accepted: fx for fixed, f+ or fp for fixed+, and ch
for chained.

# INTERVALS

The iter value can be written in any of these forms. They are tried in
this order:

Raw RRULE  
An RFC 5545 recurrence rule, such as "FREQ=WEEKLY;BYDAY=MO,TH".

Taskwarrior durations  
The same values accepted by recur, such as daily, weekdays, 3wk,
fortnight or 2year. See **task**(1).

ISO-8601 durations  
Such as P2W, P3D or PT12H. Months or years cannot be mixed with smaller
units, and weeks cannot be combined with any other unit.

Natural language  
English phrases, which are converted to an RRULE. See NATURAL LANGUAGE
INTERVALS below. Multi-word values must be quoted.

# NATURAL LANGUAGE INTERVALS

These are the supported forms, with examples:

Simple frequencies  
daily, weekly, monthly, yearly, fortnightly, quarterly, semiannually,
annually

Every N periods  
"every 3 weeks", "every other day", "every two weeks on friday"

Days of the week  
"every monday and wednesday", "every weekday", "weekends"

Days of the month  
"monthly on the 15th", "the 1st and 15th of every month"

Weekdays of the month  
"monthly on the third friday", "every last friday of the month"

Days of the year  
"every year on the 1st of june", "every year on the last monday of may"

A number of times  
"weekly on thursday three times"

Until a date  
"every day until March 6th, 2027"

Common abbreviations and misspellings are accepted, such as mon, tues,
jan, wkdy and wknd.

A number of times or an until date ends the series, the same as COUNT
and UNTIL in an RRULE. See ENDING A SERIES below.

For example:

        $ task add Standup iter:"every weekday" iter_type:fixed due:tomorrow
        $ task add Physio iter:"weekly on thursday three times" iter_type:fixed due:thursday

# DATES

When an iterative task is completed, its due, scheduled, wait and until
dates are all moved forward by the same amount of time, if they are set.
That amount is calculated for the highest priority date and the other
dates are moved forward by the same amount. This preserves the spacing
between them.

The priority is due &gt; scheduled &gt; wait.

The until date applies to a single task, not the series. To end a series
on a date, use an until phrase such as "every day until March 6th,
2027", or an RRULE with UNTIL.

# SERIES POSITION

Each task in a series has a read-only iter\_count attribute holding its
position in the series. The first task is 1 and each new task adds one.
An RRULE with COUNT ends the series once iter\_count reaches COUNT.

Duplicating an iterative task starts a new series at position 1.

# ENDING A SERIES

A series ends on its own when an RRULE runs out through COUNT or UNTIL.
The last task completes normally and no new task is created.

To end a series early, either:

Delete the current task  
Deleting does not create a new task, so the series ends.

Clear iter  
For example "task 1 modify iter:". The task becomes an ordinary pending
task that can be completed or deleted like any other. Its iter\_type and
iter\_count are removed, so adding iter again starts a new series at 1.
When confirmation is on, Taskwarrior asks before ending the series.

While a task is iterative, iter\_type cannot be removed, the last of
due, scheduled and wait cannot be removed, and its status cannot be
modified.

# REPORTS AND FILTERS

An iterative task appears in reports like a pending task. A future wait
date hides it like any other waiting task.

**status:iterative**  
Matches iterative tasks.

**+ITERATIVE**  
Matches iterative tasks.

**+PENDING**  
Matches pending and iterative tasks that are not waiting.

# SYNCHRONIZATION

If the same task is completed on two replicas before they sync, both
create the same next task, so the series does not end up with
duplicates.

The next date is computed in the local timezone of the replica that
completes the task.

# CREDITS & COPYRIGHTS

Copyright (C) 2026 A. Milner.

Taskwarrior is distributed under the MIT license. See
https://www.opensource.org/licenses/mit-license.php for more
information.

# SEE ALSO

**task(1),** **taskrc(5),** **task-color(5),** **task-sync(5)**

For more information regarding Taskwarrior, see the following:

The official site at  
&lt;https://taskwarrior.org&gt;

The official code repository at  
&lt;https://github.com/GothenburgBitFactory/taskwarrior&gt;

You can contact the project by emailing  
&lt;support@GothenburgBitFactory.org&gt;

# REPORTING BUGS

Bugs in Taskwarrior may be reported to the issue-tracker at  
&lt;https://github.com/GothenburgBitFactory/taskwarrior/issues&gt;
