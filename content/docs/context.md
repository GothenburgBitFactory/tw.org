---
title: "Taskwarrior - Context"
---


# Context

A context is associated with a location. An example of this might be that you
perform tasks in three locations:

-   At the office
-   At home
-   Study

The tasks that pertain to your time in the office are meaningless if you are at
home, and vice versa. This is just an example, and your contexts will likely be
very different.

If Taskwarrior allowed you to specify which context is currently active, then
the tasks listed could be filtered accordingly. You would then be working within
a context. A context is therefore a named filter, and the current context is a
form of default filter.


## Defining a Context

In order to work within a context, you first need to define that context.
Because a context is essentially a task filter, defining a context is really
defining a named filter. In this example, we define our contexts from the list
above using the new `context define` command:

    $ task context define work +work or +freelance
    $ task context define study +school or +homework or +lab
    $ task context define home -work -freelance -school -homework -lab

The context definition may contain any form of algebraic expression just like a
filter. In the example, the contexts are based entirely on tags. Notice that
`home` is defined as neither `work` nor `study`. This means that every task is
accounted for, although this is not necessary.

It is an error to try to define a context with the names `define`, `list`,
`show`, `none`, or `delete`.


## Setting the Context

To set or switch the current context, simply:

    $ task context home
    $ task list
    ...

If you try to use an undefined context, Taskwarrior will report an error.

Now with the context set to `home`, all the tasks listed will pertain to the
`home` context, as defined. There will be a footnote after every report that
reminds you of the current context.


## Showing the Context

Although the current context is included in a footnote after every report, this
can be disabled with the verbosity controls. To show the current context:

    $ task context show
    home

This can also be obtained using `_get`:

    $ task _get rc.context
    home


## Listing All Contexts

You can list all the contexts using the new `context list` command:

    $ task context list
    Context Filter
    ------- ----------------------------------
    home    -work -freelance -school -homework
    study   +school or +homework
    work    +work or +freelance


## Clearing the Context

To clear the current context:

    $ task context none

The context `none` has special meaning. All subsequent commands will not have
any implicit context filters applied.


## Deleting a Context

To delete one of the contexts:

    $ task context delete study

Now you can no longer set the context to `study`. If the current context was
already `study` when you deleted it, the context is cleared.


## Impact on Commands

All reports that accept filters will use the context if one is defined and set.


## Related Support

The `tasksh` program will show the current context in its prompt.


## Implementation Details

Context will be stored in `rc.context` and defined contexts will be stored as
`rc.context.<name>` in the `.taskrc` file.

When a context filter is used, it will be implicitly surrounded by parentheses,
so that it may contain arbitrary logic.
