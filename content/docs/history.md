---
title: "Taskwarrior - Release History"
---


# Release History

This is a summary of the Taskwarrior
[ChangeLog](https://github.com/GothenburgBitFactory/taskwarrior/blob/master/ChangeLog)
file.

It is no longer updated.

<table class="table table-striped">
  <tr>
    <th>Release&nbsp;Date</th>
    <th>Description</th>
  </tr>

  <tr>
    <td>?</td>
    <td>
      2.6.0 will overhaul recurrence and add more flavors of recurring tasks.
    </td>
  </tr>

  <tr>
    <td>2021-01-03</td>
    <td>
      2.5.3 is a bug fix, code cleanup, performance release only - no features.
    </td>
  </tr>

  <tr>
    <td>2020-12-05</td>
    <td>
      2.5.2 is a bug fix, code cleanup, performance release only - no features.
    </td>
  </tr>

  <tr>
    <td>2016-02-24</td>
    <td>
      2.5.1 is a bug fix, code cleanup, performance release only - no features.
    </td>
  </tr>

  <tr>
    <td>2015-10-21</td>
    <td>
      2.5.0 is a major release.
      Improved command line parser.
      Unicode U+NNNN \uNNNN support.
      New <code>UDA</code>, <code>ORPHAN</code> virtual tags.
      New <code>_unique</code> helper command.
      New <code>commands</code> command.
      Free-form JSON input supported.
    </td>
  </tr>

  <tr>
    <td>2015-05-10</td>
    <td>
      2.4.4 is an important bug fix release.
      32-bit builds now work.
      There is the start of a jpn-JPN localization.
      The <code>rc.obfuscate</code> setting is added, for support.
    </td>
  </tr>

  <tr>
    <td>2015-04-19</td>
    <td>
      2.4.3 adds the Hooks v2 API (backwards compatible),
      replaces <code>priority</code> with a more capable UDA.
    </td>
  </tr>

  <tr>
    <td>2015-03-16</td>
    <td>
      2.4.2 adds a new set of <code>context</code> commands,
      perfomance improvements,
      important Hooks API fixes.
    </td>
  </tr>

  <tr>
    <td>2015-02-16</td>
    <td>
      2.4.1 adds a German localization,
      stricter hooks API,
      hook scripts are now under much stricter control,
      ability to disable ISO-8601 date parsing,
      ability to disable recurrence.
    </td>
  </tr>

  <tr>
    <td>2015-01-01</td>
    <td>
      2.4.0 adds hook support,
      <code>show</code> command displays defaults,
      Portuguese (por-PRT), French (fra-FRA), Esperanto (epo-RUS) and Polish (pol-POL) localizations,
      new virtual tags: YESTERDAY TOMORROW READY PENDING COMPLETED DELETED TAGGED,
      regular expressions enabled by default,
      the 'filter' verbosity token shows the complete filter used for the last command,
      the 'new-uuid' verbosity token shows the UUID of newly created tasks,
      the 'info' report now breaks down urgency values,
      additional color rules,
      tasks can inherit the urgency values of the dependency chain,
      listing breaks,
      new fish shell completion script,
      the filter form 'name:value' maps to the partial match operator (=) and not the exact match operator (==),
      UDA indicator format.
    </td>
  </tr>

  <tr>
    <td>2014-01-15</td>
    <td>
      2.3.0 contains Task Server support, more virtual tags, the
      "_get" DOM accessor, new tasksh binary, unicode \uNNNN support
      in .taskrc, it-IT localization, libuuid requirement,
      'remaining' format for all date columns.
    </td>
  </tr>
  <tr>
    <td>2013-04-07</td>
    <td>
      2.2.0 contains blocking report, _show, _aliases helper
      commands, virtual tags, 'modified' attribute, empty column
      skipping.
    </td>
  </tr>
  <tr>
    <td>2012-09-18</td>
    <td>
      2.1.2 contains bugs fixes for 'merge' command and shadow files.
      First release making use of Flod testing.
    </td>
  </tr>
  <tr>
    <td>2012-07-24</td>
    <td>2.1.1 contains JSON syntax fixes.</td>
  </tr>
  <tr>
    <td>2012-07-23</td>
    <td>2.1.0 contains UDA support, performance improvements.</td>
  </tr>
  <tr>
    <td>2012-03-17</td>
    <td>
      2.0.0 before
      <a href="https://www.ubucon.de/">Ubucon</a>,
      advanced filters, stdin support, improved sorting, new table
      rendering, 'inverse' color support, multiple column formats,
      script to update holiday data, html export, new verbose
      controls, 'execute' command, enhanced aliases, 'ids' command,
      'reports' command ...
    </td>
  </tr>
  <tr>
    <td>2011-03-03</td>
    <td>
      1.9.4 released, taskwarrior.org relocated to gothenburgbitfactory.org
      server, burndown charts, change log in 'info' command, JSON
      export, XML export, ncurses eliminated, xterm title, 'count'
      command
    </td>
  </tr>
  <tr>
    <td>2010-11-08</td>
    <td>
      1.9.3 released, start/stop annotations, YAML import/export,
      dependencies, sync using push/pull/merge, special tags,
      color rule precedence
    </td>
  </tr>
  <tr>
    <td>2010-07-10</td>
    <td>
      1.9.2 released with color themes, 'denotate' command,
      limit:page support, 'show' command, annual history reports,
      'log'.
    </td>
  </tr>
  <tr>
    <td>2010-05-22</td>
    <td>
      1.9.1 released with easter date calculations and bug fixes.
    </td>
  </tr>
  <tr>
    <td>2010-02-22</td>
    <td>
      1.9.0 released with 256 color support, alternate line
      coloring, vim syntax highlighting, 'prepend' command,
      'config' command, time support, verbosity, config includes.
    </td>
  </tr>
  <tr>
    <td>2009-12-05</td>
    <td>
      1.8.5 released with confirmation, error cleanup and bug
      fixes.</td>
  </tr>
  <tr>
    <td>2009-11-17</td>
    <td>1.8.4 released with bug fixes.</td>
  </tr>
  <tr>
    <td>2009-10-21</td>
    <td>1.8.3 released, with Haiku support</td>
  </tr>
  <tr>
    <td>2009-09-07</td>
    <td>1.8.2 released with bug fixes.</td>
  </tr>
  <tr>
    <td>2009-08-20</td>
    <td>1.8.1 released with bug fixes.</td>
  </tr>
  <tr>
    <td>2009-07-21</td>
    <td>
      1.8.0 released with attribute modifiers, many components
      rewritten, '--' support, rc overrides, 'shell' command, 'undo'
      command, waiting, aliases, test suite.
      Hosting shifted to gothenburgbitfactory.org for git and tinderbox.
    </td>
  </tr>
  <tr>
    <td>2009-06-08</td>
    <td>
      1.7.1 released with taskwarrior.org references, redmine.
      Taskwarrior name conceived by David J Patrick
    </td>
  </tr>
  <tr>
    <td>2009-05-14</td>
    <td>
      1.7.0 released with duplicate, en-passant, timesheet, edit,
      completion scripts.
    </td>
  </tr>
  <tr>
    <td>2009-04-24</td>
    <td>1.6.1 released with bug fixes.</td>
  </tr>
  <tr>
    <td>2009-04-12</td>
    <td>
      1.6.0 released with utf8 support, annotations, append,
      recurrence modfiication propagation, custom column labels.
    </td>
  </tr>
  <tr>
    <td>2009-03-15</td>
    <td>
      1.5.0 released with custom reports, start, stop.
    </td>
  </tr>
  <tr>
    <td>2008-11-01</td>
    <td>1.4.3 released with shadow files.</td>
  </tr>
  <tr>
    <td>2008-09-18</td>
    <td>
      1.4.2 released with undo, sorting, defaults, word-wrapping,
      modifications, relative dates.
    </td>
  </tr>
  <tr>
    <td>2008-07-18</td>
    <td>1.4.1 released with bug fixes.</td>
  </tr>
  <tr>
    <td>2008-07-10</td>
    <td>1.4.0 released with recurring tasks, rc overrides.</td>
  </tr>
  <tr>
    <td>
      2008-06-21</td><td>1.3.1 released with bug fixes.
    </td>
  </tr>
  <tr>
    <td>2008-06-13</td>
    <td>1.3.0 released with filters and new reports.</td>
  </tr>
  <tr>
    <td>2008-06-13</td>
    <td>1.2.0 released with sub-projects.</td>
  </tr>
  <tr>
    <td>2008-06-07</td>
    <td>1.1.0 released with dateformat support.</td>
  </tr>
  <tr>
    <td>2008-06-04</td>
    <td>1.0.1 released with bug fixes.</td>
  </tr>
  <tr>
    <td>2008-06-03</td>
    <td>
      1.0.0 released, ported to Fedora Core 8 &amp; 9, Ubuntu 8,
      Mac OS X 10.5.  Suported 'add', .taskrc, 'find', 'projects',
      'tags', 'start', 'done', 'delete', 'history', summary',
      'calendar', due dates, 'info', age column, substitution,
      'overdue', 'stats', 'export', color rules, man pages,
      tutorial.
    </td>
  </tr>
  <tr>
    <td>2006-11-29
    </td>
    <td>
      0.0.1 Project began as enhancement to
      <a href="https://todotxt.org/">todo.txt</a>.
    </td>
  </tr>
</table>
