---
title: 'Taskwarrior - taskrc.5 for task-3.4.1'
viewport: 'width=device-width, initial-scale=1'
layout: single
---
# NAME

taskrc - Configuration details for the task(1) command

# SYNOPSIS

**$HOME/.taskrc**  
**task rc:&lt;directory-path&gt;/.taskrc ...**  
**TASKRC=&lt;directory-path&gt;/.taskrc task ...**  
**XDG\_CONFIG\_HOME=&lt;directory-path&gt;/task/taskrc task ...**

# DESCRIPTION

**Taskwarrior** obtains its configuration data from a file called
*.taskrc* . This file is normally located in the user's home directory:

        $HOME/.taskrc

The default location can be overridden using the *rc:* attribute when
running task:

        $ task rc:<directory-path>/.taskrc ...

or using the TASKRC environment variable:

        $ TASKRC=/tmp/.taskrc task ...

Additionally, if no ~/.taskrc exists, taskwarrior will check if the
XDG\_CONFIG\_HOME environment variable is defined:

        $ XDG_CONFIG_HOME=~/.config task ...

Individual options can be overridden by using the *rc.&lt;name&gt;:*
attribute when running task:

        $ task rc.<name>:<value> ...

or

        $ task rc.<name>=<value> ...

If **Taskwarrior** is run without an existing configuration file it will
ask if it should create a default, sample *.taskrc* file in the user's
home directory.

The .taskrc file follows a very simple syntax defining name/value pairs:

        <name> = <value>

There may be whitespace around &lt;name&gt;, '=' and &lt;value&gt;, and
it is ignored. Whitespace within the &lt;value&gt; is left intact.
Whitespace is not permitted in comma-separated lists. The entry must be
on a single line, no continuations. Values support UTF8 as well as JSON
encoding, such as \uNNNN.

Note that Taskwarrior is flexible about the values used to represent
Boolean items. You can use "1" to enable, anything else is interpreted
as disabled. The values "on", "yes", "y" and "true" are also supported.

        include <file>

There may be whitespace around 'include' and &lt;file&gt;. The file may
be an absolute or relative path, and the special character '~' is
expanded to mean $HOME. If relative path is specified, the it will be
evaluated as relative with respect to the following directories (listed
in order of precedence): 1. the current working directory 2. the
directory containing the taskrc file 3. the directories set by the
package manager (which usually contain pre-defined themes)

Note that environment variables are also expanded in paths (and any
other taskrc variables).

        # <comment>

A comment consists of the character '#', and extends from the '#' to the
end of the line. There is no way to comment a multi-line block. There
may be blank lines.

Almost every value has a default setting, and an empty .taskrc file is
one that makes use of every default. The contents of the .taskrc file
therefore represent overrides of the default values. To remove a default
value completely there must be an entry like this:

        <name> =

This entry overrides the default value with a blank value.

# EDITING

You can edit your .taskrc file by hand if you wish, or you can use the
'config' command. To permanently set a value in your .taskrc file, use
this command:

        $ task config nag "You have more urgent tasks."

To delete an entry, use this command:

        $ task config nag

Taskwarrior will then use the default value. To explicitly set a value
to blank, and therefore avoid using the default value, use this command:

        $ task config nag ""

Taskwarrior will also display all your settings with this command:

        $ task show

and in addition, will also perform a check of all the values in the
file, warning you of anything it finds amiss.

# NESTING CONFIGURATION FILES

The .taskrc can include other files containing configuration settings by
using the **include** statement:

        include <path/to/the/configuration/file/to/be/included>

By using include files you can divide your main configuration file into
several ones containing just the relevant configuration data like
colors, etc.

There are two excellent uses of includes in your .taskrc, shown here:

        include holidays.en-US.rc
        include dark-16.theme

This includes two standard files that are distributed with Taskwarrior,
which define a set of US holidays, and set up a 16-color theme to use,
to color the reports and calendar.

# ENVIRONMENT VARIABLES

These environment variables override defaults, but not command-line
arguments.

**TASKDATA=~/.task**  
This overrides the default path for the Taskwarrior data.

**TASKRC=~/.taskrc**  
This overrides the default RC file.

This environment variable will be checked if *~/.taskrc* doesn't exist

**XDG\_CONFIG\_HOME=~/.config**  
If set, taskwarrior will look for a *$XDG\_CONFIG\_HOME/task/taskrc*
file

# CONFIGURATION VARIABLES

Valid variable names and their default values are:

## FILES

**data.location=$HOME/.task**  
This is a path to the directory containing all the Taskwarrior data. By
default, it is set up to be ~/.task, for example: /home/paul/.task

Note that you can use the **~** shell meta character, which will be
properly expanded.

Note that the TASKDATA environment variable overrides this setting.

**hooks.location=$HOME/.task/hooks**  
This is a path to the hook scripts directory. By default it is
~/.task/hooks.

**gc=1**  
Can be used to temporarily suspend rebuilding, so that task IDs don't
change. Rebuilding requires read/write access to the database, so
disabling \`gc\` may result in better performance.

Note that this should be used in the form of a command line override
(task rc.gc=0 ...), and not permanently used in the .taskrc file, as
this significantly affects performance in the long term.

**purge.on-sync=0**  
If set, old tasks will be purged automatically after each
synchronization. Tasks are identified as "old" when they have status
"Deleted" and have not been modified for 180 days.

**hooks=1**  
This master control switch enables hook script processing. The default
value is '1', but certain extensions and environments may need to
disable hooks.

**exit.on.missing.db=0**  
When set to '1' causes the program to exit if the database (~/.task or
rc.data.location or TASKDATA override) is missing. Default value is '0'.

## TERMINAL

**detection=1**  
Determines whether to use ioctl to establish the size of the window you
are using, for text wrapping.

**limit:25**  
Specifies the desired number of tasks a report should show, if a
positive integer is given. The value 'page' may also be used, and will
limit the report output to as many lines of text as will fit on screen.
Default value is '25'.

**defaultwidth=80**  
The width of output used when auto-detection support is not available.
Defaults to 80. If set to 0, it is interpreted as infinite width,
therefore with no word-wrapping; this is useful when redirecting report
output to a file for subsequent handling.

**defaultheight=24**  
The height of output used when auto-detection support is not available.
Defaults to 24. If set to 0, it is interpreted as infinite height. This
is useful when redirecting charts to a file for subsequent handling.

**avoidlastcolumn=0**  
Causes the width of the terminal minus one to be used as the full width.
This avoids placing color codes in the last column which can cause
problems for Cygwin users. Default value is '0'.

**hyphenate=1**  
Hyphenates lines when wrapping breaks occur mid-word. Default value is
'1'.

**editor=vi**  
Specifies which text editor you wish to use for when the **task edit
&lt;ID&gt;** command is used. Taskwarrior will first look for this
configuration variable. If found, it is used. Otherwise it will look for
the $VISUAL or $EDITOR environment variables, before it defaults to
using "vi".

**reserved.lines=1**  
This is the number of lines reserved at the bottom of the screen for the
shell prompt. This is only referenced when 'limit:page' is used.

## MISCELLANEOUS

**verbose=1|0|nothing|list...**  
When set to "1" (the default), helpful explanatory comments are added to
all output from Taskwarrior. Setting this to "0" means that you would
see regular output.

The special value "nothing" can be used to eliminate all optional
output, which results in only the formatted data being shown, with
nothing else. This output is most readily parsed and used by shell
scripts.

Alternatively, you can specify a comma-separated list of verbosity
tokens that control specific occasions when output is generated. This
list may contain:

        blank      Inserts extra blank lines in output, for clarity
        header     Messages that appear before report output (this includes .taskrc/.task overrides and the "[task next]" message)
        footnote   Messages that appear after report output (mostly status messages and change descriptions)
        label      Column labels on tabular reports
        new-id     Provides feedback on any new task with IDs (and UUIDs for new tasks with ID 0, such as new completed tasks).
        new-uuid   Provides feedback on any new task with UUIDs. Overrides new-id. Useful for automation.
        news       Reminds to read new release highlights until the user runs "task news".
        affected   Reports 'N tasks affected' and similar
        edit       Used the verbose template for the 'edit' command
        special    Feedback when applying special tags
        project    Feedback about project status changes
        sync       Feedback about sync
        filter     Shows the filter used in the command
        context    Show the current context. Displayed in footnote.
        override   Notification when configuration options are overridden
        recur      Notification when a new recurring task instance is created
        default    Notifications about taskwarrior choosing to perform a default action.

The tokens "affected", "new-id", "new-uuid", "project", "override" and
"recur" imply "footnote".

The token "default" implies "header".

Note that the "1" setting is equivalent to all the tokens being
specified, and the "nothing" setting is equivalent to none of the tokens
being specified.

Here are the shortcut equivalents:

        verbose=on
        verbose=blank,header,footnote,label,new-id,news,affected,edit,special,project,sync,filter,override,recur

        verbose=0
        verbose=blank,label,new-id,edit

        verbose=nothing
        verbose=

Those additional comments are sent to the standard error for header,
footnote and project. The others are sent to standard output.

**confirmation=1**  
May be "1" or "0", and determines whether Taskwarrior will ask for
confirmation before deleting a task or performing the undo command. The
default value is "1". Consider leaving this enabled, for safety.

**allow.empty.filter=1**  
An empty filter combined with a write command is potentially a way to
modify all tasks by mistake, and when this is detected, confirmation is
required. Setting this to '0' means that it is an error to use a write
command with no filter.

**indent.annotation=2**  
Controls the number of spaces to indent annotations when shown beneath
the description field. The default value is "2".

**indent.report=0**  
Controls the indentation of the entire report output. Default is "0".

**row.padding=0**  
Controls left and right padding around each row of the report output.
Default is "0".

**column.padding=0**  
Controls padding between columns of the report output. Default is "1".

**bulk=3**  
Is a number, defaulting to 3. When this number or greater of tasks are
modified in a single command, confirmation will be required, regardless
of the value of **confirmation** variable. The special value bulk=0 is
treated as an infinity.

This is useful for preventing large-scale unintended changes.

**nag=You have more urgent tasks.**  
This may be a string of text, or blank. It is used as a prompt when a
task is started of completed, when there are other tasks with a higher
urgency. Default value is: 'You have more urgent tasks'. It is a gentle
reminder that you are contradicting your own urgency settings.

**list.all.projects=0**  
May be "1" or "0", and determines whether the 'projects' command lists
all the project names you have used, or just the ones used in active
tasks. The default value is "0".

**summary.all.projects=0**  
If set to "1", shows all projects in the summary report, even if there
are no pending tasks. The default value is "0".

**complete.all.tags=1**  
May be "1" or "0", and determines whether the tab completion scripts
consider all the tag names you have used, or just the ones used in
active tasks. The default value is "0".

**list.all.tags=1**  
May be "1" or "0", and determines whether the 'tags' command lists all
the tag names you have used, or just the ones used in active tasks. The
default value is "0".

**print.empty.columns=1**  
May be "1" or "0", and determines whether columns with no data for any
task are printed. Defaults to "0".

**search.case.sensitive=1**  
May be "1" or "0", and determines whether keyword lookup and
substitutions on the description and annotations are done in a case
sensitive way. Defaults to "1" on most platforms. Defaults to "0" on
Cygwin due to older regex library problems with case-insensitivity.

**regex=1**  
Controls whether regular expression support is enabled. The default
value is "1".

**xterm.title=1**  
Sets the xterm window title when reports are run. Defaults to "0".

**expressions=infix|postfix**  
Sets a preference for infix expressions (1 + 2) or postfix expressions
(1 2 +). Defaults to infix.

**json.array=1**  
Determines whether the export command encloses the JSON output in
'\[...\]' and adds ',' after each exported task object to create a
properly-formed JSON array. With json.array=0, export writes raw JSON
objects to STDOUT, one per line. Defaults to "1".

**\_forcecolor=1**  
Taskwarrior shuts off color automatically when the output is not sent
directly to a TTY. For example, this command:

> $ task list &gt; file

will not use any color. To override this, use:

> $ task rc.\_forcecolor=yes list &gt; file

Defaults to "0".

**active.indicator=\***  
The character or string to show in the start.active column. Defaults to
\*.

**tag.indicator=+**  
The character or string to show in the tag.indicator column. Defaults to
+.

**dependency.indicator=D**  
The character or string to show in the depends.indicator column.
Defaults to D.

**uda.&lt;name&gt;.indicator=U**  
The character or string to show in the &lt;uda&gt;.indicator column.
Defaults to U.

**recurrence=1**  
Controls whether recurrence is enabled, and whether recurring tasks
continue to generate new task instances. Defaults to "1".

If you are syncing multiple clients, then it is advised that you set
'recurrence=1' on your primary client, and 'recurrence=0' on ALL other
clients. This is a workaround for a duplication bug.

**recurrence.confirmation=prompt**  
Controls whether changes to recurring tasks propagates to other child
tasks with or without confirmation. A value of 'yes' means propagate
changes without confirmation. A value of 'no' means do not propagate
changes and don't ask for confirmation. A value of 'prompt' prompts you
every time. Defaults to 'prompt'.

**recurrence.indicator=R**  
The character or string to show in the recurrence\_indicator column.
Defaults to R.

**recurrence.limit=1**  
The number of future recurring tasks to show. Defaults to 1. For
example, if a weekly recurring task is added with a due date of
tomorrow, and recurrence.limit is set to 2, then a report will list 2
pending recurring tasks, one for tomorrow, and one for a week from
tomorrow.

**abbreviation.minimum=2**  
Minimum length of any abbreviated command/value. This means that "ve",
"ver", "vers", "versi", "versio" will all equate to "version", but "v"
will not. Default is 2.

**debug=0**  
Taskwarrior has a debug mode that causes diagnostic output to be
displayed. Typically this is not something anyone would want, but when
reporting a bug, debug output can be useful. It can also help explain
how the command line is being parsed, but the information is displayed
in a developer-friendly, not a user-friendly way.

Turning debug on automatically sets debug.hooks=1 and debug.parser=1 if
they do not already have assigned values. Defaults to "0".

**debug.hooks=0**  
Controls the hook system diagnostic level. Level 0 means no diagnostics.
Level 1 shows hook calls. Level 2 also shows exit status and I/O.

**debug.parser=0**  
Controls the parser diagnostic level. Level 0 shows no diagnostics.
Level 1 shows the final parse tree. Level 2 shows the parse tree from
all phases of the parse. Level 3 shows expression evaluation details.

**obfuscate=0**  
When set to '1', will replace all report text with 'xxx'. This is useful
for sharing report output in bug reports. Default value is '0'.

**alias.rm=delete**  
Taskwarrior supports command aliases. This alias provides an alternate
name (rm) for the delete command. You can use aliases to provide
alternate names for any of the commands. Several commands you may use
are actually aliases - the 'history' report, for example, or 'export'.

**burndown.cumulative=1**  
May be "1" or "0", and controls the behaviour of the burndown command.
When set to 1, it sums up all completed tasks, otherwise they only get
plotted in the interval where the task was completed. Defaults to 1.

## DATES

**dateformat=Y-M-D**  

**dateformat.report=**  

**dateformat.holiday=YMD**  

**dateformat.edit=Y-M-D H:N:S**  

**dateformat.info=Y-M-D H:N:S**  

**dateformat.annotation=**  

**report.X.dateformat=Y-M-D**  
This is a string of characters that defines how Taskwarrior formats date
values. The precedence order for the configuration variable is
report.X.dateformat then dateformat.report then dateformat for
formatting the due dates in reports. If both report.X.dateformat and
dateformat.report are not set then dateformat will be applied to the
date. Entered dates as well as all other displayed dates in reports are
formatted according to dateformat.

The default value is the ISO-8601 standard: Y-M-D. The string can
contain the characters:

        m  minimal-digit month,    for example 1 or 12
        d  minimal-digit day,      for example 1 or 30
        y  two-digit year,         for example 09 or 12
        D  two-digit day,          for example 01 or 30
        M  two-digit month,        for example 01 or 12
        Y  four-digit year,        for example 2009 or 2015
        a  short name of weekday,  for example Mon or Wed
        A  long name of weekday,   for example Monday or Wednesday
        b  short name of month,    for example Jan or Aug
        B  long name of month,     for example January or August
        v  minimal-digit week,     for example 3 or 37
        V  two-digit week,         for example 03 or 37
        h  minimal-digit hour,     for example 3 or 21
        n  minimal-digit minutes,  for example 5 or 42
        s  minimal-digit seconds,  for example 7 or 47
        H  two-digit hour,         for example 03 or 21
        N  two-digit minutes,      for example 05 or 42
        S  two-digit seconds,      for example 07 or 47
        J  three-digit Julian day, for example 023 or 365
        j  Julian day,             for example 23 or 365
        w  Week day,               for example 0 for Monday, 5 for Friday

> The characters 'v', 'V', 'a' and 'A' can only be used for formatting
> printed dates (not to parse them).

> The string may also contain other characters to act as spacers, or
> formatting. Examples for other values of dateformat:

        d/m/Y  would use for input and output 24/7/2009
        yMD    would use for input and output 090724
        M-D-Y  would use for input and output 07-24-2009

> Examples for other values of dateformat.report:

        a D b Y (V)   would emit "Fri 24 Jul 2009 (30)"
        A, B D, Y     would emit "Friday, July 24, 2009"
        wV a Y-M-D    would emit "w30 Fri 2009-07-24"
        yMD.HN        would emit "110124.2342"
        m/d/Y H:N     would emit "1/24/2011 10:42"
        a D b Y H:N:S would emit "Mon 24 Jan 2011 11:19:42"

> Undefined fields are put to their minimal valid values (1 for month
> and day and 0 for hour, minutes and seconds) when there is at least
> one more global date field that is set. Otherwise, they are set to the
> corresponding values of "now". For example:

        8/1/2013  with m/d/Y   implies August 1, 2013 at midnight (inferred)
        8/1 20:40 with m/d H:N implies August 1, 2013 (inferred) at 20:40

**date.iso=1**  
Enables ISO-8601 date support. The default value is "1".

## CALENDAR

**weekstart=Sunday**  
Determines the day a week starts. Valid values are Sunday or Monday
only. The default value is "Sunday".

**displayweeknumber=1**  
Determines if week numbers are displayed when using the "task calendar"
command. The week number is dependent on the day a week starts. The
default value is "1".

**due=7**  
This is the number of days into the future that define when a task is
considered due, and is colored accordingly. The default value is 7.

**calendar.details=sparse**  
If set to "full" running "task calendar" will display the details of
tasks with due dates that fall into the calendar period. The
corresponding days will be color-coded in the calendar. If set to
"sparse" only the corresponding days will be color coded and no details
will be displayed. The displaying of due dates with details is turned
off by setting the variable to "none". The default value is "sparse".

**calendar.details.report=list**  
The report to run when displaying the details of tasks with due dates
when running the "task calendar" command. The default value is "list".

**calendar.offset=0**  
If "1" the first month in the calendar report is effectively changed by
the offset value specified in calendar.offset.value. It defaults to "0".

**calendar.offset.value=-1**  
The offset value to apply to the first month in the calendar report. The
default value is "-1".

**calendar.holidays=none**  
If set to full running "task calendar" will display holidays in the
calendar by color-coding the corresponding days. A detailed list with
the dates and names of the holidays is also shown. If set to sparse only
the days are color-coded and no details on the holidays will be
displayed. The displaying of holidays is turned off by setting the
variable to none. The default value is "none".

**calendar.legend=1**  
Determines whether the calendar legend is displayed. The default value
is "1".

**calendar.monthsperline=N**  
Determines how many months the "task calendar" command renders across
the screen. Defaults to however many will fit. If more months than will
fit are specified, Taskwarrior will only show as many that will fit.

## JOURNAL ENTRIES

**journal.time=0**  
May be "1" or "0", and determines whether the 'start' and 'stop'
commands should record an annotation when being executed. The default
value is "0". The text of the corresponding annotations is controlled
by:

**journal.time.start.annotation=Started task**  
The text of the annotation that is recorded when executing the start
command and having set journal.time.

**journal.time.stop.annotation=Stopped task**  
The text of the annotation that is recorded when executing the stop
command and having set journal.time.

**journal.info=1**  
When enabled, this setting causes a change log of each task to be
displayed by the 'info' command. Default value is "1".

## HOLIDAYS

Holidays are entered either directly in the .taskrc file or via an
include file that is specified in .taskrc. For single-day holidays the
name and the date is required to be given:

        holiday.towel.name=Day of the towel
        holiday.towel.date=20100525

For holidays that span a range of days (i.e. vacation), you can use a
start date and an end date:

        holiday.sysadmin.name=System Administrator Appreciation Week
        holiday.sysadmin.start=20100730
        holiday.sysadmin.end=20100805

> Dates are to be entered according to the setting in the
> dateformat.holiday variable.

> The following holidays are computed automatically: Good Friday
> (goodfriday), Easter (easter), Easter Monday (eastermonday), Ascension
> (ascension), Pentecost (pentecost). The date for these holidays is the
> given keyword:

        holiday.eastersunday.name=Easter
        holiday.eastersunday.date=easter

Note that the Taskwarrior distribution contains example holiday files
that can be included like this:

        include holidays.en-US.rc

## DEPENDENCIES

**dependency.reminder=1**  
Determines whether dependency chain violations generate reminders.

**dependency.confirmation=1**  
Determines whether dependency chain repair requires confirmation.

## COLOR CONTROLS

**color=1**  
May be "1" or "0". Determines whether Taskwarrior uses color. When "0",
will use dashes (-----) to underline column headings.

**fontunderline=1**  
Determines if font underlines or ASCII dashes should be used to
underline headers, even when color is enabled.

Taskwarrior has a number of coloration rules. They correspond to a
particular attribute of a task, such as it being due, or being active,
and specifies the automatic coloring of that task. A list of valid
colors, depending on your terminal, can be obtained by running the
command:

> **task colors**

> Note that no default values are listed here - the defaults now
> correspond to the dark-256.theme (Linux) and dark-16.theme (other)
> theme values. The coloration rules are as follows:

> **color.due.today** Task is due today  
> **color.active** Task is started, therefore active.  
> **color.scheduled** Task is scheduled, therefore ready for work.  
> **color.until** Task has an expiration date.  
> **color.blocking** Task is blocking another in a dependency.  
> **color.blocked** Task is blocked by a dependency.  
> **color.overdue** Task is overdue (due some time prior to now).  
> **color.due** Task is coming due.  
> **color.project.none** Task does not have an assigned project.  
> **color.tag.none** Task has no tags.  
> **color.tagged** Task has at least one tag.  
> **color.recurring** Task is recurring.  
> **color.completed** Task is completed.  
> **color.deleted** Task is deleted.

> To disable a coloration rule for which there is a default, set the
> value to nothing, for example:
>
>         color.tagged=
>
> > By default, colors produced by rules blend. This has the advantage
> > of conveying additional information, by producing combinations that
> > are not used by any particular rule directly.
> >
> > However, color blending can produce highlighting combinations which
> > are not desired. In such cases, use the following option to disable
> > this behaviour:
>
> **rule.color.merge=1**  
> Can be "1" or "0". When "0", disables merging of colors produced by
> different color rules. Use if your color scheme produces unpleasing
> foreground and background combinations.
>
> See the task-color(5) man pages for color details.

Certain attributes like tags, projects and keywords can have their own
coloration rules.

**color.tag.X=yellow**  
Colors any task that has the tag X.

<!-- -->

**color.project.X=on green**  
Colors any task assigned to project X.

<!-- -->

**color.keyword.X=on blue**  
Colors any task where the description or any annotation contains X.

<!-- -->

**color.uda.X=on green**  
Colors any task that has the user defined attribute X.

<!-- -->

**color.uda.X.VALUE=on green**  
Colors any task that has the user defined attribute X set to VALUE.

<!-- -->

**color.uda.X.none=on green**  
Colors any task that does not have the user defined attribute X.

<!-- -->

**color.error=white on red**  
Colors any of the error messages.

<!-- -->

**color.warning=bold red**  
Colors any of the warning messages.

<!-- -->

**color.header=green**  
Colors any of the messages printed prior to the report output.

<!-- -->

**color.footnote=green**  
Colors any of the messages printed last.

<!-- -->

**color.summary.bar=on green**  
Colors the summary progress bar. Should consist of a background color.

<!-- -->

**color.summary.background=on black**  
Colors the summary progress bar. Should consist of a background color.

<!-- -->

**color.calendar.today=black on cyan**  
Color of today in calendar.

<!-- -->

**color.calendar.due=black on green**  
Color of days with due tasks in calendar.

<!-- -->

**color.calendar.due.today=black on magenta**  
Color of today with due tasks in calendar.

<!-- -->

**color.calendar.overdue=black on red**  
Color of days with overdue tasks in calendar.

<!-- -->

**color.calendar.scheduled=black on orange**  
Color of days with scheduled tasks in calendar.

<!-- -->

**color.calendar.weekend=bright white on black**  
Color of weekend days in calendar.

<!-- -->

**color.calendar.holiday=black on bright yellow**  
Color of holidays in calendar.

<!-- -->

**color.calendar.weeknumber=black on white**  
Color of weeknumbers in calendar.

<!-- -->

**color.label=**  
Colors the report labels. Defaults to not use color.

<!-- -->

**color.label.sort=**  
Colors the report labels for sort columns. Defaults to color.label.

<!-- -->

**color.alternate=on rgb253**  
Color of alternate tasks. This is to apply a specific color to every
other task in a report, which can make it easier to visually separate
tasks. This is especially useful when tasks are displayed over multiple
lines due to long descriptions or annotations.

<!-- -->

**color.history.add=on red**  

  
**color.history.done=on green**

  
**color.history.delete=on yellow**

> Colors the bars on the ghistory report graphs. Defaults to red, green
> and yellow bars.

**color.burndown.pending=on red**  

  
**color.burndown.started=on yellow**

  
**color.burndown.done=on green**

> Colors the bars on the burndown reports graphs. Defaults to red, green
> and yellow bars.

**color.undo.before=red**  

  
**color.undo.after=green**

> Colors used by the undo command, to indicate the values both before
> and after a change that is to be reverted.
>
> Currently not supported.

**color.sync.added=green**  

  
**color.sync.changed=yellow**

  
**color.sync.rejected=red**

> Colors the output of the sync command.

**rule.precedence.color=due.today,active,blocking,blocked,overdue,due,**  
**scheduled,keyword.,project.,tag.,uda.,recurring,**
**tagged,completed,deleted**

This setting specifies the precedence of the color rules, from highest
to lowest. Note that the prefix 'color.' is omitted (for brevity), and
that any wildcard value (color.tag.XXX) is shortened to 'tag.', which
places all specific tag rules at the same precedence, again for brevity.

<!-- -->

**color.debug=green**  

Colors all debug output, if enabled.

## URGENCY

The urgency calculation uses a polynomial with several terms, each of
which has a configurable coefficient. Those coefficients are:

**urgency.blocking.coefficient=8.0**  

Urgency coefficient for blocking tasks

**urgency.blocked.coefficient=-5.0**

> Urgency coefficient for blocked tasks

**urgency.due.coefficient=12.0**

> Urgency coefficient for due dates

**urgency.waiting.coefficient=-3.0**

> Urgency coefficient for waiting status

**urgency.active.coefficient=4.0**

> Urgency coefficient for active tasks

**urgency.scheduled.coefficient=5.0**

> Urgency coefficient for scheduled tasks

**urgency.project.coefficient=1.0**

> Urgency coefficient for projects

**urgency.tags.coefficient=1.0**

> Urgency coefficient for tags

**urgency.annotations.coefficient=1.0**

> Urgency coefficient for annotations

**urgency.age.coefficient=2.0**

> Urgency coefficient for the age of tasks

**urgency.age.max=365**

> Maximum age in days. After this number of days has elapsed, the
> urgency of a task won't increase any more because of aging.

**urgency.user.tag.&lt;tag&gt;.coefficient=...**

> Specific tag coefficient.

**urgency.user.tag.next.coefficient=15.0**

> Urgency coefficient for tag 'next'.

**urgency.user.project.&lt;project&gt;.coefficient=...**

> Specific project coefficient.

**urgency.user.keyword.&lt;keyword&gt;.coefficient=...**

> Specific description keyword coefficient.

**urgency.uda.&lt;name&gt;.coefficient=...**

> Presence/absence of UDA data.

**urgency.uda.&lt;name&gt;.&lt;value&gt;.coefficient=...**

> Specific value of UDA data.

The coefficients reflect the relative importance of the various terms in
the urgency calculation. These are default values, and may be modified
to suit your preferences, but it is important that you carefully
consider any modifications.

**urgency.inherit=0**

> Not actually a coefficient. When enabled, blocking tasks inherit the
> highest urgency value found in the tasks they block. This is done
> recursively. It is recommended to set urgency.blocking.coefficient and
> urgency.blocked.coefficient to 0.0 in order for this setting to be the
> most useful.

## DEFAULTS

**default.project=foo**  
Provides a default project name for the *task add* command, if you don't
specify one. The default is blank.

**default.due=...**  
Provides a default due date for the *task add* command, if you don't
specify one. You can use a date, or a duration value which is assumed to
be relative to 'now'. The default is blank.

**default.scheduled=...**  
Provides a default scheduled date for the *task add* command, if you
don't specify one. You can use a date, or a duration value which is
assumed to be relative to 'now'. The default is blank.

**uda.&lt;name&gt;.default=...**  
Provides default values for UDA fields when using the *task add*
command, if you don't specify values. The default is blank.

**default.command=next**  
Provides a default command that is run every time Taskwarrior is invoked
with no arguments. For example, if set to:

<!-- -->

        default.command=project:foo list

> then Taskwarrior will run the "project:foo list" command if no command
> is specified. This means that by merely typing

        $ task
        [task project:foo list]

        ID Project Pri Description
         1 foo     H   Design foo
         2 foo         Build foo

## REPORTS

The reports can be customized by using the following configuration
variables. The output columns, their labels and the sort order can be
set using the corresponding variables for each report. Each report name
is used as a "command" name. For example

**task overdue**  

**report.X.description**  
The description for report X when running the "task help" command.

**report.X.columns**  
This is a comma-separated list of columns and formatting specifiers. See
the command 'task columns' for a full list of options and examples.

**report.X.context**  
A boolean value representing whether the given report should respect
(apply) the currently active context. See CONTEXT section for details
about context. Defaults to 1.

**report.X.labels**  
The labels for each column that will be used when generating report X.
The labels are a comma separated list.

**report.X.sort**  
The sort order of the tasks in the generated report X. The sort order is
specified by using the column ids post-fixed by a "+" for ascending sort
order or a "-" for descending sort order. The sort IDs are separated by
commas. For example:

<!-- -->

        report.list.sort=due+,priority-,start.active-,project+

Additionally, after the "+" or "-", there can be a solidus "/" which
indicates that there are breaks after the column values change. For
example:

        report.minimal.sort=project+/,description+

This sort order now specifies that there is a listing break between each
project. A listing break is simply a blank line, which provides a visual
grouping.

A special sort value of "none" indicates that no sorting is required,
and tasks will be presented in the order (if any) in which they are
selected.

**report.X.filter**  
This adds a filter to the report X so that only tasks matching the
filter criteria are displayed in the generated report.

There is a special case for 'report.timesheet.filter', which may be
specified even though the 'timesheet' report is not very customizable.

**report.X.dateformat**  
This adds a dateformat to the report X that will be used by the "due
date" column. If it is not set then dateformat.report and dateformat
will be used in this order. See the **DATES** section for details on the
sequence placeholders.

**report.X.annotations**  
This adds the possibility to control the output of annotations for a
task in a report. Deprecated. Use the **description** column with a
format (e.g., **description.count**) instead.

Taskwarrior comes with a number of predefined reports, which are:  

**next**  
Lists the most important tasks.

**long**  
Lists all pending tasks and all data, matching the specified criteria.

**list**  
Lists all tasks matching the specified criteria.

**ls**  
Short listing of all tasks matching the specified criteria.

**minimal**  
Minimal listing of all tasks matching the specified criteria.

**newest**  
Shows the newest tasks.

**oldest**  
Shows the oldest tasks.

**overdue**  
Lists overdue tasks matching the specified criteria.

**active**  
Lists active tasks matching the specified criteria.

**completed**  
Lists completed tasks matching the specified criteria.

**recurring**  
Lists recurring tasks matching the specified criteria.

**waiting**  
Lists all waiting tasks matching the specified criteria.

**all**  
Lists all tasks matching the specified criteria.

**blocked**  
Lists all tasks that have dependencies.

## USER DEFINED ATTRIBUTES

User defined attributes (UDAs) are an extension mechanism that allows
you to define new attributes for Taskwarrior to store and display. One
such example is an 'estimate' attribute that could be used to store time
estimates associated with a task. This 'estimate' attribute is not built
in to Taskwarrior, but with a few simple configuration settings you can
instruct Taskwarrior to store this item, and provide access to it for
custom reports and filters.

This allows you to augment Taskwarrior to accommodate your workflow, or
bend the rules and use Taskwarrior to store and synch data that is not
necessarily task-related.

One important restriction is that because this is an open system that
allows the definition of any new attribute, Taskwarrior cannot
understand the meaning of that attribute. So while Taskwarrior will
faithfully store, modify, report, sort and filter your UDA, it does not
understand anything about it. For example if you define a UDA named
'estimate', Taskwarrior will not know that this value is weeks, hours,
minutes, money, or some other resource count.

**uda.&lt;name&gt;.type=string|numeric|date|duration**  

Defines a UDA called '&lt;name&gt;', of the specified type.

<!-- -->

**uda.&lt;name&gt;.label=&lt;column heading&gt;**  

Provides a default report label for the UDA called '&lt;name&gt;'.

<!-- -->

**uda.&lt;name&gt;.values=A,B,C**  

For type 'string' UDAs only, this provides a comma-separated list of
acceptable values. In this example, the '&lt;name&gt;' UDA may only
contain values 'A', 'B', or 'C', but may also contain no value.

Note that the order of the value is important, and denotes the sort
order from highest ('A') to lowest ('C').

Note that a blank value is permitted.

<!-- -->

**uda.&lt;name&gt;.default=...**  

Provides a default value for the UDA called '&lt;name&gt;'.

<!-- -->

**Example 'estimate' UDA**  
This example shows an 'estimate' UDA that stores specific values for the
size of a task. Note the blank value after 'trivial'.

**uda.estimate.type=string**  
**uda.estimate.label=Size Estimate**  
**uda.estimate.values=huge,large,medium,small,trivial,**

> Note that the value are sorted
>
> huge &gt; large &gt; medium &gt; small &gt; trivial &gt; ''

## CONTEXT

Context setting is a mechanism which allows the user to set a permanent
filter, thus avoiding the need to specify one filter repeatedly. More
details on usage can be found in the task(1) man page.

The current context is stored in the .taskrc file, along with
definitions for all user provided contexts.

**context=&lt;name&gt;**  

Stores the value of the currently active context.

<!-- -->

**context.&lt;name&gt;.read=&lt;filter&gt;**  

  
**context.&lt;name&gt;.write=&lt;modifications&gt;**

> Stores the definition of the read or write context with the name
> &lt;name&gt;. Read context is the default filter applied when the
> context is active. The write context are the default modifications
> applied to newly added tasks when the context is active.

**context.&lt;name&gt;.rc.&lt;key&gt;=&lt;value&gt;**  

The rc type allows to override any configuration parameter for the
current context, e.g. if the default command for the context home should
be changed to home\_report, the following statement could be added:

context.home.rc.default.command=home\_report

## SYNC

These configuration settings are used to connect and sync tasks with the
task server.

# CREDITS & COPYRIGHTS

Copyright (C) 2006 - 2021 T. Babej, P. Beckingham, F. Hernandez.

This man page was originally written by Federico Hernandez.

Taskwarrior is distributed under the MIT license. See
https://www.opensource.org/licenses/mit-license.php for more
information.

# SEE ALSO

**task(1),** **task-color(5),** **task-sync(5)**

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
