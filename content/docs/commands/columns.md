---
title: "Taskwarrior - Columns Command"
---

# columns

The `columns` command shows a list of all the supported columns available for inclusion in a custom report.
Each column may have multiple formats, and there are examples shown of each of those formats.

As an example, a `due` date can be shown in various ways.
It can be formatted according to the `dateformat` configuration setting.
It can also be shown as a Julian date, a POSIX epoch, in ISO-8601 format, as an \'age\' value or as a \'countdown\' value.

Each column has a default format, so if the custom report specifies:

```
report.my_list.columns=...,due,... 
```

Then the default format is used.
Other formats can be used like this:

```
report.my_list.columns=...,due.iso,...
```

Here is sample output for the `columns` command:

```
Columns     Type    Modifiable Supported Formats Example
component   string  Modifiable default*
                               indicator
depends     string  Modifiable list*             1 2 10
                               count             [3]
                               indicator         D
description string  Modifiable combined*         Move your clothes down on to the lower peg
                                                   2015-12-28 Immediately before your lunch
                                                   2015-12-28 If you are playing in the match this afternoon
                                                   2015-12-28 Before you write your letter home
                                                   2015-12-28 If you're not getting your hair cut
                               desc              Move your clothes down on to the lower peg
                               oneline           Move your clothes down on to the lower peg 2015-12-28 Immediately before your lunch 2015-12-28 If you are playing in the match this afternoon 2015-12-28 Before you write your letter home 2015-12-28 If you're not getting your hair cut
                               truncated         Move your clothes do...
                               count             Move your clothes down on to the lower peg [4]
                               truncated_count   Move your clothes do... [4]
due         date    Modifiable formatted*        2015-12-28
                               julian            2457385.04894
                               epoch             1451308228
                               iso               20151228T131028Z
                               age               2min
                               relative          -2min
                               remaining
                               countdown         PT2M5S
end         date    Modifiable formatted*        2015-12-28
                               julian            2457385.04894
                               epoch             1451308228
                               iso               20151228T131028Z
                               age               2min
                               relative          -2min
                               remaining
                               countdown         PT2M5S
entry       date    Modifiable formatted*        2015-12-28
                               julian            2457385.04894
                               epoch             1451308228
                               iso               20151228T131028Z
                               age               2min
                               relative          -2min
                               remaining
                               countdown         PT2M5S
estimate    string  Modifiable default*
                               indicator
id          numeric Read Only  number*           123
imask       numeric Read Only  number*           12
mask        string  Read Only  default*          ++++---
modified    date    Modifiable formatted*        2015-12-28
                               julian            2457385.04894
                               epoch             1451308228
                               iso               20151228T131028Z
                               age               2min
                               relative          -2min
                               remaining
                               countdown         PT2M5S
parent      string  Read Only  long*             f30cb9c3-3fc0-483f-bfb2-3bf134f00694
                               short             f30cb9c3
priority    string  Modifiable default*
                               indicator
project     string  Modifiable full*             home.garden
                               parent            home
                               indented            home.garden
recur       string  Modifiable duration*         weekly
                               indicator         R
scheduled   date    Modifiable formatted*        2015-12-28
                               julian            2457385.04894
                               epoch             1451308228
                               iso               20151228T131028Z
                               age               2min
                               relative          -2min
                               remaining
                               countdown         PT2M5S
start       date    Modifiable formatted*        2015-12-28
                               julian            2457385.04894
                               epoch             1451308228
                               iso               20151228T131028Z
                               age               2min
                               relative          -2min
                               remaining
                               countdown         PT2M5S
                               active            *
status      string  Modifiable long*             Pending
                               short             P
tags        string  Modifiable list*             home @chore next
                               indicator         +
                               count             [2]
tracnumber  numeric Modifiable default*
                               indicator
tracsummary string  Modifiable default*
                               indicator
tracurl     string  Modifiable default*
                               indicator
until       date    Modifiable formatted*        2015-12-28
                               julian            2457385.04894
                               epoch             1451308228
                               iso               20151228T131028Z
                               age               2min
                               relative          -2min
                               remaining
                               countdown         PT2M5S
urgency     numeric Modifiable real*             4.6
                               integer           4
uuid        string  Read Only  long*             f30cb9c3-3fc0-483f-bfb2-3bf134f00694
                               short             f30cb9c3
wait        date    Modifiable formatted*        2015-12-28
                               julian            2457385.04894
                               epoch             1451308228
                               iso               20151228T131028Z
                               age               2min
                               relative          -2min
                               remaining
                               countdown         PT2M5S
         Modifiable default*
                               indicator
                               
* Means default format, and therefore optional.  For example, 'due' and 'due.formatted' are equivalent.
```
