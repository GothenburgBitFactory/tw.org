---
title: "Taskwarrior - Date &amp; Time"
---

# Date & Time

Taskwarrior supports date and time values.
Date fields are used to track task creation, due date, scheduled date, end date and so on, as well as providing a date type for use with [UDA](/docs/udas) fields.

Whichever format is used to accept and display date and time, Taskwarrior resolves it to a UTC epoch value, accurate to one second.
This is called Unix Time, POSIX time, or Epoch time.

But you have full control over the format entered and the format displayed, and this document is a demonstration of this.

## Due Date Example

Let us begin with an example of specifying a due date when the task is created:

```
$ task add Pay the rent due:2015-01-31
```

Or adding a due date to an existing task:

```
$ task add Pay the rent
$ task 1 modify due:2015-01-31
```

Finally, removing a due date from a task:

```
$ task 1 modify due:
```

This examples uses the default `rc.dateformat`, which is `Y-M-D`, to read the date from the command line.

## rc.dateformat

The `rc.dateformat` setting allows you to specify other formats for date input.
An example is the default, `Y-M-D`, which means a date is:

- a 4-digit year (\'Y\')
- followed by a hyphen (\'-\')
- followed by a 2-digit month (\'M\')
- followed by a hyphen (\'-\')
- followed by a 2-digit day (\'D\')

Here are the possible elements of `rc.dateformat`:

* `m`               - 1 or 2 digit month number, eg \'1\', \'12\'
* `M`               - 2 digit month number, eg \'01\', \'12\'
* `d`               - 1 or 2 digit day of month number¸ eg \'1\', \'12\'
* `D`               - 2 digit day of month number, eg \'01\', \'30\'
* `y`               - 2 digit year, eg \'12\', where the century is assumed to be \'20\', therefore \'2012\'
* `Y`               - 4 digit year, eg \'2015\'
* `h`               - 1 or 2 digit hours, eg \'1\', \'23\'
* `H`               - 2 digit hours, eg \'01\', \'23\'
* `n`               - 1 or 2 digit minutes, eg \'1\', \'59\'
* `N`               - 2 digit minutes, eg \'01\', \'59\'
* `s`               - 1 or 2 digit seconds, eg \'1\', \'59\'
* `S`               - 2 digit seconds, eg \'01\', \'59\'
* `v`               - 1 or 2 digit week number, eg \'1\', \'52\'
* `V`               - 2 digit week number, eg \'01\', \'52\'
* `a`               - 3-character English day name abbreviation, eg \'mon\', \'tue\'
* `A`               - Complete English day name, eg \'monday\', \'tuesday\'
* `b`               - 3-character English month name abbreviation, eg \'jan\', \'feb\'
* `B`               - Complete English month name, eg \'january\', \'february\'
* Everything else   - All other format characters are taken as literals

## Including Time

Using `rc.dateformat` you can specify a date with or without elements that include time.
If your dateformat omits any time elements, then you just specify the date, and the time defaults to `00:00:00`.

An example shows this using a temporary override:

```
$ task add Pay the rent due:2015-01-01
$ task 1

Name          Value
------------- ------------------------------------------
ID            1
Description   Pay the rent
Status        Pending
Entered       2015-01-02 16:57:44 (8 seconds)
Due           2015-01-01 00:00:00
Last modified 2015-01-02 16:57:44 (8 seconds)
UUID          6eb7c4d7-6323-4ee3-bf13-63c580de3712
Urgency       9.58

$ task add Open the store due:2015-01-01T08:30:00 rc.dateformat:Y-M-DTH:N:S
$ task 2

Name          Value
------------- ------------------------------------------
ID            2
Description   Open the store
Status        Pending
Entered       2015-01-02 16:58:15 (6 seconds)
Due           2015-01-01 08:30:00
Last modified 2015-01-02 16:58:15 (6 seconds)
UUID          bc8f9b89-8dea-4dae-87e5-b320b651c25c
Urgency       9.419
```

The first task added used the default `rc.dateformat` value of `Y-M-D`.
You can see that the `due` date was recorded with time `00:00:00`.

The second task added specified an `rc.dateformat` override value of `Y-M-DTH:N:S`.
You can see that the `due` date was recorded with time `08:30:00`, as specified.

You can specify date, or date + time, but whatever you specify must match your `rc.dateformat` setting.

## Reports

The `rc.dateformat` setting is used for both specifying dates on the command line, and displaying them in reports.
Most reports allow a further override, for report-specific display formats, such as `rc.report.REPORT.dateformat`, but there are others.
See `man taskrc` for a complete list.

For display purposes, there are two additional elements:

* `j`   - 1, 2 or 3 digit day-of-year number, sometimes referred to as a Julian date, eg \'1\', \'11\', or \'365\'
* `J`   - 3 digit day of year number, sometimes referred to as a Julian date, eg \'001\', \'011\', or \'365\'

## Synonyms {{< label >}}2.4.0{{< /label >}}

In addition to formatted dates, you can use a date synonym instead:

```
$ task add Pay the rent due:eom
```

Here the synonym `eom` means \'end of the month\'.
Synonyms are a useful shortcut to entering lengthy dates.
Here is the full set:

* `now`                        - Current local date and time.
* `today`                      - Current local date, with time 00:00:00.
* `sod`                        - Local date of the start of the next day, with time 00:00:00. Same as `tomorrow`.
* `eod`                        - Current local date, with time 23:59:59.
* `yesterday`                  - Local date for yesterday, with time 00:00:00.
* `tomorrow`                   - Local date for tomorrow, with time 00:00:00. Same as `sod`.
* `monday`, `tuesday`, ...     - Local date for the specified day, after today, with time 00:00:00. Can be shortened, e.g. `mon`, `tue` {{< label >}}2.6.0{{< /label >}} Can be capitalized, e.g. `Monday`, `Tue`
* `january`, `february`, ...   - Local date for the specified month, 1st day, with time 00:00:00. Can be shortened, e.g. `jan`, `feb`. {{< label >}}2.6.0{{< /label >}} Can be capitalized, e.g. `January`, `Feb`.
* `later`, `someday`           - Local 2038-01-18, with time 00:00:00. A date far away, with semantically meaningful to GTD users.
* `soy`                        - Local date for the next year, January 1st, with time 00:00:00.
* `eoy`                        - Local date for this year, December 31st, with time 00:00:00.
* `soq`                        - Local date for the start of the next quarter (January, April, July, October), 1st, with time 00:00:00.
* `eoq`                        - Local date for the end of the current quarter (March, June, September, December), last day of the month, with time 23:59:59.
* `som`                        - Local date for the 1st day of the next month, with time 00:00:00.
* `socm`                       - Local date for the 1st day of the current month, with time 00:00:00.
* `eom`, `eocm`                - Local date for the last day of the current month, with time 23:59:59.
* `sow`                        - Local date for the next Sunday, with time 00:00:00.
* `socw`                       - Local date for the last Sunday, with time 00:00:00.
* `eow`, `eocw`                - Local date for the end of the week, Saturday night, with time 00:00:00.
* `soww`                       - Local date for the start of the work week, next Monday, with time 00:00:00.
* `eoww`                       - Local date for the end of the work week, Friday night, with time 23:59:59.
* `1st`, `2nd`, ...           - Local date for the next Nth day, with time 00:00:00.
* `goodfriday`                 - Local date for the next Good Friday, with time 00:00:00.
* `easter`                     - Local date for the next Easter Sunday, with time 00:00:00.
* `eastermonday`               - Local date for the next Easter Monday, with time 00:00:00.
* `ascension`                  - Local date for the next Ascension (39 days after Easter Sunday), with time 00:00:00.
* `pentecost`                  - Local date for the next Pentecost (40 days after Easter Sunday), with time 00:00:00.
* `midsommar`                  - Local date for the Saturday after June 20th, with time 00:00:00. Swedish.
* `midsommarafton`             - Local date for the Friday after June 19th, with time 00:00:00. Swedish.

The synonyms are supported in addition to `rc.dateformat`

## ISO-8601 Format {{< label >}}2.4.0{{< /label >}}

The ISO-8601 standard defines an unambiguous format for specifying date and time around the world.
Taskwarrior supports the following formats defined by ISO-8601:

`YYYY-MM-DDThh:mm:ssZ`

`2015-06-15T12:34:56Z`

Year, month, day, hours, minutes, seconds in UTC.

`YYYY-MM-DDThh:mmZ`

`2015-06-15T12:34Z`

Year, month, day, hours, minutes, 00 seconds in UTC.

`YYYY-DDDThh:mm:ssZ`

`2015-166T12:34:56Z`

Year, day ordinal, hours, minutes, seconds in UTC.

`YYYY-DDDThh:mmZ`

`2015-166T12:34Z`

Year, day ordinal, hours, minutes, 00 seconds in UTC.

`YYYY-Www-DThh:mm:ssZ`

`2015-W24-1T12:34:56Z`

Year, week number, day of week, hours, minutes, seconds, UTC.

`YYYY-Www-DThh:mmZ`

`2015-W24-1T12:34Z`

Year, week number, day of week, hours, minutes, 00 seconds, UTC.

`YYYY-WwwThh:mm:ssZ`

`2015-W24T12:34:56Z`

Year, week number, first day of week, hours, minutes, seconds, UTC.

`YYYY-WwwThh:mmZ`

`2015-W24T12:34Z`

Year, week number, first day of week, hours, minutes, 00 seconds, UTC.

`YYYY-MM-DDThh:mm:ss+hh:mm`\
`YYYY-MM-DDThh:mm:ss-hh:mm`

`2015-06-15T12:34:56+05:00`\
`2015-06-15T12:34:56-05:00`

Year, month, day, hours, minutes, seconds, positive or negative offset from UTC of hours, minutes.

`YYYY-MM-DDThh:mm+hh:mm`\
`YYYY-MM-DDThh:mm-hh:mm`

`2015-06-15T12:34+05:00`\
`2015-06-15T12:34-05:00`

Year, month, day, hours, minutes, 00 seconds, positive or negative offset from UTC of hours, minutes.

`YYYY-DDDThh:mm:ss+hh:mm`\
`YYYY-DDDThh:mm:ss-hh:mm`

`2015-166T12:34:56+05:00`\
`2015-166T12:34:56-05:00`

Year, day ordinal, hours, minutes, seconds, positive or negative offset from UTC of hours, minutes.

`YYYY-DDDThh:mm+hh:mm`\
`YYYY-DDDThh:mm-hh:mm`

`2015-166T12:34+05:00`\
`2015-166T12:34-05:00`

Year, day ordinal, hours, minutes, 00 seconds, positive or negative offset from UTC of hours, minutes.

`YYYY-Www-DThh:mm:ss+hh:mm`\
`YYYY-Www-DThh:mm:ss-hh:mm`

`2015-W24-1T12:34:56+05:00`\
`2015-W24-1T12:34:56-05:00`

Year, week number, day number, hours, minutes, seconds, positive or negative offset from UTC of hours, minutes.

`YYYY-Www-DThh:mm+hh:mm`\
`YYYY-Www-DThh:mm-hh:mm`

`2015-W24-1T12:34+05:00`\
`2015-W24-1T12:34-05:00`

Year, week number, day number, hours, minutes, 00 seconds, positive or negative offset from UTC of hours, minutes.

`YYYY-WwwThh:mm:ss+hh:mm`\
`YYYY-WwwThh:mm:ss-hh:mm`

`2015-W24T12:34:56+05:00`\
`2015-W24T12:34:56-05:00`

Year, week number, first day of week, hours, minutes, seconds, positive or negative offset from UTC of hours, minutes.

`YYYY-WwwThh:mm+hh:mm`\
`YYYY-WwwThh:mm-hh:mm`

`2015-W24T12:34+05:00`\
`2015-W24T12:34-05:00`

Year, week number, first day of week, hours, minutes, 00 seconds, positive or negative offset from UTC of hours, minutes.

`YYYY-MM-DDThh:mm:ss`

`2015-06-15T12:34:56`

Year, month, day, hours, minutes, seconds, local time.

`YYYY-MM-DDThh:mm`

`2015-06-15T12:34`

Year, month, day, hours, minutes, 00 seconds, local time.

`YYYY-DDDThh:mm:ss`

`2015-166T12:34:56`

Year, day ordinal, hours, minutes, seconds, local time.

`YYYY-DDDThh:mm`

`2015-166T12:34`

Year, day ordinal, hours, minutes, 00 seconds, local time.

`YYYY-Www-DThh:mm:ss`

`2015-W24-1T12:34:56`

Year, week number, day number, hours, minutes, seconds, local time.

`YYYY-Www-DThh:mm`

`2015-W24-1T12:34`

Year, week number, day number, hours, minutes, 00 seconds, local time.

`YYYY-WwwThh:mm:ss`

`2015-W24T12:34:56`

Year, week number, first day of week, hours, minutes, seconds, local time.

`YYYY-WwwThh:mm`

`2015-W24T12:34`

Year, week number, first day of week, hours, minutes, 00 seconds, local time.

`YYYY-MM-DD`

`2015-06-15`

Year, month, day, 00:00:00 local time.
Note that this format is the same as the
`rc.dateformat` default.

`YYYY-DDD`

`2015-166`

Year, day ordinal, 00 hours, 00:00:00 local time.

`YYYY-Www-D`

`2015-W24-1`

Year, week number, day number, 00:00:00 local time.

`YYYY-Www`

`2015-W24`

Year, week number, first day of week, 00:00:00 local time.

`YYYYWwwD`

`2015W241`

Year, week number, day number, 00:00:00 local time.

`YYYYWww`

`2015W24`

Year, week number, first day of week, 00:00:00 local time.

`YYYY-MM`

`2015-06`

Year, month, first day of month, 00:00:00 local time.

`hh:mm:ssZ`

`12:34:56Z`

Today, hours, minutes, seconds in UTC.

`hh:mmZ`

`12:34Z`

Today, hours, minutes, 00 seconds in UTC.

`hh:mm:ss+hh:mm`\
`hh:mm:ss-hh:mm`

`12:34:56+05:00`\
`12:34:56-05:00`

Today, hours, minutes, seconds, positive or negative offset from UTC.

`hh:mm+hh:mm`\
`hh:mm-hh:mm`

`12:34+05:00`\
`12:34-05:00`

Today, hours, minutes, 00 seconds, positive or negative offset from UTC.

`hh:mm:ss`

`12:34:56`

Today, hours, minutes, seconds, local time.

`hh:mm`

`12:34`

Today, hours, minutes, 00 seconds, local time.

ISO dates are comprised of standard elements:

* `YYYY`   - Only four-digit years are supported by ISO-8601, no abbreviations.
* `MM`     - Two-digit, zero-padded month numbers range from `01` to `12`.
* `DD`     - Two-digit, zero-padded day numbers range from `01` to `31`, depending on month and year.
* `Www`    - Week number `W01` is defined as the first week of the year with a Thursday in it. `W01` sometimes starts at the end of December of the previous year.
Some years range from `W01` up to `W53`
* `D`      - Day of week is 1-7, Monday-Sunday.
* `DDD`    - Day ordinal is 001 for January 1st, 365 for December 31st, or 366 in a leap year.
* `T`      - A separator between date elements and time elements.
* `Z`      - Indicates UTC time, the \'Z\' means \'Zulu\', a military format.
* `+/-`    - Positive offset is *East* of UTC.
Negative offset is *West* of UTC.
* `hh`     - Two-digit, zero-padded hours, between `00` and `23`.
* `mm`     - Two-digit, zero-padded minutes, between `00` and `59`.
* `ss`     - Two-digit, zero-padded seconds, between `00` and `59`.

You can use any of the ISO formats, independent from your `rc.dateformat`
setting.
Future releases of taskwarrior will not need `rc.dateformat` for date/time input.

## Warning

It is possible to set a `dateformat` that conflicts with a built-in format, or with other parsed lex types from the command line.
Date formats are high on the lexer precedence list, and therefore able to eclipse other types.

As an example a `dateformat` of `m-d` means that this command:
```
$ task 1-5 list
```

is interpreted as this meaningless filter that always succeeds:
```
$ task 2016-01-05 list
```
