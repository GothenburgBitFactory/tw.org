---
title: "Taskwarrior - What's next?"
---

# Commands

## Commands

Here are the commands alphabetically. Version-specific features are labelled
with the version in which they were first available.

  * [`add` - Add a new task](/docs/commands/add)
  * `annotate` - Add an annotation to a task
  * [`append` - Append words to a task description](/docs/commands/append)
  * [`calc` [2.4.0]{.label .label-success} - Expression calculator](/docs/commands/calc)
  * `config` - Modify configuration settings
  * `context` - Manage contexts
  * [`count` - Count the tasks matching a filter](/docs/commands/count)
  * `delete` - Mark a task as deleted
  * `denotate` - Remove an annotation from a task
  * [`done` - Complete a task](/docs/commands/done)
  * `duplicate` - Clone an existing task
  * `edit` - Launch your text editor to modify a task
  * `execute` - Execute an external command
  * [`export` - Export tasks in JSON format](/docs/commands/export)
  * `help` - Show high-level help, a cheat-sheet
  * `import` - Import tasks in JSON form
  * [`log` - Record an already-completed task](/docs/commands/log)
  * `logo` - Show the Taskwarrior logo
  * [`modify` - Modify one or more tasks](/docs/commands/modify)
  * [`prepend` - Prepend words to a task description](/docs/commands/prepend)
  * `purge` - Completely removes tasks, rather than change status to `deleted`
  * `start` - Start working on a task, make active
  * `stop` - Stop working on a task, no longer active
  * [`synchronize` - Syncs tasks with Taskserver](/docs/commands/synchronize)
  * `undo` - Revert last change
  * `version` - Version details and copyright


## Customizable Reports

[Customizable reports](/docs/report) can be modified to suit your needs.
They all work in same manner, and mostly differ by the [columns](/docs/commands/columns) shown, the [filter](/docs/filter) applied, and the sorting performed.

Because all the customizable reports work in the same way, [the `list` report](/docs/commands/list) is the only report discussed.

  * `active` - Started tasks
  * `all` - Pending, completed and deleted tasks
  * `blocked` - Tasks that are blocked by other tasks
  * `blocking` - Tasks that block other tasks
  * `completed` - Tasks that have been completed
  * [`list` - Pending tasks](/docs/commands/list)
  * `long` - Pending tasks, long form
  * `ls` - Pending tasks, short form
  * `minimal` - Pending tasks, minimal form
  * `newest` - Most recent pending tasks
  * `next` - Most urgent tasks
  * `oldest` - Oldest pending tasks
  * `overdue` - Overdue tasks
  * `ready` - Pending, unblocked, scheduled tasks
  * `recurring` - Pending recurring tasks
  * `unblocked` - Tasks that are not blocked
  * `waiting` - Hidden, waiting tasks

## Fixed Reports

The fixed reports have minimal customization, typically only color.

  * [`burndown.daily` - Burndown chart, by day](/docs/commands/burndown)
  * [`burndown.monthly` - Burndown chart, by month](/docs/commands/burndown)
  * [`burndown.weekly` - Burndown chart, by week](/docs/commands/burndown)
  * `calendar` - Calendar and holidays
  * `colors` - Demonstrates all supported colors
  * [`columns` - List of report columns and supported formats](/docs/commands/columns)
  * `commands` - List of commands, with their behaviors
  * `diagnostics` - Show diagnostics, for troubleshooting
  * `ghistory.annual` - History graph, by year
  * `ghistory.monthly` - History graph, by month
  * `ghistory.weekly` - History graph, by week
  * `ghistory.daily` - History graph, by day
  * `history.annual` - History report, by year
  * `history.monthly` - History report, by month
  * `history.weekly` - History report, by week
  * `history.daily` - History report, by day
  * `ids` - Filtered list of task IDs
  * [`information` - All attributes shown](/docs/commands/info)
  * `projects` - Filtered list of projects, with task counts
  * `reports` - List of available reports
  * `show` - Filtered list of configuration settings
  * `stats` - Filtered statistics
  * `summary` - Filtered project summary
  * `tags` - Filtered list of tags
  * `timesheet` - Weekly timesheet report
  * `udas` - Details of all defined UDAs
  * `uuids` - Filtered list of UUIDs

## Helper Commands

Helper commands all begin with an underscore and they exist to provide support for third party add-ons, such as shell completion scripts.

Helper commands generate no extraneous output, and are therefore easy to parse.
Helper commands are not intended for regular use, but there is no reason for that to stop you.

  * `_aliases` - List of active aliases
  * `_columns` - List of supported columns
  * `_commands` - List of supported commands
  * `_config` - List of confguration setting names
  * `_context` - List of defined context names
  * [`_get` - DOM accessor](/docs/commands/_get)
  * `_ids` - Filtered list of task IDs
  * `_projects` - Filtered list of project names
  * `_show` - List of `name=value` configuration settings
  * `_tags` - Filtered list of tags in use
  * `_udas` - List of configured UDA names
  * [`_unique` - [2.5.0]{.label .label-success}   List of unique values for the specified attribute](/docs/commands/_unique)
  * `_urgency` - Filtered list of task urgencies
  * `_uuids` - Filtered list of pending UUIDs
  * `_version` - Task version (and optional git commit)
  * `_zshattributes` - Zsh formatted task attribute list
  * `_zshcommands` - Zsh formatted command list
  * `_zshids` - Zsh formatted ID list
  * `_zshuuids` - Zsh formatted UUID list
