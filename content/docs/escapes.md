---
title: "Taskwarrior - Escaping Command Line Characters"
draft: false
---

# Escaping Command Line Characters

Certain characters are interpreted by the shell.
For example, the `&`.
If you wish to include the `&` in a task description, you need to escape it, so the shell doesn\'t interpret it.
For example:

    $ task add Buy bread & milk

This command is an error because of the `&`.
The shell will consider this to be two commands:

    $ task add Buy bread &
    $ milk

The shell treats the `&` character as an indicator that the command is complete and should be run in the background.
Then the shell considers \"milk\" to be a command all by itself, which it is not.
One way to get around this is to individually escape the `&` character:

    $ task add Buy bread \& milk

Another is to quote the entire description, with either `'` or `"` characters:

    $ task add "Buy bread & milk"

If you wish to use quotes in the task description itself, you can individually escape them:

    $ task add Don\'t forget eggs

In other situations, the shell sees spaces and breaks up arguments.
For example, this command:

``````
    $ task 123 modify /from this/to that/

is broken up into several arguments, which is corrected with quotes:

    $ task 123 modify "/from this/to that/"

## Projects with Spaces

Suppose you want to use a project name that contains spaces.
This requires escaped quotes:

    $ task add Buy potatoes project:\'Food and Groceries\'

The reason for this is that when the shell sees quotes, it preserves the contents between the quotes as a single argument, but does not preserve the quotes themselves.
By adding the backslash to the quotes, you guarantee that taskwarrior gets to see the quotes.
This is an unfortunate situation, but a common one for programs that accept a wide variety of command line characters.

## Shutting Off Parsing

There is a special command line argument which is two hyphens `--`, and when this is used, special command line handling is disabled from that point onwards, which means all subsequent arguments are considered part of a task description:

    $ task add -- project:Home needs scheduling

## When All Else Fails...

There is a solution.
We don\'t like it, but it exists for difficult cases.
The [`edit` command](#) is a way to bypass all the shell problems.
Simply do this:

    $ task add placeholder
    $ task 1 edit

The [`edit` command](#) drops you into a text editor where you can compose arbitrarily complex task descriptions and annotations without the need to consider quoting and escapes.

## Special Shell Characters

There are many characters that are considered special by the shell, and may need to be escaped in order that they may be used on the taskwarrior command line.
Those characters include:

    $ ! ' " ( ) ; \ ` * ? { } [ ] < > | & % # ~ @
