---
title: "Taskwarrior - Add Command"
---

# add

The `add` command is the primary means of creating tasks.
The simplest task requires only a description:

```
$ task add Fix the leaky plumbing
```

You can enter the description as above, just by including the words as command line arguments.
You can also provide quoted strings:

```
$ task add "Don't forget to shut off the main water valve first"
```

In this example the double-quotes hide the single unclosed quote in "Don't".

You can also enter multi-line descriptions using quoted strings:

```
$ task add "Five syllables here
Seven more syllables there
Are you happy now?"
```

It is a good idea to quote task descriptions to avoid some problems with the shell, although not necessary.
The (outer) quotes are not considered part of the description, in fact Taskwarrior never sees them because the shell removes them first.
Dealing with shell issues is covered in detail in the [Escaping Shell Characters](#) page.

## Other Attributes

In addition to a description, other attributes may be provided in the following manner:

```
$ task add Find the adjustable wrench project:Home priority:H
```

This example sets a project and a priority, to a new task.
Note that the order of the words in the task description are preserved, but there is no need to put the project and priority at the end of the command - they may appear anywhere on the line.
Here are two equivalent commands to illustrate this:

```
$ task add Find the project:Home adjustable priority:H wrench
$ task add project:Home priority:H Find the adjustable wrench
```

In addition to project and priority, you may set the entry timestamp, start timestamp, due date, tags, recurrence frequency, until date, and status.
You cannot add annotations while creating a task because it interferes with the task description.
You may specify anything else except the ID and UUID.
These are created automatically.

## Limitations

- There is no way to simultaneously add a task and annotate it.
  Annotations must be applied to existing tasks.

## See Also

Other ways of creating tasks include:

- [`log`](../log/) command
- `duplicate` command
- `import` command
