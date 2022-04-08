---
title: "Activity Digest: July 2016"
date: 2016-08-10
---

### Activity Digest: July 2016 

This is an ongoing series of activity reports, published monthly, to highlight activity in our projects.
Here is what happened in July 2016. This is not a complete list of all activity, just work that results in a non-trivial change.
For a full list, see the git history of all the projects.

#### Summary

July was spent mostly getting Timewarrior ready for beta.

| Date       |                                                                                                                                                               |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2016-07-02 | - [#18: The \'total\' summands in the month report are not aligned with the column name](https://github.com/GothenburgBitFactory/timewarrior/issues/18) fixed |
|            | - [#22: Warn when new tags are being created](https://github.com/GothenburgBitFactory/timewarrior/issues/22) fixed                                            |
|            | - [#28: Week number does not agree with Taskwarrior](https://github.com/GothenburgBitFactory/timewarrior/issues/28) fixed                                     |
|            | - libshared: End of day is now `24:00:00` and not `23:59:59`                                                                                                  |
|            | - libshared: Week start is Monday, per isO-8601                                                                                                               |
| 2016-07-03 | - [#17: Task spanning over whole day should show up as taking 24:00 instead of 23:59](https://github.com/GothenburgBitFactory/timewarrior/issues/17) fixed    |
|            | - taskwarrior.org: The [tools page](/tools) now shows Github star ratings                                                                                     |
|            | - Timewarrior: Added basic themes                                                                                                                             |
| 2016-07-04 | - [#20: report command does not find extensions](https://github.com/GothenburgBitFactory/timewarrior/issues/20) fixed                                         |
|            | - [#30: The \'day\' chart crashes if there is an open interval and no others](https://github.com/GothenburgBitFactory/timewarrior/issues/30) fixed            |
|            | - Timewarrior: Fixed bug with `:lastweek`, `:lastmonth`, `:lastquarter` and `:lastyear` hints                                                                 |
|            | - Timewarrior: Added `merge` command                                                                                                                          |
| 2016-07-06 | - [#19: Ids displayed incorrectly](https://github.com/GothenburgBitFactory/timewarrior/issues/19) fixed                                                       |
|            | - [#25: ids of tracked activities should not change when editing](https://github.com/GothenburgBitFactory/timewarrior/issues/25) fixed                        |
|            | - Timewarrior: Fixed UTF-8 encoding in Taskwarrior hook                                                                                                       |
|            | - Timewarrior: Charts now always show the week number for the first line                                                                                      |
| 2016-07-09 | - Timewarrior: Most commands now support `:fill` hint, via validation                                                                                         |
| 2016-07-10 | - libshared: Fixed errors `8am` and other informal time formats                                                                                               |
|            | - libshared: Fixed daylight savings adjustment error                                                                                                          |
| 2016-07-16 | - Timewarrior: Added DOM access and `get` command                                                                                                             |
| 2016-07-17 | - Timewarrior: Renamed `reports.<type>.style=compact` to `reports.<type>.axis=internal`                                                                       |
|            | - Timewarrior: Detects when `@id` values are missing                                                                                                          |
| 2016-07-18 | - libshared: Fixed errors with `eocw`, `sow`, `eow`, `soww` and `eoww`                                                                                        |
|            | - Timewarrior: New `delete` command                                                                                                                           |
| 2016-07-23 | - Timewarrior: New extension script `totals.py`                                                                                                               |
| 2016-07-24 | - Timewarrior: Errors now yield a non-zero exit code                                                                                                          |
|            | - Timewarrior: Now detects `@id` range errors                                                                                                                 |
| 2016-07-25 | - Timewarrior: [beta release](/news/news.20160725)                                                                                                            |
| 2016-07-30 | - Timewarrior: The `totals.py` extension now obeys color settings                                                                                             |
