---
title: "News: Activity Digest: October 2016"
---

### Activity Digest: October 2016 [2016-11-02]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in our projects. Here is what happened in October 2016. This is not a
complete list of all activity, just work that results in a non-trivial change.
For a full list, see the git history of all the projects.

::: {.callout .callout-info}
#### Summary

Flod2 is now being rolled out for testing. This is a CI system rewrite that
eliminates build server daemons and the pull model. This will allow greater use
of virtual machines, and more automation. For example, we will now be able to
automatically generate coverage reports and snapshot tarballs, based on build
characteristics.

The focus is now Taskserver 1.2.0, which begins with code modernization and
integration of `libshared`. The 1.2.0 release will be more reliable with easier
diagnostics, and all the bug fixes we can make.

What is Rat? It\'s the beginning of the new rule system that will work its way
into most projects. More details soon.
:::

+---------------------------------------+---------------------------------------+
| [2016-10-04]{.small}                  | -   Timewarrior: Taskwarrior projects |
|                                       |     are now used intact as            |
|                                       |     Timewarrior tags, in addition to  |
|                                       |     being split on \'.\' for          |
|                                       |     hierarchical tags                 |
+---------------------------------------+---------------------------------------+
| [2016-10-07]{.small}                  | -   [\#24: documentation              |
|                                       |     typo](https://github.com/G        |
|                                       | othenburgBitFactory/tw.org/issues/24) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2016-10-08]{.small}                  | -   Flod: Now builds tinderbox report |
|                                       |     with minimal I/O                  |
|                                       | -   Flod: New report template         |
|                                       |     ([                                |
|                                       | prototype](https://gothenburgbitfacto |
|                                       | ry.org/prototype/anomaly-1.2.0.html)) |
|                                       |     with collapsible sections         |
+---------------------------------------+---------------------------------------+
| [2016-10-11]{.small}                  | -   WWW: Transferred all DNS handling |
|                                       |     over to                           |
|                                       |     [DNSimple](https://dnsimple.com/) |
|                                       | -   WWW: Acknowledged generous        |
|                                       |     support from                      |
|                                       |     [Dig                              |
|                                       | italocean](https://digitalocean.com/) |
+---------------------------------------+---------------------------------------+
| [2016-10-13]{.small}                  | -   Flod: Incorporates build times in |
|                                       |     report                            |
|                                       | -   Flod: Configurable report length  |
+---------------------------------------+---------------------------------------+
| [2016-10-14]{.small}                  | -   Flod: Can now execute remote      |
|                                       |     build/test over ssh               |
|                                       | -   libshared: Improved C++ Core      |
|                                       |     Guidelines compliance             |
+---------------------------------------+---------------------------------------+
| [2016-10-16]{.small}                  | -   [\#1870: Change Task::get call to |
|                                       |     the more efficient                |
|                                       |     T                                 |
|                                       | ask::has](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1870) |
|                                       |     fixed                             |
|                                       | -   Task: Migrated more code to use   |
|                                       |     `libshared` objects, instead of   |
|                                       |     Taskwarrior objects               |
|                                       | -   Task: Improved C++ Core           |
|                                       |     Guidelines compliance             |
+---------------------------------------+---------------------------------------+
| [2016-10-17]{.small}                  | -   Task: The `Timer` object was      |
|                                       |     migrated to `libshared`           |
+---------------------------------------+---------------------------------------+
| [2016-10-22]{.small}                  | -   Taskserver: Updated test          |
|                                       |     framework in preparation for      |
|                                       |     migrating all tests to Python     |
|                                       | -   Taskserver: Eliminated all        |
|                                       |     references to the unimplemented   |
|                                       |     \'group\' feature                 |
+---------------------------------------+---------------------------------------+
| [2016-10-23]{.small}                  | -   libshared: Migrated several       |
|                                       |     utility functions from Taskserver |
|                                       | -   Taskserver: Updated compiler      |
|                                       |     requirements to GCC 4.9/Clang 3.4 |
|                                       | -   Taskserver: Now uses the name     |
|                                       |     \'api\' instead of \'client\'     |
|                                       |     when describing certs/keys, to    |
|                                       |     avoid misinterpretation           |
|                                       | -   Taskserver: Renamed the           |
|                                       |     \'client\' command to \'api\'     |
|                                       | -   Taskserver: Removed unimplemented |
|                                       |     \'status\' command                |
|                                       | -   Taskserver: Converted all tests   |
|                                       |     to Python                         |
+---------------------------------------+---------------------------------------+
| [2016-10-29]{.small}                  | -   Rat: Fixed a \'This should never  |
|                                       |     happen\' exception that was       |
|                                       |     actually quite common             |
+---------------------------------------+---------------------------------------+
| [2016-10-30]{.small}                  | -   [\#53: No errors in log in case   |
|                                       |     of \"No space left on device\",   |
|                                       |     but task data                     |
|                                       |                                       |
|                                       |   corrupted](https://github.com/Gothe |
|                                       | nburgBitFactory/taskserver/issues/53) |
|                                       |     fixed                             |
|                                       | -   [\#112: warning: missing          |
|                                       |     initializer for                   |
|                                       |     member](https://github.com/Gothen |
|                                       | burgBitFactory/taskserver/issues/112) |
|                                       |     fixed                             |
|                                       | -   libshared: Improved error         |
|                                       |     handling for assorted file system |
|                                       |     calls                             |
+---------------------------------------+---------------------------------------+
| [2016-10-31]{.small}                  | -   libshared: Updated `Log` object   |
|                                       |     to incorporate Taskserver         |
|                                       |     features                          |
|                                       | -   Task: Made an error message more  |
|                                       |     accurated, to reduce some         |
|                                       |     confusion when a filter does not  |
|                                       |     limit an operation to just the    |
|                                       |     pending tasks                     |
|                                       | -   Taskserver: Improved C++ Core     |
|                                       |     Guidelines compliance             |
|                                       | -   Taskserver: Cleanup of unnused    |
|                                       |     methods                           |
|                                       | -   Taskserver: Now use the           |
|                                       |     `libshared` `Log` object          |
+---------------------------------------+---------------------------------------+
