---
title: "Taskwarrior - Triage"
---

# Triage

This is the initial assessment of an issue.
The purpose is to get it moving in the right direction and make sure it gets noticed in the right context, which means making sure that every issue has a suitable category and version.
New issues are reported all the time, sometimes the submitter fills in fields, sometimes not.
That cannot be controlled.
Everything else can.

## Initial Assessment

- Move the issue to the correct project.
  Sometimes an issue is reported as a Taskserver bug, but it is a sync issue with Taskwarrior.
- Move the issue to the correct type, which means bug, feature or improvement.
  Sometimes it is not easy to distinguish, and some folks are clever about reporting a feature request in the form of a bug, assuming that bugs gets more attention than feature requests.
  We're not fooled by that.

## Bugs

- All bugs should have the "Target version" set to the current development effort.
  This reflects the need to fix as many bugs in a release as practical because bugs are a priority.
- The "To" field should be blank.
  This indicates that no one is currently working on it.
- "Category" is usually set to "core" unless there is a more relevant category.
- "Priority" should be "Normal" unless the bug causes crashes, lack of functionality, or the worst possible: data corruption.
  Whatever the submitter sets priority to, reassess it, because it will not influence anything.
  Only the true nature of the bug influences priority.
- "Status" should stay as "New".
- "Due date", nope.
  We don't work that way.
- "Target version" has only two alternatives.
  Either it is a Taskwarrior bug in which case the version should be the current development effort ("2.4.0"), or it refers to an external script, and should be "extension".
- If the bug looks like a duplicate, try to find the other bug and link the two.
  It is not necessary to reject the bug.
  Sometimes duplicate bug reports contain complementary information, which is useful.
- If the bug can be replicated, please do so, and add your finding to the issue.
  More evidence is better, and often helps to narrow down the cause.
- If there is a clear workaround to the bug, add the information to the issue, so the submitter can continue to work.
  Helping the submitter work around the problem is important, because the eventual fix will take time, perhaps months.
  Always try to educate the user and don't forget that these issues are permanent and therefore searchable and useful to everyone.
- If a bug looks like a really big problem, tell people, make a noise.

## Features

Same as "Bugs" above , but with these differences:

- "Target version" should always be "BACKLOG".
  This is a non-specific future release.
  Features should be cherry-picked out of the "BACKLOG" version and moved to the current development version.
  They should not default to the current development version, where we have to defer them constantly.
  It gives the wrong impression to have a giant list of features under the current development effort - it makes people think the next release is going to be huge, which is rarely the case.
