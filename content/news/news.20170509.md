---
title: "News: Activity Digest: April 2017"
---

### Activity Digest: April 2017 [2017-05-09]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in our projects. Here is what happened in April 2017. This is not a
complete list of all activity, just work that results in a non-trivial change.
For a full list, see the git history of all the projects.

::: {.callout .callout-info}
#### Summary

April was a relatively quiet month, but with two main efforts: Timewarrior 1.1.0
bug fixing, and deployment of our Flod CI system for all projects.

Flod CI is now operating on five platforms (more coming soon), for every commit
on every branch for every project. This transition allowed us to decommission
several old machines.

![](/news/images/central.png){.img-responsive}

![](/news/images/tw.png){.img-responsive}
:::

+---------------------------------------+---------------------------------------+
| [2017-04-04]{.small}                  | -   [\#75: Timew starts a new         |
|                                       |     interval even if a current        |
|                                       |     interval contains the same set of |
|                                       |     tags](https://github.com/Gothen   |
|                                       | burgBitFactory/timewarrior/issues/75) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2017-04-05]{.small}                  | -   [\#63: Fix bug \'Delete command   |
|                                       |     is not always                     |
|                                       |                                       |
|                                       | deleting\'](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/63) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2017-04-06]{.small}                  | -   [\#35: Continue tracking by       |
|                                       |     ID](https://github.com/Gothen     |
|                                       | burgBitFactory/timewarrior/issues/35) |
|                                       |     fixed                             |
|                                       | -   task: Separated processing of     |
|                                       |     expired tasks (`until:`) from the |
|                                       |     existing recurrence processing    |
+---------------------------------------+---------------------------------------+
| [2017-04-08]{.small}                  | -   [\#73: Let commands convert       |
|                                       |     synthetic intervals before        |
|                                       |     modifying                         |
|                                       |     them](https://github.com/Gothen   |
|                                       | burgBitFactory/timewarrior/issues/73) |
|                                       |     fixed                             |
+---------------------------------------+---------------------------------------+
| [2017-04-10]{.small}                  | -   flod: Integrated flod reports     |
|                                       |     with Gitea                        |
|                                       | -   flod: Implemented summary report  |
|                                       |     at                                |
|                                       |     ~~`https:                         |
|                                       | //central.gothenburgbitfactory.org`~~ |
|                                       | -   task: Implemented framework for   |
|                                       |     supporting the [new recurrence    |
|                                       |     model](https://taskwar            |
|                                       | rior.org/docs/design/recurrence.html) |
+---------------------------------------+---------------------------------------+
| [2017-04-11]{.small}                  | -   [\#67: TimeWarrior should not     |
|                                       |     ignore invalid                    |
|                                       |                                       |
|                                       |    command](https://github.com/Gothen |
|                                       | burgBitFactory/timewarrior/issues/67) |
|                                       |     fixed                             |
|                                       | -   Flod: Deployed Flod CI testing    |
|                                       |     for all projects                  |
+---------------------------------------+---------------------------------------+
| [2017-04-14]{.small}                  | -   timew: The totals.py extension    |
|                                       |     now supports both Python 2.x and  |
|                                       |     3.x                               |
+---------------------------------------+---------------------------------------+
| [2017-04-22]{.small}                  | -   timew: The future command line    |
|                                       |     syntax design is progressing.     |
|                                       |     [Follow it                        |
|                                       |     here](https://github.com/G        |
|                                       | othenburgBitFactory/timewarrior/blob/ |
|                                       | v1.1.0/doc/rfc_command_definition.md) |
+---------------------------------------+---------------------------------------+
| [2017-04-30]{.small}                  | -   task: Implemented new DOM         |
|                                       |     resolver tree to simplify         |
|                                       |     existing DOM support and enable   |
|                                       |     [greater DOM                      |
|                                       |     support](https://taskwarr         |
|                                       | ior.org/docs/design/recurrence.html), |
|                                       |     including formats                 |
+---------------------------------------+---------------------------------------+
