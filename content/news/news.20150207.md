---
title: "News: Activity Digest: January 2015"
---

::: {.navbar .navbar-default .navbar-inverse .navbar-fixed-top role="navigation"}
::: {.container}
[![](/images/tw-s.png){width="24" height="24"} TASKWARRIOR](/){.navbar-brand
.text-heavy}

::: {.navbar-header}
[Toggle navigation]{.sr-only} []{.icon-bar} []{.icon-bar} []{.icon-bar}
:::

::: {.collapse .navbar-collapse}
-   [News](/news/)
-   [Docs](/docs/)
-   [Download](/download/)
-   [Support](/support/)
-   [Tools](/tools/)
:::
:::
:::

::: {.container}
::: {.col-md-2 .main}
:::

::: {.col-md-8 .main}
::: {.row}
### Activity Digest: January 2015 [2015-02-07]{.small}

This is the first of an ongoing series of activity reports, published monthly,
to highlight activities in the Taskwarrior project. Here is what happened in
January 2015.

+---------------------------------------+---------------------------------------+
| [2015-01-01]{.small}                  | [Taskwarrior                          |
|                                       | 2.4.0](https://tas                    |
|                                       | kwarrior.org/news/news.20150101.html) |
|                                       | released. Including ISO date support, |
|                                       | algebraic expressions and more.       |
+---------------------------------------+---------------------------------------+
| [2015-01-02]{.small}                  | Some people are seeing unreadable     |
|                                       | color combination in 2.4.0 color      |
|                                       | themes. Some contrast and color       |
|                                       | improvements were made in the 2.4.1   |
|                                       | branch.                               |
+---------------------------------------+---------------------------------------+
| [2015-01-03]{.small}                  | People are finding that 2.4.0         |
|                                       | introduces a tri-state                |
|                                       | \'taskd.trust\' setting, which needs  |
|                                       | to be updated with a good value. The  |
|                                       | [troubleshooting                      |
|                                       | sync](https://taskwarrior.org/docs/   |
|                                       | taskserver/troubleshooting-sync.html) |
|                                       | docs are updated accordingly.         |
+---------------------------------------+---------------------------------------+
| [2015-01-03]{.small}                  | The Taskwarrior data anonymizer is    |
|                                       | now available for download. *Edit:    |
|                                       | The anoonymizer is now replaced by*   |
|                                       |                                       |
|                                       |     task ... rc.obfuscate:1           |
+---------------------------------------+---------------------------------------+
| [2015-01-03]{.small}                  | The `waiting` report is broken in     |
|                                       | 2.4.0, and shows all tasks that have  |
|                                       | the waiting attribute, past or        |
|                                       | future.                               |
+---------------------------------------+---------------------------------------+
| [2015-01-03]{.small}                  | People are finding that the `due.age` |
|                                       | column used in some reports is not    |
|                                       | showing data in the future, which     |
|                                       | makes it useless. Fixed in 2.4.1.     |
+---------------------------------------+---------------------------------------+
| [2015-01-03]{.small}                  | Tomas introduces                      |
|                                       | [taskli                               |
|                                       | b](https://github.com/tbabej/tasklib) |
|                                       | which provides a Python API to access |
|                                       | Taskwarrior data.                     |
+---------------------------------------+---------------------------------------+
| [2015-01-03]{.small}                  | New documentation to help developers  |
|                                       | [build](htt                           |
|                                       | ps://taskwarrior.org/docs/build.html) |
|                                       | Taskwarrior is introduced.            |
+---------------------------------------+---------------------------------------+
| [2015-01-04]{.small}                  | [New                                  |
|                                       | documentation](htt                    |
|                                       | ps://taskwarrior.org/docs/dates.html) |
|                                       | listing the 47 new ISO date formats   |
|                                       | supported is added.                   |
+---------------------------------------+---------------------------------------+
| [2015-01-04]{.small}                  | Changes made to support building with |
|                                       | musl (libc) in 2.4.1.                 |
+---------------------------------------+---------------------------------------+
| [2015-01-04]{.small}                  | A script to generate a test data      |
|                                       | file, that we could use as a common   |
|                                       | basis for checking functionality was  |
|                                       | discussed, but no one wants to do it. |
+---------------------------------------+---------------------------------------+
| [2015-01-05]{.small}                  | The first step is take towards using  |
|                                       | modern C++11 features, where N1984    |
|                                       | (auto type derivation) is used in one |
|                                       | place, and implies a minimum gcc 4.4  |
|                                       | or clang 2.9, both of which are       |
|                                       | several years old.                    |
+---------------------------------------+---------------------------------------+
| [2015-01-08]{.small}                  | The `diag` command is improved so     |
|                                       | that it offers information when hook  |
|                                       | scripts are minamed, or not           |
|                                       | executable.                           |
+---------------------------------------+---------------------------------------+
| [2015-01-08]{.small}                  | Jens contributes a German             |
|                                       | localization for Taskwarrior,         |
|                                       | included in 2.4.1.                    |
+---------------------------------------+---------------------------------------+
| [2015-01-18]{.small}                  | Diagnostic and debug output is        |
|                                       | improved for authors of hook scripts. |
+---------------------------------------+---------------------------------------+
| [2015-01-19]{.small}                  | Renato adds support to the test       |
|                                       | framework for hook script tests.      |
|                                       | These are needed before the 2.4.1     |
|                                       | release.                              |
+---------------------------------------+---------------------------------------+
| [2015-01-19]{.small}                  | Tomas makes several useful hook       |
|                                       | scripts available from the [tools     |
|                                       | p                                     |
|                                       | age](https://taskwarrior.org/tools/). |
+---------------------------------------+---------------------------------------+
| [2015-01-28]{.small}                  | Leo announces                         |
|                                       | [oclaunch                             |
|                                       | ](https://gitlab.com/WzukW/oclaunch), |
|                                       | which can be used to run commands at  |
|                                       | login.                                |
+---------------------------------------+---------------------------------------+
| [2015-01-31]{.small}                  | Hook scripts which create additional  |
|                                       | tasks are causing problems, resulting |
|                                       | in the hooks interface being          |
|                                       | restricted for 2.4.1. Hook scripts    |
|                                       | can no longer modify out-of-context   |
|                                       | tasks, or add arbitrary new tasks.    |
|                                       | Unit tests for hooks are introduced,  |
|                                       | which will lead to more stringent     |
|                                       | checking in Taskwarrior.              |
+---------------------------------------+---------------------------------------+
| [2015-01-31]{.small}                  | Downloads for January for the 2.4.0   |
|                                       | source tarball: 1773.                 |
+---------------------------------------+---------------------------------------+

\
\
:::
:::

::: {.col-md-2 .main}
:::
:::

::: {#footer}
::: {.container}
::: {.col-md-2}
Get Involved\
[Submit a bug](https://github.com/GothenburgBitFactory/taskwarrior/issues)\
[Clone the code](https://github.com/GothenburgBitFactory/taskwarrior)
:::

::: {.col-md-2}
Related Sites\
[gothenburgbitfactory.org](https://gothenburgbitfactory.org)\
[holidata.net](https://holidata.net)
:::

::: {.col-md-2}
Contact\
[[]{.glyphicon .glyphicon-envelope} Email](mailto:support@taskwarrior.org)\
[![](/images/twitter_dark.png){width="16px" height="16px"}
Twitter](https://twitter.com/taskwarrior)
:::

::: {.col-md-2}
Donate\
[Sponsor us on Github
sponsors!](https://github.com/sponsors/GothenburgBitFactory)
:::

::: {.col-md-2}
Copyright &copy: 2018 [Göteborg Bit Factory](/about.html)
:::
:::
:::
