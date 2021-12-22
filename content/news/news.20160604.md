---
title: "News: Activity Digest: May 2016"
---

### Activity Digest: May 2016 [2016-06-04]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in our projects. Here is what happened in May 2016. This is not a
complete list of all activity, just work that results in a non-trivial change.
For a full list, see the git history of all the projects.

::: {.callout .callout-info}
#### Summary

The main focus for May is getting [Timewarrior](https://timewarrior.net) ready
for an alpha release. The purpose of an alpha release is to gather feedback that
guides the subsequent release. Timewarrior is a new project that introduces new
concepts. This new functionality needs to be refined before a beta release.

The [Timewarrior bug
tracker](https://github.com/GothenburgBitFactory/timewarrior/issues) is now open
for business.

Additionally the `libshared` library is being improved. This is a Git submodule
that nearly all the projects share, and helps with code reuse. Most importantly,
fixing bugs in `libshared` will fix bugs in all projects, without a lot of
manual patching.
:::

+---------------------------------------+---------------------------------------+
| [2016-05-01]{.small}                  | -   Task: Deprecated the `new-uuid`   |
|                                       |     verbosity token                   |
|                                       | -   Timewarrior: Added the `+`        |
|                                       |     indicator on charts, for open     |
|                                       |     intervals                         |
|                                       | -   Timewarrior: Charts stop          |
|                                       |     rendering at \'now\' instead of   |
|                                       |     EOD                               |
+---------------------------------------+---------------------------------------+
| [2016-05-02]{.small}                  | -   Timewarrior: Added support for    |
|                                       |     the `:lastweek` hint              |
|                                       | -   Timewarrior: Corrected the `:day` |
|                                       |     hint                              |
|                                       | -   Timewarrior: Finalized the API    |
|                                       |     document                          |
+---------------------------------------+---------------------------------------+
| [2016-05-03]{.small}                  | -   Timewarrior: Clarified the        |
|                                       |     definition and added help for     |
|                                       |     intervals                         |
|                                       | -   Timewarrior: Added `track`        |
|                                       |     command                           |
|                                       | -   Timewarrior: The `track` command  |
|                                       |     delegates to `start` when no      |
|                                       |     range is specified                |
+---------------------------------------+---------------------------------------+
| [2016-05-05]{.small}                  | -   Timewarrior: Added `config`       |
|                                       |     command                           |
|                                       | -   Timewarrior: The `config` command |
|                                       |     supports the `:yes` hint for      |
|                                       |     confirmation override             |
|                                       | -   Timewarrior: The `config` command |
|                                       |     exits with code `1` when a change |
|                                       |     has no effect                     |
|                                       | -   Timewarrior: Rules parsing        |
|                                       |     simplified - fewer special cases, |
|                                       |     simpler rule names                |
|                                       | -   Timewarrior: Added summary report |
|                                       |     mockup                            |
+---------------------------------------+---------------------------------------+
| [2016-05-06]{.small}                  | -   Timewarrior: Added `show`         |
|                                       |     command, for consistency with     |
|                                       |     Taskwarrior, and soon Taskserver  |
|                                       | -   Timewarrior: The command          |
|                                       |     `timew config` with no arguments, |
|                                       |     delegates to the `show` command   |
+---------------------------------------+---------------------------------------+
| [2016-05-08]{.small}                  | -   Task: Fixed the `countdown`       |
|                                       |     format that was only showing      |
|                                       |     dates in the past                 |
+---------------------------------------+---------------------------------------+
| [2016-05-09]{.small}                  | -   Timewarrior: Added                |
|                                       |     `Range::encloses` to detect       |
|                                       |     exclusions like \'lunch\'         |
+---------------------------------------+---------------------------------------+
| [2016-05-10]{.small}                  | -   Timewarrior: Fixed bug where all  |
|                                       |     command line arguments were       |
|                                       |     tokenized, leading to extra       |
|                                       |     spaces - a familiar Taskwarrior   |
|                                       |     bug                               |
+---------------------------------------+---------------------------------------+
| [2016-05-11]{.small}                  | -   Timewarrior: Exclusions now       |
|                                       |     properly anchor `<` and `>` at    |
|                                       |     midnight                          |
+---------------------------------------+---------------------------------------+
| [2016-05-12]{.small}                  | -   Timewarrior: Added                |
|                                       |     `Range::is_open` which simplifies |
|                                       |     a lot of code                     |
+---------------------------------------+---------------------------------------+
| [2016-05-13]{.small}                  | -   Timewarrior: Added `gaps` command |
|                                       | -   Timewarrior: Added assorted tests |
|                                       |     of the `gaps` command             |
|                                       | -   Timewarrior: Now loads and uses   |
|                                       |     custom tag colors                 |
|                                       | -   Timewarrior: Now that the         |
|                                       |     `config` command is working, lots |
|                                       |     of new tests are possible, and    |
|                                       |     were added                        |
+---------------------------------------+---------------------------------------+
| [2016-05-14]{.small}                  | -   libshared: `Duration` needed      |
|                                       |     precision formatting that only    |
|                                       |     showed hours                      |
|                                       | -   libshared: Bug fixed that allowed |
|                                       |     a time of `HH:MM:`                |
|                                       | -   Timewarrior: When recorded time   |
|                                       |     exceeds available time, do not    |
|                                       |     report negative remaining time    |
|                                       | -   Timewarrior: Default command now  |
|                                       |     summarizes all contiguous open    |
|                                       |     intervals                         |
|                                       | -   Timewarrior: In preparation for   |
|                                       |     an `undo` command, now records    |
|                                       |     all data-changing transactions in |
|                                       |     an `undo.data` file               |
|                                       | -   Timewarrior: Fixed bug where      |
|                                       |     total available time on a report  |
|                                       |     didn\'t add up                    |
|                                       | -   Timewarrior: Now uses precision   |
|                                       |     hour formatting                   |
|                                       | -   Timewarrior: Added range asserts  |
|                                       |     for debugging                     |
+---------------------------------------+---------------------------------------+
| [2016-05-16]{.small}                  | -   Guides: [Taskserver               |
|                                       |     Troubleshooting                   |
|                                       |     PDF](https:                       |
|                                       | //github.com/GothenburgBitFactory/gui |
|                                       | des/blob/master/taskserver-troublesho |
|                                       | oting/taskserver-troubleshooting.pdf) |
|                                       |     updated                           |
|                                       | -   OSCON 2016: [Taskwarrior          |
|                                       |     stickers](https://twitter.com/t   |
|                                       | askwarrior/status/732966869762637824) |
|                                       |     on the table (Want one? Ask)      |
|                                       | -   Timewarrior: The `stop` command   |
|                                       |     now accepts an override stop time |
|                                       | -   Timewarrior: Filter is now        |
|                                       |     applied when loading data         |
+---------------------------------------+---------------------------------------+
| [2016-05-17]{.small}                  | -   Timewarrior: Added proper         |
|                                       |     argument scanning, instead of     |
|                                       |     simply counting arguments, for    |
|                                       |     identifying the default command   |
+---------------------------------------+---------------------------------------+
| [2016-05-18]{.small}                  | -   libshared: `Datetime` was oddly   |
|                                       |     missing accessors for days,       |
|                                       |     hours, minutes, seconds           |
|                                       | -   libshared: `Duration` wasn\'t     |
|                                       |     consistent with `Datetime`        |
|                                       | -   Timewarrior: Added a `refresh`    |
|                                       |     script to update holiday files    |
|                                       | -   Timewarrior: Documented how to    |
|                                       |     update holiday files              |
+---------------------------------------+---------------------------------------+
| [2016-05-19]{.small}                  | -   Timewarrior: Added `week` report  |
|                                       | -   Timewarrior: Supports             |
|                                       |     `reports.<type>.summary` to       |
|                                       |     control display of the ѕummary    |
|                                       |     data                              |
|                                       | -   Timewarrior: Supports             |
|                                       |     `reports.<type>.lines` to control |
|                                       |     number of lines shown per day     |
+---------------------------------------+---------------------------------------+
| [2016-05-20]{.small}                  | -   [\#1827: project:ide is not       |
|                                       |                                       |
|                                       |  allowed](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1827) |
|                                       |     fixed                             |
|                                       | -   [\#1828: dateformat lacks a flag  |
|                                       |     to display day of                 |
|                                       |     week](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1828) |
|                                       |     fixed                             |
|                                       | -   Flod: Shrunk and simplified       |
|                                       |     tinderbox report                  |
|                                       | -   Timewarrior: Charts now highlight |
|                                       |     current day, and current hour     |
|                                       | -   Timewarrior: Added the `day`,     |
|                                       |     `week` and `month` reports to the |
|                                       |     documentation, with examples      |
|                                       | -   Timewarrior: Fixed bug where the  |
|                                       |     `summary` report projected open   |
|                                       |     intervals into the future         |
|                                       | -   Timewarrior: Added mockup of      |
|                                       |     `week` report                     |
|                                       | -   taskwarrior.org: Added            |
|                                       |     `Windows 10` to the [download     |
|                                       |     page](/download)                  |
|                                       | -   taskwarrior.org: Added [plan      |
|                                       |     details](/docs/design/plans.html) |
+---------------------------------------+---------------------------------------+
| [2016-05-21]{.small}                  | -   libshared: Added `Datetime`       |
|                                       |     support for `12am` which was      |
|                                       |     oddly missing                     |
|                                       | -   Timewarrior: Supports             |
|                                       |     `theme.colors.holiday`            |
|                                       | -   Timewarrior: Added `csv.py`       |
|                                       |     extension to export data in CSV   |
|                                       |     format                            |
|                                       | -   Timewarrior: Fixed assorted       |
|                                       |     quoting problems on the command   |
|                                       |     line, and in the data files       |
|                                       | -   Timewarrior: The `day` report not |
|                                       |     longer shows totals by default    |
|                                       | -   Timewarrior: Supports             |
|                                       |     `reports.<type>.totals` to        |
|                                       |     control display of day totals     |
|                                       | -   Timewarrior: Command line args    |
|                                       |     like `9` are now assumed to be    |
|                                       |     hours `9:00`                      |
|                                       | -   Timewarrior: Supports             |
|                                       |     `report.<type>.<label>` where     |
|                                       |     `<label>` is one of: `month`,     |
|                                       |     `week`, `weekday` or `day` to     |
|                                       |     control the date axis             |
|                                       | -   taskwarrior.org: Timewarrior adds |
|                                       |     [initial                          |
|                                       |     documentation](/docs#timew), with |
|                                       |     a lot more to come                |
+---------------------------------------+---------------------------------------+
| [2016-05-22]{.small}                  | -   Timewarrior: Shows holidays in a  |
|                                       |     different color on charts         |
|                                       | -   taskwarrior.org: Added new search |
|                                       |     features to the [Tools](/tools)   |
|                                       |     page, which now features          |
|                                       |     automated data scraping, to find  |
|                                       |     new Taskwarrior tools.            |
|                                       | -   taskwarrior.org: [All site        |
|                                       |                                       |
|                                       |  contributors](/support/authors.html) |
|                                       |     now listed online. Thank you all! |
|                                       | -   taskwarrior.org: Added `MSYS2` to |
|                                       |     the [download page](/download)    |
+---------------------------------------+---------------------------------------+
| [2016-05-26]{.small}                  | -   Timewarrior: In `:debug` mode,    |
|                                       |     shows data I/O details            |
|                                       | -   Timewarrior: Added a `debug()`    |
|                                       |     function to handle switchable     |
|                                       |     debug output                      |
+---------------------------------------+---------------------------------------+
| [2016-05-27]{.small}                  | -   [\#10: Two line tags causes false |
|                                       |     entry in                          |
|                                       |                                       |
|                                       |   database](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/10) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2016-05-28]{.small}                  | -   Flod: Removed unsuported          |
|                                       |     bootstrat badge styles in the     |
|                                       |     tinderbox report                  |
|                                       | -   Timewarrior: Supports             |
|                                       |     `debug.indicator = <string>`      |
|                                       |     prefix to identify debug output   |
|                                       | -   Timewarrior: Supports             |
|                                       |     `reports.<type>.range` setting to |
|                                       |     provide the default range hints   |
|                                       |     for the report                    |
|                                       | -   Timewarrior: In `:debug` mode     |
|                                       |     shows hint evaluation details     |
|                                       | -   Timewarrior: Fixed a test that    |
|                                       |     was sensitive to the number of    |
|                                       |     configuration defaults            |
|                                       | -   Timewarrior: Fixed broken         |
|                                       |     `:lastweek` hint                  |
|                                       | -   Timewarrior: Supports             |
|                                       |     `reports.gaps.range`, and has a   |
|                                       |     default                           |
|                                       | -   Timewarrior: In `:debug` mode     |
|                                       |     shows runtime data                |
|                                       | -   taskwarrior.org: Update the       |
|                                       |     [Tools](/tools) page data, after  |
|                                       |     filtering updated were pulled     |
+---------------------------------------+---------------------------------------+
| [2016-05-29]{.small}                  | -   Timewarrior: All reports now      |
|                                       |     support the `:blank` hint         |
|                                       | -   Timewarrior: Supports             |
|                                       |     `reports.<type>.hours = all|auto` |
|                                       |     setting to control the x-axis     |
|                                       | -   Timewarrior: All reports now have |
|                                       |     default settings for displaying   |
|                                       |     various elements                  |
|                                       | -   Timewarrior: Supports             |
|                                       |     `rc.<name>=<value>` command line  |
|                                       |     overrides, like Taskwarrior       |
|                                       | -   taskwarrior.org: Added 301        |
|                                       |     redirects to list of common 404s  |
+---------------------------------------+---------------------------------------+
| [2016-05-30]{.small}                  | -   libshared:                        |
|                                       |     `Datetime::sameQuarter`           |
|                                       |     suppported, needed by Timewarrior |
|                                       |                                       |
|                                       | -   Task: Now suppoorts the `QUARTER` |
|                                       |     virtual tag                       |
|                                       |                                       |
|                                       | -   Task: Now takes advantage of the  |
|                                       |     `Datetime::sameX` methods         |
|                                       |                                       |
|                                       | -   Timewarrior: Now shows two        |
|                                       |     timestamps in a minimalist way,   |
|                                       |     so instead of this:               |
|                                       |                                       |
|                                       |         Started 2016-05-30T18:29:43   |
|                                       |         Current 2016-05-30T17:04:02   |
|                                       |                                       |
|                                       |     It now omits redundant            |
|                                       |     information and shows this:       |
|                                       |                                       |
|                                       |         Started 2016-05-30T18:29:43   |
|                                       |         Current            17:04:02   |
|                                       |                                       |
|                                       | -   Timewarrior: Added the `:ids`     |
|                                       |     hint                              |
|                                       |                                       |
|                                       | -   Timewarrior: The `summary` report |
|                                       |     supports `:ids`                   |
|                                       |                                       |
|                                       | -   Timewarrior: Supports             |
|                                       |                                       |
|                                       |    `reports.<type>.holidays = yes|no` |
|                                       |     to optionally display relevant    |
|                                       |     holidays                          |
|                                       |                                       |
|                                       | -   Timewarrior: When showing         |
|                                       |     holidays, adds the country code,  |
|                                       |     for those who use multiple        |
|                                       |     holiday files                     |
|                                       |                                       |
|                                       | -   Timewarrior: Fixed tests that use |
|                                       |     relative times, and are therefore |
|                                       |     behave differently when run at    |
|                                       |     different times of the day        |
|                                       |                                       |
|                                       | -   Timewarrior: Fixed a bug where    |
|                                       |     range subtraction auto-closed the |
|                                       |     result ranges                     |
|                                       |                                       |
|                                       | -   taskwarrior.org: Added `QUARTER`  |
|                                       |     virtual tag to docs               |
+---------------------------------------+---------------------------------------+
