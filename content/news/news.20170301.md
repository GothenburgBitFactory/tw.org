---
title: "News: Activity Digest: February 2017"
---

### Activity Digest: February 2017 [2017-03-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in our projects. Here is what happened in February 2017. This is not a
complete list of all activity, just work that results in a non-trivial change.
For a full list, see the git history of all the projects.

![](/news/images/perbacco.png){.img-responsive}

::: {.callout .callout-info}
#### Summary

[The team attended FOSDEM](news.20170208.html) in Brussels, all meeting for the
first time. No one was hurt. Although we had hoped to accomplish a lot during
this time, we instead fell in love with a certain restaurant and Belgian beer.

We would like to welcome Thomas Lauf, who is now pushing to the Timewarrior
repository, and Timewarrior is now being fixed and improved at a much faster
rate. Welcome, Thomas.

The flod2 CI system is coming online, which means that Taskwarrior is now being
built in parallel by two CI systems as we prepare for a more general transition.

-   ~~Taskwarrior 2.6.0 on Flod~~

A generous donation from [DigitalOcean](https://www.digitalocean.com) is making
this possible.
:::

+---------------------------------------+---------------------------------------+
| [2017-02-02]{.small}                  | -   [\#35: Add tests for continue     |
|                                       |     with                              |
|                                       |     ids](https://github.com/Gothen    |
|                                       | burgBitFactory/timewarrior/issues/35) |
|                                       |     tests added                       |
+---------------------------------------+---------------------------------------+
| [2017-02-03]{.small}                  | -   FOSDEM: Team meets up in Brussels |
|                                       |     for FOSDEM, beer.                 |
|                                       | -   FOSDEM: Team immediately          |
|                                       |     recognizeѕ the importance of      |
|                                       |     hotel meeting spaces that include |
|                                       |     large tables. It\'s not something |
|                                       |     we thought about, but now always  |
|                                       |     will.                             |
|                                       | -   FOSDEM: Team discovers great      |
|                                       |     restaurant.                       |
+---------------------------------------+---------------------------------------+
| [2017-02-04]{.small}                  | -   libshared: Fixed a test that      |
|                                       |     assumes every month had 29 days.  |
|                                       |     Not good.                         |
|                                       | -   libshared: Merged the JSON and    |
|                                       |     JSON2 (SAX) parsers.              |
|                                       | -   FOSDEM: Conference underway. Team |
|                                       |     is pleasantly surprised when      |
|                                       |     people recognize the logo on our  |
|                                       |     clothing/laptops and say nice     |
|                                       |     things to us.                     |
|                                       | -   FOSDEM: Team returns to same      |
|                                       |     restaurant, displaying the kind   |
|                                       |     of creativity you\'ve come to     |
|                                       |     expect from us.                   |
+---------------------------------------+---------------------------------------+
| [2017-02-05]{.small}                  | -   Tasksh: the `_reviewed` report    |
|                                       |     now defaults to 6 days, rather    |
|                                       |     than 7 days, to ensure weekly     |
|                                       |     review as the default.            |
|                                       | -   FOSDEM: More people recognize our |
|                                       |     logo. This is nice.               |
|                                       | -   FOSDEM: Fixed an odd C++ syntax   |
|                                       |     error that only affected a few    |
|                                       |     platforms: `auto infix {true};`   |
|                                       |     which clearly wasn\'t uniformly   |
|                                       |     supported. During a FOSDEM break, |
|                                       |     in the cafeteria, we created a    |
|                                       |     new Flod2 build satellite for     |
|                                       |     CentOS 7.3, proviѕioned the VM,   |
|                                       |     and debugged. Three people        |
|                                       |     sharing two laptops extended a CI |
|                                       |     system on another continent,      |
|                                       |     while drinking some very good     |
|                                       |     coffee, surrounded by our fellow  |
|                                       |     attendees, all doing the same     |
|                                       |     thing. This is why we love        |
|                                       |     conferences.                      |
|                                       | -   FOSDEM: Team shamefully returns   |
|                                       |     to the restaurant again, because  |
|                                       |     it was so good. Also laziness.    |
+---------------------------------------+---------------------------------------+
| [2017-02-06]{.small}                  | -   FOSDEM: Breakfast, then we all    |
|                                       |     head to different corners of the  |
|                                       |     globe. Great trip, well worth it. |
+---------------------------------------+---------------------------------------+
| [2017-02-08]{.small}                  | -   Taskwarrior: New `history.daily`, |
|                                       |     `history.weekly`,                 |
|                                       |     `ghistory.daily` and              |
|                                       |     `ghistory.weekly` commands.       |
+---------------------------------------+---------------------------------------+
| [2017-02-09]{.small}                  | -   [\#69: Command \'stop\' with date |
|                                       |     before current interval\'s start  |
|                                       |     date causes                       |
|                                       |                                       |
|                                       |   segfault](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/69) |
|                                       |     fixed                             |
|                                       | -   libshared: Table now offers       |
|                                       |     control over the alternating row  |
|                                       |     coloring.                         |
|                                       | -   Taskwarrior: The `timesheet`      |
|                                       |     report was rewritten to accept a  |
|                                       |     filter, provide more compact      |
|                                       |     output, and provide daily         |
|                                       |     grouping of started and completed |
|                                       |     tasks.                            |
+---------------------------------------+---------------------------------------+
| [2017-02-10]{.small}                  | -   Timewarrior: Now has weekday      |
|                                       |     hints (`:monday`, `:tuesday`,     |
|                                       |     `:wednesday`, `:thursdday`,       |
|                                       |     `:friday`, `:saturday`,           |
|                                       |     `:sunday`) to simplify historic   |
|                                       |     data tracking.                    |
+---------------------------------------+---------------------------------------+
| [2017-02-11]{.small}                  | -   libshared: Can now parse IPv4 and |
|                                       |     IPv6 addresses. This is used when |
|                                       |     trying to determine whether SNI   |
|                                       |     is enabled.                       |
|                                       | -   Taskwarrior: Now supports SNI.    |
+---------------------------------------+---------------------------------------+
| [2017-02-12]{.small}                  | -   Flod2: The commit status report   |
|                                       |     now uses a color palette that is  |
|                                       |     less saturated and doesn\'t       |
|                                       |     transition through brown twice.   |
|                                       |     The colors indicating status now  |
|                                       |     range from black (did not build)  |
|                                       |     through dark red (bad), orange    |
|                                       |     and yellow (better), finally      |
|                                       |     green (100% good). A good commit  |
|                                       |     is then marked as \'clean\' if    |
|                                       |     all the test platforms not only   |
|                                       |     pass, but agree. This will later  |
|                                       |     lead to automatic tagging and dev |
|                                       |     snapshot tarball creation.        |
|                                       | -   Taskwarrior: The build process    |
|                                       |     now clones/updates `libshared` if |
|                                       |     necessary. This removes a manual  |
|                                       |     step.                             |
+---------------------------------------+---------------------------------------+
| [2017-02-13]{.small}                  | -   [\#44: Bogus command line option  |
|                                       |     causes                            |
|                                       |                                       |
|                                       |   segfault](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/44) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2017-02-14]{.small}                  | -   [\#45: totals.py extension script |
|                                       |     fails with an                     |
|                                       |     error](https://github.com/Gothen  |
|                                       | burgBitFactory/timewarrior/issues/45) |
|                                       |     fixed                             |
|                                       | -   Flod2: The summary report,        |
|                                       |     although incomplete, now provides |
|                                       |     an overall assessment of a        |
|                                       |     commit. In this example, the      |
|                                       |     status                            |
|                                       |     [Funky]{style="color              |
|                                       | :#ffafd7; background-color:#822453;"} |
|                                       |     is common, and indicates that     |
|                                       |     there is an important             |
|                                       |     disagreement between the results. |
|                                       |     This is a new feature that better |
|                                       |     highlights problems to be         |
|                                       |     addressed.                        |
|                                       | -   Taskwarrior: Fixed link error on  |
|                                       |     non-macOS platforms.              |
+---------------------------------------+---------------------------------------+
| [2017-02-15]{.small}                  | -   Taskwarrior: Build requirements   |
|                                       |     raised to GCC 4.9/Clang 3.4,      |
|                                       |     after more examples of build      |
|                                       |     failures were found. This is      |
|                                       |     despite compiler claims of C++11  |
|                                       |     compliance                        |
+---------------------------------------+---------------------------------------+
| [2017-02-16]{.small}                  | -   taskwarrior.org: Updated          |
|                                       |     [Ta                               |
|                                       | rball](/docs/taskserver/tarball.html) |
|                                       |     download instructions to          |
|                                       |     accomodate redirects.             |
+---------------------------------------+---------------------------------------+
| [2017-02-18]{.small}                  | -   [\#1898: Task Sync does not send  |
|                                       |     TLS SNI                           |
|                                       |                                       |
|                                       |  headers](https://github.com/Gothenbu |
|                                       | rgBitFactory/taskwarrior/issues/1898) |
|                                       |     fixed                             |
|                                       | -   [\#51: Display error in visual    |
|                                       |     reports                           |
|                                       |     (day,w                            |
|                                       | eek,month)](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/51) |
|                                       |     fixed                             |
|                                       | -   Taskwarrior: Can now distinguish  |
|                                       |     between a missing CA cert, and a  |
|                                       |     present but broken CA cert. Error |
|                                       |     messages improved.                |
|                                       | -   Taskwarrior: With GnuTLS 3.4.6,   |
|                                       |     the `taskd.trust=ignore hostname` |
|                                       |     setting was not ignoring          |
|                                       |     hostname.                         |
|                                       | -   Taskserver: With GnuTLS 3.4.6,    |
|                                       |     the `taskd.trust=ignore hostname` |
|                                       |     setting was not ignoring          |
|                                       |     hostname.                         |
+---------------------------------------+---------------------------------------+
| [2017-02-19]{.small}                  | -   All:                              |
|                                       |     [Task                             |
|                                       | warrior/Taskserver/Tasksh/Timewarrior |
|                                       |     Plans](/docs/design/plans.html)   |
|                                       |     updated.                          |
|                                       | -   Taskwarrior: [Work Week           |
|                                       |                                       |
|                                       |  Support](/docs/design/workweek.html) |
|                                       |     design doc draft created for      |
|                                       |     review.                           |
+---------------------------------------+---------------------------------------+
| [2017-02-20]{.small}                  | -   Taskwarrior: [Full DOM            |
|                                       |     Support](/docs/design/dom.html)   |
|                                       |     design doc draft created for      |
|                                       |     review.                           |
+---------------------------------------+---------------------------------------+
| [2017-02-21]{.small}                  | -   [\#31: Exit on Ctrl-D on          |
|                                       |     non-readline                      |
|                                       |     systems](https://github.com/Goth  |
|                                       | enburgBitFactory/taskshell/issues/31) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2017-02-22]{.small}                  | -   Taskwarrior: [Rule                |
|                                       |     System](/docs/design/rules.html)  |
|                                       |     design doc draft created for      |
|                                       |     review.                           |
+---------------------------------------+---------------------------------------+
| [2017-02-25]{.small}                  | -   [\#53: Timewarrior hook is not    |
|                                       |     Python3                           |
|                                       |                                       |
|                                       | compatible](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/53) |
|                                       |     fixed                             |
|                                       | -   [\#70: The \'tags\' command       |
|                                       |     should support a                  |
|                                       |     filter](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/70) |
|                                       |     fixed                             |
|                                       | -   libshared: Added PEG parser       |
|                                       | -   libshared: Added Packrat parser   |
|                                       | -   Taskwarrior: New DOM references:  |
|                                       |     `tw.program`, `tw.args`,          |
|                                       |     `tw.width`, and `twheight`        |
|                                       |     replacing deprecated              |
|                                       |     `context.xxx` variants.           |
|                                       | -   Timewarrior: Fixed mishandling of |
|                                       |     integer configuration items.      |
|                                       | -   Timewarrior: Made chart           |
|                                       |     configuration errors messages     |
|                                       |     more precise.                     |
+---------------------------------------+---------------------------------------+
| [2017-02-26]{.small}                  | -   Taskwarrior: Removed `$TERM`      |
|                                       |     references from `diagnostics`     |
|                                       | -   Taskwarrior: Migrated from Config |
|                                       |     to libshared Configuration.       |
+---------------------------------------+---------------------------------------+
| [2017-02-27]{.small}                  | -   Taskwarrior: New DOM reference    |
|                                       |     `tw.syncneeded`.                  |
|                                       | -   Taskwarrior: Fixed bug that       |
|                                       |     caused any attribute value        |
|                                       |     starting with \'tw.\',            |
|                                       |     \'system.\', \'context.\' etc to  |
|                                       |     be a DOM reference error.         |
+---------------------------------------+---------------------------------------+
