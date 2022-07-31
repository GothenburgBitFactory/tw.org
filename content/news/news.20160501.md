---
title: "News: Activity Digest: April 2016"
---

### Activity Digest: April 2016 [2016-05-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in April 2016.

This is not a complete list of all activity, just work that results in a
non-trivial change. For a full list, see the git history of all the projects.

+---------------------------------------+---------------------------------------+
| [2016-04-01]{.small}                  | -   [\#1811: Support additional       |
|                                       |     countable                         |
|                                       |     in                                |
|                                       | finities](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1811) |
|                                       |     reported                          |
|                                       | -   [\#1812: Urgency computations     |
|                                       |     involving NaN are                 |
|                                       |     i                                 |
|                                       | ncorrect](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1812) |
|                                       |     reported                          |
+---------------------------------------+---------------------------------------+
| [2016-04-02]{.small}                  | -   [\#1813: taskrc(5) manpage:       |
|                                       |     spurious \"pri.\" in              |
|                                       |     rule.preceden                     |
|                                       | ce.color](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1813) |
|                                       |     fixed                             |
|                                       | -   libshared: Added support for      |
|                                       |     informal time: `8am`, `2:34pm`    |
|                                       |     \...                              |
|                                       | -   taskwarrior.org: Compressed all   |
|                                       |     the images on the site.           |
|                                       | -   taskwarrior.org: Replaced email   |
|                                       |     addresses with mailing lists.     |
+---------------------------------------+---------------------------------------+
| [2016-04-03]{.small}                  | -   [\#1814: The info command uses    |
|                                       |     \'0\' to reference dependencies   |
|                                       |     on non-pending                    |
|                                       |                                       |
|                                       |    tasks](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1814) |
|                                       |     fixed                             |
|                                       | -   Task: When a task ID is not       |
|                                       |     available, a UUID is now used     |
|                                       |     instead.                          |
+---------------------------------------+---------------------------------------+
| [2016-04-04]{.small}                  | -   libshared: Added JSON2 SAX        |
|                                       |     parser.                           |
+---------------------------------------+---------------------------------------+
| [2016-04-05]{.small}                  | -   Timewarrior: Learns the `:quiet`  |
|                                       |     hint.                             |
+---------------------------------------+---------------------------------------+
| [2016-04-08]{.small}                  | -   Guides: Added OpenRheinRuhr       |
|                                       |     presentation.                     |
|                                       | -   Task: Runs under the Windows 10   |
|                                       |     Linux Subsystem.                  |
+---------------------------------------+---------------------------------------+
| [2016-04-09]{.small}                  | -   [\#42: Remove user command says   |
|                                       |     user does not                     |
|                                       |     exist](https://github.com/Gothe   |
|                                       | nburgBitFactory/taskserver/issues/42) |
|                                       |     fixed                             |
|                                       | -   [\#102: After creating a user     |
|                                       |     aparently successful taskd says:  |
|                                       |     User does not                     |
|                                       |     exists](https://github.com/Gothen |
|                                       | burgBitFactory/taskserver/issues/102) |
|                                       |     fixed                             |
|                                       | -   [\#117: Wrong systemd target,     |
|                                       |     taskd can fail if                 |
|                                       |     multi-user.target is up earlier   |
|                                       |     than the                          |
|                                       |                                       |
|                                       |    network](https://github.com/Gothen |
|                                       | burgBitFactory/taskserver/issues/117) |
|                                       |     fixed                             |
|                                       | -   Task: Now uses the CMake          |
|                                       |     CXXSniffer code.                  |
|                                       | -   Taskd: Now uses the CMake         |
|                                       |     CXXSniffer code.                  |
|                                       | -   Taskd: Now builds all source as a |
|                                       |     temp library against which to     |
|                                       |     link tests, for faster builds.    |
|                                       | -   Timewarrior: Learned to parse     |
|                                       |     it\'s own command line.           |
+---------------------------------------+---------------------------------------+
| [2016-04-10]{.small}                  | -   Timewarrior: Gains an extension   |
|                                       |     API.                              |
+---------------------------------------+---------------------------------------+
| [2016-04-11]{.small}                  | -   libshared: Added support for      |
|                                       |     `socq`, `eocq`, `socy` and        |
|                                       |     `eocy`.                           |
|                                       | -   libshared: Removed Datetime       |
|                                       |     abbreviations for some dates,     |
|                                       |     i.e. `socm`, `socy`.              |
|                                       | -   Timewarrior: Gains a `continue`   |
|                                       |     command.                          |
+---------------------------------------+---------------------------------------+
| [2016-04-13]{.small}                  | -   Guides: Added FOSS-GBG            |
|                                       |     presentation.                     |
+---------------------------------------+---------------------------------------+
| [2016-04-15]{.small}                  | -   [\#1817: Calendar underline on    |
|                                       |     Day                               |
|                                       |                                       |
|                                       |  padding](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1817) |
|                                       |     fixed                             |
|                                       | -   libshared: Datetime can now work  |
|                                       |     in look-forward or look-behind    |
|                                       |     mode, i.e. what does `Monday`     |
|                                       |     mean?                             |
|                                       | -   libshared: Datetime disambiguated |
|                                       |     `som` from `someday`.             |
|                                       | -   Task: Removed a broken flapping   |
|                                       |     test.                             |
|                                       | -   Timewarrior: Defined what a       |
|                                       |     filter is, and it\'s very simple. |
+---------------------------------------+---------------------------------------+
| [2016-04-16]{.small}                  | -   [\#118: Shebang                   |
|                                       |     issue](https://github.com/Gothen  |
|                                       | burgBitFactory/taskserver/issues/118) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2016-04-17]{.small}                  | -   Timewarrior: Data access resolved |
|                                       |     down to `addInterval` and         |
|                                       |     `deleteInterval`. Simple.         |
|                                       | -   Timewarrior: Properly handles     |
|                                       |     intervals that span data files.   |
+---------------------------------------+---------------------------------------+
| [2016-04-18]{.small}                  | -   Timewarrior: Learned that         |
|                                       |     `day on` and `day off` are just   |
|                                       |     holiday overrides.                |
+---------------------------------------+---------------------------------------+
| [2016-04-20]{.small}                  | -   libshared: `Pig::getHMS` can now  |
|                                       |     read formally-specified time.     |
|                                       | -   Timewarrior: Learned how expand   |
|                                       |     weekday exclusions into a set of  |
|                                       |     date ranges.                      |
+---------------------------------------+---------------------------------------+
| [2016-04-21]{.small}                  | -   Guides: Taskserver setup PDF      |
|                                       |     completed.                        |
|                                       | -   Timewarrior: Gained holiday file  |
|                                       |     support.                          |
+---------------------------------------+---------------------------------------+
| [2016-04-22]{.small}                  | -   Timewarrior: Expanded set of      |
|                                       |     report mockups for feedback.      |
+---------------------------------------+---------------------------------------+
| [2016-04-23]{.small}                  | -   Clog: Migrated to use libshared,  |
|                                       |     updated thecode base for C++11.   |
|                                       | -   Flod2: Typo in build system       |
|                                       |     linked to missing library that    |
|                                       |     wasn\'t used.                     |
|                                       | -   libshared: Color can now emit raw |
|                                       |     codes.                            |
|                                       | -   Timewarrior: `diagnostics` now    |
|                                       |     references the theme and shows    |
|                                       |     swatches.                         |
+---------------------------------------+---------------------------------------+
| [2016-04-24]{.small}                  | -   Flod: Learned how to clone and    |
|                                       |     switch branches in one step.      |
|                                       | -   libshared: Switched all date      |
|                                       |     arguments order to `Y`, `M`, `D`. |
|                                       |     The original US order of `M`,     |
|                                       |     `D`, `Y` has caused unending      |
|                                       |     confusion.                        |
+---------------------------------------+---------------------------------------+
| [2016-04-25]{.small}                  | -   libshared: Added `Composite`      |
|                                       |     object from Timewarrior.          |
|                                       | -   Timewarrior: Now has a default    |
|                                       |     color palette, which is           |
|                                       |     overridden by themes.             |
+---------------------------------------+---------------------------------------+
| [2016-04-28]{.small}                  | -   Task: Fixed ambiguity in the      |
|                                       |     spa-ESP localization for the      |
|                                       |     `yes/no/all/cancel` string.       |
|                                       | -   Timewarrior: The `track`, `stop`  |
|                                       |     and `start` commands now properly |
|                                       |     split intervals that cross        |
|                                       |     boundaries.                       |
+---------------------------------------+---------------------------------------+
| [2016-04-29]{.small}                  | -   Timewarrior: Gains a `cancel`     |
|                                       |     command.                          |
|                                       | -   Timewarrior: Gains a `day`        |
|                                       |     report.                           |
|                                       | -   Timewarrior: Each report now has  |
|                                       |     a configuration rule.             |
|                                       | -   Timewarrior: The `day` report now |
|                                       |     renders in different experimental |
|                                       |     styles.                           |
|                                       | -   Timewarrior: Gained bash unit     |
|                                       |     test capability from Taskwarrior. |
+---------------------------------------+---------------------------------------+
| [2016-04-30]{.small}                  | -   libshared: Added `Palette` object |
|                                       |     from Timewarrior.                 |
|                                       | -   Timewarrior: Gains a `summary`    |
|                                       |     report.                           |
+---------------------------------------+---------------------------------------+
