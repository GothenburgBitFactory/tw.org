---
title: "Timewarrior 1.1.0 Released"
date: 2018-01-13
---

### Timewarrior 1.1.0 Released 

Timewarrior 1.1.0 is released.
With 18 months of updates, many bugs fixed, and new convenience features added, Timewarrior 1.1.0 is stable and ready.

Timewarrior tracks your time from the command line and generates reports.
Your data is stored locally in clear text.
It integrates well with Taskwarrior.

![](/images/ti.png)

Here are the changes in 1.1.0:

- Taskwarrior integration hook now uses a project `Home.Garden` as a single tag `Home.Garden` as well as individual `Home`, `Garden` tags
- Taskwarrior integration hook now stops the clock in more situations, such as deleting or waiting a task
- The `tags` command now supports filters
- New date names supported (see `timew help date` or `man timew`)
- Timewarrior and Taskwarrior now use the same date handling
- The `continue` command can resume tracking by `@id`
- When specifying a time without a date (e.g. \'10:00am\'), the day is assumed to be today, and is no longer projected back in time
- Fixed Python 3 support of the holiday/refresh script
- Added missing man page link
- Taskwarrior projects are now used as-is as tags, and also split on the \'.\' to present project hierarchy as separate tags
- Named dates `socw`, `socm`, `socq` and `socy` are now named `sow`, `som`, `soq` and `soy`.
  Similarly the `eocw`, etc. are modified.
  The `c` is now implicit.
- [#120](https://github.com/GothenburgBitFactory/taskserver/issues/120) Missing cmakedefine for HAVE\_GET\_CURRENT\_DIR\_NAME
- [#1861](https://github.com/GothenburgBitFactory/taskwarrior/issues/1861) Cygwin build fails, missing get\_current\_dir\_name
- [#1948](https://github.com/GothenburgBitFactory/taskwarrior/issues/1948) Tweak tests to have fuller TAP compliance
- [#35](https://github.com/GothenburgBitFactory/timewarrior/issues/35) Continue tracking by ID
- [#36](https://github.com/GothenburgBitFactory/timewarrior/issues/36) timew config can\'t add new value
- [#38](https://github.com/GothenburgBitFactory/timewarrior/issues/38) taskwarrior hook script doesn\'t stop recording waiting task
- [#44](https://github.com/GothenburgBitFactory/timewarrior/issues/44) Bogus command line option causes segfault
- [#45](https://github.com/GothenburgBitFactory/timewarrior/issues/45) totals.py extension script fails with an error
- [#47](https://github.com/GothenburgBitFactory/timewarrior/issues/47) refresh holiday script throws an error on nb-NO locale
- [#48](https://github.com/GothenburgBitFactory/timewarrior/issues/48) :lastweek on sunday
- [#51](https://github.com/GothenburgBitFactory/timewarrior/issues/51) Display error in visual reports (day,week,month)
- [#52](https://github.com/GothenburgBitFactory/timewarrior/issues/52) first call successfully creates new database but returns exit status 1
- [#53](https://github.com/GothenburgBitFactory/timewarrior/issues/53) Timewarrior hook is not Python3 compatible
- [#54](https://github.com/GothenburgBitFactory/timewarrior/issues/54) new theme files aren\'t installed
- [#56](https://github.com/GothenburgBitFactory/timewarrior/issues/56) in the taskwarrior hook, deleting a task doesn\'t stop the watch
- [#57](https://github.com/GothenburgBitFactory/timewarrior/issues/57) The \'refresh\' scripts overwrites previous years data
- [#63](https://github.com/GothenburgBitFactory/timewarrior/issues/63) Delete command is not always deleting
- [#66](https://github.com/GothenburgBitFactory/timewarrior/issues/66) Typo in exclusion.t.cpp
- [#67](https://github.com/GothenburgBitFactory/timewarrior/issues/67) TimeWarrior should not ignore invalid command
- [#69](https://github.com/GothenburgBitFactory/timewarrior/issues/69) Command \'stop\' with date before current interval\'s start date causes segfault
- [#70](https://github.com/GothenburgBitFactory/timewarrior/issues/70) The \'tags\' command should support a filter
- [#71](https://github.com/GothenburgBitFactory/timewarrior/issues/71) Move with :adjust leaves overlapping intervals
- [#72](https://github.com/GothenburgBitFactory/timewarrior/issues/72) Summary with parameters shows wrong ids
- [#73](https://github.com/GothenburgBitFactory/timewarrior/issues/73) Cannot shorten interval which has been moved into an exclusion
- [#74](https://github.com/GothenburgBitFactory/timewarrior/issues/74) timew config converts integers to times
- [#75](https://github.com/GothenburgBitFactory/timewarrior/issues/75) Timew starts a new interval even if a current interval contains the same set of tags
- [#78](https://github.com/GothenburgBitFactory/timewarrior/issues/78) timew move with a specific time broken on 1.1.0
- [#79](https://github.com/GothenburgBitFactory/timewarrior/issues/79) The :fill hint not properly detecting the last interval
- [#81](https://github.com/GothenburgBitFactory/timewarrior/issues/81) timew track seems to think today is tomorrow
- [#82](https://github.com/GothenburgBitFactory/timewarrior/issues/82) Tag parsing broken for tags starting with \"or\_\"
- [#85](https://github.com/GothenburgBitFactory/timewarrior/issues/85) Allow correction with filtered ids
- [#89](https://github.com/GothenburgBitFactory/timewarrior/issues/89) :adjust creates overlapping interval
- [#94](https://github.com/GothenburgBitFactory/timewarrior/issues/94) Let \'continue\' accept a date or a date range
- [#95](https://github.com/GothenburgBitFactory/timewarrior/issues/95) Timewarrior does not compile on DragonFly

Timewarrior is a relatively new project, and needs [your feedback](mailto:support@timewarrior.net). Please let us know how Timewarrior does and does not meet your needs.
We are looking to streamline the user experience.

For full details, see the ChangeLog file included in the release.
The release is immediately available as a source [tarball](/download/timew-1.1.0.tar.gz).
Binary packages for your OS may appear soon.
