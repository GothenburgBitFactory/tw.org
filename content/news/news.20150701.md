---
title: "News: Activity Digest: June 2015"
---

### Activity Digest: June 2015 [2015-06-30]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in June 2015.

+---------------------------------------+---------------------------------------+
| [2015-06-02]{.small}                  | Tasksh gains the ability to detect    |
|                                       | terminal width, and display colored   |
|                                       | banners.                              |
+---------------------------------------+---------------------------------------+
| [2015-06-02]{.small}                  | Tasksh gains UTF-8 support.           |
+---------------------------------------+---------------------------------------+
| [2015-06-02]{.small}                  | Tasksh gains a more polished `review` |
|                                       | command, which manages a GTD-like     |
|                                       | review session of your tasks,         |
|                                       | remembering where it left off, and    |
|                                       | not revisiting tasks too often. With  |
|                                       | upcoming Taskwarrior enhancements,    |
|                                       | this feature will be functional.      |
+---------------------------------------+---------------------------------------+
| [2015-06-03]{.small}                  | A JSON parser memory leak was fixed,  |
|                                       | which is likely the cause of the      |
|                                       | long-standing non-linear performance  |
|                                       | of the parser.                        |
+---------------------------------------+---------------------------------------+
| [2015-06-03]{.small}                  | Tasksh gains a stub of a shell        |
|                                       | command, to run external software.    |
+---------------------------------------+---------------------------------------+
| [2015-06-04]{.small}                  | When listing contexts, the active     |
|                                       | context is now also shown. This is as |
|                                       | close as Taskwarrior gets to being    |
|                                       | user-friendly.                        |
+---------------------------------------+---------------------------------------+
| [2015-06-05]{.small}                  | The `task edit` command no longer     |
|                                       | borks annotations when newlines `\n`  |
|                                       | are found in the description.         |
+---------------------------------------+---------------------------------------+
| [2015-06-05]{.small}                  | The sin of modifying a task to depend |
|                                       | on another, when it already does so,  |
|                                       | has been downgraded from error to     |
|                                       | NOP.                                  |
+---------------------------------------+---------------------------------------+
| [2015-06-05]{.small}                  | The unit test framework gains more    |
|                                       | capabilities, and more tests are      |
|                                       | migrated from Perl to Python. Why are |
|                                       | we migrating? There are two main      |
|                                       | reason to move to Python: there is    |
|                                       | more enthusiasm for Python in the     |
|                                       | community, and our Python test        |
|                                       | framework is gaining some very        |
|                                       | powerful features. One in particular  |
|                                       | is the degree of isolation between    |
|                                       | test scripts, which is allowing us to |
|                                       | parallelize the test suite. Although  |
|                                       | we could easily improve the Perl      |
|                                       | framework, we have decided not to.    |
+---------------------------------------+---------------------------------------+
| [2015-06-06]{.small}                  | The test framework gains the ability  |
|                                       | to do some very suspicious things     |
|                                       | like test the `task edit` feature.    |
|                                       | Magic.                                |
+---------------------------------------+---------------------------------------+
| [2015-06-06]{.small}                  | Wisdom gained: Even the most trivial  |
|                                       | change needs to be tested for idiocy. |
+---------------------------------------+---------------------------------------+
| [2015-06-06]{.small}                  | The command line parser, the darkest, |
|                                       | most disturbing part of Taskwarrior,  |
|                                       | begins to be beaten into shape. First |
|                                       | up: clean up the worst of the cruft.  |
+---------------------------------------+---------------------------------------+
| [2015-06-07]{.small}                  | The `project` verbosity token now     |
|                                       | implies the `footnote` token. This is |
|                                       | the beginning of a more sensible      |
|                                       | cascading mechanism for verbosity.    |
+---------------------------------------+---------------------------------------+
| [2015-06-09]{.small}                  | Many polymorphic text formatting      |
|                                       | functions are converted to C++11      |
|                                       | variadic templates. An exciting day   |
|                                       | for Taskwarrior users!                |
+---------------------------------------+---------------------------------------+
| [2015-06-09]{.small}                  | The unit test suite, with shocking    |
|                                       | honesty, now declares tests as not    |
|                                       | expected to pass, rather than         |
|                                       | commenting them out and pretending    |
|                                       | they don\'t exist. It\'s becoming     |
|                                       | harder to lie about features working. |
+---------------------------------------+---------------------------------------+
| [2015-06-11]{.small}                  | The TAP output generated by the test  |
|                                       | suite becomes more verbose and        |
|                                       | useful.                               |
+---------------------------------------+---------------------------------------+
| [2015-06-11]{.small}                  | The BY and RU holiday files now       |
|                                       | include International Women\'s Day,   |
|                                       | which was mistakenly ommitted.        |
+---------------------------------------+---------------------------------------+
| [2015-06-13]{.small}                  | Once again, there are two command     |
|                                       | line parsers in Taskwarrior, the      |
|                                       | current one, and a new shadow parser  |
|                                       | that will grow to become better than  |
|                                       | the current one, ultimately replace   |
|                                       | it. Why are we doing this?            |
|                                       |                                       |
|                                       | 1.  Parsers are fun!                  |
|                                       | 2.  Destabilizing code is exciting    |
|                                       | 3.  The command line evolves and the  |
|                                       |     parser needs to catch up          |
|                                       | 4.  Bugs, Bee populations             |
|                                       | 5.  All of the above                  |
|                                       |                                       |
|                                       | Correct answer is (5).                |
+---------------------------------------+---------------------------------------+
| [2015-06-19]{.small}                  | The command line parser learned to    |
|                                       | recognized ID ranges in a much better |
|                                       | way.                                  |
+---------------------------------------+---------------------------------------+
| [2015-06-21]{.small}                  | Taskwarrior wasn\'t recognizing the   |
|                                       | form `due=now` and                    |
|                                       | `due.before=today`, but no one        |
|                                       | appears to have noticed.              |
+---------------------------------------+---------------------------------------+
| [2015-06-22]{.small}                  | Fixed a bug where `proj` was neither  |
|                                       | recognized as the command `projects`, |
|                                       | or the attribute `project`.           |
+---------------------------------------+---------------------------------------+
| [2015-06-22]{.small}                  | Fixed a bug where a second terminator |
|                                       | `--` was considered to be another     |
|                                       | terminator, but it should have been   |
|                                       | considered just text.                 |
+---------------------------------------+---------------------------------------+
| [2015-06-22]{.small}                  | The test suite now recognizes cases   |
|                                       | where tests pass, but were expected   |
|                                       | to fail, and flags this. Prior to     |
|                                       | this, these cases were hard to spot.  |
+---------------------------------------+---------------------------------------+
| [2015-06-22]{.small}                  | The library dependency GnuTLS is now  |
|                                       | required, unless the `cmake` option   |
|                                       | `-DENABLE_SYNC=OFF` is specified.     |
|                                       | There have just been too many folks   |
|                                       | installing binary packages with no    |
|                                       | sync capability, that then need to    |
|                                       | builds from source. That\'s just      |
|                                       | cruel.                                |
+---------------------------------------+---------------------------------------+
| [2015-06-22]{.small}                  | Fixed bug where UUID\'s were          |
|                                       | considered string, and not properly   |
|                                       | filtered.                             |
+---------------------------------------+---------------------------------------+
| [2015-06-24]{.small}                  | Fixed problem where \'pair\' type     |
|                                       | arguments (`name:value`) were not     |
|                                       | properly downgraded to \'text\' when  |
|                                       | they were not recognized.             |
+---------------------------------------+---------------------------------------+
| [2015-06-25]{.small}                  | The test suite overhaul, and Python   |
|                                       | conversion is now at the point where  |
|                                       | *most* of the tests are no longer     |
|                                       | Perl tests.                           |
+---------------------------------------+---------------------------------------+
| [2015-06-25]{.small}                  | The test suite overhaul continues,    |
|                                       | and the old `--fast` option is now    |
|                                       | the default, and the whole test suite |
|                                       | runs in under twenty seconds (on this |
|                                       | arbitrary piece of hardward), because |
|                                       | of parallelization. The `run_all` and |
|                                       | `problems` scripts are updated with   |
|                                       | more details, options and             |
|                                       | easy-to-interpret color. The test     |
|                                       | suite is becoming a much more         |
|                                       | powerful debugging tool.              |
+---------------------------------------+---------------------------------------+
| [2015-06-27]{.small}                  | Taskwarrior loses support for         |
|                                       | ambiguous ISO-8601 date formats, such |
|                                       | as `YYYYMMDD` and `hhmmss` for time.  |
|                                       | This leaves the clearer extended      |
|                                       | forms (`YYYY-MM-DD` and `hh:mm:ss`)   |
|                                       | intact, and the old forms still       |
|                                       | available via `rc.dateformat`. This   |
|                                       | reduces command line parser ambiguity |
|                                       | - a good thing.                       |
+---------------------------------------+---------------------------------------+
| [2015-06-27]{.small}                  | For years now, deleting a task has    |
|                                       | generated feedback that says it is    |
|                                       | \'permanently\' removed. This it not  |
|                                       | true, especially with the `undo`      |
|                                       | command. Fixed.                       |
+---------------------------------------+---------------------------------------+
| [2015-06-27]{.small}                  | Taskwarrior now produces an error if  |
|                                       | you try to modify a virtual tag.      |
|                                       | Previously this succeeded, but the    |
|                                       | presence of the tag was hidden.       |
+---------------------------------------+---------------------------------------+
| [2015-06-30]{.small}                  | A sync error message was corrected to |
|                                       | stop it from lying to users about     |
|                                       | account enabling.                     |
+---------------------------------------+---------------------------------------+
