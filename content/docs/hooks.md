---
title: "Taskwarrior - Hooks v1"
---

#### Hooks v1

The API defined here is the [Hooks v1]{.kbd} API. Later versions will allow a
script to determine which version of the Hooks API is being used.
:::

[]{#hooks}

### Hooks

A hook system is a way to run other programs/scripts at certain points in
Taskwarrior\'s execution, so that processing can be influenced. These callout
points correspond to locations in the code where some critical processing is
occurring. These are called *events*.

Hook scripts are associated with events. When that event occurs, all associated
hooks scripts are run. Data is exchanged between Taskwarrior and the hook
scripts.

The hook scripts may be written in any suitable programming language. A typical
hook script will read data, perform some function, then write data and
diagnostics and exit with a status code.

There is no configuration required for the hook scripts - their presence,
accessibility and execute permission is all that is required.

[]{#events}

#### Events

Hooks are triggered by events, and the list of supported events is kept short.

  ------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `on-launch`   This event is triggered at launch, after the initialization of all data structures, but before any processing. This event provides an opportunity to prevent launch.
  `on-exit`     This event is triggered after all processing, but immediately before output is displayed, which is the last opportunity to contribute footnotes/errors. This event has no opportunity to modify tasks.
  `on-add`      This event is triggered when a new task is created, after the data has been processed, but before the task is saved. This event provides an opportunity to approve, deny or or modify the task being created.
  `on-modify`   This event is triggered when an existing task is modified, after the data has been read and processed, but before the task is saved. This event provides an opportunity to approve, deny, or further change the modification of the task.
  ------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Task completion and deletion are considered modifications, indicated by the
change to the \'status\' attribute.

[]{#git}

#### The Git Model

Following the Git model, a hook script need only exist in a specific location,
possess a recognizable name, and have execute permission, in order for it to be
run.

The location for hooks scripts is by default `~/.task/hooks`, which is itself
defined by the `rc.data.location` setting, and a `hooks` subdirectory. A hook
script must either reside in this location, or be symbolically linked into this
location. The location itself may be a symbolic link. The name of the hook
script should be of the form:

    <event>[<identifier>]

Some examples being:

    on-add
    on-add.01
    on-add-require-project

The event at the start of the script name associates the script with that event.
The optional identifier allows for multiple scripts associated with the same
event.

When there are multiple scripts associated with the same event, the order of
execution is the collating sequence of the script name. A hook script can be
disabled by either removing execute permission, renaming it, or moving it to
another location.

[]{#input}

#### Input

Input to hook scripts consists of JSON-formatted objects, one per line, in the
[Taskwarrior JSON Format](/docs/design/task.html) which is also used by the
[`export`{.sample} command](/docs/commands/export.html).

    $ task 1 export
    {"description":"Buy some milk","entry":"20141118T050231Z","status":"pending","uuid":"a360fc44-315c-4366-b70c-ea7e7520b749"}

The above example may wrap over several lines, but exported JSON always contains
1 object per line. Whitespace within the line is permitted, per the JSON
standard, but the task *must* occupy only one line of output.

[]{#output}

#### Output

Output from a hook script is a combination of a JSON-formatted task and text.
Just as the JSON for a task must occupy a single line, so must a single feedback
message. Feedback text is optional for a successful hook script, but required
for a failing script. If provided it will be displayed by Taskwarrior according
to the [verbosity setting](/docs/verbosity.html).

Here is sample output from a hypothetical spell-checking hook script:

    {"description":"Buy some milk","entry":"20141118T050231Z","status":"pending","uuid":"a360fc44-315c-4366-b70c-ea7e7520b749"}
    Spell checking found no errors.

The output is a single line JSON object which represents an optionally modified
task, and a single line of feedback text to be displayed.

There may only be one line of JSON, and it must be for the same task that was
provided as input.

[]{#status}

#### Exit Status

A hook script may exit with a zero status which signals that all is well. A
tasks emitted will be added/modified, and any feedback will be shown as a
footnote.

A hook script may exit with a non-zero status which signals a problem. This
terminates processing. All tasks emitted will be ignored. Feedback is required
in this case, and will be shown as an error.

[]{#interfaces}

#### Interfaces

The hook scripts have different responsibilities, depending on the type of hook.
Some are provided with JSON input, some are expected to indicate that processing
should continue or stop. All may provide error messages.

+---------------+---------------+---------------+---------------+---------------+
| Event         | Input         | Output        | Status\       | Status\       |
|               |               |               | Zero 0        | Non-Zero      |
+===============+===============+===============+===============+===============+
| `on-launch`   | -   None      | -   No JSON   | -   Optional  | -   Required  |
|               |               | -   Feedback  |     feedback  |     feedback  |
|               |               |               |     becomes   |     becomes   |
|               |               |               |     footnotes |     errors    |
|               |               |               | -             | -             |
|               |               |               |    Processing |    Processing |
|               |               |               |     continues |               |
|               |               |               |               |    terminates |
+---------------+---------------+---------------+---------------+---------------+
| `on-exit`     | -   JSON for  | -   No JSON   | -   Optional  | -   Required  |
|               |     a         | -   Feedback  |     feedback  |     feedback  |
|               | dded/modified |               |     becomes   |     becomes   |
|               |     tasks     |               |     footnotes |     errors    |
+---------------+---------------+---------------+---------------+---------------+
| `on-add`      | -   JSON for  | -   JSON for  | -   JSON for  | -   JSON      |
|               |     added     |     added     |     added     |     ignored   |
|               |     task      |     task      |     task      | -   Required  |
|               |               | -   Feedback  | -   Optional  |     feedback  |
|               |               |               |     feedback  |     becomes   |
|               |               |               |     becomes   |     errors    |
|               |               |               |     footnotes | -             |
|               |               |               | -             |    Processing |
|               |               |               |    Processing |               |
|               |               |               |     continues |    terminates |
+---------------+---------------+---------------+---------------+---------------+
| `on-modify`   | -   JSON for  | -   JSON for  | -   JSON for  | -   JSON      |
|               |     original  |     modified  |     modified  |     ignored   |
|               |     task      |     tasks     |     task      | -   Required  |
|               | -   JSON for  | -   Feedback  | -   Optional  |     feedback  |
|               |     modified  |               |     feedback  |     becomes   |
|               |     task      |               |     becomes   |     errors    |
|               |               |               |     footnotes | -             |
|               |               |               | -             |    Processing |
|               |               |               |    Processing |               |
|               |               |               |     continues |    terminates |
+---------------+---------------+---------------+---------------+---------------+

This means that on-launch hooks should expect 0 lines of input, on-exit 0 to
many, on-add 1, and on-modify 2.

[]{#impact}

#### Impact

The hook system is visible in several places:

-   The `diagnostics` command will enumerate hook scripts, indicating whether
    the script is executable. This helps diagnosing hook problems.
-   In debug mode (`rc.debug=1`) the hook debug mode (`rc.debug.hooks=1`) is
    automatically set.
-   Hooks have their own debug mode. Setting `rc.debug.hooks=1` will show which
    hook scripts are called, and run time. This will help hook script authors to
    minimize their runtime.
-   Setting `rc.debug.hooks=2` will also show the input, output and exit status
    of the hook scripts.

[]{#safety}

#### Safety

With any hook system there are potential problems which involve race conditions,
infinite loops and runaway cascading effects. Various measures are taken to
mitigate these problems:

-   Malformed JSON is rejected
-   Correct JSON that is not a task is simply ignored by Taskwarrior

Please note: installing hook scripts can be as dangerous as installing any
software, and if you are unsure of what the script does, don\'t install it.

[]{#examples}

#### Examples

Here are some example uses for hooks. This list is intended as inspiration, and
may not represent actual scripts that exist.

-   Policy enforcement: referencing issues, description length, project values
-   Shadow files
-   User defined special tags
-   Automatic priority escalation
-   Automated data backup
-   Making certain tasks read-only
-   Disabling features like recurrence or priorities
-   Spell-checking
-   Preventing use of profanity
-   Performing a sync on launch

There are example hook scripts installed with Taskwarrior.
:::
