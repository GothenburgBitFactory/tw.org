---
title: 'Taskwarrior - task.1 for task-3.4.2'
viewport: 'width=device-width, initial-scale=1'
layout: single
---
# NAME

task - A command line todo manager.

# SYNOPSIS

**task &lt;filter&gt; &lt;command&gt; \[ &lt;mods&gt; | &lt;args&gt;
\]**  
**task --version**

# DESCRIPTION

Taskwarrior is a command line todo list manager. It maintains a list of
tasks that you want to do, allowing you to add/remove, and otherwise
manipulate them. Taskwarrior has a rich set of subcommands that allow
you to do various things with it.

At the core, Taskwarrior is a list processing program. You add text and
additional related parameters and redisplay the information in a nice
way. It turns into a todo list program when you add due dates and
recurrence. It turns into an organized todo list program when you add
priorities, tags (one word descriptors), project groups, etc.

# FILTER

The &lt;filter&gt; consists of zero or more search criteria that select
tasks. For example, to list all pending tasks belonging to the 'Home'
project:

      task project:Home list

You can specify multiple filter terms, each of which further restricts
the result:

      task project:Home +weekend garden list

This example applies three filters: the 'Home' project, the 'weekend'
tag, and the description or annotations must contain the character
sequence 'garden'. In this example, 'garden' is translated internally
to:

      description.contains:garden

as a convenient shortcut. The 'contains' here is an attribute modifier,
which is used to exert more control over the filter than simply absence
or presence. See the section 'ATTRIBUTE MODIFIERS' below for a complete
list of modifiers.

Note that a filter may have zero terms, which means that all tasks apply
to the command. This can be dangerous, and this special case is
confirmed, and cannot be overridden. For example, this command:

      task modify +work
      This command has no filter, and will modify all tasks.  Are you sure? (yes/no)

will add the 'work' tag to all tasks, but only after confirmation.

More filter examples:

      task                                      <command> <mods>
      task 28                                   <command> <mods>
      task +weekend                             <command> <mods>
      task +bills due.by:eom                    <command> <mods>
      task project:Home due.before:today        <command> <mods>
      task ebeeab00-ccf8-464b-8b58-f7f2d606edfb <command> <mods>

By default filter elements are combined with an implicit 'and' operator,
but 'or' and 'xor' may also be used, provided parentheses are included:

      task '( /[Cc]at|[Dd]og/ or /[0-9]+/ )'      <command> <mods>

The parentheses isolate the logical term from any default command filter
or implicit report filter which would be combined with an implicit
'and'.

A filter may target specific tasks using ID or UUID numbers. To specify
multiple tasks use one of these forms (space-separated list of ID
numbers, UUID numbers or ID ranges):

      task 1 2 3                                    delete
      task 1-3                                      info
      task 1 2-5 19                                 modify pri:H
      task 4-7 ebeeab00-ccf8-464b-8b58-f7f2d606edfb info

Note that it may be necessary to properly escape special characters as
well as quotes in order to avoid their special meanings in the shell.
See also the section 'SPECIFYING DESCRIPTIONS' for more information.

# MODIFICATIONS

The &lt;mods&gt; consist of zero or more changes to apply to the
selected tasks, such as:

      task <filter> <command> project:Home
      task <filter> <command> +weekend +garden due:tomorrow
      task <filter> <command> Description/annotation text
      task <filter> <command> /from/to/     <- replace first match
      task <filter> <command> /from/to/g    <- replace all matches

# SUBCOMMANDS

Taskwarrior supports different kinds of commands. There are read
commands, write commands, miscellaneous commands and script helper
commands. Read commands do not allow modification of tasks. Write
commands can alter almost any aspect of a task. Script helper commands
are provided to help you write add-on scripts, for example, shell
completion (only minimal output is generated, as with verbose=nothing).
Those commands which are explicitly affected by the *context* are
denoted as such.

# READ SUBCOMMANDS

Reports are read subcommands. There are several reports currently
predefined in Taskwarrior. The output and sort behavior of these reports
can be configured in the configuration file. See also the man page
taskrc(5). There are also other read subcommands that are not reports.

**task --version**  
This is the only conventional command line argument that Taskwarrior
supports, and is intended for add-on scripts to verify the version
number of an installed Taskwarrior without invoking the mechanisms that
create default files.

**task &lt;filter&gt;**  
With no command specified, the default command is run, and the filter
applied.

**task &lt;filter&gt; active**  
Shows all tasks matching the filter that are started but not completed.

**task &lt;filter&gt; all**  
Shows all tasks matching the filter, including parents of recurring
tasks.

**task &lt;filter&gt; blocked**  
Shows all tasks matching the filter, that are currently blocked by other
tasks.

**task &lt;filter&gt; blocking**  
Shows all tasks matching the filter, that block other tasks.

**task &lt;filter&gt; burndown.daily**  
Shows a graphical burndown chart, by day. Is affected by the context.

**task &lt;filter&gt; burndown.weekly**  
Shows a graphical burndown chart, by week. Note that 'burndown' is an
alias to the 'burndown.weekly' report. Is affected by the context.

**task &lt;filter&gt; burndown.monthly**  
Shows a graphical burndown chart, by month. Is affected by the context.

**task calendar \[due|&lt;month&gt; &lt;year&gt;|&lt;year&gt;\] \[y\]**  
Shows a monthly calendar with due tasks marked. Shows one horizontal
line of months. If the 'y' argument is provided, will show at least one
complete year. If a year is provided, such as '2015', then that full
year is shown. If both a month and a year are specified ('6 2015') then
the months displayed begin at the specified month and year. If the 'due'
argument is provided, will show the starting month of the earliest due
task.

**task colors \[&lt;sample&gt; | legend\]**  
Displays all possible colors, a named sample, or a legend containing all
currently defined colors.

**task columns \[&lt;substring&gt;\]**  
Displays all supported columns and formatting styles. Useful when
creating custom reports. If a substring is provided, only matching
column names are shown.

**task commands**  
Shows all the supported commands, with some details of each.

**task &lt;filter&gt; completed**  
Shows all tasks matching the filter that are completed.

**task &lt;filter&gt; count**  
Displays only a count of tasks matching the filter. Is affected by the
context.

**task &lt;filter&gt; export**  
Exports all tasks in the JSON format. Redirect the output to a file, if
you wish to save it, or pipe it to another command or script to convert
it to another format. You'll find these example scripts online at
&lt;https://taskwarrior.org/tools/&gt;:

<!-- -->

      export-csv.pl
      export-sql.py
      export-xml.py
      export-yaml.pl
      export-html.pl
      export-tsv.pl
      export-xml.rb
      export-ical.pl
      export-xml.pl
      export-yad.pl

**task &lt;filter&gt; ghistory.annual**  
Shows a graphical report of task status by year.

**task &lt;filter&gt; ghistory.monthly**  
Shows a graphical report of task status by month. Note that 'ghistory'
is an alias to 'ghistory.monthly'.

**task &lt;filter&gt; ghistory.weekly**  
Shows a graphical report of task status by week.

**task &lt;filter&gt; ghistory.daily**  
Shows a graphical report of task status by day.

**task help**  
Shows the long usage text.

**task &lt;filter&gt; history.annual**  
Shows a report of task history by year. Is affected by the context.

**task &lt;filter&gt; history.monthly**  
Shows a report of task history by month. Note that 'history' is an alias
to 'history.monthly'. Is affected by the context.

**task &lt;filter&gt; history.weekly**  
Shows a report of task history by week. Is affected by the context.

**task &lt;filter&gt; history.daily**  
Shows a report of task history by day. Is affected by the context.

**task &lt;filter&gt; ids**  
Applies the filter then extracts only the task IDs and presents them as
a space-separated list. This is useful as input to a task command, to
achieve this:

<!-- -->

      task $(task project:Home ids) modify priority:H

This example first gets the IDs for the project:Home filter, then sets
the priority to H for each of those tasks. This can also be achieved
directly:

      task project:Home modify priority:H

This command is mainly of use to external scripts.

**task &lt;filter&gt; uuids**  
Applies the filter on all tasks (even deleted and completed tasks) then
extracts only the task UUIDs and presents them as a space-separated
list. This is useful as input to a task command, to achieve this:

<!-- -->

      task $(task project:Home status:completed uuids) modify status:pending

This example first gets the UUIDs for the project:Home and
status:completed filters, then makes each of those tasks pending again.

This command is mainly of use to external scripts.

**task udas**  
Shows a list of UDAs that are defined, including their name, type, label
and allowed values. Also shows UDA usage and any orphan UDAs.

**task &lt;filter&gt; information**  
Shows all data and metadata for the specified tasks. This is the only
means of displaying all aspects of a given task, including the change
history.

**task &lt;filter&gt; list**  
Provides a standard listing of tasks matching the filter.

**task &lt;filter&gt; long**  
Provides the most detailed listing of tasks matching the filter.

**task &lt;filter&gt; ls**  
Provides a short listing of tasks matching the filter.

**task &lt;filter&gt; minimal**  
Provides a minimal listing of tasks matching the filter.

**task &lt;filter&gt; newest**  
Shows the newest tasks matching the filter.

**task &lt;filter&gt; next**  
Shows a page of the most urgent tasks, sorted by urgency, which is a
calculated value.

**task &lt;filter&gt; ready**  
Shows a page of the most urgent ready tasks, sorted by urgency with
started tasks first. A ready task is one that is either unscheduled, or
has a scheduled date that is past and is not waiting.

**task &lt;filter&gt; oldest**  
Shows the oldest tasks matching the filter.

**task &lt;filter&gt; overdue**  
Shows all incomplete tasks matching the filter that are beyond their due
date.

**task &lt;filter&gt; projects**  
Lists all project names that are currently used by pending tasks, and
the number of tasks for each. Is affected by the context.

**task &lt;filter&gt; recurring**  
Shows all recurring tasks matching the filter.

**task &lt;filter&gt; unblocked**  
Shows all tasks that are not currently blocked by other tasks, matching
the filter.

**task &lt;filter&gt; waiting**  
Shows all waiting tasks matching the filter.

# WRITE SUBCOMMANDS

**task add &lt;mods&gt;**  
Adds a new pending task to the task list. It is affected by the
currently set context.

**task &lt;filter&gt; annotate &lt;mods&gt;**  
Adds an annotation to an existing task.

**task &lt;filter&gt; append &lt;mods&gt;**  
Appends description text to an existing task.

**task &lt;filter&gt; delete &lt;mods&gt;**  
Deletes the specified task from task list. Is affected by the context.

**task &lt;filter&gt; denotate &lt;mods&gt;**  
Deletes an annotation for the specified task. If the provided
description matches an annotation exactly, the corresponding annotation
is deleted. If the provided description matches annotations partly, the
first partly matched annotation is deleted. Is affected by the context.

**task &lt;filter&gt; done &lt;mods&gt;**  
Marks the specified task as done. Is affected by the context.

**task &lt;filter&gt; duplicate &lt;mods&gt;**  
Duplicates the specified task and allows modifications. Is affected by
the context.

**task &lt;filter&gt; edit**  
Launches a text editor to let you modify all aspects of a task directly.
In general, this is not the recommended method of modifying tasks, but
is provided for exceptional circumstances. Use carefully. Is affected by
the context.

**task import \[&lt;file&gt; ...\]**  
Imports tasks in the JSON format. Can be used to add new tasks, or
update existing ones. Tasks are identified by their UUID.

If no file or "-" is specified, import tasks from STDIN.

Setting rc.recurrence.confirmation to an appropriate level is
recommended if import is to be used in automated workflows. See
taskrc(5).

For importing other file formats, the standard task release comes with a
few example scripts, such as:

      import-todo.sh.pl
      import-yaml.pl

**task import-v2**  
Imports tasks from the Taskwarrior v2.x format. This is used when
upgrading from version 2.x to version 3.x.

**task log &lt;mods&gt;**  
Adds a new task that is already completed, to the task list. It is
affected by the currently set context.

**task &lt;filter&gt; modify &lt;mods&gt;**  
Modifies the existing task with provided information.

**task &lt;filter&gt; prepend &lt;mods&gt;**  
Prepends description text to an existing task. Is affected by the
context.

**task &lt;filter&gt; purge**  
Permanently removes the specified tasks from the data files. Only tasks
that are already deleted can be purged. This command has a local-only
effect and changes introduced by it are not synced. Is affected by the
context.

Warning: causes permanent, non-revertible loss of data.

**task &lt;filter&gt; start &lt;mods&gt;**  
Marks the specified tasks as started. Is affected by the context.

**task &lt;filter&gt; stop &lt;mods&gt;**  
Removes the *start* time from the specified task. Is affected by the
context.

# MISCELLANEOUS SUBCOMMANDS

Miscellaneous subcommands either accept no command line arguments, or
accept non-standard arguments.

**task calc &lt;expression&gt;**  
Evaluates an algebraic expression. Can be used to test how Taskwarrior
parses and evaluates the expression given on the command line.

Examples:

        task calc 1 + 1
        2

        task calc now + 8d
        2015-03-26T18:06:57

        task calc eom
        2015-03-31T23:59:59

**task config \[&lt;name&gt; \[&lt;value&gt; | ''\]\]**  
Add, modify and remove settings directly in the Taskwarrior
configuration. This command either modifies the 'name' setting with a
new value of 'value', or adds a new entry that is equivalent to
'name=value':

<!-- -->

        task config name value

This command sets a blank value. This has the effect of suppressing any
default value:

        task config name ''

Finally, this command removes any 'name=...' entry from the .taskrc
file:

        task config name

**task context &lt;name&gt;**  
Sets the currently active context. See the CONTEXT section.

Example:

        task context work

**task context delete &lt;name&gt;**  
Deletes the context with the name &lt;name&gt;. If the context being
deleted is currently set as active, it will be unset.

Example:

        task context delete work

**task context define &lt;name&gt; &lt;filter&gt;**  
Defines a new context with name &lt;name&gt; and definition
&lt;filter&gt;. This command does not affect the currently set context,
just adds a new context definition.

Examples:

        task context define work project:Work
        task context define home project:Home or +home
        task context define superurgent due:today and +urgent

**task context list**  
Outputs a list of available contexts along with their definitions.

**task context none**  
Clears the currently active context, if any was set.

**task context show**  
Shows the currently active context, along with its definition.

**task diagnostics**  
Shows diagnostic information, of the kind needed when reporting a
problem. When you report a bug, it is likely that the platform, version,
and environment are important. Running this command generates a summary
of similar information that should accompany a bug report.

It includes compiler, library and software information. It does not
include any personal information, other than the location of your task
data.

This command also performs a diagnostic scan of your data looking for
common problems, such as duplicate UUIDs.

**task execute &lt;external command&gt;**  
Executes the specified command. Not useful by itself, but when used in
conjunction with aliases and extensions can provide seamless
integration.

**task logo**  
Displays the Taskwarrior logo.

**task news**  
Guides the user through important release notes anytime a new version of
Taskwarrior is installed. It provides personalized feedback, deprecation
warnings and usage advice, where applicable.

**task reports**  
Lists all supported reports. This includes the built-in reports, and any
custom reports you have defined.

**task show \[all | &lt;substring&gt;\]**  
Shows all the current settings. If a substring is specified just the
settings containing that substring will be displayed.

**task &lt;filter&gt; stats**  
Shows statistics of the tasks defined by the filter. Is affected by the
context.

**task &lt;filter&gt; summary**  
Shows a report of aggregated task status by project. Is affected by the
context.

**task sync**  
The sync command synchronizes data with the Taskserver, if configured.

Note: If you use multiple sync clients, make sure this setting (which is
the default) is on your primary client:

      recurrence=on

and on all other clients (this is not the default):

      recurrence=off

This is a workaround to avoid a recurrence bug that duplicates recurring
tasks.

**task &lt;filter&gt; tags**  
Show a list of all tags used. Any special tags used are highlighted.
Note that virtual tags are not listed - they don't really exist, and are
just a convenient notation for other task metadata. It is an error to
attempt to add or remove a virtual tag. Is affected by the context.

**task timesheet \[&lt;weeks&gt;\]**  
Shows a weekly report of tasks completed and started.

**task undo**  
Reverts the most recent action. Obeys the confirmation setting.

**task version**  
Shows the Taskwarrior version number.

# HELPER SUBCOMMANDS

**task \_aliases**  
Generates a list of all aliases, for autocompletion purposes.

**task \_columns**  
Displays only a list of supported columns.

**task \_commands**  
Generates a list of all commands, for autocompletion purposes.

**task \_config**  
Lists all supported configuration variables, for completion purposes.

**task \_context**  
Lists all available context variables, for completion purposes.

**task &lt;filter&gt; \_ids**  
Shows only the IDs of matching tasks, in the form of a list. Deprecated
in favor of \_unique.

**task \_show**  
Shows the combined defaults and overrides of the configuration settings,
for use by third-party applications.

**task &lt;filter&gt; \_unique &lt;attribute&gt;**  
Reports a unique set of attribute values. For example, to see all the
active projects:

<!-- -->

      task +PENDING _unique project

**task &lt;filter&gt; \_uuids**  
Shows only the UUIDs of matching tasks among all tasks (even deleted and
completed tasks), in the form of a list. Deprecated in favor of
\_unique.

**task \_udas**  
Shows only defined UDA names, in the form of a list.

**task &lt;filter&gt; \_projects**  
Shows only a list of all project names used. Deprecated in favor of
\_unique.

**task &lt;filter&gt; \_tags**  
Shows only a list of all tags used, for autocompletion purposes.
Deprecated in favor of \_unique.

**task &lt;filter&gt; \_urgency**  
Displays the urgency measure of a task.

**task \_version**  
Shows only the Taskwarrior version number.

**task \_zshcommands**  
Generates a list of all commands, for zsh autocompletion purposes.

**task &lt;filter&gt; \_zshids**  
Shows the IDs and descriptions of matching tasks.

**task &lt;filter&gt; \_zshuuids**  
Shows the UUIDs and descriptions of matching tasks.

**task \_get &lt;DOM&gt; \[&lt;DOM&gt; ...\]**  
Accesses and displays the DOM reference(s). Used to extract individual
values from tasks, or the system. Supported DOM references are:

<!-- -->

      rc.<name>
      tw.syncneeded
      tw.program
      tw.args
      tw.width
      tw.height
      tw.version
      context.program    (Deprecated in 2.6.0)
      context.args       (Deprecated in 2.6.0)
      context.width      (Deprecated in 2.6.0)
      context.height     (Deprecated in 2.6.0)
      system.version
      system.os
      <id>.<attribute>
      <uuid>.<attribute>

Note that the 'rc.&lt;name&gt;' reference may need to be escaped using
'--' to prevent the reference from being interpreted as an override.

Note that if the DOM reference is not valid, or the reference evaluates
to a missing value, the command exits with 1.

Additionally, some components of the attributes of particular types may
be extracted by DOM references.

      $ task _get 2.due.year
      2015

For a full list of supported attribute-specific DOM references, consult
the online documentation at:
&lt;https://taskwarrior.org/docs/dom.html&gt;

# ATTRIBUTES AND METADATA

**ID**  
Tasks can be specified uniquely by IDs, which are the indexes of the
"working set" of tasks (mostly pending and recurrent tasks). The ID of a
task may therefore change, but only when a report that displays IDs is
run. When modifying tasks, it is safe to rely on the last displayed ID.
Always run a report to check you have the right ID for a task. IDs can
be given to task as a sequence, for example:

<!-- -->

    task 1,4-10,19 delete

**+tag|-tag**  
Tags are arbitrary words associated with a task. Use + to add a tag
and - to remove a tag from a task. A task can have any quantity of tags.

Certain tags (called 'special tags'), can be used to affect the way
tasks are treated. For example, if a task has the special tag 'nocolor',
then it is exempt from all color rules. The supported special tags are:

        +nocolor     Disable color rules processing for this task
        +nonag       Completion of this task suppresses all nag messages
        +nocal       This task will not appear on the calendar
        +next        Elevates task so it appears on 'next' report

There are also virtual tags, which represent task metadata in tag form.
These tags do not exist, but can be used to filter tasks. The supported
virtual tags are:

        ACTIVE       Matches if the task is started
        ANNOTATED    Matches if the task has annotations
        BLOCKED      Matches if the task is blocked
        BLOCKING     Matches if the task is blocking
        CHILD        Matches if the task has a parent (deprecated in 2.6.0)
        COMPLETED    Matches if the task has completed status
        DELETED      Matches if the task has deleted status
        DUE          Matches if the task is due within the next 7 days (See rc.due)
        INSTANCE     Matches if the task is a recurrent instance
        LATEST       Matches if the task is the newest added task
        MONTH        Matches if the task is due this month
        ORPHAN       Matches if the task has any orphaned UDA values
        OVERDUE      Matches if the task is overdue
        PARENT       Matches if the task is a parent (deprecated in 2.6.0)
        PENDING      Matches if the task has pending status
        PRIORITY     Matches if the task has a priority
        PROJECT      Matches if the task has a project
        QUARTER      Matches if the task is due this quarter
        READY        Matches if the task is actionable
        SCHEDULED    Matches if the task is scheduled
        TAGGED       Matches if the task has tags
        TEMPLATE     Matches if the task is a recurrence template
        TODAY        Matches if the task is due today
        TOMORROW     Matches if the task is due sometime tomorrow
        UDA          Matches if the task has any UDA values
        UNBLOCKED    Matches if the task is not blocked
        UNTIL        Matches if the task expires
        WAITING      Matches if the task is waiting
        WEEK         Matches if the task is due this week
        YEAR         Matches if the task is due this year
        YESTERDAY    Matches if the task was due sometime yesterday

You can use +BLOCKED to filter blocked tasks, or -BLOCKED for unblocked
tasks. Similarly, -BLOCKED is equivalent to +UNBLOCKED. It is an error
to attempt to add or remove a virtual tag.

**project:&lt;project-name&gt;**  
Specifies the project to which a task is related to.

**status:pending|deleted|completed|waiting|recurring**  
Specifies the state of the task.

**priority:H|M|L or priority:**  
Specifies High, Medium, Low and no priority for a task.

**due:&lt;due-date&gt;**  
Specifies the due-date of a task.

**recur:&lt;frequency&gt;**  
Specifies the frequency of a recurrence of a task.

**scheduled:&lt;ready-date&gt;**  
Specifies the date after which a task can be accomplished.

**until:&lt;expiration date of task&gt;**  
Specifies the expiration date of a task, after which it will be deleted.

**limit:&lt;number-of-rows&gt;**  
Specifies the desired number of tasks a report should show, if a
positive integer is given. The value 'page' may also be used, and will
limit the report output to as many lines of text as will fit on screen.
This defaults to 25 lines.

**wait:&lt;wait-date&gt;**  
When a task is given a wait date, it is hidden from most built-in
reports, which exclude +WAITING. When the date is in the past, the task
is not considered +WAITING, and again becomes visible. Note that, for
compatibilty, such tasks are shown as having status "waiting", but this
will change in a future release.

**depends:&lt;id1,id2 ...&gt;**  
Declares this task to be dependent on id1 and id2. This means that the
tasks id1 and id2 should be completed before this task. Consequently,
this task will then show up on the 'blocked' report. It accepts a
comma-separated list of ID numbers, UUID numbers and ID ranges. When
prefixing any element of this list by '-', the specified tasks are
removed from the dependency list.

**entry:&lt;entry-date&gt;**  
For report purposes, specifies the date that a task was created.

**modified:&lt;modified-date&gt;**  
Specifies the most recent modification date.

# ATTRIBUTE MODIFIERS

Attribute modifiers improve filters. Supported modifiers are:

> **before (synonyms under, below)**  
> **after (synonyms over, above)**  
> **by**  
> **none**  
> **any**  
> **is (synonym equals)**  
> **isnt (synonym not)**  
> **has (synonym contains)**  
> **hasnt**  
> **startswith (synonym left)**  
> **endswith (synonym right)**  
> **word**  
> **noword**

They can be applied to all regular attributes (see above) and the
following calculated attributes:

> **urgency** (or short **urg**)

For example:

        task due.before:eom priority.not:L list

The *before* modifier is used to compare values, preserving semantics,
so project.before:B list all projects that begin with 'A'. Priority 'L'
is before 'M', and due:2011-01-01 is before due:2011-01-02. The synonyms
'under' and 'below' are included to allow filters that read more
naturally.

The *after* modifier is the inverse of the *before* modifier.

The *by* modifier is the same as 'before', except it also includes the
moment in question. For example:

        task add test due:eoy

will be found when using the inclusive filter 'by':

        task due.by:eoy

but not when the non-inclusive filter 'before' is used:

        task due.before:eoy

this applies equally to other named dates such as 'eom', 'eod', etc; the
modifier compares using '&lt;=' rather than '&lt;' like 'before' does.

The *none* modifier requires that the attribute does not have a value.
For example:

        task priority:      list
        task priority.none: list

are equivalent, and list tasks that do not have a priority.

The *any* modifier requires that the attribute has a value, but any
value will suffice.

The *is* modifier requires an exact match with the value.

The *isnt* modifier is the inverse of the *is* modifier.

The *has* modifier is used to search for a substring, such as:

        task description.has:foo list
        task foo                 list

These are equivalent and will return any task that has 'foo' in the
description or annotations.

The *hasnt* modifier is the inverse of the *has* modifier.

The *startswith* modifier matches against the left, or beginning of an
attribute, such that:

        task project.startswith:H list
        task project:H            list

are equivalent and will match any project starting with 'H'. Matching
all projects not starting with 'H' is done with:

        task project.not:H         list

The *endswith* modifier matches against the right, or end of an
attribute.

The *word* modifier requires that the attribute contain the whole word
specified, such that this:

        task description.word:foo list

Will match the description 'foo bar baz' but does not match 'dog food'.

The *noword* modifier is the inverse of the *word* modifier.

# EXPRESSIONS AND OPERATORS

You can use the following operators in filter expressions:

      and  or  xor  !               Logical operators
      <  <=  =  ==  !=  !==  >=  >  Relational operators
      (  )                          Precedence

For example:

      task due.before:eom priority.not:L list
      task '( due < eom or priority != L )' list
      task '! ( project:Home or project:Garden )' list

The *=* operator tests for approximate equality. Dates compare equal if
they are on the same day (hour and minutes are ignored). Strings compare
equal if the left operand starts with the right operand. The *==*
operator tests for exact equality. The *!=* and *!==* operators are the
negation of *=* and *==* respectively. The negation operator is *!*.

Note that the parentheses are required when using a logical operator
other than the 'and' operator. The reason is that some reports contain
filters that must be combined with the command line. Consider this
example:

      task project:Home or project:Garden list

While this looks correct, it is not. The 'list' report contains a filter
of:

      task show report.list.filter

      Config Variable    Value
      -----------------  --------------
      report.list.filter status:pending

Which means the example is really:

      task status:pending project:Home or project:Garden list

The implied 'and' operator makes it:

      task status:pending and project:Home or project:Garden list

This is a precedence error - the 'and' and 'or' need to be grouped using
parentheses, like this:

      task status:pending and ( project:Home or project:Garden ) list

The original example therefore must be entered as:

      task '( project:Home or project:Garden )' list

This includes quotes to escape the parentheses, so that the shell
doesn't interpret them and hide them from Taskwarrior.

There is redundancy between operators, attribute modifiers and other
syntactic sugar. For example, the following are all equivalent:

      task foo                      list
      task /foo/                    list
      task description.contains:foo list
      task description.has:foo      list
      task 'description ~ foo'      list

# SPECIFYING DATES AND FREQUENCIES

## DATES

Taskwarrior reads dates from the command line and displays dates in the
reports. The expected and desired date format is determined by the
configuration variable *dateformat*

> Exact specification  
>
> <!-- -->
>
>       task ... due:7/14/2008
>
> ISO-8601  
>
> <!-- -->
>
>       task ... due:2013-03-14T22:30:00Z
>
> Relative wording  
>
> <!-- -->
>
>       task ... due:now
>       task ... due:today
>       task ... due:yesterday
>       task ... due:tomorrow
>
> Day number with ordinal  
>
> <!-- -->
>
>       task ... due:23rd
>       task ... due:3wks
>       task ... due:1day
>       task ... due:9hrs
>
> Start of next (work) week (Monday), calendar week (Sunday or Monday), month, quarter and year  
>
> <!-- -->
>
>       task ... due:sow
>       task ... due:soww
>       task ... due:socw
>       task ... due:som
>       task ... due:soq
>       task ... due:soy
>
> End of current (work) week (Friday), calendar week (Saturday or Sunday), month, quarter and year  
>
> <!-- -->
>
>       task ... due:eow
>       task ... due:eoww
>       task ... due:eocw
>       task ... due:eom
>       task ... due:eoq
>       task ... due:eoy
>
> At some point or later  
>
> <!-- -->
>
>       task ... wait:later
>       task ... wait:someday
>
> This sets the wait date to 12/30/9999.
>
> Next occurring weekday  
>
> <!-- -->
>
>       task ... due:fri
>
> Predictable holidays  
>
> <!-- -->
>
>       task ... due:goodfriday
>       task ... due:easter
>       task ... due:eastermonday
>       task ... due:ascension
>       task ... due:pentecost
>       task ... due:midsommar
>       task ... due:midsommarafton
>       task ... due:juhannus

## FREQUENCIES

Recurrence periods. Taskwarrior supports several ways of specifying the
*frequency* of recurring tasks. Note that frequencies can be
abbreviated.

> daily, day, 1day, 1days, 2day, 2days, 1da, 2da, ...  
> Every day or a number of days.
>
> weekdays  
> Mondays, Tuesdays, Wednesdays, Thursdays, Fridays and skipping weekend
> days.
>
> weekly, 1wk, 2wks, ...  
> Every week or a number of weeks.
>
> biweekly, fortnight  
> Every two weeks.
>
> monthly, month, 1mo, 2mo, ...  
> Every month.
>
> quarterly, 1qtr, 2qtrs, ...  
> Every three months, a quarter, or a number of quarters.
>
> semiannual  
> Every six months.
>
> annual, yearly, 1yr, 2yrs, ...  
> Every year or a number of years.
>
> biannual, biyearly, 2yr  
> Every two years.

# CONTEXT

Context is a user-defined query, which is automatically applied to all
commands that filter the task list and to commands that create new tasks
(add, log). For example, any report command will have its result
affected by the current active context. Here is a list of the commands
that are affected:

        add
        burndown
        count
        delete
        denotate
        done
        duplicate
        edit
        history
        log
        prepend
        projects
        purge
        start
        stats
        stop
        summary
        tags

All other commands are NOT affected by the context.

        $ task list
        ID Age Project  Description        Urg
        1  2d  Sport    Run 5 miles        1.42
        2  1d  Home     Clean the dishes   1.14

        $ task context home
        Context 'home' set. Use 'task context none' to remove.

        $ task list
        ID Age Project  Description        Urg
        2  1d  Home     Clean the dishes   1.14
        Context 'home' set. Use 'task context none' to remove.

Task list got automatically filtered for project:Home.

        $ task add Vaccuum the carpet
        Created task 3.
        Context 'home' set. Use 'task context none' to remove.

        $ task list
        ID Age Project  Description         Urg
        2  1d  Home     Clean the dishes    1.14
        3  5s  Home     Vaccuum the carpet  1.14
        Context 'home' set. Use 'task context none' to remove.

Note that the newly added task "Vaccuum the carpet" has "project:Home"
set automatically.

As seen in the example above, context is applied by specifying its name
to the "context" command. To change the currently applied context, just
pass the new context's name to the 'context' command.

To unset any context, use the 'none' subcommand.

        $ task context none
        Context unset.

        $ task list
        ID Age Project  Description         Urg
        1  2d  Sport    Run 5 miles         1.42
        2  1d  Home     Clean the dishes    1.14
        3  7s  Home     Vaccuum the carpet  1.14

Context can be defined using the 'define' subcommand, specifying both
the name of the new context, and it's assigned filter.

        $ task context define home project:Home
        Are you sure you want to add 'context.home.read' with a value of 'project:Home'? (yes/no) yes
        Are you sure you want to add 'context.home.write' with a value of 'project:Home'? (yes/no) yes
        Context 'home' successfully defined.

Note that you were separately prompted to set the 'read' and 'write'
context. This allows you to specify contexts that only work for
reporting commands or only for commands that create tasks.

To remove the definition, use the 'delete' subcommand.

        $ task context delete home
        Are you sure you want to remove 'context.home.read'? (yes/no) yes
        Are you sure you want to remove 'context.home.write'? (yes/no) yes
        Context 'home' deleted.

To check what is the currently active context, use the 'show'
subcommand.

        $ task context show
        Context 'home' with

        * read filter: '+home'
        * write filter: '+home'

        is currently applied.

Contexts can store arbitrarily complex filters.

        $ task context define family project:Family or +paul or +nancy
        Are you sure you want to add 'context.family.read' with a value of 'project:Family or +paul or +nancy'? (yes/no) yes
        Are you sure you want to add 'context.family.write' with a value of 'project:Family or +paul or +nancy'? (yes/no) no
        Context 'family' successfully defined.

Contexts are permanent, and the currently set context name is stored in
the "context" configuration variable. The context definition is stored
in the "context.&lt;name&gt;.read" configuration variable (for reporting
commands) and "context.&lt;name&gt;.write" configuration variable (for
task additions, i.e. task add/log).

Note that in the example above, the user decided not to define the
complex filter as writeable context. The reason for this decision is
that the complex filter in the example does not directly translate to a
modification. In fact, if such a context is used as a writeable context,
the following happens:

        $ task add Call Paul
        Created task 4.
        Context 'family' set. Use 'task context none' to remove.

        $ task 4 list
        ID Age  Project Tags       Description      Urg
         4 9min Family  nancy paul or or Call Paul    0

There is no clear mapping between the complex filter used and the
modifications (should only the project be set? only the tags? both?).
Additionally note the 'or' operators being present in the description.
Taskwarrior does not try to guess the user intention here, and instead,
the user is expected to set the "context.&lt;name&gt;.write" variable to
make their intention explicit, for example:

        $ task config context.family.write project:Family
        Are you sure you want to change the value of 'context.family.write' from 'project:Family or +paul or +nancy' to 'project:Family'? (yes/no) yes
        Config file /home/tbabej/.config/task/taskrc modified.

        $ task context
        Name   Type  Definition                        Active
        family read  project:Family or +paul or +nancy yes
               write project:Family                    yes
        home   read  +home                             no
               write +home                             no

Note how read and write contexts differ for context "family", while for
context "home" they stay the same.

In addition, every configuration parameter can be overridden for the
current context, by specifying
context.&lt;name&gt;.rc.&lt;parameter&gt;. For example, if the default
command for the family context should be displaying the family\_report:

        $ task config context.family.rc.default.command family_report

# COMMAND ABBREVIATION

All Taskwarrior commands may be abbreviated as long as a unique prefix
is used, for example:

      $ task li

is an unambiguous abbreviation for

      $ task list

but

      $ task l

could be list, ls or long.

Note that you can restrict the minimum abbreviation size using the
configuration setting:

      abbreviation.minimum=3

# SPECIFYING DESCRIPTIONS

Some task descriptions need to be escaped because of the shell and the
special meaning of some characters to the shell. This can be done either
by adding quotes to the description or escaping the special character:

      $ task add "quoted ' quote"
      $ task add escaped \' quote

The argument -- (a double dash) tells Taskwarrior to treat all other
args as description:

      $ task add -- project:Home needs scheduling

In other situations, the shell sees spaces and breaks up arguments. For
example, this command:

      $ task 123 modify /from this/to that/

is broken up into several arguments, which is corrected with quotes:

      $ task 123 modify "/from this/to that/"

It is sometimes necessary to force the shell to pass quotes to
Taskwarrior intact, so you can use:

      $ task add project:\'Three Word Project\' description

Taskwarrior supports Unicode using only the UTF8 encoding.

# CONFIGURATION FILE AND OVERRIDE OPTIONS

Taskwarrior stores its configuration in a file in the user's home
directory: ~/.taskrc. The default configuration file can be overridden
with:

**task rc:&lt;path-to-alternate-file&gt; ...**  
Specifies an alternate configuration file with highest priority.

**TASKRC=&lt;path-to-alternate-file&gt; task ..**  
The environment variable specifies an alternate configuration file to
use.

**XDG\_CONFIG\_HOME=&lt;path-to-alternate-config-home&gt; task ..**  
The environment variable specifies an alternate configuration file to
use.

**task rc.&lt;name&gt;:&lt;value&gt; ...**  
**task rc.&lt;name&gt;=&lt;value&gt; ...** Specifies individual
configuration file overrides.

**TASKDATA=/tmp/.task task ...**  
The environment variable overrides the default, and the 'data.location'
configuration setting of the task data directory.

# MORE EXAMPLES

For examples please see the online documentation starting at

> &lt;https://taskwarrior.org/docs&gt;

Note that the online documentation can be more detailed and more current
than this man page.

# FILES

~/.taskrc  
User configuration file - see also taskrc(5). Note that this can be
overridden on the command line or by the TASKRC environment variable.
Also, if *~/.taskrc* doesn't exist and XDG\_CONFIG\_HOME environment
variable is defined, taskwarrior will check if
$XDG\_CONFIG\_HOME/task/taskrc exists and attempt to read it

~/.task  
The default directory where task stores its data. The location can be
configured in the configuration variable 'data.location', or overridden
with the TASKDATA environment variable.

~/.task/taskchampion.sqlite3  
The database file.

# CREDITS & COPYRIGHTS

Copyright (C) 2006 - 2021 T. Babej, P. Beckingham, F. Hernandez.

Taskwarrior is distributed under the MIT license. See
https://www.opensource.org/licenses/mit-license.php for more
information.

# SEE ALSO

**taskrc(5),** **task-color(5),** **task-sync(5)**

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
