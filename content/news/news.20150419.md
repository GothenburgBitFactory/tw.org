---
title: "Taskwarrior 2.4.3 Released"
date: 2015-04-19
---

### Taskwarrior 2.4.3 Released 

User Defined Attributes ([UDAs](/docs/udas)) have been enhanced so that type `string` attributes may now designate the sort order of allowed values.
This enhancement permits the migration of the `priority` attribute to a UDA.
This means you may now define your own priority levels, sorting and urgency coefficients.

Although it may appear otherwise, there is no new monthly release cycle, it\'s all a coincidence.
The next release will likely take a little longer as we shift focus to Taskserver improvements.

Although this is a minor release, there are significant bug fixes and new features make this a recommended upgrade.
Changes include:

- [Hooks API v2](/docs/hooks2), which is backwards compatible with v1.
  This allows hooks to be more aware of the context in which they are run.
- Default values no longer are applied to recurring tasks.
- Default values no longer are applied to synced tasks.
- UDA sorting order can be defined.
- Priority attribute gone, replaced by a default UDA configuration.
- Command line lexer bugs fixed, which caused a hang.
- Urgency improvements for tasks with dependencies, which were reporting bad values.
- The `isnt` and `not` attribute modifiers were mapped to hte wrong operator.
- Invalid IDs were displayed after a `done` or `delete` command.
- Example export scripts have been updated, so they work again.
- The `summary` report can now be configured to show old projects, not just current ones.
- The `info` report failed to show negative urgency values.
- Added a new `rc.bulk` value (0) that is interpreted as infinity.
- Minor command line parser improvements.
- Minor command performance improvements.
- Documentation improvements.
- Several bug fixes.

For full details, see the ChangeLog file included in the release.

The release is immediately available as a source [tarball](/download/task-2.4.3.tar.gz).
Binary packages will soon be available via your Operating System\'s package manager.
