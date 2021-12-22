---
title: "News: Activity Digest: January 2016"
---

### Activity Digest: January 2016 [2016-02-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in January 2016.

This is not a complete list of all activity, just work that results in a
non-trivial change. For a full list, see the [full Git
history](https://github.com/GothenburgBitFactory/taskwarrior/commits/v2.5.1).

+---------------------------------------+---------------------------------------+
| [2016-01-04]{.small}                  | -   clog: Code cleanup, inherited     |
|                                       |     fixes and tests from task         |
|                                       | -   taskd: The pki scripts now        |
|                                       |     respect expiration date           |
+---------------------------------------+---------------------------------------+
| [2016-01-05]{.small}                  | -   flod: Began building on-demand    |
|                                       |     system                            |
|                                       | -   taskwarrior.org: Added `systemd`  |
|                                       |     integration to the [taskserver    |
|                                       |     co                                |
|                                       | ntrol](/docs/taskserver/control.html) |
|                                       |     page                              |
+---------------------------------------+---------------------------------------+
| [2016-01-08]{.small}                  | -   task: Fix invalid context command |
|                                       |     example in man page fixed         |
+---------------------------------------+---------------------------------------+
| [2016-01-09]{.small}                  | -   task: Removed lots of obsolete    |
|                                       |     and unused code                   |
+---------------------------------------+---------------------------------------+
| [2016-01-11]{.small}                  | -   [\#23: add review option          |
|                                       |     (m)odify](https://github.com/Goth |
|                                       | enburgBitFactory/taskshell/issues/23) |
|                                       |     fixed                             |
|                                       | -   [\#1729: Directories in           |
|                                       |     .task/hooks should not be         |
|                                       |     reported as invalid               |
|                                       |                                       |
|                                       |    hooks](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1729) |
|                                       |     fixed                             |
|                                       | -   [\#1738: Starting recurring task  |
|                                       |     starts all                        |
|                                       |     rec                               |
|                                       | urrences](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1738) |
|                                       |     fixed                             |
|                                       | -   [\#1758: calendar gives an error  |
|                                       |     when context is                   |
|                                       |     set](https://github.com/Gothenbu  |
|                                       | rgBitFactory/taskwarrior/issues/1758) |
|                                       |     fixed                             |
|                                       | -   [\#1759: context with no          |
|                                       |     subcommand should do              |
|                                       |     s                                 |
|                                       | omething](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1759) |
|                                       |     fixed                             |
|                                       | -   [\#1760: Error on detection of    |
|                                       |     BOM in                            |
|                                       |                                       |
|                                       |    files](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1760) |
|                                       |     fixed                             |
|                                       | -   [\#1765: Warning \"ignoring       |
|                                       |     return value of 'int ftruncate\"  |
|                                       |     while doing make on               |
|                                       |     xubu                              |
|                                       | ntu15.10](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1765) |
|                                       |     fixed                             |
|                                       | -   [\#1772: CMakeLists shouldn\'t    |
|                                       |     hardcode libc++ on                |
|                                       |                                       |
|                                       |   Darwin](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1772) |
|                                       |     fixed                             |
|                                       | -   [\#1776: cleanup of diag          |
|                                       |                                       |
|                                       |   output](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1776) |
|                                       |     fixed                             |
|                                       | -   task: Logic that determined       |
|                                       |     `BLOCKING` and `BLOCKED` tasks    |
|                                       |     that was different in two         |
|                                       |     locations fixed                   |
|                                       | -   taskwarrior.org: Added            |
|                                       |     `on-modify.timetrack.pl` to the   |
|                                       |     [tools](/tools/index.html) page   |
+---------------------------------------+---------------------------------------+
| [2016-01-12]{.small}                  | -   [\#1743: Description cannot       |
|                                       |     contain improper                  |
|                                       |                                       |
|                                       | ordinals](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1743) |
|                                       |     fixed                             |
|                                       | -   taskd: New pki script for         |
|                                       |     checking cert expiration          |
|                                       | -   gothenburgbitfactory.org: Updated |
|                                       |     `clog` homebrew instructions      |
+---------------------------------------+---------------------------------------+
| [2016-01-15]{.small}                  | -   task: OpenBSD also puts `libuuid` |
|                                       |     functions inside `libc` fixed     |
|                                       | -   taskd: Large improvements to the  |
|                                       |     pki scripts                       |
|                                       | -   taskwarrior.org: Better defaults  |
|                                       |     for the [taskserver               |
|                                       |     co                                |
|                                       | ntrol](/docs/taskserver/control.html) |
|                                       |     page                              |
+---------------------------------------+---------------------------------------+
| [2016-01-16]{.small}                  | -   anomaly: The signal and system    |
|                                       |     rections were switched fixed      |
|                                       | -   anomaly: Incorrect error message  |
|                                       |     wording                           |
|                                       | -   anomaly: Improved C++11           |
|                                       |     CppCoreGuidelines compliance      |
|                                       | -   clog: Improved C++11              |
|                                       |     CppCoreGuidelines compliance      |
|                                       | -   clog: Improved handling for       |
|                                       |     suppressed lines, with            |
|                                       |     documentation updates             |
|                                       | -   task: Missing include that broke  |
|                                       |     Cygwin fixed                      |
|                                       | -   vramsteg: Improved C++11          |
|                                       |     CppCoreGuidelines compliance      |
|                                       | -   vramsteg: Cannot trap SIGKILL     |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2016-01-18]{.small}                  | -   common: Began work on breaking    |
|                                       |     out code shared between projects  |
|                                       |     into a separate repository, to    |
|                                       |     reduce bug fix latency and        |
|                                       |     duplication                       |
|                                       | -   task: Bad link in man pages fixed |
+---------------------------------------+---------------------------------------+
| [2016-01-23]{.small}                  | -   [\#107: Bash dependency not       |
|                                       |                                       |
|                                       | documented](https://github.com/Gothen |
|                                       | burgBitFactory/taskserver/issues/107) |
|                                       |     fixed                             |
|                                       | -   task: The text certs all expired  |
|                                       |     on the 19th fixed                 |
|                                       | -   task: Bug where                   |
|                                       |     \'rc.allow.empty.filter\' was not |
|                                       |     behaving properly fixed           |
|                                       | -   task: The `task sync init`        |
|                                       |     command now uploads all tasks,    |
|                                       |     not just pending tasks            |
|                                       | -   taskd: Modified code to allow a   |
|                                       |     `subtype:` message header without |
|                                       |     ill effects, allowing for the     |
|                                       |     `sync` message to have            |
|                                       |     speicalized options               |
+---------------------------------------+---------------------------------------+
| [2016-01-27]{.small}                  | -   task: Man page bugs fixed         |
+---------------------------------------+---------------------------------------+
| [2016-01-28]{.small}                  | -   taskwrrior.org: Unique page       |
|                                       |     titles for more readable          |
|                                       |     bookmarking                       |
+---------------------------------------+---------------------------------------+
| [2016-01-30]{.small}                  | -   flod: Central dispatcher replaced |
+---------------------------------------+---------------------------------------+
| [2016-01-31]{.small}                  | -   [\#1780: The columns.t unit test  |
|                                       |     fails two tests after 2300        |
|                                       |                                       |
|                                       |    local](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1780) |
|                                       |     fixed                             |
|                                       | -   task: Now delegates attribute     |
|                                       |     modification to `Column` objects, |
|                                       |     which will allow a whole class of |
|                                       |     bugs to be fixed                  |
+---------------------------------------+---------------------------------------+
