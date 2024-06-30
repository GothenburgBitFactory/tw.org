---
title: "Taskwarrior - Filters"
---

# Filters

A filter is a set of command line arguments that specify a set of tasks and filters can range from being simple to very complex.
The simplest filter is an empty filter, and we can illustrate this with the `count`.

    $ task count
    100

These 100 tasks are the tasks, pending and completed, which represent are all the tasks known to Taskwarrior.
Any command that accepts a filter also accepts no filter, as shown above.
Now we introduce a filter with one term.

    $ task status:pending count
    38

This is an example of the `name : value` form for specifying attribute values.
This filter shows that there are 38 pending tasks, and therefore 62 that are not pending in some way.
This form of filter also works for other attributes:

    $ task project:Home count
    19

There are 19 tasks in the 'Home' project.

The `value` parameter can be left empty in order to match only the items that do not have a value of the relevant kind assigned to them.
For example, you can count the tasks that are not assigned to any project, like this:

    $ task project: count
    81

In this example, we can see that the tasks not assigned 'Home' project have not yet been assigned to any project at all.

Taskwarrior has other filters besides `name : value` filters.
Here are two examples, filtering on the presence and absence of a tag.

    $ task +work count
    14
    $ task -work count
    86

This shows us that 14 tasks have the 'work' tag, and 86 do not have the tag.
To search for a word in the description or annotation:

    $ task /m..ting/ count
    3

Here we see that 3 tasks have the word 'm..ting' in the description.
This is a regular expression, although it can also be just a simple word.

This assumes you haven't disabled regular expression support, using the `rc.regex` configuration setting.

## Complex Filters

Filters gain complexity by adding more filter terms and logic.
Suppose we want to see the number of tasks that have the 'Home' project, and do not have the 'work' tag.
Simply put both terms on the command line.

    $ task project:Home -work count
    18

The two terms in the filter are both applied to the set of all tasks, or in other words, a task must have both the 'Home' project and not have the 'work' tag to be counted.

When a filter contains multiple terms like this, they are treated as a logical conjunction, which is to say that both terms must match for a task to be selected by the filter.
If there were three terms in the filter, then all three must match.

This assumed conjunction is another command line syntax shortcut.
The long form of this command line is:

    $ task project:Home and -work count
    18

See the `and` operator between the filter terms?
That is assumed to be there if not specifically stated.
The unstated implication is that the disjunction ('or') is also supported.

    $ task project:Home or -work count
    90

This example asks how many tasks are part of the 'Home' project, or do not have the 'work' tag - either is a match.

## Precedence

It was mentioned earlier that the simplest filter was an empty filter, such as in use by the `count` command.
Now we shall consider the `ls` report, which has a filter of:

    $ task show report.ls.filter

    Config Variable  Value
    ---------------- --------------
    report.ls.filter status:pending

This report filter is combined with the command line filter that you specify:

    $ task project:Home ls

This yields a combined filter of:

    status:pending project:Home

Which has an implicit conjunction:

    status:pending and project:Home

Now if we want to use a disjunction filter with the `ls` command:

    $ task project:Home or project:Garden list

This is interpreted as:

    status:pending and (project:Home or project:Garden)

which includes the parentheses to group the disjunction.

Now suppose we wanted to use the filter above with the `all` command:

    $ task status:pending and (project:Home or project:Garden) all
    ...

Now, we have one more problem - those parentheses have special meaning to the shell, and must be escaped in one of the following ways:

    $ task status:pending and \(project:Home or project:Garden\) list
    ...
    $ task status:pending and '(project:Home or project:Garden)' list
    ...
    $ task status:pending and "(project:Home or project:Garden)" list

Note that there are many characters used by the taskwarrior command line that have special meaning to the shell, and as such must be properly escaped, as [described here](../escapes/).

Also note that when searching for tasks without the specified entry at the end of the parenthesis, you need to add a space, otherwise you'll get "Mismatched parentheses in expression".

    # This
    $ task '(project: )'
    # Not that
    $ task '(project:)'

## Configuration

Regular expressions in pattern filters are only used when enabled with:

    regex=on

This is the default in 2.4.0+.
If not enabled, the patterns are literal strings to be matched.
Case sensitivity for string searches and regular expressions is controlled by:

    search.case.sensitive=yes

The default is 'yes'.
