---
title: "News: Activity Digest: May - December 2017"
---

### Activity Digest: May - December 2017 [2018-01-14]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in our projects. Here is what happened between May and December 2017.
This is not a complete list of all activity, just work that results in a
non-trivial change. For a full list, see the git history of all the projects.

This covers a seven month period. Due to unforeseen circumstances, there was a
lengthy break in 2017. We\'re back.

::: {.callout .callout-info}
#### Summary

Most of the time was spent moving Timewarrior 1.1.0 closer to release.
:::

+---------------------------------------+---------------------------------------+
| [2017-05-03]{.small}                  | -   Timewarrior: doc: Update command  |
|                                       |     definition document               |
+---------------------------------------+---------------------------------------+
| [2017-05-08]{.small}                  | -   [\#1923: Remove unreachable       |
|                                       |     s                                 |
|                                       | tatement](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1923) |
|                                       |     fixed                             |
|                                       | -   Taskwarrior, Taskserver:          |
|                                       |     TLSClient: Remove double include  |
+---------------------------------------+---------------------------------------+
| [2017-05-10]{.small}                  | -   Tasksh: 1.2.0 released            |
+---------------------------------------+---------------------------------------+
| [2017-05-21]{.small}                  | -   [\#78: timew move with a specific |
|                                       |     time broken on                    |
|                                       |     1.1.0](https://github.com/Gothen  |
|                                       | burgBitFactory/timewarrior/issues/78) |
|                                       |     fixed                             |
|                                       | -   [\#81: timew track seems to think |
|                                       |     today is                          |
|                                       |                                       |
|                                       |   tomorrow](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/81) |
|                                       |     fixed                             |
|                                       | -   libshared: Added ::timeRelative   |
|                                       |     support for dates that project    |
|                                       |     either forwards or backwards in   |
|                                       |     time                              |
+---------------------------------------+---------------------------------------+
| [2017-05-28]{.small}                  | -   Timewarrior: validate: Uses       |
|                                       |     helper function to find overlaps  |
|                                       | -   Timewarrior: data: Added better   |
|                                       |     error when an attempt is made to  |
|                                       |     track a future interval           |
+---------------------------------------+---------------------------------------+
| [2017-06-12]{.small}                  | -   Taskwarrior: tests: Add tests for |
|                                       |     complex and-or queries            |
+---------------------------------------+---------------------------------------+
| [2017-06-14]{.small}                  | -   Twarrior: Quote tags containing   |
|                                       |     underscores                       |
+---------------------------------------+---------------------------------------+
| [2017-07-22]{.small}                  | -   Taskwarrior: Recurrence: Updated  |
|                                       |     \'until\' handling                |
+---------------------------------------+---------------------------------------+
| [2017-07-27]{.small}                  | -   Taskwarrior: context: Do not      |
|                                       |     allow show, list or none as new   |
|                                       |     context names                     |
+---------------------------------------+---------------------------------------+
| [2017-07-30]{.small}                  | -   [\#74: timew config converts      |
|                                       |     integers to                       |
|                                       |     times](https://github.com/Gothen  |
|                                       | burgBitFactory/timewarrior/issues/74) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2017-08-05]{.small}                  | -   [\#82: Tag parsing broken for     |
|                                       |     tags starting with                |
|                                       |                                       |
|                                       |   \"or\_\"](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/82) |
|                                       |     fixed                             |
|                                       | -   Flod: Improved test report        |
|                                       |     formatting                        |
|                                       | -   Flod: Added test count for 100%   |
|                                       |     case                              |
+---------------------------------------+---------------------------------------+
| [2017-08-18]{.small}                  | -   All: Update git repo url          |
|                                       | -   Timewarrior: CONTRIBUTING: Update |
|                                       |     repo url and add recursive flag   |
+---------------------------------------+---------------------------------------+
| [2017-10-08]{.small}                  | -   Taskwarrior: Changed (1) error    |
|                                       |     format                            |
+---------------------------------------+---------------------------------------+
| [2017-10-11]{.small}                  | -   [\#135: systemd service: logging  |
|                                       |     to standard out with \--log=- no  |
|                                       |     longer                            |
|                                       |     works](https://github.com/Gothen  |
|                                       | burgBitFactory/taskserver/issues/135) |
|                                       |     fixed                             |
|                                       | -   All: Removed obsolete URLs from   |
|                                       |     source                            |
+---------------------------------------+---------------------------------------+
| [2017-10-23]{.small}                  | -   libshared: Added Packrat          |
|                                       |     `external` tests                  |
+---------------------------------------+---------------------------------------+
| [2017-11-21]{.small}                  | -   Timewarrior: Commands: Reduce     |
|                                       |     code duplication                  |
+---------------------------------------+---------------------------------------+
| [2017-11-24]{.small}                  | -   All: Improve TAP compliance in    |
|                                       |     test suite                        |
|                                       | -   Taskwarrior: CLI2,Config: Add     |
|                                       |     \'override\' verbosity options    |
|                                       | -   Docs/CLI2: Additional dev docs    |
|                                       |     for applyOverrides                |
+---------------------------------------+---------------------------------------+
| [2017-12-01]{.small}                  | -   [\#79: Fix cases where interval   |
|                                       |     borders match when applying :fill |
|                                       |     hint](https://github.com/Gothen   |
|                                       | burgBitFactory/timewarrior/issues/79) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2017-12-02]{.small}                  | -   [\#1942: Typo in                  |
|                                       |     help](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1942) |
|                                       |     fixed                             |
|                                       | -   [\#1947: Separate verbosity       |
|                                       |     category for rc                   |
|                                       |     o                                 |
|                                       | verrides](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1947) |
|                                       |     fixed                             |
|                                       | -   [\#1948: Tweak tests to have      |
|                                       |     fuller TAP                        |
|                                       |     co                                |
|                                       | mpliance](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1948) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2017-12-05]{.small}                  | -   [\#94: Update help for command    |
|                                       |     \'                                |
|                                       | continue\'](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/94) |
|                                       |     fixed                             |
|                                       | -   [\#94: Make \'continue\' accept a |
|                                       |     date                              |
|                                       |     range](https://github.com/Gothen  |
|                                       | burgBitFactory/timewarrior/issues/94) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2017-12-07]{.small}                  | -   Timewarrior: Fix filter for       |
|                                       |     summary when only a date is given |
+---------------------------------------+---------------------------------------+
| [2017-12-09]{.small}                  | -   [\#1948: Tweak tests to have      |
|                                       |     fuller TAP                        |
|                                       |     co                                |
|                                       | mpliance](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1948) |
|                                       |     fixed                             |
|                                       | -   [\#1950: Adjust behaviour of      |
|                                       |     new-uuid and new-id verbosity     |
|                                       |                                       |
|                                       |   levels](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1950) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2017-12-10]{.small}                  | -   [\#95: Timewarrior does not       |
|                                       |     compile on                        |
|                                       |                                       |
|                                       |  DragonFly](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/95) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2017-12-14]{.small}                  | -   [\#71: Move with :adjust leaves   |
|                                       |     overlapping                       |
|                                       |                                       |
|                                       |  intervals](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/71) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2017-12-19]{.small}                  | -   Timewarrior: Fix number of        |
|                                       |     expected tests                    |
+---------------------------------------+---------------------------------------+
| [2017-12-31]{.small}                  | -   libshared: Added Dragonfly        |
|                                       |     support                           |
+---------------------------------------+---------------------------------------+
