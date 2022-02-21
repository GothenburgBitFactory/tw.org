---
title: "Taskwarrior - Reports"
---

# Reports

Taskwarrior has three kinds of reports. There are built-in reports that cannot
be modified, such as `info` and `summary`. There are built-in reports which can
be redefined completely or eliminated, such as `list`, `next`. And finally there
are your own custom reports. To generate a list of \*all\* the reports, use the
`reports` command:

    $ task reports

    Report           Description
    active           Active tasks
    all              All tasks
    blocked          Blocked tasks
    blocking         Blocking tasks
    burndown.daily   Shows a graphical burndown chart, by day
    burndown.monthly Shows a graphical burndown chart, by month
    burndown.weekly  Shows a graphical burndown chart, by week
    completed        Completed tasks
    ghistory.annual  Shows a graphical report of task history, by year
    ghistory.monthly Shows a graphical report of task history, by month
    history.annual   Shows a report of task history, by year
    history.monthly  Shows a report of task history, by month
    information      Shows all data and metadata
    list             Most details of tasks
    long             All details of tasks
    ls               Few details of tasks
    minimal          Minimal details of tasks
    newest           Newest tasks
    next             Most urgent tasks
    oldest           Oldest tasks
    overdue          Overdue tasks
    projects         Shows all project names used
    ready            Most urgent actionable tasks
    recurring        Recurring Tasks
    summary          Shows a report of task status by project
    tags             Shows a list of all tags used
    unblocked        Unblocked tasks
    waiting          Waiting (hidden) tasks

    28 reports


## Built-In Static Reports

Typically a report consists of a table of data, with one row of data
corresponding to a single task, with the task attributes represented as columns.
But there are other reports which do not conform to this structure. Those are
the built-in static reports, and they are not modifiable, because they are
quirky and require custom code. These reports are:

    burndown.daily
    burndown.monthly
    burndown.weekly
    calendar
    colors
    export
    ghistory.annual
    ghistory.monthly
    history.annual
    history.monthly
    information
    summary
    timesheet

Each of these reports takes non-standard arguments, may or may not support
filters, and generates distinctive output.


## Built-In Modifiable Reports

These reports are standard format, using standard arguments, and are also
modifiable.

    active
    all
    blocked
    blocking
    completed
    list
    long
    ls
    minimal
    newest
    next
    oldest
    overdue
    ready
    recurring
    unblocked
    waiting

Suppose you wanted to remove a column from one of these reports, for example
removing `tags` from the `minimal` report. First look at the existing columns
and labels of the `minimal` report:

    $ task show report.minimal.labels

    Config Variable       Value
    --------------------- ---------------------------
    report.minimal.labels ID,Project,Tags,Description

    $ task show report.minimal.columns

    Config Variable        Value
    ---------------------- ---------------------------------------
    report.minimal.columns id,project,tags.count,description.count

Having determined what the current values are, simply override with the new
values:

    $ task config report.minimal.labels  'ID,Project,Description'
    ...
    $ task config report.minimal.columns 'id,project,description.count'

You can think of the built-in modifiable reports as a set of default custom
reports.


## Custom Reports

Defining a custom report is straightforward. You have control over the data
shown, the sort order and the column labels. A custom report is simply a set of
configuration values, and those values include:

-   description
-   columns
-   labels
-   sort
-   filter

Let us quickly create a custom report, which will be named `simple`. This report
will display the task ID, project name and description. We will need to gather
the five settings listed above.

The description is the easiest, and in this case the report will be described:

    Simple list of open tasks by project

This is just a descriptive label that will be used when the report is listed.
Next we need to specify the columns in the report, and the order in which those
are shown. Here the `_columns` helper command will show the columns available:

    $ task _columns
    depends
    description
    due
    end
    entry
    foo
    id
    imask
    mask
    modified
    parent
    priority
    project
    recur
    scheduled
    start
    status
    tags
    until
    urgency
    uuid
    wait

That represents all the data that Taskwarrior stores, and therefore all the data
that may be shown in a report. Our `simple` report will show id, project and
description, which are all in the list. This means our column list is simply:

    id,project,description

But there are also formats for each column, and the `columns` command shows
them, with examples. Here are the formats for our three columns:

    $ task columns id

    Columns Supported Formats Example
    ------- ----------------- ------------------------------------
    id      number*           123
    uuid    long*             f30cb9c3-3fc0-483f-bfb2-3bf134f00694
            short             f30cb9c3

This is easy, because there is only one `id` format.

    $ task columns project

    Columns Supported Formats Example
    ------- ----------------- -------------
    project full*             home.garden
            parent            home
            indented            home.garden

There are three formats for the `project` column, and the default, `full` is the
one we want.

    $ task columns description

    Columns     Supported Formats Example
    ----------- ----------------- -----------------------------------------------------------------------------
    description combined*         Move your clothes down on to the lower peg
                                    2014-02-08 Immediately before your lunch
                                    2014-02-08 If you are playing in the match this afternoon
                                    2014-02-08 Before you write your letter home
                                    2014-02-08 If you're not getting your hair cut
                desc              Move your clothes down on to the lower peg
                oneline           Move your clothes down on to the lower peg 2014-02-08 Immediately before ...
                                  this afternoon 2014-02-08 Before you write your letter home 2014-02-08 If ...
                truncated         Move your clothes do...
                count             Move your clothes down on to the lower peg [4]

There are five formats for description. This time we prefer the `count` format,
so our columns list is now:

    id,project,description.count

Labels are the column heading labels in the report. There are defaults, but we
wish to specify these like this:

    ID,Proj,Desc

Sorting is also straightforward, and we want the tasks sorted by project, and
then by entry, which is the creation date for a task. This illustrates that a
task attribute that is not visible can be used in the sort. The sort order is
then:

    project+/,entry+

The `+` means an ascending order, but we could have used `-` for descending. The
`/` solidus indicates that `project` is a break column, which means a blank line
is inserted between unique values, for a visual grouping effect. [2.4.0]{.label
.label-success}

Finally we need a filter, otherwise our report will just display all tasks,
which is rarely wanted. Here we wish to see only pending tasks, and that means
the filter is:

    status:pending

Now we have our report definition, so we just create the five configuration
entries like this:

    $ task config report.simple.description 'Simple list of open tasks by project'
    $ task config report.simple.columns     'id,project,description.count'
    $ task config report.simple.labels      'ID,Proj,Desc'
    $ task config report.simple.sort        'project+/,entry+'
    $ task config report.simple.filter      'status:pending'

Note the equivalent report directly from the config file would look like that:

    report.simple.description=Simple list of open tasks by project
    report.simple.columns=id,project,description.count
    report.simple.labels=ID,Proj,Desc
    report.simple.sort=project+\/,entry+
    report.simple.filter=status:pending

And it is finished. Run the report like this:

    $ task simple

    ID Proj Desc
    -- ---- -----------------
     1 Home Wash the windows
     3 Home Vacuum the floors

     2      Food shopping

Custom reports also show up in the help output.

    $ task help | grep simple
    task  sime                  Simple list of open tasks by project

I can inspect the configuration.

    $ task show report.simple

    Config Variable           Value
    ------------------------- ------------------------------------
    report.simple.columns     id,project,description.count
    report.simple.description Simple list of open tasks by project
    report.simple.filter      status:pending
    report.simple.labels      ID,Proj,Desc
    report.simple.sort        project+/,entry+

Now the report is fully configured, it joins the others and is used in the same
way.
