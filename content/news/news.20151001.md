---
title: "News: Activity Digest: September 2015"
---

### Activity Digest: September 2015 [2015-10-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in September 2015.

This is not a complete list of all activity, just work that results in a
non-trivial change. For a full list, see the [full Git
history](https://github.com/GothenburgBitFactory/taskwarrior/commits/v2.5.0).

+---------------------------------------+---------------------------------------+
| [2015-09-01]{.small}                  | -   Task: Added                       |
|                                       |     `rc.rules.color.merge` to control |
|                                       |     whether combined colors are       |
|                                       |     merged (default) or overwritten.  |
|                                       |     This prevents some unusable color |
|                                       |     combinations.                     |
|                                       | -   Task: Replaced                    |
|                                       |     `rc.urgency.next.coefficient`     |
|                                       |     with                              |
|                                       |     `r                                |
|                                       | c.urgency.user.tag.next.coefficient`. |
|                                       | -   [\#1403: Use of \^ in regex       |
|                                       |     parsed as exponentiate            |
|                                       |                                       |
|                                       | operator](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1403) |
|                                       |     fixed                             |
|                                       | -   [\#1475: Add possibility to       |
|                                       |     modify newest                     |
|                                       |     task](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1475) |
|                                       |     fixed                             |
|                                       | -   [\#1640: Intermittent lengthy     |
|                                       |     delay when starting or completing |
|                                       |     a                                 |
|                                       |     task](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1640) |
|                                       |     fixed                             |
|                                       | -   [\#1684: Disabled sorting         |
|                                       |                                       |
|                                       |   option](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1684) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-09-03]{.small}                  | -   Task: Removed colors that use     |
|                                       |     underscores (`on_blue`), a        |
|                                       |     feature deprecated in 2009.       |
+---------------------------------------+---------------------------------------+
| [2015-09-04]{.small}                  | -   Task: Added first man page        |
|                                       |     references which are deliberately |
|                                       |     minimal, and refer to online      |
|                                       |     resources.                        |
+---------------------------------------+---------------------------------------+
| [2015-09-05]{.small}                  | -   Task: Some unit tests were        |
|                                       |     changed from being disabled to    |
|                                       |     enabled and marked as \'exected   |
|                                       |     to fail\'. This means the test    |
|                                       |     are now run, instead of ignored.  |
+---------------------------------------+---------------------------------------+
| [2015-09-06]{.small}                  | -   Task: If not explicitly stated on |
|                                       |     import, values with default       |
|                                       |     dynamic values (such as modified, |
|                                       |     entry or end) can produce a false |
|                                       |     notion of incoming \'modified\'   |
|                                       |     data, where the only difference   |
|                                       |     between the data in the database  |
|                                       |     and data being imported is that   |
|                                       |     the dynamic defaults differ,      |
|                                       |     which are now ignored.            |
|                                       | -   Task: Not all commands were       |
|                                       |     obeying the `rc.color` settng.    |
|                                       | -   Task: The command line parser can |
|                                       |     now detect cases where unwanted   |
|                                       |     arguments are provided on the     |
|                                       |     command line.                     |
|                                       | -   [\#1711: task add due:som appears |
|                                       |     to be interpreted as              |
|                                       |     \'s                               |
|                                       | omeday\'](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1711) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-09-07]{.small}                  | -   Task: `rc.debug.parser=2` now     |
|                                       |     shows the full parse tree,        |
|                                       |     whereas `rc.debug.parser=3` shows |
|                                       |     eval processing.                  |
|                                       | -   Task: The `2.4.5` development     |
|                                       |     branch is renamed to `2.5.0`,     |
|                                       |     reflecting the scope of the work. |
|                                       | -   Task: 2.5.0 beta1 released.       |
+---------------------------------------+---------------------------------------+
| [2015-09-08]{.small}                  | -   Task: All date attributes now     |
|                                       |     have the same sorting behavior as |
|                                       |     `due` dates.                      |
|                                       | -   [\#!708: make no-date \> has-date |
|                                       |     for all date                      |
|                                       |     at                                |
|                                       | tributes](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1708) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-09-09]{.small}                  | -   [\#1702: segfault in              |
|                                       |     \~Vi                              |
|                                       | ewTask()](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1702) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-09-10]{.small}                  | -   Task: Removed the ability to      |
|                                       |     build without color support.      |
|                                       | -   [\#1707: Dom reference for        |
|                                       |     project not properly              |
|                                       |     e                                 |
|                                       | valuated](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1707) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-09-11]{.small}                  | -   Task: The test suite exits with   |
|                                       |     non-zero when any test fails.     |
|                                       | -   [\#108: Circular dependency       |
|                                       |     detection broken for missing      |
|                                       |     tasks](https://github.com/Gothenb |
|                                       | urgBitFactory/taskwarrior/issues/108) |
|                                       |     fixed                             |
|                                       | -   [\#1712: task fails to            |
|                                       |                                       |
|                                       |   import](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1712) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-09-12]{.small}                  | -   Task: The `limit:N` feature is no |
|                                       |     longer a pseudo-attribute (there  |
|                                       |     are no others), but is syntactic  |
|                                       |     sugar that maps to `rc.limit:N`.  |
|                                       | -   [\#1680: Implicitly parenthesize  |
|                                       |     argv                              |
|                                       |                                       |
|                                       |   filter](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1680) |
|                                       |     fixed                             |
|                                       | -   [\#1716: 42//\'                   |
|                                       |     s                                 |
|                                       | egfaults](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1716) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-09-13]{.small}                  | -   [\#1710: Sorting not working on   |
|                                       |     udas](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1710) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-09-15]{.small}                  | -   Task: Data copying inefficiencies |
|                                       |     are fixed, yielding a dramatic    |
|                                       |     improvement to `import` speed.    |
|                                       | -   Task: Updated Unicode charcter    |
|                                       |     list.                             |
|                                       | -   Task: Performance testing         |
|                                       |     improved                          |
|                                       |     (https://gothenburgbitfa          |
|                                       | ctory.org/projects/performance.html). |
+---------------------------------------+---------------------------------------+
| [2015-09-16]{.small}                  | -   Task: 2.5.0 beta2 released.       |
|                                       | -   [\#1719: edit: Concurrent         |
|                                       |                                       |
|                                       |    edits](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1719) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-09-19]{.small}                  | -   Vramsteg: Added 64-bit            |
|                                       |     min/max/value support.            |
|                                       | -   Task: When GC is turned off,      |
|                                       |     disable the query shortcuts,      |
|                                       |     which do not apply.               |
|                                       | -   Task: Holiday files updated.      |
|                                       | -   Task: The `filter` verbosity      |
|                                       |     token was lost in the CLI2        |
|                                       |     upgrade.                          |
|                                       | -   [\#1723: Command interpretation   |
|                                       |     displayed                         |
|                                       |     inc                               |
|                                       | orrectly](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1723) |
|                                       |     fixed                             |
|                                       | -   [\#1725: Some generated UUIDs     |
|                                       |     deemed                            |
|                                       |                                       |
|                                       |  invalid](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1725) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-09-20]{.small}                  | -   Task: The `new-uuid` verbosity    |
|                                       |     token is deprecated.              |
|                                       | -   [\#1686: filter before add        |
|                                       |     becomes                           |
|                                       |     des                               |
|                                       | cription](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1686) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-09-21]{.small}                  | -   [\#1724: modify tags behavior     |
|                                       |                                       |
|                                       |  changed](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1724) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-09-22]{.small}                  | -   Task: The `export` command no     |
|                                       |     longer obeys context.             |
|                                       | -   Task: TDB2 Task lookup code       |
|                                       |     improvements yields another       |
|                                       |     significant `import` speedup.     |
+---------------------------------------+---------------------------------------+
| [2015-09-24]{.small}                  | -   [\#1731: Context can leak into    |
|                                       |     modif                             |
|                                       | ications](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1731) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-09-25]{.small}                  | -   Task: Fixed segfault problem on   |
|                                       |     exit.                             |
+---------------------------------------+---------------------------------------+
| [2015-09-26]{.small}                  | -   [Vramsteg: 1.1.0                  |
|                                       |                                       |
|                                       |  released](/news/news.20150926.html). |
|                                       | -   [Clog: 1.2.0                      |
|                                       |                                       |
|                                       |  released](/news/news.20150927.html). |
+---------------------------------------+---------------------------------------+
