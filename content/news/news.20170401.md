---
title: "Activity Digest: March 2017"
date: 2017-04-01
---

### Activity Digest: March 2017 

This is an ongoing series of activity reports, published monthly, to highlight activity in our projects.
Here is what happened in March 2017. This is not a complete list of all activity, just work that results in a non-trivial change.
For a full list, see the git history of all the projects.

#### Summary

Timewarrior bug fixes are bringing the 1.1.0 release closer.
We are down to 7
open issues currently needing to be fixed.

Taskwarrior is undergoing big changes to incorporate the new recurrence features.
This leads to instability, so if anyone is using the 2.6.0 development branch, this would be a good time to stop.

The Taskwarrior 2.6.0 branch has a `stable` tag which indicates the last commit where all tests passed on all platforms.

The libshared project got a major update to the date and duration handling features, fixing bugs and providing a consistent implementation for Taskwarrior and Timewarrior to use.

| Date       |                                                                                                                                                              | 
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2017-03-02 | - Flod: Now generates a project summary page listing latest status of all projects                                                                           |
|            | - Task: Properly captures `errno` in CmdEdit                                                                                                                 |
| 2017-03-04 | - libshared: Datetime now properly resets state after certain failed parse attempts                                                                          |
|            | - Task: Nibbler eliminated                                                                                                                                   |
|            | - Task: ISO8601d and ISO8601p eliminated                                                                                                                     |
| 2017-03-05 | - Task: Eliminated separate handling for named dates, now relying on libshared                                                                               |
| 2017-03-06 | - libshared: Fixed Datetime bugs in `eonm`, `sopww`, `som`, and `sow` calculations                                                                           |
| 2017-03-07 | - libshared: Datetime now supports abbreviated forms `{s,e}o{p,n,}{d,w,ww,m,q,y}`                                                                            |
|            | - libshared: Taskwarrior and Timewarrior now have identical Datetime support, so that `9am` no longer means same day or next day                             |
| 2017-03-09 | - [#36: Fix issue \"timew config can\'t add new value\"](https://github.com/GothenburgBitFactory/timewarrior/issues/36) fixed                                |
| 2017-03-14 | - libshared: Pig can now skip over partial phrases                                                                                                           |
|            | - libshared: ::matchLength can determine common root string lengths                                                                                          |
|            | - libshared: Inherited Taskwarrior\'s `lex` utility for parsing tests                                                                                        |
| 2017-03-15 | - libshared: Duration now accepts `0` as valid again                                                                                                         |
|            | - libshared: Configuration now properly captures original file name                                                                                          |
|            | - libshared: Durations like `1wk` now perform negative lookahead to avoid cases where a duration is found embedded in a larger context                       |
| 2017-03-19 | - libshared: Added negative lookahead for day and month names so that the \'mon\' in \'money\' does not mean \'monday\' because of the subsequent characters |
|            | - libshared: Ambiguous Datetime forms (`YYYYMMDD`, `YYYYMM`, `YYYY`, `HHMMSS` and `HHMM`) can now be disabled                                                |
|            | - [#38: taskwarrior hook script doesn\'t stop recording waiting task](https://github.com/GothenburgBitFactory/timewarrior/issues/38) fixed                   |
|            | - [#48: :lastweek on sunday](https://github.com/GothenburgBitFactory/timewarrior/issues/48) fixed                                                            |
| 2017-03-22 | - [#72: Assign ids to intervals after flattening but before filtering](https://github.com/GothenburgBitFactory/timewarrior/issues/72) fixed                  |
| 2017-03-23 | - libshared: Table can now shut of word-wrapping for columns                                                                                                 |
|            | - libshared: Fixed bug in Table that included color codes in length calculations                                                                             |
|            | - Task: The `CHILD`, `PARENT`, `INSTANCE`, and `TEMPLATE` virtual tags are now backward/forward compatible                                                   |
|            | - Task: Finally fixed some TZ-dependent tests that fail when the clocks change                                                                               |
|            | - Task: Fixed problems with the `history`, `ghistory` and `summary` reports rendering incorrectly                                                            |
| 2017-03-30 | - [#1916: grammar error \-- There are 1 local changes](https://github.com/GothenburgBitFactory/taskwarrior/issues/1916) fixed                                |
