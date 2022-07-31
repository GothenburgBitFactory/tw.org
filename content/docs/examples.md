---
title: "Taskwarrior - Usage Examples"
---

# Usage Examples

Here are some Taskwarrior command line examples that cover a variety of topics.
While this is not a reference for the features and command line, perhaps you
will learn something new...

Some of the example are deliberately chosen because there is more than one
solution, in which case all are presented, for comparison.

## 30 Second Tutorial

```shell
$ task add Read Taskwarrior documents later
$ task add priority:H Pay bills
$ task next
$ task 2 done
$ task
$ task 1 delete
```

## Creating Tasks

Creating tasks is straightforward, but here are some tips:

Create a task with due date.

```shell
$ task add Pay the rent due:eom
```

Create a task, then add a due date later.

```shell
$ task add Pay the rent
Created task 12
$ task 12 modify due:eom
```

Remove a due date from a task.

```shell
$ task 12 modify due:
```

Create a task with a multi-line description.


```shell
$ task add "Five syllables here
Seven more syllables there
Are you happy now?"
```


## Filters

A filter is how you restrict the tasks to just those that you want to see or
modify.

Show tasks I added in the last 4 days.


```shell
$ task entry.after:today-4days list
```

Show tasks I added yesterday.

```shell
$ task entry:yesterday list
```

Show tasks I added in the last hour.

```shell
$ task entry.after:now-1hour list
```

Show tasks I completed between a date range.

```shell
$ task end.after:2015-05-0 and end.before:2015-05-31 completed
```

Show tasks I completed in the last week.


```shell
$ task end.after:today-1wk completed
```

Show tasks in `This` project or `That` project.

```shell
$ tsk project:This or project:That list
```

More complex algebraic filters.

```shell
$ task project:This and \( priority:H or priority:M \) list
```

Search for `pattern` in description and annotations:

```shell
$ task /pattern/ list
$ task rc.seach.case.sensitive:yes /pattern/ list
$ task rc.seach.case.sensitive:no  /pattern/ list
```

Search for tasks with no project.

```shell
$ task project: list
```

## Reports

Reports are simply a colllection of configuration settings that specify display attributes, sorting, filter and a name.

Temporarily changing the sorting of a report.

```shell
$ task rc.report.next.sort=due-,urgency- next
```

## Projects

A single project may be assigned to a task, and that project may be multiple words.

Assign a long project name.


```shell
$ task add Rake the leaves project:'Home & Garden'
```

Moving all tasks to a new project.


```shell
$ task project:OLDNAME modify project:NEWNAME
```

Moving all pending tasks to a new project.

```shell
$ task project:OLDNAME and status:pending modify project:NEWNAME
```

Using a project hierarchy.

```shell
$ task add project:Home.Kitchen Clean the floor
$ task add project:Home.Kitchen Replace broken light bulb
$ task add project:Home.Garden Plant the bulbs
$ task project:Home.Kitchen count
2
$ task project:Home.Garden count
1
$ task project:Home count
3
```

What projects are currently used?

```shell
$ task projects
$ task _projects
```

What are all the projects I have ever used?

```shell
$ task rc.list.all.projects=1 projects
$ task rc.list.all.projects=1 _projects
$ task _unique projects
```

## Tags

Tags are simply one-word alpha-numeric labels, and a task may have any number of them.

List tasks that have a specific tag.

```shell
$ task +home list
```

List tasks that do not have a specific tag.

```shell
$ task -home list
```

List tasks that have any tags.

```shell
$ task tags.any: list
$ task +TAGGED list
```

List tasks that have no tags.

```shell
$ task tags.none: list
```

List tasks that have two specific tags.

```shell
$ task +this +that list
$ task +this and +that list
```

List tasks that have either of two specific tags.

```shell
$ task +this or +that list
```

List tasks that have just one of two specific tags.

```shell
$ task +this xor +that list
```

What tags am I currently using?

```shell
$ task tags
```

What are all the tags I have ever
used?

```shell
$ task rc.list.all.tags=1 tags
$ task _tags
```

## Special Tags

A special tag is one with a specific name, that can influence behavior.

Modify a task to boost it's urgency, and probably cause it to show up on the `next` report.

```shell
$ task 1 modify +next
```

## Virtual Tags

A virtual tag is a tag that doesn't actually exist, but the tag filter syntax is used to simulate the tag, providing a very convenient shortcut.
After all, composing a filter to match the tasks due today is not straightforward.

List tasks due today.

```shell
$ task due.after:yesterday and due.before:tomorrow list
$ task +DUETODAY list
```

List tasks that are due, but not today.

```shell
$ task +DUE -DUETODAY list
```

List tasks that are due this week.

```shell
$ task +WEEK list
```

List task that are overdue.

```shell
$ task +OVERDUE list
```

What virtual tags are present for this task?

```shell
$ task 1 info
```


## Recurring Tasks

Recurring tasks are tasks that you need to do again and again.

I want to make a task that is due at 9:00am every Monday, starting this coming Monday.

```shell
$ task add Do the thing due:2015-06-08T09:00 recur:weekly
```

I want a reminder to pay the rent every month, but only for a year.

```shell
$ task add Pay rent due:28th recur:monthly until:now+1yr
```


## Priority

Priority is now a [User Defined Attribute](/docs/udas.html) since version 2.4.3, and as such can be configured.

Make priority `L` sort lower than no
priority.

```shell
$ task
config -- uda.priority.values H,M,,L
```

I need more priority values for my workflow.

```shell
$ task config -- uda.priority.values OMG,DoIt,Meh,Phfh,Nope,
```

How do I remove the priority from a task?

```shell
$ task 1 modify priority:
```

## Color

I'm using a color theme, but I don't see any colors.
This is usually because your tasks do not contain due dates, priorities etc.
Prove color is working with these commands.

```shell
$ task color
$ task color legend
```

When task output goes to a file or pipe, all color is lost.
Force color with:

```shell
$ task rc._forcecolor:on rc.defaultwidth:120 rc.detection:off ...
```

## DOM

The Taskwarrior DOM is an addressing mechanism to provide access to all stored data.
It can be used in your scripts, or when manipulating tasks at the command line.

Get just the description for task 12.

```shell
$ task _get 12.description
Rake the leaves
```

Show the creation timestamp, and last modification date for task 12.

```shell
$ task _get 12.entry 12.modification
2000-04-04T01:02:31 2014-08-24T13:31:43
```

Get the dimensions of my terminal window.

```shell
$ task _get context.width context.height
```

Add a task, and set the wait date to 4 days before the due date.

```shell
$ task add Pay the rent due:eom wait:due-4days
```

Add a task, and use the same due date as task 12.

```shell
$ task add Buy wine for the party due:12.due
```

Get the week number on which task 12 due.

```shell
$ task _get 12.due.week
```

Get the columns used in the next report.

```shell
$ task _get rc.report.next.columns
$ task show report.next.columns
```

## Configuration

Although you can interactively edit your `.taskrc` file using any text editor, there is also a command for doing this.
Furthermore you can temporarily override these settings on the command line.

Set the `default.command` to a different report.

```shell
$ task config default.command long
```

Restore the `default.command` to its original setting.

```shell
$ task config default.command
```

Set the `default.command` to a blank value.

```shell
$ task config default.command ''
```

Temporarily override default.command.

```shell
$ task rc.default.command:long
```

Show sort order of all reports.

```shell
$ task show | grep report | grep sort
```

## Miscellaneous

Script writers often need access to assorted data, and it can all be obtained, but sometimes through odd mechanisms...

What is the most recent task ID?

```shell
$ task newest rc.verbose=nothing limit:1 | cut -f1 -d' '
$ task rc.verbose=nothing rc.report.foo.columns:id rc.report.foo.sort:id- foo limit:1
```

What is the minimum necessary data for a task?

```shell
$ echo '{"description":"A new task"}' | task import -
$ task add A new task
```

## Troubleshooting

Taskwarrior has some built-in functionality to help you get past obstacles.

Show the runtime diagnostics, to see if anything is wrong.

```shell
$ task diagnostics
```

Determine which version of GnuTLS is used by Taskwarrior.

```shell
$ task diagnostics | grep gnutls
```

Just let me brute-force change a task. Using Vim.

```shell
$ task 12 edit
$ EDITOR=vim task 12 edit
```

I can't list my completed tasks, because the `list` report has a filter that shows only pending tasks.

```shell
$ task rc.report.list.filter: list
$ task all
```

Do I have the latest released version?

```shell
$ curl https://gothenburgbitfactory.org/latest/task
2.5.3
$ task --version
2.5.3
```
