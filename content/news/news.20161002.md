---
title: "Activity Digest: September 2016"
date: 2016-10-02
---

### Activity Digest: September 2016 

This is an ongoing series of activity reports, published monthly, to highlight activity in our projects.
Here is what happened in September 2016. This is not a complete list of all activity, just work that results in a non-trivial change.
For a full list, see the git history of all the projects.

#### Summary

Tasksh 1.1.0 released, Anomaly 1.1.0 released.
Flod2 is a major update that greatly improves speed and reliability of the CI system.
It is working well, and will be rolled out in October, with new features and greater automation.

| Date       |                                                                                                                                 |
|------------|---------------------------------------------------------------------------------------------------------------------------------|
| 2016-09-02 | - Anomaly: Converted test suite to Python                                                                                       |
|            | - Task: Now with correct build instructions for the dev branch                                                                  |
|            | - Tasksh: Integrated libshared                                                                                                  |
|            | - Tasksh: Converted test suite to Python                                                                                        |
| 2016-09-04 | - Anomaly: [Version 1.1.0](https://gothenburgbitfactory.org/download/anomaly-1.1.0.tar.gz) released                             |
|            | - Task: Updated test suite to use only non-deprecated Boolean config values                                                     |
|            | - [#10: Autoclear in the Task Shell](https://github.com/GothenburgBitFactory/taskshell/issues/10) fixed                         |
|            | - [#27: Please add a (m)odify feature for review](https://github.com/GothenburgBitFactory/taskshell/issues/27) fixed            |
| 2016-09-05 | - Tasksh: [Version 1.1.0](/news/news.20160905.2) released, with new review feature                                              |
|            | - Flod: All satellite build servers updated to latest releases                                                                  |
| 2016-09-06 | - Tasksh: Fixed build on Cygwin                                                                                                 |
|            | - [#28: tasksh hangs trying to read task from stdin](https://github.com/GothenburgBitFactory/taskshell/issues/28) fixed         |
| 2016-09-13 | - Rat: Modernized Tree object to use `std::shared_ptr`                                                                          |
| 2016-09-15 | - libshared: Lexer can now disable individual features                                                                          |
|            | - Rat: Upgraded from BNF to PEG                                                                                                 |
| 2016-09-16 | - libshared: Added Lexer tests when features are disabled                                                                       |
| 2016-09-17 | - Guides: Setup guide now explicitly mentions taskd-user                                                                        |
|            | - libshared: Migrated Tree object from the rat project                                                                          |
|            | - libshared: Added Pig::getcharacter, which was unexpectedly missing                                                            |
| 2016-09-18 | - Rat: Now recognized junk at EOS                                                                                               |
|            | - Rat: Now implements positive/negative lookahead                                                                               |
|            | - Rat: Now offers trace in debug mode                                                                                           |
| 2016-09-19 | - Guides: Taskd setup guides now references the troubleshooting guide                                                           |
|            | - Rat: Now supports `<character>` intrinsic                                                                                     |
|            | - gothenburgbitfactory.org: Central (Flod) pages are now HTTPS always                                                           |
| 2016-09-25 | - Flod2: Reworked scripts for efficiency, converted to Python, changed to a non-daemon model                                    |
| 2016-09-27 | - Holidata: Added US 2017, 2018; GB 2017, 2018 dates                                                                            |
| 2016-09-29 | - [#22: Fix holiday type on en-GB Christmas 2016](https://github.com/GothenburgBitFactory/tw.org/issues/22) fixed               |
|            | - [#23: I think some files weren\'t added after the last build](https://github.com/GothenburgBitFactory/tw.org/issues/23) fixed |
| 2016-09-30 | - Guides: Taskd troubleshooting guides gains more diagnostic commands                                                           |
