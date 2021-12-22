---
title: "News: Activity Digest: August 2015"
---

### Activity Digest: August 2015 [2015-09-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in August 2015.

This is not a complete list of all activity, just work that results in a
non-trivial change. For a full list, see the [full Git
history](https://github.com/GothenburgBitFactory/taskwarrior/commits/v2.5.0).

+---------------------------------------+---------------------------------------+
| [2015-08-01]{.small}                  | -   Task: Commands now have \'DNA\',  |
|                                       |     which determines how they behave, |
|                                       |     and allows more control than      |
|                                       |     simply distinguishing between     |
|                                       |     `read-only` and `write` commands. |
|                                       | -   Task: An ISO year is now valid    |
|                                       |     beyond 2100.                      |
|                                       | -   Task: The new \'commands\'        |
|                                       |     command shows information about   |
|                                       |     how the commands behave. For      |
|                                       |     debugging.                        |
|                                       | -   Task: Documentation now indicates |
|                                       |     the replacement for               |
|                                       |     `report.X.annotations`.           |
+---------------------------------------+---------------------------------------+
| [2015-08-02]{.small}                  | -   Task: Context filters now applied |
|                                       |     only when a command requests it.  |
|                                       | -   Task: Time-sensitive, floating    |
|                                       |     point representation-sensitive,   |
|                                       |     and color-sensitive unit tests    |
|                                       |     fixed, which yields more          |
|                                       |     consistent results.               |
|                                       | -   Task: When applying additional    |
|                                       |     filters, the insertion occurs at  |
|                                       |     the beginning, thus avoiding any  |
|                                       |     `--` arguments.                   |
|                                       | -   Task: GC now only run when a      |
|                                       |     command requests it.              |
+---------------------------------------+---------------------------------------+
| [2015-08-03]{.small}                  | -   Task: `rc.debug=1` now shows the  |
|                                       |     parse tree, before                |
|                                       |     command-specific processing.      |
|                                       | -   Task: Clarified DOM responses -   |
|                                       |     it is an error to specify no      |
|                                       |     reference, or a bad reference. It |
|                                       |     is not an error to specify a      |
|                                       |     reference that yields no value.   |
|                                       | -   [\#1653: Descriptions often get   |
|                                       |     overwritten with \"( or           |
|                                       |     )\"](https://github.com/Gothenbu  |
|                                       | rgBitFactory/taskwarrior/issues/1653) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-08-04]{.small}                  | -   Task: Man pages updated to cover  |
|                                       |     the inequality operators.         |
|                                       | -   [\#1672: Typo in                  |
|                                       |     Docum                             |
|                                       | entation](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1672) |
|                                       |     fixed                             |
|                                       | -   [\#1671: descriptions that are    |
|                                       |     stringified                       |
|                                       |     ids](https://github.com/Gothenbu  |
|                                       | rgBitFactory/taskwarrior/issues/1671) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-08-05]{.small}                  | -   [\#1374: Filter due:yyyy-mm-dd is |
|                                       |     failing to display daily          |
|                                       |     recurring tasks if there is       |
|                                       |     deleted task in the               |
|                                       |                                       |
|                                       |   series](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1374) |
|                                       |     fixed                             |
|                                       | -   [\#1522: Translation manuals are  |
|                                       |     outdated/mis                      |
|                                       |     inf                               |
|                                       | ormation](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1522) |
|                                       |     fixed                             |
|                                       | -   [\#1525: Invalid due date         |
|                                       |     produces jump to begining of the  |
|                                       |     unix                              |
|                                       |                                       |
|                                       |    epoch](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1525) |
|                                       |     fixed                             |
|                                       | -   [\#1563: soww Synonym produces    |
|                                       |     wrong                             |
|                                       |     date](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1563) |
|                                       |     fixed                             |
|                                       | -   [\#1619: context and description  |
|                                       |     s                                 |
|                                       | ubstring](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1619) |
|                                       |     fixed                             |
|                                       | -   [\#1620: Filter \"due.before\"    |
|                                       |     with relative dates stopped       |
|                                       |                                       |
|                                       |  working](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1620) |
|                                       |     fixed                             |
|                                       | -   [\#1623: (Bulk) modification of   |
|                                       |     tasks unintentionally overwrites  |
|                                       |     description if a context is       |
|                                       |                                       |
|                                       |   active](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1623) |
|                                       |     fixed                             |
|                                       | -   [\#1631: Theme Support for        |
|                                       |     missing                           |
|                                       |     UDAs](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1631) |
|                                       |     fixed                             |
|                                       | -   [\#1635: soww                     |
|                                       |     w                                 |
|                                       | eirdness](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1635) |
|                                       |     fixed                             |
|                                       | -   [\#1648: Report filters combine   |
|                                       |     incorrectly with command line     |
|                                       |     with                              |
|                                       |     ter                               |
|                                       | minator.](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1648) |
|                                       |     fixed                             |
|                                       | -   [\#1654: \"Due\" parsing behavior |
|                                       |     seems                             |
|                                       |     inco                              |
|                                       | nsistent](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1654) |
|                                       |     fixed                             |
|                                       | -   [\#1667: Batch modifying tasks    |
|                                       |     under context sets description to |
|                                       |     \'(                               |
|                                       |     )\'](https://github.com/Gothenbu  |
|                                       | rgBitFactory/taskwarrior/issues/1667) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-08-06]{.small}                  | -   TaskServer: The `diagnostics`     |
|                                       |     commands now shows certificate    |
|                                       |     file sizes.                       |
|                                       | -   Task: The `diagnostics` commands  |
|                                       |     now shows certificate file sizes. |
|                                       | -   Task: Displays UUID instead of ID |
|                                       |     when completing a task.           |
|                                       | -   Task: Documented that             |
|                                       |     comma-separated UUIDs are not     |
|                                       |     supported, and comma-separated    |
|                                       |     IDs are deprecated.               |
+---------------------------------------+---------------------------------------+
| [2015-08-07]{.small}                  | -   Task: Documented the `!` negation |
|                                       |     operator.                         |
|                                       | -   Task: `rc.sugar` enables/disables |
|                                       |     syntactic sugar for IDs and UUIDs |
|                                       |     only.                             |
|                                       | -   [\#1675: Provide opt-out of       |
|                                       |     filter parser\'s id               |
|                                       |     t                                 |
|                                       | reatment](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1675) |
|                                       |     fixed                             |
|                                       | -   [\#1676: task rm                  |
|                                       |     m                                 |
|                                       | isparsed](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1676) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-08-08]{.small}                  | -   [\#1660: UUID with numeric-only   |
|                                       |     first segment is not parsed       |
|                                       |                                       |
|                                       | properly](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1660) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-08-09]{.small}                  | -   Task: UUID is now validated on    |
|                                       |     import.                           |
+---------------------------------------+---------------------------------------+
| [2015-08-11]{.small}                  | -   [\#305: Unexpected zsh            |
|                                       |     autocomplete                      |
|                                       |                                       |
|                                       | behaviour](https://github.com/Gothenb |
|                                       | urgBitFactory/taskwarrior/issues/305) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-08-12]{.small}                  | -   Task: Merged Duration and         |
|                                       |     ISO8601p objects. All durations   |
|                                       |     are now ISO-centric.              |
|                                       | -   Task: Improved documentation in   |
|                                       |     sample hook script.               |
|                                       | -   [\#1677: info report regression;  |
|                                       |     shouldn\'t be context             |
|                                       |     s                                 |
|                                       | ensitive](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1677) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-08-14]{.small}                  | -   Task: Configuration:              |
|                                       |     \'search.case.sensitive\' now     |
|                                       |     defaults to \'yes\' on Cygwin     |
|                                       | -   [\#1679: Inform \"No changes      |
|                                       |     made.\" when quitting early due   |
|                                       |     to                                |
|                                       |                                       |
|                                       |   signal](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1679) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-08-17]{.small}                  | -   Task: The `is` and `isnt`         |
|                                       |     attribute modifiers are now       |
|                                       |     exact/inexact operators.          |
|                                       | -   Task: Improved documentation for  |
|                                       |     attribute modifiers in the `help` |
|                                       |     command.                          |
+---------------------------------------+---------------------------------------+
| [2015-08-22]{.small}                  | -   [\#1690: import should reject     |
|                                       |     invalid                           |
|                                       |     data](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1690) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-08-23]{.small}                  | -   Task: New `recur` verbosity       |
|                                       |     token.                            |
|                                       | -   Task: New `unwait` verbosity      |
|                                       |     token.                            |
|                                       | -   [\#1688: Notify of                |
|                                       |     waiting→pending                   |
|                                       |     p                                 |
|                                       | romotion](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1688) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-08-27]{.small}                  | -   [\#1694: Reversed ranges are      |
|                                       |     parsed as a mathematician would   |
|                                       |                                       |
|                                       |   expect](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1694) |
|                                       |     fixed                             |
|                                       | -   [\#1695: task add: segfault with  |
|                                       |     f                                 |
|                                       | oo-bar:1](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1695) |
|                                       |     fixed                             |
|                                       | -   [\#1699: project.not:something    |
|                                       |     doesn\'t exclude                  |
|                                       |     project:something.sub             |
|                                       | projects](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1699) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-08-28]{.small}                  | -   Task:                             |
|                                       |     `rc.report.<name>.sort:none` now  |
|                                       |     performs no sorting, and retains  |
|                                       |     the order of all UUID values      |
|                                       |     specified.                        |
|                                       | -   Task: the `columns` report gained |
|                                       |     a \'type\' field.                 |
+---------------------------------------+---------------------------------------+
| [2015-08-29]{.small}                  | -   Task: The `commands` report       |
|                                       |     gained a \'description\' field.   |
+---------------------------------------+---------------------------------------+
| [2015-08-30]{.small}                  | -   Task: The `TASKDATA` environment  |
|                                       |     variable is now mandatory in Bash |
|                                       |     tests.                            |
+---------------------------------------+---------------------------------------+
| [2015-08-31]{.small}                  | -   Task: The `LATEST` virtual tag    |
|                                       |     indicates the most recently added |
|                                       |     task.                             |
|                                       | -   Task: The `PROJECT` virtual tag   |
|                                       |     indicates that a project is       |
|                                       |     assigned.                         |
|                                       | -   Task: The `PRIORITY` virtual tag  |
|                                       |     indicates that a priority is      |
|                                       |     assigned.                         |
+---------------------------------------+---------------------------------------+
