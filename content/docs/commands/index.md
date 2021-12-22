---
title: "Taskwarrior - What's next?"
---

[]{#commands}

### Commands

Here are the commands alphabetically. Version-specific features are labelled
with the version in which they were first available.

  ---------------------------------------------------------------------------- ------------------------------------------------------------------
  [`add`{.sample}](/docs/commands/add.html)                                    Add a new task
  `annotate`{.sample .text-muted}                                              Add an annotation to a task
  [`append`{.sample}](/docs/commands/append.html)                              Append words to a task description
  [`calc`{.sample}](/docs/commands/calc.html) [2.4.0]{.label .label-success}   Expression calculator
  `config`{.sample .text-muted}                                                Modify configuration settings
  `context`{.sample .text-muted}                                               Manage contexts
  [`count`{.sample}](/docs/commands/count.html)                                Count the tasks matching a filter
  `delete`{.sample .text-muted}                                                Mark a task as deleted
  `denotate`{.sample .text-muted}                                              Remove an annotation from a task
  [`done`{.sample}](/docs/commands/done.html)                                  Complete a task
  `duplicate`{.sample .text-muted}                                             Clone an existing task
  `edit`{.sample .text-muted}                                                  Launch your text editor to modify a task
  `execute`{.sample .text-muted}                                               Execute an external command
  [`export`{.sample}](/docs/commands/export.html)                              Export tasks in JSON format
  `help`{.sample .text-muted}                                                  Show high-level help, a cheat-sheet
  `import`{.sample .text-muted}                                                Import tasks in JSON form
  [`log`{.sample}](/docs/commands/log.html)                                    Record an already-completed task
  `logo`{.sample .text-muted}                                                  Show the Taskwarrior logo
  [`modify`{.sample}](/docs/commands/modify.html)                              Modify one or more tasks
  [`prepend`{.sample}](/docs/commands/prepend.html)                            Prepend words to a task description
  `purge`{.sample .text-muted} [2.6.0]{.label .label-success}                  Completely removes tasks, rather than change status to `deleted`
  `start`{.sample .text-muted}                                                 Start working on a task, make active
  `stop`{.sample .text-muted}                                                  Stop working on a task, no longer active
  [`synchronize`{.sample}](/docs/commands/synchronize.html)                    Syncs tasks with Taskserver
  `undo`{.sample .text-muted}                                                  Revert last change
  `version`{.sample .text-muted}                                               Version details and copyright
  ---------------------------------------------------------------------------- ------------------------------------------------------------------

[]{#custom}

### Customizable Reports

[Customizable reports](/docs/report.html) can be modified to suit your needs.
They all work in same manner, and mostly differ by the
[columns](/docs/commands/columns.html) shown, the [filter](/docs/filter.html)
applied, and the sorting performed.

Because all the customizable reports work in the same way, [the `list`
report](/docs/commands/list.html) is the only report discussed.

  --------------------------------------------- ---------------------------------------
  `active`{.sample .text-muted}                 Started tasks
  `all`{.sample .text-muted}                    Pending, completed and deleted tasks
  `blocked`{.sample .text-muted}                Tasks that are blocked by other tasks
  `blocking`{.sample .text-muted}               Tasks that block other tasks
  `completed`{.sample .text-muted}              Tasks that have been completed
  [`list`{.sample}](/docs/commands/list.html)   Pending tasks
  `long`{.sample .text-muted}                   Pending tasks, long form
  `ls`{.sample .text-muted}                     Pending tasks, short form
  `minimal`{.sample .text-muted}                Pending tasks, minimal form
  `newest`{.sample .text-muted}                 Most recent pending tasks
  `next`{.sample .text-muted}                   Most urgent tasks
  `oldest`{.sample .text-muted}                 Oldest pending tasks
  `overdue`{.sample .text-muted}                Overdue tasks
  `ready`{.sample .text-muted}                  Pending, unblocked, scheduled tasks
  `recurring`{.sample .text-muted}              Pending recurring tasks
  `unblocked`{.sample .text-muted}              Tasks that are not blocked
  `waiting`{.sample .text-muted}                Hidden, waiting tasks
  --------------------------------------------- ---------------------------------------

[]{#fixed}

### Fixed Reports

The fixed reports have minimal customization, typically only color.

  ----------------------------------------------------------------------- ----------------------------------------------
  [`burndown.daily`{.sample}](/docs/commands/burndown.html)               Burndown chart, by day
  [`burndown.monthly`{.sample}](/docs/commands/burndown.html)             Burndown chart, by month
  [`burndown.weekly`{.sample}](/docs/commands/burndown.html)              Burndown chart, by week
  `calendar`{.sample .text-muted}                                         Calendar and holidays
  `colors`{.sample .text-muted}                                           Demonstrates all supported colors
  [`columns`{.sample}](/docs/commands/columns.html)                       List of report columns and supported formats
  `commands`{.sample .text-muted} [2.5.0]{.label .label-success}          List of commands, with their behaviors
  `diagnostics`{.sample .text-muted}                                      Show diagnostics, for troubleshooting
  `ghistory.annual`{.sample .text-muted}                                  History graph, by year
  `ghistory.monthly`{.sample .text-muted}                                 History graph, by month
  `ghistory.weekly`{.sample .text-muted} [2.6.0]{.label .label-success}   History graph, by week
  `ghistory.daily`{.sample .text-muted} [2.6.0]{.label .label-success}    History graph, by day
  `history.annual`{.sample .text-muted}                                   History report, by year
  `history.monthly`{.sample .text-muted}                                  History report, by month
  `history.weekly`{.sample .text-muted} [2.6.0]{.label .label-success}    History report, by week
  `history.daily`{.sample .text-muted} [2.6.0]{.label .label-success}     History report, by day
  `ids`{.sample .text-muted}                                              Filtered list of task IDs
  [`information`{.sample}](/docs/commands/info.html)                      All attributes shown
  `projects`{.sample .text-muted}                                         Filtered list of projects, with task counts
  `reports`{.sample .text-muted}                                          List of available reports
  `show`{.sample .text-muted}                                             Filtered list of configuration settings
  `stats`{.sample .text-muted}                                            Filtered statistics
  `summary`{.sample .text-muted}                                          Filtered project summary
  `tags`{.sample .text-muted}                                             Filtered list of tags
  `timesheet`{.sample .text-muted}                                        Weekly timesheet report
  `udas`{.sample .text-muted}                                             Details of all defined UDAs
  `uuids`{.sample .text-muted}                                            Filtered list of UUIDs
  ----------------------------------------------------------------------- ----------------------------------------------

[]{#helpers}

### Helper Commands

Helper commands all begin with an underscore and they exist to provide support
for third party add-ons, such as shell completion scripts.

Helper commands generate no extraneous output, and are therefore easy to parse.
Helper commands are not intended for regular use, but there is no reason for
that to stop you.

  ---------------------------------------------------------------------------------- ---------------------------------------------------
  `_aliases`{.sample .text-muted}                                                    List of active aliases
  `_columns`{.sample .text-muted}                                                    List of supported columns
  `_commands`{.sample .text-muted}                                                   List of supported commands
  `_config`{.sample .text-muted}                                                     List of confguration setting names
  `_context`{.sample .text-muted}                                                    List of defined context names
  [`_get`{.sample}](/docs/commands/_get.html)                                        DOM accessor
  `_ids`{.sample .text-muted}                                                        Filtered list of task IDs
  `_projects`{.sample .text-muted}                                                   Filtered list of project names
  `_show`{.sample .text-muted}                                                       List of `name=value` configuration settings
  `_tags`{.sample .text-muted}                                                       Filtered list of tags in use
  `_udas`{.sample .text-muted}                                                       List of configured UDA names
  [`_unique`{.sample}](/docs/commands/_unique.html) [2.5.0]{.label .label-success}   List of unique values for the specified attribute
  `_urgency`{.sample .text-muted}                                                    Filtered list of task urgencies
  `_uuids`{.sample .text-muted}                                                      Filtered list of pending UUIDs
  `_version`{.sample .text-muted}                                                    Task version (and optional git commit)
  `_zshattributes`{.sample .text-muted}                                              Zsh formatted task attribute list
  `_zshcommands`{.sample .text-muted}                                                Zsh formatted command list
  `_zshids`{.sample .text-muted}                                                     Zsh formatted ID list
  `_zshuuids`{.sample .text-muted}                                                   Zsh formatted UUID list
  ---------------------------------------------------------------------------------- ---------------------------------------------------
:::
