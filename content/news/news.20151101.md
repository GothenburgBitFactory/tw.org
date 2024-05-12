---
title: "Activity Digest: October 2015"
date: 2015-11-01
---

### Activity Digest: October 2015 

This is an ongoing series of activity reports, published monthly, to highlight activity in the Taskwarrior project.
Here is what happened in October 2015.

This is not a complete list of all activity, just work that results in a non-trivial change.
For a full list, see the [full Git history](https://github.com/GothenburgBitFactory/taskwarrior/commits/v2.5.0).

| Date       |                                                                                                                                                      |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2015-10-07 | - [#1624: Dateformat wrongly interpreted](https://github.com/GothenburgBitFactory/taskwarrior/issues/1644) fixed                                     |
| 2015-10-10 | - [#???: clog 1.2.0 fails to build](https://github.com/GothenburgBitFactory/clog/issues) fixed                                                       |
|            | - Holidata: Added Ecuador dates                                                                                                                      |
|            | - Holidata: Added Colombia dates                                                                                                                     |
|            | - Task: Added Ecuador and Colombia holidays                                                                                                          |
|            | - Task: Fixed crash bug in regex support                                                                                                             |
|            | - Task: Allows zero-padded single-digit `rc.dateformat` elements                                                                                     |
| 2015-10-11 | - Taskd: Improved error messages for the common case where `task sync init` was skipped                                                              |
|            | - Taskd: User may now override `dh_bits`, which has a better default of 2048                                                                         |
|            | - Taskd: Per Mozilla guidelines, now prefers server-side ordering of ciphers                                                                         |
|            | - Taskd: Removed default support for broken algorithms (SSLv3, TLSv1.0 (POODLE), 3DES in CBC mode, RC4, MD5)                                         |
| 2015-10-12 | - Clog: 1.2.1 released                                                                                                                               |
|            | - Vramsteg: 1.1.1 released                                                                                                                           |
| 2015-10-13 | - Task: Fixed very old bug in date coercion                                                                                                          |
| 2015-10-15 | - Task: The Bash test framework gets an update                                                                                                       |
| 2015-10-16 | - [#1739: Dates misinterpreted when no dateformat active](https://github.com/GothenburgBitFactory/taskwarrior/issues/1739) fixed                     |
| 2015-10-17 | - Tasksh: Automatic report and UDA setup for `review` command                                                                                        |
|            | - Tasksh: The `diag` command is now complete                                                                                                         |
|            | - Task: 2.5.0.beta3 released                                                                                                                         |
| 2015-10-18 | - Tasksh: Inherits the parallel test framework from taskwarrior                                                                                      |
|            | - Tasksh: The `exec` (or `!`) command is now complete                                                                                                |
|            | - Tasksh: The `review` command now takes a numeric argument indicating how many tasks should be reviewed, e.g. `review 10`                           |
|            | - [#1740: on-modify hooks fail if `date.iso` is not set](https://github.com/GothenburgBitFactory/taskwarrior/issues/1740) fixed                      |
| 2015-10-21 | - [Task: 2.5.0 released](../news.20151021/)                                                                                                          |
|            | - Task: 2.5.1 begins, which will be a bugfix and performance release                                                                                 |
| 2015-10-24 | - Task: JSON decoder performance increased                                                                                                           |
| 2015-10-28 | - Task: Code test coverage raised to 90.6%, which helps find problems                                                                                |
|            | - Task: Lots of unused code removed                                                                                                                  |
| 2015-10-29 | - Task: Now defaults to 256-colors on all platforms                                                                                                  |
|            | - Task: The `columns` command now shows whether an attribute is modifiable or read only                                                              |
|            | - Task: Mailing list for user discussions back in use: <https://groups.google .com/forum/#!forum/taskwarrior-user>.                                  |
|            | - Task: Mailing list for developer discussions back in use: <https://groups.googl e.com/forum/#!forum/taskwarrior-dev>.                              |
| 2015-10-30 | - [#1728: Task: Use Task::identifier to reference the task](https://github.com/GothenburgBitFactory/taskwarrior/issues/1728) fixed                   |
|            | - [#1744: CmdContext uses a mix of both throw and std::cout to convey errors](https://github.com/GothenburgBitFactory/taskwarrior/issues/1744) fixed |
|            | - Task: The `diagnostics` command now finds broken references between recurring task instances and templates                                         |
