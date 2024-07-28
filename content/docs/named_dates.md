---
title: "Taskwarrior - Named Dates"
---

# Named Dates

The term 'date' is used here to describe a timestamp of varying precision and specificity.
The terms 'timestamp', or 'datetime' also apply.

Taskwarrior supports the notion of specifying dates in several ways.
There are ISO-8601 dates:

```
2014-06-07T16:55:04-05:00
2014-W23
20140607
```

There are `rc.dateformat` dates, the default being `Y-M-D`:

```
2014-06-07
```

This document enumerates and defines other dates, such as `tomorrow` and many others.

## Days of the Week

The days of the week are interpreted as the next day in the future.
To specify a day in the past, use a different date format.

* `mon`, `monday`, `Monday`  - The date of the nearest future monday at 0:00:00 local.


## Day Ordinals

Day ordinals are the days in the month, numbered starting from 1, to either the 28th, 29th, 30th or 31st, depending on the current month.

* `1st`, `2nd`, `3rd`, ...  - The date of the nearest future Nth day at 0:00:00 local.

Note that if today is February 20th, specifying `31st` is an error, and does not mean March 31.
For this, use a precise date format.

## Months of the Year

The months of the year are interpreted as the first day of the next month of that name in the future.
To specify a month in the past, use a different date format.

* `jan`, `january`, `January`    - The date of the nearest future January 1st, at 0:00:00 local.


## Year Dates

Year dates are abbreviated names for dates within the year, that occur at various boundaries.
The abbreviations use 's' to mean the start, and 'e' to mean the end of the period.
The periods are indicated using 'm' (month), 'q' (quarter) and 'y' (year).
So the date 'soy' means 'start of year'.

* `soy`, `eoy`   - Start of the current year. End of the current year. Time is 0:00:00 local, 23:59:59 local.
* `socq`, `eoq`  - Start of the current quarter. End of the current quarter. Time is 0:00:00 local, 23:59:59 local.
* `som`, `eom`   - Start of the current month. End of the current month. Time is 0:00:00 local, 23:59:59 local.
* `sony`, `eony` - Start of the next year. End of the next year. Time is 0:00:00 local, 23:59:59 local.
* `sonq`, `eonq` - Start of the next quarter. End of the next quarter. Time is 0:00:00 local, 23:59:59 local.
* `sonm`, `eonm` - Start of the next month. End of the next month. Time is 0:00:00 local, 23:59:59 local.
* `sopy`, `eopy` - Start of the previous year. End of the previous year. Time is 0:00:00 local, 23:59:59 local.
* `sopq`, `eopq` - Start of the previous quarter. End of the previous quarter. Time is 0:00:00 local, 23:59:59 local.
* `sopm`, `eopm` - Start of the previous month. End of the previous month. Time is 0:00:00 local, 23:59:59 local.

There is redundancy in this table, and it exists for the sake of symmetry.
Bellow figure illustrates some of the cases.

```goat
                            sopm     NOW
                              |       |
                              v       v
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
| Dec | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Jan |
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
      ^                 ^           ^     ^           ^                       ^
      |                 |           |     |           |                       |

     soy               soq         som   eom         sep                     eoy
                                         sonm                               sony
                                                                             jan
```

## Week Dates

Week dates are abbreviated names for dates within the week, that occur at various boundaries.
The abbreviations use 's' to mean the start, and 'e' to mean the end of the period.
The periods are indicated using 'd' (day), 'w' (week).

* `sow`, `eow` - Start of the current week. End of the current week. Time is 0:00:00 local.
* `sonw`, `eonw`   - Start of the next week. End of the next week. Time is 0:00:00 local.
* `sonww`, `eonww` - Start of the next work week. End of the next work week. Time is 0:00:00 local.
* `sopw`, `eopw`   - Start of the previous week. End of the previous week. Time is 0:00:00 local.
* `sopww`, `eopww` - Start of the previous work week. End of the previous work week. Time is 0:00:00 local.
* `sod`, `eod`   - Start of today. End of today. Time is 0:00:00 local.
* `yesterday`    - Start of yesterday. Time is 0:00:00 local.
* `today`        - Start of today. Time is 0:00:00 local.
* `now`          - Right now.
* `tomorrow`     - Start of tomorrow. Time is 0:00:00 local.

Again, there is redundancy in the table, for the sake of symmetry.

```goat
                                   NOW
                                    |
                                    v
---+-----+-----+-----+-----+-----+-----+-----+-----+-----+---
   | Sat | Sun | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
---+-----+-----+-----+-----+-----+-----+-----+-----+-----+---
               ^           ^     ^     ^     ^           ^
               |           |     |     |     |           |

              sow        sopd   sod   eod   eoww        eow
              soww    yesterday today tomorrow          sonw

```

## Calculated Dates

These dates are from algorithms, and easily calculated.
Also every date and synonym can be checked with `task calc <name-of-date>`

* `later`, `someday`                                               - December 30th, 9999 - the end of time. Time is 0:00:00 local.
* `easter`, `eastermonday`, `pentecost`, `ascension`, `goodfriday` - Time is 0:00:00 local.
* `midsommarafton`, `midsommar`                                    - First Friday and Saturday after 19th June. Time is 0:00:00 local.
