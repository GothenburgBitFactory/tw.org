---
title: "News: Activity Digest: June 2016"
---

### Activity Digest: June 2016 [2016-07-07]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in our projects. Here is what happened in June 2016. This is not a
complete list of all activity, just work that results in a non-trivial change.
For a full list, see the git history of all the projects.

::: {.callout .callout-info}
#### Summary

The main focus for June is getting [Timewarrior](https://timewarrior.net) ready
for an alpha, and subsequent beta release. The purpose of an alpha release is to
gather feedback that guides the subsequent beta release. Timewarrior is a new
project that introduces new concepts. This new functionality needs to be refined
before a beta release.

The [Timewarrior bug
tracker](https://github.com/GothenburgBitFactory/timewarrior/issues) is now open
for business.

Although comparatively minor, [Clog 1.3.0](/news/news.20160627.html) was
released.
:::

+---------------------------------------+---------------------------------------+
| [2016-06-01]{.small}                  | -   Flod: Removed glyphs from         |
|                                       |     tinderbox report, for a more      |
|                                       |     compact appearance                |
|                                       | -   Timewarrior: Learned the new      |
|                                       |     `:ids` hint                       |
+---------------------------------------+---------------------------------------+
| [2016-06-04]{.small}                  | -   Timewarrior: Learned how to `tag` |
|                                       |     an interval                       |
+---------------------------------------+---------------------------------------+
| [2016-06-05]{.small}                  | -   Timewarrior: Learned how to       |
|                                       |     `shorten` an interval             |
|                                       | -   Timewarrior: Learned how to       |
|                                       |     `untag` an interval               |
+---------------------------------------+---------------------------------------+
| [2016-06-06]{.small}                  | -   [\#12: The \'timew\' command      |
|                                       |     considers only the last           |
|                                       |                                       |
|                                       |   interval](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/12) |
|                                       |     fixed                             |
|                                       | -   [\#13: Unicode tags not           |
|                                       |                                       |
|                                       |    working](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/13) |
|                                       |     fixed                             |
|                                       | -   libshared: Fixed date bug with    |
|                                       |     quarter calculations              |
|                                       | -   Timewarrior: Learned how to       |
|                                       |     `lengthen` an interval            |
|                                       | -   Timewarrior: Learned the          |
|                                       |     `:lastyear`, `:lastquarter` and   |
|                                       |     `:lastmonth` hints                |
+---------------------------------------+---------------------------------------+
| [2016-06-07]{.small}                  | -   Timewarrior: Supports             |
|                                       |     `theme.colors.debug`              |
+---------------------------------------+---------------------------------------+
| [2016-06-08]{.small}                  | -   [\#14: Exception after shortening |
|                                       |     task](https://github.com/Gothen   |
|                                       | burgBitFactory/timewarrior/issues/14) |
|                                       |     fixed                             |
|                                       | -   Timewarrior: Learned how to       |
|                                       |     `move` an interval                |
+---------------------------------------+---------------------------------------+
| [2016-06-10]{.small}                  | -   Timewarrior: Learned how to       |
|                                       |     `split` intervals apart           |
|                                       | -   Timewarrior: Added fully detailed |
|                                       |     help for dates and durations      |
+---------------------------------------+---------------------------------------+
| [2016-06-11]{.small}                  | -   Timewarrior: Charts now support   |
|                                       |     the `:ids` hint                   |
|                                       | -   Timewarrior: Commands now obey    |
|                                       |     the `:quiet` hint                 |
+---------------------------------------+---------------------------------------+
| [2016-06-12]{.small}                  | -   [\#121: Extract only tasks with   |
|                                       |     an                                |
|                                       | notations](https://github.com/Gothenb |
|                                       | urgBitFactory/taskwarrior/issues/121) |
|                                       |     fixed                             |
|                                       | -   [\#1833: Range filter doesn\'t    |
|                                       |     work](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1833) |
|                                       |     fixed                             |
|                                       | -   [\#11: The month report shows     |
|                                       |     multi-days current task           |
|                                       |                                       |
|                                       |  truncated](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/11) |
|                                       |     fixed                             |
|                                       | -   [\#16: Only the day\'s last       |
|                                       |     interval is considered in the     |
|                                       |     month                             |
|                                       |     report](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/16) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2016-06-13]{.small}                  | -   [\#15: Stop command shouldn\'t    |
|                                       |     interrupt unrelated               |
|                                       |     tags](https://github.com/Gothen   |
|                                       | burgBitFactory/timewarrior/issues/15) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2016-06-14]{.small}                  | -   [\#1836: Install with             |
|                                       |     -DLANGUAGE=2 flag not             |
|                                       |     work](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1836) |
|                                       |     fixed                             |
|                                       | -   Task: Corrected L10N strings that |
|                                       |     were breaking the spa-ESP build   |
+---------------------------------------+---------------------------------------+
| [2016-06-15]{.small}                  | -   [\#120: Missing cmakedefine for   |
|                                       |     HAVE\_GET\_CURRENT\               |
|                                       | _DIR\_NAME](https://github.com/Gothen |
|                                       | burgBitFactory/taskserver/issues/120) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2016-06-16]{.small}                  | -   Taskserver: Now finds the threads |
|                                       |     lib                               |
+---------------------------------------+---------------------------------------+
| [2016-06-18]{.small}                  | -   libshared: Integrated list        |
|                                       |     templates from Taskwarrior        |
|                                       | -   Timewarrior: Learned how to       |
|                                       |     `join` intervals together         |
|                                       | -   Timewarrior: Themes and holidays  |
|                                       |     are now installed                 |
+---------------------------------------+---------------------------------------+
| [2016-06-20]{.small}                  | -   [\#121: Log time in user\'s       |
|                                       |     specified                         |
|                                       |                                       |
|                                       |   timezone](https://github.com/Gothen |
|                                       | burgBitFactory/taskserver/issues/121) |
|                                       |     fixed                             |
|                                       | -   Timewarrior [Timewarrior 0.9.5    |
|                                       |     alpha](/news/news.20160620.html)  |
|                                       |     released                          |
+---------------------------------------+---------------------------------------+
| [2016-06-22]{.small}                  | -   Timewarrior: Fixed missing file   |
|                                       |     install bug                       |
+---------------------------------------+---------------------------------------+
| [2016-06-23]{.small}                  | -   [\#: The suppress context         |
|                                       |     doesn\'t suppress the newline     |
|                                       |     character](https://github.        |
|                                       | com/GothenburgBitFactory/clog/issues) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2016-06-24]{.small}                  | -   [\#: Overlapping rules are not    |
|                                       |     respected](https://github.        |
|                                       | com/GothenburgBitFactory/clog/issues) |
|                                       |     fixed                             |
|                                       | -   Clog: Test suite converted to     |
|                                       |     Python                            |
+---------------------------------------+---------------------------------------+
| [2016-06-25]{.small}                  | -   [\#119: Build fails on Debian (no |
|                                       |     C++11                             |
|                                       |                                       |
|                                       |   support)](https://github.com/Gothen |
|                                       | burgBitFactory/taskserver/issues/119) |
|                                       |     fixed                             |
|                                       | -   Clog: Man pages significantly     |
|                                       |     updated                           |
|                                       | -   libshared: Inherited JSON tests   |
|                                       |     from Taskwarrior                  |
|                                       | -   libshared: Integrated Lexer from  |
|                                       |     Timewarrior                       |
|                                       | -   Task: Began integration of        |
|                                       |     libshared                         |
+---------------------------------------+---------------------------------------+
| [2016-06-26]{.small}                  | -   Taskserver: Integrated libshared  |
|                                       | -   Taskwarrior.org: Added all        |
|                                       |     [Timewarrior                      |
|                                       |     doc                               |
|                                       | s](https://timewarrior.net/docs.html) |
|                                       | -   Taskwarrior.org: Added all [Clog  |
|                                       |     docs](/docs/clog)                 |
+---------------------------------------+---------------------------------------+
| [2016-06-27]{.small}                  | -   [\#: clog; nested include         |
|                                       |     files](https://github.            |
|                                       | com/GothenburgBitFactory/clog/issues) |
|                                       |     fixed                             |
|                                       | -   Clog: Test suite grew to include  |
|                                       |     rules parsing tests               |
|                                       | -   [Clog: 1.3.0                      |
|                                       |                                       |
|                                       |   released](/news/news.20160627.html) |
+---------------------------------------+---------------------------------------+
| [2016-06-28]{.small}                  | -   [\#24: Should handle case where   |
|                                       |     taskwarrior hook is used before   |
|                                       |     timew](https://github.com/Gothen  |
|                                       | burgBitFactory/timewarrior/issues/24) |
|                                       |     fixed                             |
|                                       | -   Timewarrior: The                  |
|                                       |     `rc.reports.<type>.totals` now    |
|                                       |     controls the \'Totals\' label     |
|                                       | -   Timewarrior: Fixed out of source  |
|                                       |     builds                            |
+---------------------------------------+---------------------------------------+
| [2016-06-30]{.small}                  | -   Timewarrior: Supports             |
|                                       |     `rc.reports.<type>.cell` to limit |
|                                       |     chart width                       |
+---------------------------------------+---------------------------------------+
