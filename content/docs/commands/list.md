---
title: "Taskwarrior - List Report"
---

# list

The `list` report is a customizable report, which means that many aspects of the
report is configurable. You may override any of these aspects by modifyign the
Taskwarrior configuration. The definition of the `list` report can be shown
using the `show` command like this:

    $ task show report.list

    Config Variable         Value
    ----------------------- --------------------------------------------------------------
    report.list.columns     id,start.age,entry.age,depends.indicator,priority,project,
                            tags,recur.indicator,scheduled.countdown,due,until.age,
                            description.count,urgency
    report.list.description Most details of tasks
    report.list.filter      status:pending
    report.list.labels      ID,Active,Age,D,P,Project,Tags,R,Sch,Due,Until,Description,Urg
    report.list.sort        start-,due+,project+/,urgency-

These are five settings that define the report. The description and labels are
straightforward text.


 Columns

The columns are the task metadata, with optional format specifiers. For example,
the `description.count` column means the description column, but not the
annotations; instead show a count of the annotations, if any. You can see the
supported columns and formats using the [`columns`
command](/docs/commands/columns).


 Filter

The filter is automatically applied when you run this report. In this case the
filter shows only pending tasks, using `status:pending`. This can cause some
confusion, because if you were to run this command:

    $ task status:completed list

Then the filter `status:pending`, when combined with the command line filter
`status:completed` defines two non-intersecting sets and no result is shown.
This is because filter terms are assumed to be combined with `and` operators,
unless otherwise specified. Instead, to see completed tasks, you would need to
use a report that does not filter on status, and the `all` report does just
that, so you get the expected results by running:

    $ task status:completed all


 Sort

The sort setting is a list of columns, with an optional direction (ascending or
descending), and an optional break indicator. A sort column need not be one that
is included in the report.

There are four sort keys, which are applied in order, so the report is sorted by
start date, then due date, then project, then urgency. From the example, one the
third sort key is:

    project+/

Breaking this down, it means the `project` attribute is sorted in ascendign
collating sequence (hence the `+`), and the solidus (`/`) indicates that this is
a break column, which means a blank line is inserted before every unique value.


 Configuration

There is a configuration option, named `print.empty.columns`, which defaults to
`off`. This means that if a report has a column where no task shown has a value,
then do not display this empty column. This results in much narrower reports.

The `list` report has thirteen columns, but due to this setting, it is rare to
see more than six or seven columns in the output.


 See Also

-   [Reports](/docs/report)
-   [`columns`](/docs/commands/columns) command
