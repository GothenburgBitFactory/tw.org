---
title: "News: Activity Digest: December 2015"
---

### Activity Digest: December 2015 [2016-01-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in December 2015.

This is not a complete list of all activity, just work that results in a
non-trivial change. For a full list, see the [full Git
history](https://github.com/GothenburgBitFactory/taskwarrior/commits/v2.5.1).

+---------------------------------------+---------------------------------------+
| [2015-12-02]{.small}                  | -   timewarrior: Work began on        |
|                                       |     sketching out a time-tracking     |
|                                       |     solution, to integrate with       |
|                                       |     task - details coming soon        |
+---------------------------------------+---------------------------------------+
| [2015-12-07]{.small}                  | -   taskwarrior.org: Updated          |
|                                       |     [tools](/tools/index.html) page   |
|                                       |     with taskwarrior-pomodoro         |
|                                       |     compatibility information         |
+---------------------------------------+---------------------------------------+
| [2015-12-16]{.small}                  | -   taskwarrior.org: Updated          |
|                                       |     [tools](/support/index.html) page |
|                                       |     with IRC logging link             |
|                                       | -   task: UDA indicator column did    |
|                                       |     not properly default to \'U\'     |
|                                       |     fixed                             |
|                                       | -   task: `make install` was not      |
|                                       |     installing the `license.txt` file |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-12-18]{.small}                  | -   Holidata: missing `de-AT` data    |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-12-20]{.small}                  | -   task: Removed task.fish arguments |
|                                       |     until TW-1404 is fixed            |
+---------------------------------------+---------------------------------------+
| [2015-12-21]{.small}                  | -   Holidata: `de-DE` errors fixed    |
+---------------------------------------+---------------------------------------+
| [2015-12-22]{.small}                  | -   [\#1762: add defined languages    |
|                                       |                                       |
|                                       | JAPANESE](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1762) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2015-12-23]{.small}                  | -   [\#100: Log taskd messages to     |
|                                       |     stdout if launched by             |
|                                       |                                       |
|                                       |    systemd](https://github.com/Gothen |
|                                       | burgBitFactory/taskserver/issues/100) |
|                                       |     fixed                             |
|                                       | -   [\#110: Question: About           |
|                                       |                                       |
|                                       | src/tls/\*](https://github.com/Gothen |
|                                       | burgBitFactory/taskserver/issues/110) |
|                                       |     fixed                             |
|                                       | -   [\#1757: taskwarrior 2.5.0 can    |
|                                       |     not compile FreeBSD               |
|                                       |     10.1](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1757) |
|                                       |     fixed                             |
|                                       | -   tasksh: Changed key assignments:  |
|                                       |     `<enter>/r` for review, `s` for   |
|                                       |     skip                              |
|                                       | -   taskd: Refactored list functions  |
|                                       |     for efficiency                    |
+---------------------------------------+---------------------------------------+
| [2015-12-25]{.small}                  | -   taskwarrior.org: Updated          |
|                                       |     [tools](/tools/index.html) page   |
|                                       |     now that Mirakel no longer        |
|                                       |     supports Taskserver               |
+---------------------------------------+---------------------------------------+
| [2015-12-26]{.small}                  | -   [\#1766: Indian Holiday Calendar  |
|                                       |     (Master                           |
|                                       |     Holi                              |
|                                       | dayFile)](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1766) |
|                                       |     fixed                             |
|                                       | -   Holidata: Added `en-IN` data      |
+---------------------------------------+---------------------------------------+
| [2015-12-28]{.small}                  | -   taskwarrior.org: Updated          |
|                                       |     [                                 |
|                                       | columns](/docs/commands/columns.html) |
|                                       |     page which was missing            |
|                                       |     information                       |
|                                       | -   task: Date attributes now have a  |
|                                       |     `relative` format, so address     |
|                                       |     issues with `remaining` and       |
|                                       |     `countdown` not providing         |
|                                       |     complete coverage                 |
+---------------------------------------+---------------------------------------+
| [2015-12-30]{.small}                  | -   taskwarrior.org: Updated          |
|                                       |     [urgency](/docs/urgency.html)     |
|                                       |     page which was missing            |
|                                       |     information                       |
|                                       | -   task: No longer hardcodes libc++  |
|                                       |     on Darwin for users still using   |
|                                       |     GCC                               |
|                                       | -   task: Include sys/syslimits.h on  |
|                                       |     OS X                              |
+---------------------------------------+---------------------------------------+
| [2015-12-31]{.small}                  | -   [\#1773: PATH\_MAX isn\'t defined |
|                                       |     in FS.cpp in some versions of OS  |
|                                       |     X](https://github.com/Gothenbu    |
|                                       | rgBitFactory/taskwarrior/issues/1773) |
|                                       |     fixed                             |
|                                       | -   [\#1774: REG\_ENHANCED, used in   |
|                                       |     RX.cpp, isn\'t defined in all     |
|                                       |     versions of                       |
|                                       |                                       |
|                                       |   Darwin](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1774) |
|                                       |     fixed                             |
|                                       | -   Task: Improved tests that always  |
|                                       |     break at EOY                      |
+---------------------------------------+---------------------------------------+
