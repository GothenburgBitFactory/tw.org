---
title: "News: Activity Digest: April 2015"
---

### Activity Digest: April 2015 [2015-04-30]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in April 2015.

+---------------------------------------+---------------------------------------+
| [2015-04-01]{.small}                  | The Hooks v2 API was implemented.     |
|                                       | While nothing changed with respect to |
|                                       | the events or interfaces to the hooks |
|                                       | scripts, there are now arguments      |
|                                       | passed to the hooks script. Whereas   |
|                                       | in the v1 Hooks API a hook script was |
|                                       | effectively called like this:         |
|                                       |                                       |
|                                       |     script \                          |
|                                       |         <input \                      |
|                                       |         >output                       |
|                                       |                                       |
|                                       | The v2 API now effectively does this: |
|                                       |                                       |
|                                       |     script \                          |
|                                       |         'api:v2' \                    |
|                                       |         'args:task list' \            |
|                                       |         'command:list' \              |
|                                       |         'rc:~/.taskrc' \              |
|                                       |         'data:~/.task' \              |
|                                       |         'version:2.4.3' \             |
|                                       |         <input \                      |
|                                       |         >output                       |
|                                       |                                       |
|                                       | This allows a hook script to          |
|                                       | determine which API is in effect, and |
|                                       | offers access to some important       |
|                                       | information. What will hook scripts   |
|                                       | do with this information? Who knows,  |
|                                       | let\'s see, and hope it isn\'t all    |
|                                       | used for evil purposes.               |
+---------------------------------------+---------------------------------------+
| [2015-04-01]{.small}                  | Taskwarrior learned that running      |
|                                       | hooks scripts while attempting to run |
|                                       | shell completion is a bad idea.       |
+---------------------------------------+---------------------------------------+
| [2015-04-02]{.small}                  | The command line lexer was improved,  |
|                                       | or perhaps just made less awful, now  |
|                                       | allowing both                         |
|                                       | `task calc now + 3 days` work as well |
|                                       | as `task calc now+3days`, making      |
|                                       | whitespace irrelevant.                |
+---------------------------------------+---------------------------------------+
| [2015-04-02]{.small}                  | Recurring tasks now inherit more      |
|                                       | attributes from the parent task, and  |
|                                       | `rc.default.*` settings are no longer |
|                                       | applied.                              |
+---------------------------------------+---------------------------------------+
| [2015-04-02]{.small}                  | The `.isnt` and `.not` attribute      |
|                                       | modifiers are now the performing      |
|                                       | exact non-match, therefore providing  |
|                                       | symmetry to the `.is` modifier.       |
+---------------------------------------+---------------------------------------+
| [2015-04-03]{.small}                  | Tasks that are downloaded during a    |
|                                       | `sync` no longer get local default    |
|                                       | settings applied to them.             |
+---------------------------------------+---------------------------------------+
| [2015-04-03]{.small}                  | Taskwarrior learned that `\n` in a    |
|                                       | description does not have a character |
|                                       | width of -1, which borked the         |
|                                       | formatting.                           |
+---------------------------------------+---------------------------------------+
| [2015-04-04]{.small}                  | Objects returning `std::string`, now  |
|                                       | return `const std::string&`. This can |
|                                       | reduce the number of data copies in   |
|                                       | memory, which makes things better on  |
|                                       | the inside. How about that for a      |
|                                       | crowd-pleasing improvement!           |
+---------------------------------------+---------------------------------------+
| [2015-04-04]{.small}                  | All task attributes are now sortable. |
|                                       | \"Why weren\'t they before?\" you     |
|                                       | might ask. Umm\...                    |
+---------------------------------------+---------------------------------------+
| [2015-04-04]{.small}                  | Task sorting duplicated code that was |
|                                       | implemented better elsewhere, and so  |
|                                       | this was eliminated.                  |
+---------------------------------------+---------------------------------------+
| [2015-04-04]{.small}                  | UDA `string` attributes that specify  |
|                                       | discrete values are now sorted        |
|                                       | (high-to-low) in the order that they  |
|                                       | are defined. If one day the priority  |
|                                       | attribute is removed, then this means |
|                                       | the priority UDA that replaces it can |
|                                       | now have an arbitrary set of priority |
|                                       | values that sort properly.            |
+---------------------------------------+---------------------------------------+
| [2015-04-04]{.small}                  | The `priority` attribute is removed   |
|                                       | from the core, and reimplemented as a |
|                                       | (standard) UDA. The change is made    |
|                                       | such that users should not notice.    |
|                                       | Unless they read.                     |
+---------------------------------------+---------------------------------------+
| [2015-04-05]{.small}                  | The `info` command urgency display    |
|                                       | was cleaned up and fixed.             |
+---------------------------------------+---------------------------------------+
| [2015-04-05]{.small}                  | The `rc.debug.hooks=2` setting now    |
|                                       | shows the arguments that are passed   |
|                                       | to hook scripts.                      |
+---------------------------------------+---------------------------------------+
| [2015-04-05]{.small}                  | The color themes were updated to      |
|                                       | accomodate the new form of the        |
|                                       | `priority` attribute.                 |
+---------------------------------------+---------------------------------------+
| [2015-04-05]{.small}                  | When calculating report formatting,   |
|                                       | fixed-width columns are now only      |
|                                       | sized once, not once per task.        |
+---------------------------------------+---------------------------------------+
| [2015-04-05]{.small}                  | The `rc` file syntax was described in |
|                                       | the man page, finally.                |
+---------------------------------------+---------------------------------------+
| [2015-04-06]{.small}                  | The test framework is updated to      |
|                                       | handle the Hooks v2 API.              |
+---------------------------------------+---------------------------------------+
| [2015-04-06]{.small}                  | The codebase took some early steps    |
|                                       | towards using C++11 features. It\'s   |
|                                       | been four years after all, and        |
|                                       | compilers have caught up, somewhat.   |
|                                       | Future releases will mandate newer    |
|                                       | Clang/GCC versions in order to use    |
|                                       | new features.                         |
+---------------------------------------+---------------------------------------+
| [2015-04-06]{.small}                  | The `summary.all.projects` setting    |
|                                       | allows the summary report to consider |
|                                       | all finished projects.                |
+---------------------------------------+---------------------------------------+
| [2015-04-06]{.small}                  | Some spa-ESP localization changes     |
|                                       | were made. The other languages are    |
|                                       | getting quite out of date. Any        |
|                                       | volunteers?                           |
+---------------------------------------+---------------------------------------+
| [2015-04-12]{.small}                  | The `info` command now prints urgency |
|                                       | details when the urgency values is    |
|                                       | negative.                             |
+---------------------------------------+---------------------------------------+
| [2015-04-16]{.small}                  | Various text-themed helper code was   |
|                                       | migrated into the Lexer.              |
+---------------------------------------+---------------------------------------+
| [2015-04-18]{.small}                  | 32-bit systems have ambіguous         |
|                                       | `int`/`time_t` types, which are now   |
|                                       | disambiguated, which means            |
|                                       | Taskwarrior now builds for 32-bit     |
|                                       | OSes.                                 |
+---------------------------------------+---------------------------------------+
| [2015-04-19]{.small}                  | Taskwarrior 2.4.3 released, which     |
|                                       | includes the Hooks v2 API, and the    |
|                                       | conversion of `priority` from a core  |
|                                       | attribute to a UDA.                   |
+---------------------------------------+---------------------------------------+
| [2015-04-21]{.small}                  | Starting with the 2.4.4 release,      |
|                                       | Taskwarrior will require a compiler   |
|                                       | that supports most of the C++11       |
|                                       | standard, for example GCC 4.7 and     |
|                                       | Clang 3.3.                            |
+---------------------------------------+---------------------------------------+
| [2015-04-21]{.small}                  | With Taskwarrior released, the        |
|                                       | development focus now shifts to       |
|                                       | Taskserver 1.1.0. Taskserver inherits |
|                                       | a lot of code improvements from       |
|                                       | Taskwarrior because they share code.  |
|                                       | Obsolete code removed.                |
+---------------------------------------+---------------------------------------+
| [2015-04-24]{.small}                  | The Taskserver setup script is        |
|                                       | renamed to \'setup\_server.bash\',    |
|                                       | and walks the user through the whole  |
|                                       | setup process for a server, and       |
|                                       | users. Although not for advanced      |
|                                       | users, this script will automate the  |
|                                       | steps that cause much difficulty      |
|                                       | among Taskserver users.               |
+---------------------------------------+---------------------------------------+
| [2015-04-24]{.small}                  | Starting with the 1.1.0 release,      |
|                                       | Taskserver will require a compiler    |
|                                       | that supports most of the C++11       |
|                                       | standard, for example GCC 4.7 and     |
|                                       | Clang 3.3.                            |
+---------------------------------------+---------------------------------------+
| [2015-04-25]{.small}                  | Taskserver inherits Taskwarrior\'s    |
|                                       | Python test framework, so future      |
|                                       | tests can be written in Python.       |
+---------------------------------------+---------------------------------------+
| [2015-04-25]{.small}                  | Taskserver documentation begins to    |
|                                       | mention the new setup\_server.bash    |
|                                       | script, which, come to think of it,   |
|                                       | really ought to be tested.            |
+---------------------------------------+---------------------------------------+
| [2015-04-25]{.small}                  | Taskserver documentation hallucinated |
|                                       | functionality triggered by SIGHUP and |
|                                       | SIGUSR1. The code was improved to the |
|                                       | point where it now just looks like an |
|                                       | omission.                             |
+---------------------------------------+---------------------------------------+
| [2015-04-25]{.small}                  | Taskserver inherits Taskwarrior\'s    |
|                                       | I18N/L10N framework, as the basis for |
|                                       | possible localizations.               |
+---------------------------------------+---------------------------------------+
| [2015-04-25]{.small}                  | Taskserver tests now include a        |
|                                       | \'statistics\' request that doesn\'t  |
|                                       | work. Progress!                       |
+---------------------------------------+---------------------------------------+
| [2015-04-25]{.small}                  | Taskserver loses some vestigial       |
|                                       | (broken) code that supported hooks    |
|                                       | and extension scripts. Future         |
|                                       | releases will include a proper hook   |
|                                       | system, once we figure out what that  |
|                                       | is.                                   |
+---------------------------------------+---------------------------------------+
| [2015-04-26]{.small}                  | Taskwarrior and Taskserver no longer  |
|                                       | report \'pthreads\' linkage in        |
|                                       | diagnostic output. There will be no   |
|                                       | pthreads usage, instead the C++11     |
|                                       | std::thread will be used, one day.    |
+---------------------------------------+---------------------------------------+
| [2015-04-26]{.small}                  | Taskwarrior gains a nearly useless    |
|                                       | feature: when using the new           |
|                                       | configuration setting:                |
|                                       |                                       |
|                                       |     $ task rc.obfuscate=1 ...         |
|                                       |                                       |
|                                       | All output text is replaced by xxx,   |
|                                       | xxx xxxxxxx xx, so that we can share  |
|                                       | formatted output without revealing    |
|                                       | private task data. This eliminates    |
|                                       | the need to task-anon.pl. xxxx.       |
+---------------------------------------+---------------------------------------+
| [2015-04-26]{.small}                  | The Taskserver PKI scripts now use CN |
|                                       | properly, and no longer specify       |
|                                       | DNSNAMES and IPADDRS. This is better. |
+---------------------------------------+---------------------------------------+
| [2015-04-26]{.small}                  | Taskserver reluctantly now provides   |
|                                       | more clues in debug mode as to why    |
|                                       | certificate validation failed.        |
+---------------------------------------+---------------------------------------+
| [2015-04-26]{.small}                  | Taskserver\'s malformed request tests |
|                                       | now fail because they are             |
|                                       | deliberately malformed. They did fail |
|                                       | because the `client` command was      |
|                                       | broken. Progress!                     |
+---------------------------------------+---------------------------------------+
| [2015-04-26]{.small}                  | Recent Taskserver fixes now allow     |
|                                       | tests to run with strict certificate  |
|                                       | validation.                           |
+---------------------------------------+---------------------------------------+
| [2015-04-28]{.small}                  | The beginnings of a Japanese          |
|                                       | translation is submitted for          |
|                                       | Taskwarrior.                          |
+---------------------------------------+---------------------------------------+
| [2015-04-26]{.small}                  | Taskwarrior displays more details in  |
|                                       | debug mode when sync fails            |
|                                       | certificate validation.               |
+---------------------------------------+---------------------------------------+
| [2015-04-26]{.small}                  | Reduced the number of segfaults in    |
|                                       | Taskserver when the incoming request  |
|                                       | contains incorrect types. For the     |
|                                       | children.                             |
+---------------------------------------+---------------------------------------+
| [2015-04-26]{.small}                  | Taskserver statistics request is      |
|                                       | working again.                        |
+---------------------------------------+---------------------------------------+
