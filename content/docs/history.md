---
title: "Taskwarrior - Release History"
---

[]{#history}

### Release History

This is a summary of the Taskwarrior
[ChangeLog](https://github.com/GothenburgBitFactory/taskwarrior/blob/master/ChangeLog)
file.

  Release Date   Description
  -------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ?              2.6.0 will overhaul recurrence and add more flavors of recurring tasks.
  2021-01-03     2.5.3 is a bug fix, code cleanup, performance release only - no features.
  2020-12-05     2.5.2 is a bug fix, code cleanup, performance release only - no features.
  2016-02-24     2.5.1 is a bug fix, code cleanup, performance release only - no features.
  2015-10-21     2.5.0 is a major release. Improved command line parser. Unicode U+NNNN \\uNNNN support. New `UDA`, `ORPHAN` virtual tags. New `_unique` helper command. New `commands` command. Free-form JSON input supported.
  2015-05-10     2.4.4 is an important bug fix release. 32-bit builds now work. There is the start of a jpn-JPN localization. The `rc.obfuscate` setting is added, for support.
  2015-04-19     2.4.3 adds the Hooks v2 API (backwards compatible), replaces `priority` with a more capable UDA.
  2015-03-16     2.4.2 adds a new set of `context` commands, perfomance improvements, important Hooks API fixes.
  2015-02-16     2.4.1 adds a German localization, stricter hooks API, hook scripts are now under much stricter control, ability to disable ISO-8601 date parsing, ability to disable recurrence.
  2015-01-01     2.4.0 adds hook support, `show` command displays defaults, Portuguese (por-PRT), French (fra-FRA), Esperanto (epo-RUS) and Polish (pol-POL) localizations, new virtual tags: YESTERDAY TOMORROW READY PENDING COMPLETED DELETED TAGGED, regular expressions enabled by default, the \'filter\' verbosity token shows the complete filter used for the last command, the \'new-uuid\' verbosity token shows the UUID of newly created tasks, the \'info\' report now breaks down urgency values, additional color rules, tasks can inherit the urgency values of the dependency chain, listing breaks, new fish shell completion script, the filter form \'name:value\' maps to the partial match operator (=) and not the exact match operator (==), UDA indicator format.
  2014-01-15     2.3.0 contains Task Server support, more virtual tags, the \"\_get\" DOM accessor, new tasksh binary, unicode \\uNNNN support in .taskrc, it-IT localization, libuuid requirement, \'remaining\' format for all date columns.
  2013-04-07     2.2.0 contains blocking report, \_show, \_aliases helper commands, virtual tags, \'modified\' attribute, empty column skipping.
  2012-09-18     2.1.2 contains bugs fixes for \'merge\' command and shadow files. First release making use of Flod testing.
  2012-07-24     2.1.1 contains JSON syntax fixes.
  2012-07-23     2.1.0 contains UDA support, performance improvements.
  2012-03-17     2.0.0 before [Ubucon](https://www.ubucon.de/), advanced filters, stdin support, improved sorting, new table rendering, \'inverse\' color support, multiple column formats, script to update holiday data, html export, new verbose controls, \'execute\' command, enhanced aliases, \'ids\' command, \'reports\' command \...
  2011-03-03     1.9.4 released, taskwarrior.org relocated to gothenburgbitfactory.org server, burndown charts, change log in \'info\' command, JSON export, XML export, ncurses eliminated, xterm title, \'count\' command
  2010-11-08     1.9.3 released, start/stop annotations, YAML import/export, dependencies, sync using push/pull/merge, special tags, color rule precedence
  2010-07-10     1.9.2 released with color themes, \'denotate\' command, limit:page support, \'show\' command, annual history reports, \'log\'.
  2010-05-22     1.9.1 released with easter date calculations and bug fixes.
  2010-02-22     1.9.0 released with 256 color support, alternate line coloring, vim syntax highlighting, \'prepend\' command, \'config\' command, time support, verbosity, config includes.
  2009-12-05     1.8.5 released with confirmation, error cleanup and bug fixes.
  2009-11-17     1.8.4 released with bug fixes.
  2009-10-21     1.8.3 released, with Haiku support
  2009-09-07     1.8.2 released with bug fixes.
  2009-08-20     1.8.1 released with bug fixes.
  2009-07-21     1.8.0 released with attribute modifiers, many components rewritten, \'\--\' support, rc overrides, \'shell\' command, \'undo\' command, waiting, aliases, test suite. Hosting shifted to gothenburgbitfactory.org for git and tinderbox.
  2009-06-08     1.7.1 released with taskwarrior.org references, redmine. Taskwarrior name conceived by David J Patrick
  2009-05-14     1.7.0 released with duplicate, en-passant, timesheet, edit, completion scripts.
  2009-04-24     1.6.1 released with bug fixes.
  2009-04-12     1.6.0 released with utf8 support, annotations, append, recurrence modfiication propagation, custom column labels.
  2009-03-15     1.5.0 released with custom reports, start, stop.
  2008-11-01     1.4.3 released with shadow files.
  2008-09-18     1.4.2 released with undo, sorting, defaults, word-wrapping, modifications, relative dates.
  2008-07-18     1.4.1 released with bug fixes.
  2008-07-10     1.4.0 released with recurring tasks, rc overrides.
  2008-06-21     1.3.1 released with bug fixes.
  2008-06-13     1.3.0 released with filters and new reports.
  2008-06-13     1.2.0 released with sub-projects.
  2008-06-07     1.1.0 released with dateformat support.
  2008-06-04     1.0.1 released with bug fixes.
  2008-06-03     1.0.0 released, ported to Fedora Core 8 & 9, Ubuntu 8, Mac OS X 10.5. Suported \'add\', .taskrc, \'find\', \'projects\', \'tags\', \'start\', \'done\', \'delete\', \'history\', summary\', \'calendar\', due dates, \'info\', age column, substitution, \'overdue\', \'stats\', \'export\', color rules, man pages, tutorial.
  2006-11-29     0.0.1 Project began as enhancement to [todo.txt](https://todotxt.org/).
