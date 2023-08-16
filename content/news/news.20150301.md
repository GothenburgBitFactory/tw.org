---
title: "Activity Digest: February 2015"
date: 2015-03-01
---

### Activity Digest: February 2015 

This is the second of an ongoing series of activity reports, published monthly, to highlight activity in the Taskwarrior project.
Here is what happened in February 2015.

2015-02-01

Renato adds a wrapper script that instruments all hooks scripts which gives the test framework an inspectable data structure that details hook script activity.

2015-02-03

It was reiterated that there is a place to check, to see what the latest release of Taskwarrior is: `https://tasktools.org/latest`. This is suitable for anyone who needs to programmatically scan for notification of a release.

2015-02-07

A bug in the code that executes hook scripts is fixed, which allows hook script testing on FreeBSD and Cygwin to proceed.

2015-02-07

A preliminary design for supporting the notion of active contexts was agreed upon, written up and placed among the [design docs](https://github.com/GothenburgBitFactory/taskwarrior/blob/develop/doc/devel/rfcs/README.md).

2015-02-08

The document describing [future plans](https://github.com/GothenburgBitFactory/taskwarrior/tree/develop/doc/devel/rfcs/plans.md) was updated.
This document shows a high-level overview of what areas of Taskwarrior are planned for future work.
While there is minimal detail, it does represent all the planning that exists.
It lists the current release, the next release (short term) and future releases (long term) milestones.

2015-02-09

More \"category\" values were addd to Jira to allow more useful grouping of issues.

2015-02-13

Renato adds a `status` command to the Taskserver `taskdctl` launcher.

2015-02-14

The hook script interface is made much stricter, with lots more consistency checking.
This will help deal with non-compliant hook scripts, and scripts in development.

2015-02-14

Taskwarrior 2.4.1 is ready to release, pending testing by
[Bugwarrior](https://github.com/ralphbean/bugwarrior),
[inthe.am](https://inthe.am/about), and
[tasklib](https://github.com/tbabej/tasklib).

2015-02-15

The [future plans](https://github.com/GothenburgBitFactory/taskwarrior/tree/develop/doc/devel/rfcs/plans.md) document was updated to include Taskserver plans (which are currently sparse).
More details were added to the Taskwarrior plans.

2015-02-15

Testing showed that 2.4.1 does not degrade performance any more than 2.4.0 did.
See the [Performance Comparison](https://gothenburgbitfactory.org/projects/performance) for charts.
Note that 2.4.0 contains on-load legacy value mapping for durations, which introduced a performance hit.

2015-02-16

[Taskwarrior 2.4.1](/download/task-2.4.1.tar.gz) is released.
Although a minor release, there are significant bug fixes and improvements to the [Hook system](/docs/hooks) that make this a recommended upgrade.

2015-02-16

Taskwarrior 2.4.2 work begins, with this effort being mostly concerned with bugs and performance.
Mostly.

2015-02-16

Ralph Bean releases [taskw](https://pypi.python.org/pypi/taskw) with support for Taskwarrior 2.4.1.

2015-02-16

Renato doubles the speed of the test suite.
We\'re not sure how.

2015-02-16

Taskwarrior 2.4.2 work begins, with this effort being mostly concerned with bugs and performance.
Mostly.

2015-02-17

The `INSTALL` file gets a fresh set of instructions which now mention the dependencies and requirements.

2015-02-17

The website gains a page devoted to showing [Command Line Examples](/docs/examples) intended to answer a few common questions and showcase some tricks.

2015-02-19

Renato converts more Perl unit tests to Python, raising the percentage to 22.8% Python.
The goal is ultimately 100%. Additionally, some of the individual test scripts are being merged into higher-level feature test scripts.

2015-02-21

Wim fixes C++11 build issues, which means Taskwarrior can begin to take advantage of C++11 capabilities, after a 4-year grace period to let compilers catch up.

2015-02-22

Wim fixes a dangling pipe problem that prevents forking hook scripts from running.

2015-02-22

Taskserver gained a new man page for `taskdctl`.

2015-02-23

Tomas implements the new [context](/docs/context) feature and commands.

2015-02-24

The `list` report loses listing breaks by default.
The `minimal` report shows the feature.

2015-02-25

The Taskwarrior `info` command gains the ability to show virtual tags.

2015-02-25

Bash completion script learns about new `context` commands.

2015-02-28

Tomas added a GC call before the `projects` command runs, to make the output current.

2015-02-28

Tomas added aggregated task counts to the `projects` reports, where subprojects contributed to the super-projects.

2015-02-28

Taskwarrior 2.4.1 is available in binary and source package form for Cygwin 32- and 64-bit systems.
