---
title: "Taskwarrior - Verbosity"
---

# Verbosity

Taskwarrior provides feedback when commands are run, the amount of which can be controlled.
There is a configuration variable named `verbose` that can be set to different values to control verbosity.
By default, the value is:

    verbose=yes

This value causes Taskwarrior to show all feedback.
Conversely, it can be set to:

    verbose=no

This restricts the amount of feedback, but still retains useful information.
To remove all feedback, use the setting:

    verbose=nothing

## Fine Control

Individual verbosity settings can be specified, in this form:

    verbose=footnote,label

The value in this case consists of two tokens which cause footnotes to be shown after the tasks in a report, and table column labels.

## Verbosity Tokens

* blank      - Inserts blank lines in the output to separate the task lists from other feedback.
* header     - Shows information before the task list, regarding aliases or the default command.
* footnote   - Shows information after the task list, such as configuration overrides.
* label      - Shows column labels for tabular output.
* new-id     - Provides feedback on any new task with IDs (and UUIDs for new deleted or completed tasks).
* new-uuid   - Provides feedback on any new task with UUIDs. Overrides new-id. Useful for automation.{{< label >}}2.6.0{{< /label >}}
* affected   - Shows how many tasks were affected by a bulk modification.
* edit       - Shows a preamble and additional text in the template when using the `edit` command.
* special    - Shows feedback when special tags are used.
* project    - Shows feedback on project status changes.
* sync       - Shows feedback during sync.
* filter     - Shows the complete filter used. {{< label >}}2.4.0{{< /label >}}
* override   - Shows in the header if TASKDATA or TASKRC are overridden. {{< label >}}2.6.0{{< /label >}}
* unwait     - Notification whe a task leaves the \`waiting\` state. Displayed in the footnote.{{< label >}}2.5.0{{< /label >}}
* context    - Show the current context. Displayed in footnote. {{< label >}}2.5.0{{< /label >}}
