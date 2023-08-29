---
title: "Activity Digest: November 2015"
date: 2015-12-01
---

### Activity Digest: November 2015 

This is an ongoing series of activity reports, published monthly, to highlight activity in the Taskwarrior project.
Here is what happened in November 2015.

This is not a complete list of all activity, just work that results in a non-trivial change.
For a full list, see the [full Git history](https://github.com/GothenburgBitFactory/taskwarrior/commits/v2.5.0).

| Date       |                                                                                                                                                                     |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2015-11-01 | - Task: Migrated code from using C-style string formatting to C++11-style.                                                                                          |
|            | - Task: Began resolving [Flint++](https://github.com/L2Program/FlintPlusPlus) issues.                                                                               |
| 2015-11-02 | - Task: Significant performance enhancements (~45-55%) in string colorization.                                                                                      |
|            | - Task: Many C++11 changes reverted because it was discovered that Cygwin doesn't support several C++11 features with GCC 4.9                                       |
| 2015-11-03 | - Task: Performance enhancements (~3%) in JSON composition.                                                                                                         |
| 2015-11-04 | - Task: Performance enhancements (~1-3%) in ID/UUID lookups.                                                                                                        |
|            | - Task: Performance enhancements (~7-12%) by changing Task inheritance and enabling move semantics                                                                  |
| 2015-11-06 | - Task: Fixed broken build for older GCC on Cygwin                                                                                                                  |
| 2015-11-07 | - [#100: Dates in the far future give bad estimates in burndown](https://github.com/GothenburgBitFactory/taskwarrior/issues/100) fixed                              |
|            | - [#347: Estimated completion in burndown.daily shows impossible results](https://github.com/GothenburgBitFactory/taskwarrior/issues/347) fixed                     |
|            | - [#1345: some recurring intervals reset due time to midnight](https://github.com/GothenburgBitFactory/taskwarrior/issues/1345) fixed                               |
|            | - [#1473: Difference in how relative dates are specified in report filters since 2.3.0](https://github.com/GothenburgBitFactory/taskwarrior/issues/1473) fixed      |
| 2015-11-08 | - Taskd: Inherited code fixes and enhancements from Taskwarrior codebase                                                                                            |
|            | - Task: Performance enhancements (~4-21%) gained from rRelocating TDB2::gc to TDB2::load_tasks almost eliminates GC processing times, reducing them by ~96%         |
|            | - [#106: The recurrence value '2m' is not valid](https://github.com/GothenburgBitFactory/taskserver/issues/106) fixed                                               |
| 2015-11-10 | - [#1608: Wrong urgency for first report after reviving task](https://github.com/GothenburgBitFactory/taskwarrior/issues/1608) fixed                                |
|            | - Task: Performance enhancements (minimal) made by reordering date parsing formats, most common first                                                               |
| 2015-11-11 | - Task: Performance enhancements (9-45%) with file writes on high-latency systems                                                                                   |
| 2015-11-12 | - Task: Performance enhancements (~20%) for data load by improving the quoted string parsing                                                                        |
| 2015-11-15 | - Task: Added missing colors from some themes                                                                                                                       |
|            | - [#1747: task info causes segfault](https://github.com/GothenburgBitFactory/taskwarrior/issues/1747) fixed                                                         |
|            | - [#1748: some commands show color codes when re directed](https://github.com/GothenburgBitFactory/taskwarrior/issues/1748) fixed                                   |
| 2015-11-16 | - [#1526: Dates formatted as ".age", ".remaining", or ".countdown" often give blank results](https://github.com/GothenburgBitFactory/taskwarrior/issues/1526) fixed |
| 2015-11-17 | - Task: Fixed a race condition in the test suite that caused odd test failure counts                                                                                |
|            | - [#1452: The 'age' format rounds in odd ways](https://github.com/GothenburgBitFactory/taskwarrior/issues/1452) fixed                                               |
|            | - [#1507: Unable to assign a completed task as de pendency](https://github.com/GothenburgBitFactory/taskwarrior/issues/1507) fixed                                  |
| 2015-11-18 | - [#1682: rc override to non-existent alternate rc quietly uses default](https://github.com/GothenburgBitFactory/taskwarrior/issues/1682) fixed                     |
| 2015-11-22 | - Task: Performance enhancements (~2%) to JSON encoding, using lookup table                                                                                         |
| 2015-11-24 | - Task: Performance enhancements by reducing string copies un `journal.info` lookups in `undo.data`                                                                 |
|            | - [#1753: zsh completion: zregexparse:4: not enough regex argument](https://github.com/GothenburgBitFactory/taskwarrior/issues/1753) fixed                          |
