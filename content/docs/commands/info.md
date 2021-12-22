---
title: "Taskwarrior - Info Command"
---

[]{#add}

### info

The `info` command (the full command name is `information`) is a way to display
all the task metadata in human-readable form. This includes
[UDAs](/docs/udas.html).

    $ task 1 info

    Name          Value
    ------------- ------------------------------------------------------------------
    ID            241
    Description   Need to map stored duration values to the supported subset on load
    Status        Pending
    Project       tw.240
    Entered       2014-09-19 11:32:22 (2 weeks)
    Last modified 2014-09-19 11:32:22 (2 weeks)
    Tags          bug
    Virtual tags  PENDING READY TAGGED UNBLOCKED
    UUID          91bbb01f-4a43-42bd-a7a3-03ce3a2451ff
    Urgency       4.882
                               project     1  *    1 =     1
                                  tags   0.8  *    1 =   0.8
                                   age 0.041  *    2 = 0.082
                               TAG bug     1  *    3 =     3

    Date                Modification
    ------------------- ------------------
    2014-09-27 11:01:02 Tags set to 'bug'.

Taskwarrior [2.4.0]{.label .label-success} will also show a detailed breakdown
of the urgency calculation, as shown.

Taskwarrior [2.4.2]{.label .label-success} will also show a list of valid
[Virtual Tags](/docs/tags.html).

The `info` command also accepts `UUID`s to identify tasks, so you can inspect
completed and deleted tasks also.

    $ task 91bbb01f-4a43-42bd-a7a3-03ce3a2451ff
     info

    Name          Value
    ------------- ------------------------------------------------------------------
    ID            241
    Description   Need to map stored duration values to the supported subset on load
    Status        Pending
    Project       tw.240
    Entered       2014-09-19 11:32:22 (2 weeks)
    Last modified 2014-09-19 11:32:22 (2 weeks)
    Tags          bug
    Virtual tags  PENDING READY TAGGED UNBLOCKED
    UUID          91bbb01f-4a43-42bd-a7a3-03ce3a2451ff
    Urgency       4.882
                               project     1  *    1 =     1
                                  tags   0.8  *    1 =   0.8
                                   age 0.041  *    2 = 0.082
                               TAG bug     1  *    3 =     3

    Date                Modification
    ------------------- ------------------
    2014-09-27 11:01:02 Tags set to 'bug'.

The `info` command also accepts filters, for example searching:

    $ task /duration\ values/ info
    ...

Taskwarrior [2.4.0]{.label .label-success} will use the `info` command in cases
when no command is specified, and the only arguments are IDs or UUIDs, for
example:

    $ task 242
    ...

[]{#config}

#### Configuration

The date format can be overridden using `dateformat.info`.

Setting `journal.info` to \'yes\' will show a change log for the task, as seen
in the examples above.

[]{#also}

#### See Also

Other ways of inspecting tasks include:

-   [`edit`{.sample}](#) command
-   [`export`{.sample}](#) command
:::
