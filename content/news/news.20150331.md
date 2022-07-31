---
title: "News: Activity Digest: March 2015"
---

### Activity Digest: March 2015 [2015-03-31]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in March 2015.

  ---------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [2015-03-01]{.small}   The [Hooks Design](/docs/hooks.html) page was moved out of the design section onto the main page.
  [2015-03-01]{.small}   Scott pointed out that there is a performance drop since 2.3.0, which was fixed and further improved. The major cause of this was on-load recurrence value mapping, which was not being done efficiently.
  [2015-03-01]{.small}   A new [Hook Author\'s Guide](/docs/hooks_guide.html) shows how to write and test a hook script.
  [2015-03-03]{.small}   Renato gives the test suite the option to use task/taskd from \$PATH.
  [2015-03-05]{.small}   Wim finds an fixes a particularly nasty hook bug, that is causing `on-modify` hook scripts to fail to update the actual tasks. This also exposes a weakness in the unit testing. This find will likely lead to a release of 2.4.2.
  [2015-03-07]{.small}   The test suite undergoes reorganization, to combine like tests, remove redundant tests, and migrate bug tests into feature test scripts. While this is happening, tests are being converted from Perl to Python.
  [2015-03-09]{.small}   The `_version` command now shows both the version number and the commit hash all the time. Prior to this, the different information was shown depending on whether Taskwarrior was built from git or from a tarball.
  [2015-03-12]{.small}   Renato gives the Python unit tests some color, which makes the output more readable in a tty.
  [2015-03-15]{.small}   The color themes are updated to remove all the very-low contrast and inappropriate colors. The online theme swatches are updated. <https://taskwarrior.org/docs/themes.html>
  [2015-03-16]{.small}   Taskwarrior 2.4.2 released, mainly to address the hook problem, but has the nice side effect of releasing the context features and updated themes.
  [2015-03-18]{.small}   Tomas updates the bash completion script to solve a problem when it tries to get confirmation from the user.
  [2015-03-18]{.small}   Tomas adds the `calc` command to the man page, which was oddly missing.
  [2015-03-21]{.small}   Tomas gives the `bulk` setting a new meaning for the value zero - infinity, which means that Taskwarrior never considers an modification to be too big.
  [2015-03-23]{.small}   Wim fixes a bug so that all local modifications update the `modified` attribute, and these modifications are hidden from the journal.
  [2015-03-26]{.small}   Wim fixes a dependency chain urgency calculation bug, which was reporting the wrong value after a `done`/`delete` command.
  [2015-03-28]{.small}   The new Lexer gains a few hundred new tests, to make sure that all types are properly recognized. The full integration of the new Lexer begins soon.
  [2015-03-29]{.small}   Wim enables compiler warnings. The removal effort begins.
  [2015-03-30]{.small}   Wim fixes the export scripts, which has rotted, as software does, when ignored for long enough.
  [2015-03-31]{.small}   Wim improves the on-exit sample hook, which was misleading.
  ---------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
