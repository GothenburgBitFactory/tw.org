---
title: "Activity Digest: March 2016"
date: 2016-04-01
---

### Activity Digest: March 2016 

This is an ongoing series of activity reports, published monthly, to highlight activity in the Taskwarrior project.
Here is what happened in March 2016.

This is not a complete list of all activity, just work that results in a non-trivial change.
For a full list, see the [full Git history](https://github.com/GothenburgBitFactory/taskwarrior/commits/2.6.0).

| Date       |                                                                                                                                                          | 
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2016-03-01 | - libshared: Gained JSON parser from Taskwarrior                                                                                                         |
| 2016-03-02 | - Guides: New repo for Taskwarrior presentations online                                                                                                  |
| 2016-03-13 | - Timewarrior: Design outline complete                                                                                                                   |
| 2016-03-16 | - libshared: Renamed from the older 'common' - a git submodule to share code across projects                                                             |
| 2016-03-17 | - Flod: Added support for submodules, using `git clone --recursive ...`                                                                                  |
|            | - Flod2: Migrated to use `libshared.git`                                                                                                                 |
|            | - libshared: Can now join strings                                                                                                                        |
|            | - libshared: Log object added                                                                                                                            |
|            | - Timewarrior: Migrated to use `libshared.git`                                                                                                           |
|            | - Timewarrior: Repo goes public                                                                                                                          |
| 2016-03-19 | - Taskwarrior.org: Added `estact` to the [Tools](/tools) page                                                                                            |
|            | - Timewarrior: Now has a working `help` command                                                                                                          |
| 2016-03-20 | - Task: Gained a new `purge` command to eliminate old data                                                                                               |
|            | - Timewarrior: Can now load data                                                                                                                         |
|            | - Timewarrior: Now has a working `extensions` command                                                                                                    |
| 2016-03-21 | - libshared: Duration class can now format in a human-readable way                                                                                       |
|            | - Timewarrior: Now tracks time using a `start` and `stop` command                                                                                        |
| 2016-03-22 | - [#1796: Implementation of circular dependency detection is inefficient](https://github.com/GothenburgBitFactory/taskwarrior/issues/1796) fixed         |
|            | - [#1810: Closing a reopened task does not update the end time](https://github.com/GothenburgBitFactory/taskwarrior/issues/1810) fixed                   |
|            | - Timewarrior: Now has a working `log` command                                                                                                           |
|            | - Timewarrior: Now has a working `export` command                                                                                                        |
|            | - Timewarrior: Now has a working `continue` command                                                                                                      |
|            | - Timewarrior: Now has a working default command                                                                                                         |
| 2016-03-23 | - [#103: Incorrect error when org does not exists](https://github.com/GothenburgBitFactory/taskserver/issues/103) fixed                                  |
|            | - Taskwarrior.org: Added mailing lists to the contribution page                                                                                          |
| 2016-03-25 | - Timewarrior: Now has a working `stop` command                                                                                                          |
|            | - Timewarrior: Added the extension API                                                                                                                   |
| 2016-03-26 | - [#50: Log when file management fails](https://github.com/GothenburgBitFactory/taskserver/issues/50) fixed                                              |
|            | - [#115: Throw error when config file is missing or not readable](https://github.com/GothenburgBitFactory/taskserver/issues/115) fixed                   |
|            | - Taskwarrior.org: Added [First Time Contributor](https://github.com/GothenburgBitFactory/taskwarrior/blob/develop/doc/devel/contrib/first_time.md) page |
|            | - Timewarrior: Now has a working `diagnostics` command                                                                                                   |
|            | - Timewarrior: Added the first color theme                                                                                                               |
|            | - Timewarrior: Added the first holiday file                                                                                                              |
|            | - Timewarrior: Added a debug report to test the extension API                                                                                            |
| 2016-03-27 | - Flod: Documentation fixes                                                                                                                              |
|            | - libshared: Now has a split function that coalesces whitespace                                                                                          |
|            | - task/libshared: Now knows when 'juhannus' is                                                                                                           |
| 2016-03-28 | - libshared: Table now switches to hyphen underlines when output is not to a TTY                                                                         |
|            | - Timewarrior: Now colorizes tags                                                                                                                        |
|            | - Timewarrior: Now has a working `tags` command                                                                                                          |
| 2016-03-29 | - All: Colored test script output propagated to all projects                                                                                             |
|            | - Task: Deprecated the `DUETODAY` virtual tag                                                                                                            |
