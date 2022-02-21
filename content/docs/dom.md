---
title: "Taskwarrior - DOM - Document Object Model"
---

# DOM - Document Object Model

Taskwarrior has a Document Object Model, or DOM, which defines a way to
reference all the data managed by taskwarrior. You may be familiar with the DOM
implemented by web browsers that let you access details on a page
programmatically. For example:

    document.getElementById("myAnchor").href

Taskwarrior allows the same kind of data access in a similar form, for example:

    1.description

This references the description text of task 1. There is a [`_get` helper
command](/docs/commands/_get) that queries data using a DOM reference.
Let\'s see it in action, by first creating a detailed task.

    $ task add Buy milk due:tomorrow +store project:Home pri:H
    $ task 1 info

    Name          Value
    ------------- ------------------------------------------
    ID            1
    Description   Buy milk
    Status        Pending
    Project       Home
    Priority      H
    Entered       2014-09-28 21:53:59 (4 seconds)
    Due           2014-09-29 00:00:00
    Last modified 2014-09-28 21:53:59 (4 seconds)
    Tags          store
    UUID          c0ab2bf6-b4f5-45c2-8420-18ab4f1ba7e7
    Urgency       16.56
                               project     1  *    1 =     1
                              priority     1  *    6 =     6
                                  tags   0.8  *    1 =   0.8
                                   due  0.73  *   12 =  8.76

All the attributes of that task are available via DOM references. Here are some
examples:

    $ task _get 1.description
    Buy milk

    $ task _get 1.uuid
    c0ab2bf6-b4f5-45c2-8420-18ab4f1ba7e7

    $ task _get c0ab2bf6-b4f5-45c2-8420-18ab4f1ba7e7.id
    1

    $ task _get 1.due.year
    2014

    $ task _get 1.due.julian
    272


## Supported References

`system.version`

The version of taskwarrior, for example:

    $ task _get system.version
    2.4.0

`system.os`

The operating system, for example:

    $ task _get system.os
    FreeBSD

`rc.<name>`

Any configuration value default, with any overrides from the `.taskrc` applied,
then with any command line overrides applied last. For example:

    $ task _get rc.data.location
    ~/.task

`<attribute>`

Any task attribute. Note that no task ID or UUID is specified, so this variant
is only useful on the command line like this:

    $ task add Pay rent due:eom wait:'due - 3days'

Note that \'due\' is a DOM reference from earlier on the command line.

`<id>.<attribute>`

Any attribute of the specified task ID. For example:

    $ task add Fix the leak depends:3 scheduled:3.due

This makes the new task dependent on task 3, and scheduled on the due date of
task 3. Note that \'3.due\' is a DOM reference of a specific task.

`<uuid>.<attribute>`

Any attribute of the specified task UUID, as above.

Any attribute that is of type `date` can be directly accessed as a date, or it
can be accessed by the elements of that date. For example:

* `<date>.year`                         - [2.4.0] The year, for example:

        $ task _get 1.due.year
        2014

* `<date>.month` - [2.4.0] The month, for example:

        $ task _get 1.due.month
        9

* `<date>.day`  - [2.4.0] The day of the month, for example:

        $ task _get 1.due.day
        29

* `<date>.week` - [2.4.0] The week number of the date, for example:

        $ task _get 1.due.week
        40

* `<date>.weekday` - [2.4.0] The numbered weekday of the date, where 0 is Sunday and 6 is Saturday. For
 example:

        $ task _get 1.due.weekday
        1

* `<date>.julian` - [2.4.0] The Julian day of the date, which is the day number of the date in the year.  For example, January 1st is 1, February 10th is 41. For example:

        $ task _get 1.due.julian
        272

* `<date>.hour` - [2.4.0] The hour of the day, for example:

        $ task _get 1.due.hour
        0

* `<date>.minute` - [2.4.0] The minute of the hour, for example:

        $ task _get 1.due.minute
        0

* `<date>.second` - [2.4.0] The seconds of the minute, for example:

        $ task _get 1.due.second
        0

Tags can be accessed as a single item as an `<attribute>`, of the individual
tags can be accessed:

* `tags.<literal>` - [2.4.0] Direct access, per-tag, for example:

        $ task _get 1.tag.home
        home

   If the tag is present, it is shown, otherwise the result is blank, and Taskwarrior exits with a non-zero status.

        $ task _get 1.tag.DUE
        DUE
        $ task _get 1.tag.OVERDUE

   Workѕ for virtual tags too, in the same manner.


Annotations are compound data structures, with two elements, which are
`description` and `entry`. Annotations are accessed by an ordinal.

* `annotations.<N>.description` - [2.4.0] The description of the Nth annotation, for example:

        $ task _get 1.annotations.0.description

* `annotations.<N>.entry` - [2.4.0] The creation timestamp of the Nth annotation, for example:

        $ task _get 1.annotations.0.entry

    Note that because `entry` is of type `date`, the individual elements can be addressed, as above, for example:

        $ task _get 1.annotations.0.entry.year
        2014

UDA values can be accessed in the same manner.
