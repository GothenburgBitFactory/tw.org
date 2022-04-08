---
title: "Services Migration"
date: 2018-02-03
---

### Services Migration 

We are migrating services, and there will be a lot of changes.
Here is a list of what is happening right now:

- We have a new support email address that should be used for all support  requests: <support@gothenburgbitfactory.org>
  The old support email addresses will be forwarded while we work to change  all references.
  Current source tarballs, and old releases will not be  changed.
  The preferred mechanism to report a problem is to open a GitHub issue in the  appropriate repository, for example:
  <https://github.com/GothenburgBitFactory/taskwarrior/issues>
  <https://github.com/GothenburgBitFactory/taskserver/issues>
  <https://github.com/GothenburgBitFactory/taskshell/issues>
  <https://github.com/GothenburgBitFactory/timewarrior/issues>
  ... and ѕo on.

- The old Confluence site at ~~`answers.tasktools.org`~~ has been retired.
  We will  be better served by an FAQ page, which is a curated list of questions, which  have been clarified, tested, and sometimes made for more general use.
  This mean we\'ll have an organized FAQ, with no duplication, no bugs being  reported in the wrong place, no wrong answers being voted on, and so on.
  Additionally, there will be reduced costs and administration for us.
  The [new FAQ page](/support/faq) has begun, and  will be expanded as we work on it.

- The Gitea instance at ~~`git.tasktools.org`~~ is retired.
  The repositories are  all moved to: https://github.com/GothenburgBitFactory
  If you have an active repository clone, either change the `.git/config` entry to change the remote, or reclone.

- The Jira bug server at ~~`bug.tasktools.org`~~ is retired.
  All new issues should  be entered at: <https://github.com/GothenburgBitFactory/taskwarrior/issues> or <https://github.com/GothenburgBitFactory/timewarrior/issues>.

- The preferred way to submit patches is now via GitHub pull request.

We expect this to be completed within a few days, but most of the changes have already occurred.
