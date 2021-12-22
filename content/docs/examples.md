---
title: "Taskwarrior - Usage Examples"
---

### Usage Examples

Here are some Taskwarrior command line examples that cover a variety of topics.
While this is not a reference for the features and command line, perhaps you
will learn something new\...

Some of the example are deliberately chosen because there is more than one
solution, in which case all are presented, for comparison.

[]{#30sec}

#### 30 Second Tutorial

+---------------------------------------+---------------------------------------+
| Basic usage from the [30-Second       |     $ task                            |
| Tutorial](/docs/30second.html).       |  add Read Taskwarrior documents later |
|                                       |     $ task add priority:H Pay bills   |
|                                       |     $ task next                       |
|                                       |     $ task 2 done                     |
|                                       |     $ task                            |
|                                       |     $ task 1 delete                   |
+---------------------------------------+---------------------------------------+

[]{#create}

#### Creating Tasks

Creating tasks is straightforward, but here are some tips:

+---------------------------------------+---------------------------------------+
| Create a task with due date.          |     $ task add Pay the rent due:eom   |
+---------------------------------------+---------------------------------------+
| Create a task, then add a due date    |     $ task add Pay the rent           |
| later.                                |     Created task 12                   |
|                                       |     $ task 12 modify due:eom          |
+---------------------------------------+---------------------------------------+
| Remove a due date from a task.        |     $ task 12 modify due:             |
+---------------------------------------+---------------------------------------+
| Create a task with a multi-line       |     $ task add "Five syllables here   |
| description.                          |     Seven more syllables there        |
|                                       |     Are you happy now?"               |
+---------------------------------------+---------------------------------------+

[]{#filters}

#### Filters

A filter is how you restrict the tasks to just those that you want to see or
modify.

+---------------------------------------+---------------------------------------+
| Show tasks I added in the last 4      |                                       |
| days.                                 |   $ task entry.after:today-4days list |
+---------------------------------------+---------------------------------------+
| Show tasks I added yesterday.         |     $ task entry:yesterday list       |
+---------------------------------------+---------------------------------------+
| Show tasks I added in the last hour.  |     $ task entry.after:now-1hour list |
+---------------------------------------+---------------------------------------+
| Show tasks I completed between a date |     $ task end.after:2015-05-0        |
| range.                                | 1 and end.before:2015-05-31 completed |
+---------------------------------------+---------------------------------------+
| Show tasks I completed in the last    |                                       |
| week.                                 |  $ task end.after:today-1wk completed |
+---------------------------------------+---------------------------------------+
| Show tasks in `This` project or       |     $ t                               |
| `That` project.                       | ask project:This or project:That list |
+---------------------------------------+---------------------------------------+
| More complex algebraic filters.       |     $ task project:This an            |
|                                       | d \( priority:H or priority:M \) list |
+---------------------------------------+---------------------------------------+
| Search for `pattern` in description   |     $ task                            |
| and annotations:                      |                        /pattern/ list |
|                                       |     $ task rc.sea                     |
|                                       | rch.case.sensitive:yes /pattern/ list |
|                                       |     $ task rc.sea                     |
|                                       | rch.case.sensitive:no  /pattern/ list |
+---------------------------------------+---------------------------------------+
| Search for tasks with no project.     |     $ task project: list              |
+---------------------------------------+---------------------------------------+

[]{#reports}

#### Reports

Reports are simply a colllection of configuration settings that specify display
attributes, sorting, filter and a name.

+---------------------------------------+---------------------------------------+
| Temporarily changing the sorting of a |     $ task r                          |
| report.                               | c.report.next.sort=due-,urgency- next |
+---------------------------------------+---------------------------------------+

[]{#projects}

#### Projects

A single project may be assigned to a task, and that project may be multiple
words.

+---------------------------------------+---------------------------------------+
| Assign a long project name.           |     $ task add Ra                     |
|                                       | ke the leaves project:'Home & Garden' |
+---------------------------------------+---------------------------------------+
| Moving all tasks to a new project.    |     $ task p                          |
|                                       | roject:OLDNAME modify project:NEWNAME |
+---------------------------------------+---------------------------------------+
| Moving all pending tasks to a new     |     $ task project:OLDNAME and        |
| project.                              | status:pending modify project:NEWNAME |
+---------------------------------------+---------------------------------------+
| Using a project hierarchy.            |     $ task add                        |
|                                       |  project:Home.Kitchen Clean the floor |
|                                       |     $ task add project:H              |
|                                       | ome.Kitchen Replace broken light bulb |
|                                       |     $ task ad                         |
|                                       | d project:Home.Garden Plant the bulbs |
|                                       |                                       |
|                                       |     $ task project:Home.Kitchen count |
|                                       |     2                                 |
|                                       |                                       |
|                                       |     $ task project:Home.Garden count  |
|                                       |     1                                 |
|                                       |                                       |
|                                       |     $ task project:Home count         |
|                                       |     3                                 |
+---------------------------------------+---------------------------------------+
| What projects are currently used?     |     $ task projects                   |
|                                       |     $ task _projects                  |
+---------------------------------------+---------------------------------------+
| What are all the projects I have ever |     $                                 |
| used?                                 |  task rc.list.all.projects=1 projects |
|                                       |     $                                 |
|                                       | task rc.list.all.projects=1 _projects |
|                                       |     $ task _unique projects           |
+---------------------------------------+---------------------------------------+

[]{#tags}

#### Tags

Tags are simply one-word alpha-numeric labels, and a task may have any number of
them.

+---------------------------------------+---------------------------------------+
| List tasks that have a specific tag.  |     $ task +home list                 |
+---------------------------------------+---------------------------------------+
| List tasks that do not have a         |     $ task -home list                 |
| specific tag.                         |                                       |
+---------------------------------------+---------------------------------------+
| List tasks that have any tags.        |     $ task tags.any: list             |
|                                       |     $ task +TAGGED list               |
+---------------------------------------+---------------------------------------+
| List tasks that have no tags.         |     $ task tags.none: list            |
+---------------------------------------+---------------------------------------+
| List tasks that have two specific     |     $ task +this +that list           |
| tags.                                 |     $ task +this and +that list       |
+---------------------------------------+---------------------------------------+
| List tasks that have either of two    |     $ task +this or +that list        |
| specific tags.                        |                                       |
+---------------------------------------+---------------------------------------+
| List tasks that have just one of two  |     $ task +this xor +that list       |
| specific tags.                        |                                       |
+---------------------------------------+---------------------------------------+
| What tags am I currently using?       |     $ task tags                       |
+---------------------------------------+---------------------------------------+
| What are all the tags I have ever     |     $ task rc.list.all.tags=1 tags    |
| used?                                 |     $ task _tags                      |
+---------------------------------------+---------------------------------------+

[]{#specialtags}

#### Special Tags

A special tag is one with a specific name, that can influence behavior.

+---------------------------------------+---------------------------------------+
| Modify a task to boost it\'s urgency, |     $ task 1 modify +next             |
| and probably cause it to show up on   |                                       |
| the `next` report.                    |                                       |
+---------------------------------------+---------------------------------------+

[]{#virtualtags}

#### Virtual Tags

A virtual tag is a tag that doesn\'t actually exist, but the tag filter syntax
is used to simulate the tag, providing a very convenient shortcut. After all,
composing a filter to match the tasks due today is not straightforward.

+---------------------------------------+---------------------------------------+
| List tasks due today.                 |     $ task due.after:y                |
|                                       | esterday and due.before:tomorrow list |
|                                       |     $ task +DUETODAY list             |
+---------------------------------------+---------------------------------------+
| List tasks that are due, but not      |     $ task +DUE -DUETODAY list        |
| today.                                |                                       |
+---------------------------------------+---------------------------------------+
| List tasks that are due this week.    |     $ task +WEEK list                 |
+---------------------------------------+---------------------------------------+
| List task that are overdue.           |     $ task +OVERDUE list              |
+---------------------------------------+---------------------------------------+
| What virtual tags are present for     |     $ task 1 info                     |
| this task?                            |                                       |
+---------------------------------------+---------------------------------------+

[]{#recur}

#### Recurring Tasks

Recurring tasks are tasks that you need to do again and again.

+---------------------------------------+---------------------------------------+
| I want to make a task that is due at  |     $ task add Do the th              |
| 9:00am every Monday, starting this    | ing due:2015-06-08T09:00 recur:weekly |
| coming Monday.                        |                                       |
+---------------------------------------+---------------------------------------+
| I want a reminder to pay the rent     |     $ task add Pay rent               |
| every month, but only for a year.     |  due:28th recur:monthly until:now+1yr |
+---------------------------------------+---------------------------------------+

[]{#pri}

#### Priority

Priority is now a [User Defined Attribute](/docs/udas.html) since version 2.4.3,
and as such can be configured.

+---------------------------------------+---------------------------------------+
| Make priority `L` sort lower than no  |     $ task                            |
| priority.                             |  config -- uda.priority.values H,M,,L |
+---------------------------------------+---------------------------------------+
| I need more priority values for my    |     $ task config -- uda.pr           |
| workflow.                             | iority.values OMG,DoIt,Meh,Phfh,Nope, |
+---------------------------------------+---------------------------------------+
| How do I remove the priority from a   |     $ task 1 modify priority:         |
| task?                                 |                                       |
+---------------------------------------+---------------------------------------+

[]{#color}

#### Color

+---------------------------------------+---------------------------------------+
| I\'m using a color theme, but I       |     $ task color                      |
| don\'t see any colors. This is        |     $ task color legend               |
| usually because your tasks do not     |                                       |
| contain due dates, priorities etc.    |                                       |
| Prove color is working with these     |                                       |
| commands.                             |                                       |
+---------------------------------------+---------------------------------------+
| When task output goes to a file or    |     $ task rc._forcecolor:on rc.      |
| pipe, all color is lost. Force color  | defaultwidth:120 rc.detection:off ... |
| with:                                 |                                       |
+---------------------------------------+---------------------------------------+

[]{#dom}

#### DOM

The Taskwarrior DOM is an addressing mechanism to provide access to all stored
data. It can be used in your scripts, or when manipulating tasks at the command
line.

+---------------------------------------+---------------------------------------+
| Get just the description for task 12. |     $ task _get 12.description        |
|                                       |     Rake the leaves                   |
+---------------------------------------+---------------------------------------+
| Show the creation timestamp, and last |                                       |
| modification date for task 12.        |  $ task _get 12.entry 12.modification |
|                                       |     20                                |
|                                       | 10-04-04T01:02:31 2014-08-24T13:31:43 |
+---------------------------------------+---------------------------------------+
| Get the dimensions of my terminal     |     $ t                               |
| window.                               | ask _get context.width context.height |
+---------------------------------------+---------------------------------------+
| Add a task, and set the wait date to  |     $ task ad                         |
| 4 days before the due date.           | d Pay the rent due:eom wait:due-4days |
+---------------------------------------+---------------------------------------+
| Add a task, and use the same due date |     $ task                            |
| as task 12.                           | add Buy wine for the party due:12.due |
+---------------------------------------+---------------------------------------+
| Get the week number on which task 12  |     $ task _get 12.due.week           |
| due.                                  |                                       |
+---------------------------------------+---------------------------------------+
| Get the columns used in the next      |                                       |
| report.                               |    $ task _get rc.report.next.columns |
|                                       |     $ task show report.next.columns   |
+---------------------------------------+---------------------------------------+

[]{#config}

#### Configuration

Although you can interactively edit your `.taskrc` file using any text editor,
there is also a command for doing this. Furthermore you can temporarily override
these settings on the command line.

+---------------------------------------+---------------------------------------+
| Set the `default.command` to a        |                                       |
| different report.                     |    $ task config default.command long |
+---------------------------------------+---------------------------------------+
| Restore the `default.command` to its  |     $ task config default.command     |
| original setting.                     |                                       |
+---------------------------------------+---------------------------------------+
| Set the `default.command` to a blank  |     $ task config default.command ''  |
| value.                                |                                       |
+---------------------------------------+---------------------------------------+
| Temporarily override default.command. |     $ task rc.default.command:long    |
+---------------------------------------+---------------------------------------+
| Show sort order of all reports.       |                                       |
|                                       | $ task show | grep report | grep sort |
+---------------------------------------+---------------------------------------+

[]{#misc}

#### Miscellaneous

Script writers often need access to assorted data, and it can all be obtained,
but sometimes through odd mechanisms\...

+---------------------------------------+---------------------------------------+
| What is the most recent task ID?      |     $ task newest rc.ve               |
|                                       | rbose=nothing limit:1 | cut -f1 -d' ' |
|                                       |     $ task rc.verbo                   |
|                                       | se=nothing rc.report.foo.columns:id \ |
|                                       |                                       |
|                                       |    rc.report.foo.sort:id- foo limit:1 |
+---------------------------------------+---------------------------------------+
| What is the minimum necessary data    |     $ echo '{"descri                  |
| for a task?                           | ption":"A new task"}' | task import - |
|                                       |     $ task add A new task             |
+---------------------------------------+---------------------------------------+

[]{#trouble}

#### Troubleshooting

Taskwarrior has some built-in functionality to help you get past obstacles.

+---------------------------------------+---------------------------------------+
| Show the runtime diagnostics, to see  |     $ task diagnostics                |
| if anything is wrong.                 |                                       |
+---------------------------------------+---------------------------------------+
| Determine which version of GnuTLS is  |     $ task diagnostics | grep gnutls  |
| used by Taskwarrior.                  |                                       |
+---------------------------------------+---------------------------------------+
| Just let me brute-force change a      |     $ task 12 edit                    |
| task. Using Vim.                      |     $ EDITOR=vim task 12 edit         |
+---------------------------------------+---------------------------------------+
| I can\'t list my completed tasks,     |                                       |
| because the `list` report has a       |    $ task rc.report.list.filter: list |
| filter that shows only pending tasks. |     $ task all                        |
+---------------------------------------+---------------------------------------+
| Do I have the latest released         |     $ curl https:/                    |
| version?                              | /gothenburgbitfactory.org/latest/task |
|                                       |     2.5.3                             |
|                                       |     $ task --version                  |
|                                       |     2.5.3                             |
+---------------------------------------+---------------------------------------+
:::
