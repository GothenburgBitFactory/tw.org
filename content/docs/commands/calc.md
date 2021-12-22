---
title: "Taskwarrior - Calc Command"
---

[]{#calc}

### calc

Taskwarrior has a `calc` command that exposes the algebraic expression evaluator
used by all other commands and filters. This is handy for quick calculations
from the command line, but combined with DOM access, can be very useful.

[]{#numbers}

#### Numbers

This can be used to perform basic mathematics using the `+`, `-`, `*` and `/`
operators:

    $ task calc 1+2*3
    7

In the above example, care was taken to not allow that `*` operator to be
expanded by the shell into a list of file in the current directory. The best
solution to this is to simply quote the expression.

In addition to integers, you can use real numbers and scientific notation:

    $ task calc '1.23e-4.5 ^ 2'
    1.5129e-8

In addition to exponentiation, `^`, there is the `%` modulus operator.

[]{#boolean}

#### Boolean

The `and`, `or`, `xor`, `==`, `!==`, `=`, `!=`, `!`, `~`, `!~`, `<=`, `<`, `>=`,
and `>` operators allow Boolean expressions:

    $ task calc true and false
    false
    $ calc true or false
    true
    $ calc true xor true
    false
    $ calc '1 < 2 and -1 < 0'
    true

A number can be converted to a Boolean value with a double negative:

    $ task calc '!!3'
    true

Otherwise, type conversions are automatic.

[]{#text}

#### Text

Text, or strings, can be manipulated in more limited ways, for example there is
concatenation:

    $ task calc foo + bar
    foobar

Multiplication is supported in the form of replication:

    $ task calc 'x * 40'
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

There is support for regular expressions, using the `~` match and `!~ ` no-match
operator:

    $ task calc 'foo ~ f'
    true
    $ task calc 'foo !~ z'
    true
    $ task calc '"The quick brown fox" ~ "q"'
    true

Again, you\'ll need to protect the `~` and `!~` characters from interpretation
by the shell, and in the last example, to protect the spaces in the sentence.

[]{#dates}

#### Dates

With date support, basic date synonyms like `now`, `today`, `yesterday` and
`tomorrow` are supported:

    $ task calc now
    2014-06-28T12:44:07
    $ task calc today
    2014-06-28T00:00:00

Dates can be added, subtracted and compared, and combined with durations:

    $ task calc tomorrow + 2 weeks - 1d
    2014-07-12T00:00:00

The expression evaluator understand ISO-8601 date formats, and in fact supports
over 40 of them. For example when does week 40 start in 2014?

    $ task calc 2014W40
    2014-09-28T00:00:00

When is the FIFA Word Cup final, which starts at 4pm in Brasil local time, shown
in the EST (local) time zone?

    $ task calc 2014-07-13T16:00:00-03:00
    2014-07-13T15:00:00

[]{#durations}

#### Durations

A duration is either the difference between dates, or a specified interval.
Durations can be summed:

    $ task calc 12h + 25m +30s
    PT12H25mPT30S

Subtracting dates yields a duration, here answering the question of how much
time is there between the end of this month (June 2014) and the end of the year:

    $ task calc eoy-eom
    P184DT1H

Note that the \'1H\' corresponds to the extra hour gained when summer time ends.

When does the 32-bit `time_t` problem (Unix Epoch, Y2K38) arrive?

    $ task calc later-now
    P23Y209DT11H55M11S

Looks like we have 23 years to deal with that. More importantly though, how long
until the FIFA World Cup final?

    $ task calc 2014-07-13T15:00:00-03:00 - now
    P15DT1H11M46S

Durations are shown using the ISO-8601 designated format, using only prescise
units, that is, not in years or months.

[]{#dom}

#### DOM Access

The expression evaluator has access to the Taskwarrior DOM, which is a complete
source of task information. This information can be accessed and used in an
expression using regular Taskwarrior DOM references:

    $ task calc '1.urgency > 2.urgency'
    false

Because of DOM access, the `calc` command can mimic the `_get` helper command.
In what year did I enter task 100?

    $ task calc 100.entry.year
    2012

What week was that?

    $ task calc 100.entry.week
    30

[]{#utility}

#### Calc Utility

Taskwarrior has a standalone `calc` utility that has the same features, with the
exception of DOM access. This utility is used for testing, but has a few
interesting features of its own.

[]{#postfix}

#### Calc Postfix

Internally, the expression evaluator converts infix expressions (1 + 2 \* 3) to
postfix (1 2 3 \* +), which is easier to implement and optimize, but `calc`
exposes this:

    $ calc --postfix '1 2 3 * +'
    7

[]{#debug}

#### Calc Debugging

There is also support for a `--debug` commadn line option, which displays the
stack operations as the expression is evaluated in postfix form.

    $ calc --postfix --debug '1 2 3 * +'
    [0] eval push '1'
    [1] eval push '2'
    [2] eval push '3'
    [3] eval pop '3'
    [2] eval pop '2'
    [1] eval operator '*'
    [1] eval result push '6'
    [2] eval pop '6'
    [1] eval pop '1'
    [0] eval operator '+'
    [0] eval result push '7'
    7

You can see that the processing begins by pushing the three values on to the
stack, then two are popped when the `*` binary operator is encountered. The two
value are multiplied, and the result, 6 is pushed back.

Next the `+` binary operator is encountered, which pops two values off the
stack, the sum, 7, is pushed back.

The number in brackets is the stack ѕize before the operation is performed.

If there is a problem found with the Taskwarrior expression evaluator, it can be
verified and tested in this way, using the `calc` utility.
:::
