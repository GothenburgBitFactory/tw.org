---
title: "News: Activity Digest: December 2017"
---

### Activity Digest: December 2016 [2017-01-02]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in our projects. Here is what happened in December 2016. This is not a
complete list of all activity, just work that results in a non-trivial change.
For a full list, see the git history of all the projects.

::: {.callout .callout-info}
#### Summary

Both Taskwarrior and Taskserver improved [GnuTLS](https://gnutls.org/) support,
in particular with more robust certificate validation, and error
reporting/logging.

The rat parser is now handling complex grammars, such as the
[clog](/docs/clog/index.html) configuration file, and will later be used to
handle command line parsing in all projects.

The Taskwarrior overhaul of recurrence features has begun, which will culminate
in the 2.6.0 release with new types of recurring tasks.
:::

+---------------------------------------+---------------------------------------+
| [2016-12-03]{.small}                  | -   rat: Added test suite for all     |
|                                       |     supported grammar                 |
+---------------------------------------+---------------------------------------+
| [2016-12-10]{.small}                  | -   Guides: Added license             |
+---------------------------------------+---------------------------------------+
| [2016-12-11]{.small}                  | -   libshared: Pig inherits Nibbler   |
|                                       |     optimization and no longer makes  |
|                                       |     string copies                     |
|                                       | -   libshared: `Pig::getUntil` was    |
|                                       |     including the terminator by       |
|                                       |     mistake                           |
+---------------------------------------+---------------------------------------+
| [2016-12-17]{.small}                  | -   libshared: Table supports data    |
|                                       |     obfuscation                       |
+---------------------------------------+---------------------------------------+
| [2016-12-19]{.small}                  | -   [\#5: Harden server against       |
|                                       |     malformed                         |
|                                       |     requests](https://github.com/Goth |
|                                       | enburgBitFactory/taskserver/issues/5) |
|                                       |     fixed                             |
|                                       | -   [\#70: Log permission             |
|                                       |     errors](https://github.com/Gothe  |
|                                       | nburgBitFactory/taskserver/issues/70) |
|                                       |     fixed                             |
|                                       | -   [\#81: Improve logging features   |
|                                       |     and provide informative error     |
|                                       |                                       |
|                                       |    messages](https://github.com/Gothe |
|                                       | nburgBitFactory/taskserver/issues/81) |
|                                       |     fixed                             |
|                                       | -   [\#116: Provided systemd unit     |
|                                       |     file does not match recommended   |
|                                       |     systemd unit file in              |
|                                       |     docs](https://github.com/Gothen   |
|                                       | burgBitFactory/taskserver/issues/116) |
|                                       |     fixed                             |
|                                       | -   [\#125: taskd doesn\'t check      |
|                                       |     ownership of files in             |
|                                       |     \$TASKDDATA, sync fails without   |
|                                       |     error](https://github.com/Gothen  |
|                                       | burgBitFactory/taskserver/issues/125) |
|                                       |     fixed                             |
|                                       | -   [\#1886: Specify different path   |
|                                       |     to extensions/hooks               |
|                                       |     d                                 |
|                                       | irectory](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1886) |
|                                       |     fixed                             |
|                                       | -   [\#1869: \"Well-known\" CA        |
|                                       |     certificates not properly         |
|                                       |     aut                               |
|                                       | o-loaded](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1869) |
|                                       |     fixed                             |
|                                       | -   rat: Added entity support         |
|                                       | -   Task: `show` command didn\'t      |
|                                       |     include the `debug.tls` setting   |
|                                       | -   Task: Improved certificate        |
|                                       |     validation diagnostics            |
|                                       | -   Task: Added GnuTLS 3.4.6 API      |
|                                       |     support                           |
|                                       | -   Taskd: Added GnuTLS 3.4.6 API     |
|                                       |     support                           |
+---------------------------------------+---------------------------------------+
| [2016-12-22]{.small}                  | -   [\#1891: uuids subcommand         |
|                                       |     produces a space-delimited list,  |
|                                       |     not                               |
|                                       |     comma-d                           |
|                                       | elimited](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1891) |
|                                       |     fixed                             |
|                                       | -   libshared: Updated Uicode         |
|                                       |     character classification          |
|                                       | -   rat: Supports the `<punct>`,      |
|                                       |     `<eol>`, `<sep>`, `<ws>`, and     |
|                                       |     `<alpha>` intrinsics              |
|                                       | -   rat: Now reads files, as well as  |
|                                       |     CLI samples                       |
+---------------------------------------+---------------------------------------+
| [2016-12-23]{.small}                  | -   rat: Documents the PEG format     |
|                                       | -   rat: Supports the `<word>`        |
|                                       |     intrinsic                         |
|                                       | -   rat: Now has a Color type grammar |
+---------------------------------------+---------------------------------------+
| [2016-12-26]{.small}                  | -   Guides: Updated taskserver-setup  |
|                                       |     based on user feedback            |
|                                       | -   Holidata: Prototype for           |
|                                       |     auto-generating holiday files     |
|                                       | -   libshared: Args supports option   |
|                                       |     counting                          |
|                                       | -   rat: Now has a Datetime and       |
|                                       |     Duration grammar                  |
|                                       | -   rat: Now has a Clog CLI grammar   |
|                                       | -   rat: Supports the `<token>`       |
|                                       |     intrinsic                         |
+---------------------------------------+---------------------------------------+
| [2016-12-27]{.small}                  | -   Holidata: Can now generate source |
|                                       |     CSV files                         |
+---------------------------------------+---------------------------------------+
| [2016-12-31]{.small}                  | -   [\#1871: Change signature for     |
|                                       |     dependencyGe                      |
|                                       | tBlocked](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1871) |
|                                       |     fixed                             |
|                                       | -   [\#1872: Change signature of      |
|                                       |     Task:                             |
|                                       | :getTags](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1872) |
|                                       |     fixed                             |
|                                       | -   [\#1873: Change signature of      |
|                                       |     Task::getAnn                      |
|                                       | otations](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1873) |
|                                       |     fixed                             |
|                                       | -   [\#1891: uuids subcommand         |
|                                       |     produces a space-delimited list,  |
|                                       |     not                               |
|                                       |     comma-d                           |
|                                       | elimited](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1891) |
|                                       |     fixed                             |
|                                       | -   Task: Fixed mis-labelled          |
|                                       |     `scheduled` column                |
|                                       | -   Task: New `rtype`, `last` and     |
|                                       |     `template` attributes added       |
+---------------------------------------+---------------------------------------+
