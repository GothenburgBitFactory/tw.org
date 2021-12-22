---
title: "News: Activity Digest: February 2016"
---

### Activity Digest: February 2016 [2016-03-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in February 2016.

This is not a complete list of all activity, just work that results in a
non-trivial change. For a full list, see the [full Git
history](https://github.com/GothenburgBitFactory/taskwarrior/commits/v2.5.1).

+---------------------------------------+---------------------------------------+
| [2016-02-01]{.small}                  | -   [\#236: short help                |
|                                       |     text](https://github.com/Gothenb  |
|                                       | urgBitFactory/taskwarrior/issues/236) |
|                                       |     fixed                             |
|                                       | -   task: Attribute modification      |
|                                       |     delegated to tpye-specific        |
|                                       |     objects                           |
|                                       | -   task: UDA definitions made more   |
|                                       |     robust                            |
+---------------------------------------+---------------------------------------+
| [2016-02-02]{.small}                  | -   [\#1721: Inconsistent failure     |
|                                       |     mode on invalid task              |
|                                       |     id](https://github.com/Gothenbu   |
|                                       | rgBitFactory/taskwarrior/issues/1721) |
|                                       |     fixed                             |
|                                       | -   [\#1734: Setting wait date on     |
|                                       |     status:completed /                |
|                                       |     status                            |
|                                       | :deleted](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1734) |
|                                       |     fixed                             |
|                                       | -   [\#1778: \'\\\' at end of         |
|                                       |     description in \'task edit\'      |
|                                       |     merges task with following        |
|                                       |     task](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1778) |
|                                       |     fixed                             |
|                                       | -   [\#1787: Removing the due date of |
|                                       |     a task with no due date modifies  |
|                                       |     the                               |
|                                       |     task](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1787) |
|                                       |     fixed                             |
|                                       | -   task: Various attribute accessors |
|                                       |     were autovivifying, only to have  |
|                                       |     the attribute removed later,      |
|                                       |     which is silly                    |
+---------------------------------------+---------------------------------------+
| [2016-02-03]{.small}                  | -   libshared: FS gained automatic    |
|                                       |     BOM-removal logic                 |
|                                       | -   task: Assorted C++11-isms         |
|                                       |     embraced                          |
|                                       | -   task: DOM Object demoted to       |
|                                       |     functions                         |
+---------------------------------------+---------------------------------------+
| [2016-02-05]{.small}                  | -   task: 2.5.1 beta1 released        |
+---------------------------------------+---------------------------------------+
| [2016-02-06]{.small}                  | -   anomaly: Test scripts copied to   |
|                                       |     build dir                         |
|                                       | -   clog: Test scripts copied to      |
|                                       |     build dir                         |
|                                       | -   clog: Fixed broken `run_all`      |
|                                       |     script                            |
|                                       | -   flod2: Test scripts copied to     |
|                                       |     build dir                         |
|                                       | -   flod2: Fixed broken `run_all`     |
|                                       |     script                            |
|                                       | -   libshared: Fixed broken `run_all` |
|                                       |     script                            |
|                                       | -   taskd: Fixed broken `run_all`     |
|                                       |     script                            |
|                                       | -   tasksh: Fixed broken `run_all`    |
|                                       |     script                            |
|                                       | -   timew: Fixed broken `run_all`     |
|                                       |     script                            |
|                                       | -   vitapi: Fixed broken `run_all`    |
|                                       |     script                            |
|                                       | -   vramsteg: Fixed broken `run_all`  |
|                                       |     script                            |
+---------------------------------------+---------------------------------------+
| [2016-02-07]{.small}                  | -   Holidata.net: Added `sk-SK`       |
|                                       |     locale                            |
+---------------------------------------+---------------------------------------+
| [2016-02-08]{.small}                  | -   [\#1792: Task sync failed:        |
|                                       |     \"Either your credentials are     |
|                                       |     incorrect, or your account        |
|                                       |     doesn\'t exist on the             |
|                                       |     Tasks                             |
|                                       | erver.\"](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1792) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2016-02-13]{.small}                  | -   task: Some dates were being       |
|                                       |     parsed twice                      |
+---------------------------------------+---------------------------------------+
| [2016-02-14]{.small}                  | -   libshared: ISO8601 date handling  |
|                                       |     now integrated and decoupled as   |
|                                       |     Datetime                          |
+---------------------------------------+---------------------------------------+
| [2016-02-16]{.small}                  | -   libshared: ISO8601 duration       |
|                                       |     handling now integrated and       |
|                                       |     decoupled as Duration             |
+---------------------------------------+---------------------------------------+
| [2016-02-20]{.small}                  | -   task: Dev meetup in NYC - liquids |
|                                       |     consumed                          |
|                                       | -   taskd: Inherited fixes and        |
|                                       |     performance improvements from     |
|                                       |     Taskwarrior                       |
+---------------------------------------+---------------------------------------+
| [2016-02-21]{.small}                  | -   [\#104: Unrecognized taskwarrior  |
|                                       |     file                              |
|                                       |     format](https://github.com/Gothen |
|                                       | burgBitFactory/taskserver/issues/104) |
|                                       |     fixed                             |
|                                       | -   taskd: Updated demo scripts       |
+---------------------------------------+---------------------------------------+
| [2016-02-22]{.small}                  | -   task: Removed circularity         |
|                                       |     checking on `add`                 |
+---------------------------------------+---------------------------------------+
| [2016-02-23]{.small}                  | -   [\#1733: Parsing bug when doing   |
|                                       |     \"task                            |
|                                       |                                       |
|                                       |   undo\"](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1733) |
|                                       |     fixed                             |
|                                       | -   [\#1797: one task eaten all my    |
|                                       |     RAM](https://github.com/Gothenbu  |
|                                       | rgBitFactory/taskwarrior/issues/1797) |
|                                       |     fixed                             |
|                                       | -   task: Found that tag attribute    |
|                                       |     column width was never actually   |
|                                       |     calculated                        |
|                                       | -   task: Found that line hyphenation |
|                                       |     has been broken for a long time   |
+---------------------------------------+---------------------------------------+
| [2016-02-24]{.small}                  | -   task: [2.5.1                      |
|                                       |                                       |
|                                       |   released](/news/news.20160224.html) |
|                                       |     which focused entirely on bug     |
|                                       |     fixes and performance             |
|                                       | -   task: 2.6.0 development begins,   |
|                                       |     intending to greatly improve      |
|                                       |     recurrence                        |
|                                       | -   task: Removed deprecated          |
|                                       |     `alias._query` default            |
+---------------------------------------+---------------------------------------+
| [2016-02-25]{.small}                  | -   task: Eliminated `sprintf`        |
+---------------------------------------+---------------------------------------+
| [2016-02-28]{.small}                  | -   [\#65: sync conflict deleted all  |
|                                       |     annotations of the                |
|                                       |     task](https://github.com/Gothe    |
|                                       | nburgBitFactory/taskserver/issues/65) |
|                                       |     fixed                             |
|                                       | -   [\#1765: Warning \"ignoring       |
|                                       |     return value of 'int ftruncate\"  |
|                                       |     while doing make on               |
|                                       |     xubu                              |
|                                       | ntu15.10](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1765) |
|                                       |     fixed                             |
|                                       | -   taskd: Updated expired test certs |
+---------------------------------------+---------------------------------------+
