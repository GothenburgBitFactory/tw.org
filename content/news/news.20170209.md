---
title: "Activity Digest: January 2017"
date: 2017-02-09
---

### Activity Digest: January 2017 

This is an ongoing series of activity reports, published monthly, to highlight activity in our projects.
Here is what happened in January 2017. This is not a complete list of all activity, just work that results in a non-trivial change.
For a full list, see the git history of all the projects.

#### Summary

The rat parser is now mostly complete, and ready to take on the syntax of the rules system.

The [Taskwarrior bug database](https://github.com/GothenburgBitFactory/taskwarrior/issues) haѕ had another cleanup pass that removed obsolete or accidentally fixed issues.

The flod2 CI system is now online and is about to begin processing builds instead of the old flod system.
Both system will be online until the switchover is complete.

Finally, the team spent a little time getting ready for FOSDEM.

| Date       |                                                                                                                                             | 
|------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| 2017-01-02 | - rat: Now has grammar to parse Datetime                                                                                                    |
|            | - rat: Now has grammar to parse Duration                                                                                                    |
| 2017-01-07 | - [#33: Tasksh throw a warning at the end of a review command](https://github.com/GothenburgBitFactory/taskshell/issues/33) fixed           |
|            | - task: Gained new `TEMPLATE` and `INSTANCE` virtual tags, used by the (coming) recurrence model                                            |
|            | - task: Column objects cleaned up, ready for refactoring                                                                                    |
| 2017-01-08 | - anomaly: Integrated libshared.git                                                                                                         |
|            | - rat: Now supports entity definitions via the command line                                                                                 |
| 2017-01-09 | - rat: PEG can now be parsed in strict mode, which upgrades warnings to errors                                                              |
|            | - rat: PEG supports new `<entity:XXX>` intrinsic                                                                                            |
|            | - rat: PEG files now support nested imports                                                                                                 |
|            | - taskd: Fixed build in SunOS-like environments                                                                                             |
|            | - timew: Now has a `resize` command                                                                                                         |
| 2017-01-10 | - rat: Now reports runtime in debug mode                                                                                                    |
|            | - rat: Now has grammar to parse clog rule sets                                                                                              |
|            | - rat: PEG is no longer parsed in strict mode by default                                                                                    |
|            | - rat: PEG supports new `<external:XXX>` intrinsic                                                                                          |
| 2017-01-11 | - rat: Now has grammar to parse DOM references                                                                                              |
|            | - rat: Now has grammar to parse UUIDs                                                                                                       |
|            | - rat: Now protects against multiple imports                                                                                                |
|            | - rat: PEG supports new `<hex>` intrinsic                                                                                                   |
| 2017-01-14 | - task: Build fixed in SunOS-like environments: OpenIndiana, Omnios, SmartOS                                                                |
| 2017-01-15 | - taskd: Do not use \'which\' for finding gnutls certool path                                                                               |
| 2017-01-16 | - [#257: Align countdown column on boundary between number and text.](https://github.com/GothenburgBitFactory/taskwarrior/issues/257) fixed |
|            | - [#1598: Alternative approach to urgency inheritance](https://github.com/GothenburgBitFactory/taskwarrior/issues/1598) fixed               |
|            | - [#1691: hooks: upon failure indicate which hook failed](https://github.com/GothenburgBitFactory/taskwarrior/issues/1691) fixed            |
|            | - [#1839: Incorrect unicode text wrapping / justifying](https://github.com/GothenburgBitFactory/taskwarrior/issues/1839) fixed              |
|            | - [#1843: Extract annotations from a task](https://github.com/GothenburgBitFactory/taskwarrior/issues/1843) fixed                           |
|            | - [#1890: task done, task edit, task is now pending](https://github.com/GothenburgBitFactory/taskwarrior/issues/1890) fixed                 |
|            | - [#1893: Missing last character(s) in Description field](https://github.com/GothenburgBitFactory/taskwarrior/issues/1893) fixed            |
|            | - [#1894: default.scheduled seems not to work](https://github.com/GothenburgBitFactory/taskwarrior/issues/1894) fixed                       |
|            | - [#1874: Truncated description when adding annotation](https://github.com/GothenburgBitFactory/taskwarrior/issues/1874) fixed              |
|            | - [#54: new theme files aren\'t installed](https://github.com/GothenburgBitFactory/timewarrior/issues/54) fixed                             |
|            | - libshared: Duration::formatVague can now pad all values to the same length                                                                |
| 2017-01-21 | - flod: Project no longer updated or supported                                                                                              |
|            | - flod2: Project now public and begins deployment                                                                                           |
|            | - flod2: Now detects clean builds across all platforms                                                                                      |
| 2017-01-24 | - [#1882: segmentation fault (on unusual installation)](https://github.com/GothenburgBitFactory/taskwarrior/issues/1882) fixed              |
|            | - task: Updated expired test certs/keys                                                                                                     |
| 2017-01-25 | - [#66: Typo in exclusion.t.cpp](https://github.com/GothenburgBitFactory/timewarrior/issues/66) fixed                                       |
|            | - flod2: Publish script working                                                                                                             |
|            | - task: Migrated to use libshared Color                                                                                                     |
|            | - task: Variant no longer uses localized strings                                                                                            |
| 2017-01-26 | - flod2: Combined multiple ssh calls into one, to reduce network traffic                                                                    |
|            | - flod2: Report now has collapsible platform details                                                                                        |
|            | - flod2: Reports test failure details                                                                                                       |
| 2017-01-27 | - task: `ghistory` command code refactoring                                                                                                 |
| 2017-01-28 | - [#67: TimeWarrior should not ignore invalid command](https://github.com/GothenburgBitFactory/timewarrior/issues/67) fixed                 |
|            | - flod2: Now detects when a platform runs an unexpectedly different number of tests                                                         |
|            | - flod2: Now links back to Gitea commit page                                                                                                |
| 2017-01-29 | - flod2: Now auto-generates a summary page for all projects                                                                                 |
| 2017-01-30 | - task: `history` command code refactoring                                                                                                  |
