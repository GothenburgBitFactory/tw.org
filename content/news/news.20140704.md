---
title: "Taskwarrior 2.4.0 Preview"
date: 2014-07-04
---

### Taskwarrior 2.4.0 Preview 

The Taskwarrior 2.4.0 development branch has been unusable for a few weeks
([mentioned here](../news.20140524/)) while new functionality was integrated.
It has been a long process, with about 750 code changes so far, but now all the tests are passing again.

Does this mean it's ready for alpha and beta? No, not yet, because now there is a need for a lot of new tests to cover all the new functionality.
This is the next phase of cycle, improving tests, fixing open bugs, and updating documentation.

Now it's time for a preview of some of the new features...

#### Virtual Tags

Lots of new virtual tags are added, including: `YESTERDAY`, `TOMORROW`, `READY`,`PENDING`, `COMPLETED`, `DELETED` and `TAGGED`. Virtual tags run faster than algebraic equivalents, so report filters have been updated.
See the man page (`man task`) for the complete set.

#### Default `info` Command

With the updated command line parser, an old favorite feature returns - when you specify an ID but not command, the info command is assumed:

 ```
$ task 243

Name          Value
------------­ ------------------------------------------
ID            243
Description   Something is wrong with TDB2::dump
Status        Pending
Project       tw.240
Entered       2014-05-25 13:06:47 (5 weeks)
Last modified 2014-05-25 13:06:52 (5 weeks)
Tags          bug
UUID          9c2bfdd4-87d5-4396-97e2-ee1a980b9237
Urgency       4.907
                           project     1  *    1 =     1
                              tags   0.8  *    1 =   0.8
                               age 0.107  *    1 = 0.107
                           TAG bug     1  *    3 =     3

Date                Modification
------------------- --------------------------------------
2014-05-25 13:06:52 Modified set to '2014-05-25 13:06:52'.
                    Tags set to 'bug'.
```

This coexists with the `rc.default.command` feature.
Additionally, the `info` command now shows how the urgency values are calculated.

#### Hooks

The new hook system will allow a new class of extensions and add-ons.
Just copy a script into your `~/.task/hooks` directory, give it the right name, and it will be run. [Design details here](../../docs/hooks/).

#### ISO-8601 Dates

The `rc.dateformat` method of specifying dates is still supported, and used for rendering dates in reports, but regardless of your settings, you can also specify dates and times in the various ISO-8601 formats.
Here are some:

```
$ task add Buy lamp due:2014-W45
$ task add Buy rug due:2014-W40-3
$ task add Buy chair due:2014-154
$ task add Buy table due:10:30
```

There is now a more comprehensive set of [named dates](../../docs/dates/).

#### ISO-8601 Durations

Dates and durations can be calculated:

```
$ task calc eom + 3 weeks - 100 hours + 27 minutes -10 seconds
2014-08-17T20:26:49
```

For example, how much time is left until the end of the month?

```
$ task calc eocm - now
P27DT23H33M20S
```

How long is a million seconds?

```
$ task calc 1000000 seconds
P11DT13H46M40S
```

#### Calc Command and Expressions

Oh yes, there is a calc command also:

```
$ task calc '(3 * 2) + 1'
7
```

There is also a standalone `calc` utility, which can do more:

```
$ calc --postfix '3 2 * 1 +'
7
```

[Take a look here](../../docs/commands/calc/) at a more detailed look at the `calc` capabilities.
The `calc` command in Taskwarrior also has DOM access.

#### Extended DOM

The DOM has been extended so that *all* Taskwarrior data can now be externally referenced:

```
$ task calc 123.due
$ task calc 123.due.year
$ task calc 123.due.week
$ task calc 123.annotations.0.description
```

Additionally, attributes for a task can now be referenced on the command line while a task is being created:

```
$ task add Plan the party due:eoy wait:due-1month
```

#### And more...

New and updated themes.
New and updated report definitions.
New `tasksh`.
Improved `sync` diagnostics.
Better certificate validation.
Portuguese and French localizations.
UUID abbreviations.
The `show` command includes default values.
New command reference PDF. 60% more unit tests, and a new test framework.
Lots of bug fixes.

Taskwarrior 2.4.0 is a major release, and although it still needs a lengthy shakedown period, to fix all the bugs we can, it is going to provide a lot of new capabilities.
