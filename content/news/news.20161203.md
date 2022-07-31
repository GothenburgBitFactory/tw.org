---
title: "News: Activity Digest: November 2016"
---

### Activity Digest: November 2016 [2016-12-03]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in our projects. Here is what happened in November 2016. This is not a
complete list of all activity, just work that results in a non-trivial change.
For a full list, see the git history of all the projects.

::: {.callout .callout-info}
#### Summary

The focus has been on migrating code back to libshared.git, and in turn making
use of that code. This not only shrinks the size of the projects, but means that
bug fixes in libshared.git benefit all projects, and reduces effort.

The Taskserver codebase is being cleaned up in preparation for a major fix and
test cycle coming up.
:::

+---------------------------------------+---------------------------------------+
| [2016-11-05]{.small}                  | -   [\#56: in the taskwarrior hook,   |
|                                       |     deleting a task doesn\'t stop the |
|                                       |     watch](https://github.com/Gothen  |
|                                       | burgBitFactory/timewarrior/issues/56) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2016-11-06]{.small}                  | -   [\#57: The \'refresh\' scripts    |
|                                       |     overwrites previous years         |
|                                       |     data](https://github.com/Gothen   |
|                                       | burgBitFactory/timewarrior/issues/57) |
|                                       |     fixed                             |
|                                       | -   Timew: Holiday data updated       |
|                                       | -   Taskd: Improved GnuTLS 3.3.0+     |
|                                       |     support                           |
|                                       | -   Taskd: Improved GnuTLS 3.5.6+     |
|                                       |     support for                       |
|                                       |     GNUTLS\_SEC\_PARAM\_HIGH          |
|                                       | -   Guides: Added OpenRheinRuhr       |
|                                       |     slides                            |
+---------------------------------------+---------------------------------------+
| [2016-11-11]{.small}                  | -   [\#31: control-d to               |
|                                       |     exit](https://github.com/Goth     |
|                                       | enburgBitFactory/taskshell/issues/31) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2016-11-12]{.small}                  | -   Taskd: Improved demo tests        |
|                                       | -   libshared: Migrated Timer to use  |
|                                       |     C++11 std::chrono                 |
+---------------------------------------+---------------------------------------+
| [2016-11-13]{.small}                  | -   Task: Integrated libshared.git    |
|                                       |     Timer                             |
|                                       | -   libshared: Added millisecond,     |
|                                       |     microsecond and nanosecond Timer  |
|                                       |     support                           |
+---------------------------------------+---------------------------------------+
| [2016-11-15]{.small}                  | -   [\#58: Fix musl-libc              |
|                                       |     com                               |
|                                       | patibility](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/58) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2016-11-16]{.small}                  | -   WWW: DNS now being resolved by    |
|                                       |     [dnsimple.com](https:             |
|                                       | //dnsimple.com/resolving/taskwarrior) |
+---------------------------------------+---------------------------------------+
| [2016-11-19]{.small}                  | -   WWW: RSS feed cleaned up and      |
|                                       |     validated                         |
|                                       | -   Task: Improved diagnostics        |
|                                       |     regarding missing/unreadable      |
|                                       |     files                             |
|                                       | -   libshared: Made error handling    |
|                                       |     for FS objects very strict, so    |
|                                       |     the error messages are meaningful |
+---------------------------------------+---------------------------------------+
| [2016-11-20]{.small}                  | -   hd.net: Cleaned up holiday        |
|                                       |     definitions for upcoming          |
|                                       |     automation                        |
|                                       | -   holidata: Created new holidata    |
|                                       |     automation utility                |
|                                       | -   holidata: Abstracted all holiday  |
|                                       |     definitions                       |
+---------------------------------------+---------------------------------------+
| [2016-11-21]{.small}                  | -   Vramsteg: Now properly installs   |
|                                       |     man page                          |
|                                       | -   Vramsteg: Test suite converted to |
|                                       |     Python                            |
|                                       | -   All: Fixed test suite problem     |
|                                       |     with Python 3.5.2                 |
|                                       | -   libshared: Refactored Args        |
|                                       |     object, adding features           |
+---------------------------------------+---------------------------------------+
| [2016-11-22]{.small}                  | -   Taskd: Increased use of           |
|                                       |     libshared.git code                |
|                                       | -   Taskd: Added error messages when  |
|                                       |     suspending already suspended      |
|                                       |     node, resuming an unsuspended     |
|                                       |     node                              |
|                                       | -   libshared: Fixed Lexer::dequote   |
|                                       |     minimum length bug                |
|                                       | -   libshared: Merged Configuration   |
|                                       |     with Taskd enhancements           |
+---------------------------------------+---------------------------------------+
| [2016-11-24]{.small}                  | -   rat: Now has PEG syntax tests     |
|                                       | -   rat: Migrated to libshared.git    |
|                                       |     Args                              |
+---------------------------------------+---------------------------------------+
| [2016-11-25]{.small}                  | -   tw.org: Fixed typos in            |
|                                       |     [task-2.5.1.r                     |
|                                       | ef.pdf](/download/task-2.5.1.ref.pdf) |
|                                       |     online                            |
|                                       | -   WWW: HTTP now served and deployed |
|                                       |     by                                |
|                                       |     [caddy](https://caddyserver.com/) |
+---------------------------------------+---------------------------------------+
| [2016-11-26]{.small}                  | -   Taskd: Inherited bug fixes from   |
|                                       |     Taskwarrior                       |
+---------------------------------------+---------------------------------------+
| [2016-11-27]{.small}                  | -   libshared: join() now supports    |
|                                       |     vector\<int\>                     |
|                                       | -   libshared: Improved Path tests    |
|                                       | -   libshared: Migrated find          |
|                                       |     functions from Taskd              |
+---------------------------------------+---------------------------------------+
