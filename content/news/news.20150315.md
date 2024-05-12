---
title: "Taskwarrior 2.4.2 Released"
date: 2015-03-15
---

### Taskwarrior 2.4.2 Released 

Taskwarrior 2.4.2 is released.
This is primarily a bug fix release to address a bad hook problem that prevented on-modify hooks from modifying tasks.

Additionally, the new `context` command is included, as are updated themes with higher contrast.
Although this is a minor release, there are significant bug fixes and new features make this a recommended upgrade.
Changes include:

- New `context` command.
  See the [online documentation](../../docs/context/) for full details.
- Theme fixes, eliminating the very low contrast problems reported
- Minor built-in report changes
- Assorted color fixes
- Recur column now properly suppressed when there is no data
- UDA values now accessible via DOM reference
- Fixed some code that was not UTF8-aware
- Removed pthreads linkage
- Fixed hooks problem
- `info` command now shows virtual tags
- Several bug fixes

For full details, see the ChangeLog file included in the release.

The release is immediately available as a source [tarball](../../download/task-2.4.2.tar.gz).
Binary packages will soon be available via your Operating System's package manager.
