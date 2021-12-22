---
title: "News: Activity Digest: May 2015"
---

### Activity Digest: May 2015 [2015-06-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in May 2015.

  ---------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [2015-05-02]{.small}   Taskwarrior and Taskserver learned how to lock files the POSIX way, instead of a platform-specific implementation. This should have happened years ago. Moving on\...
  [2015-05-02]{.small}   The \'Taskwarrior\' name was standardized throughout the code. Something you would think had happened a long time ago.
  [2015-05-02]{.small}   Taskserver no longer misleads when asked to modify a configuration setting with a read-only config file.
  [2015-05-02]{.small}   Taskserver can now restrict itself to the IPv4 or IPv6 protocol.
  [2015-05-02]{.small}   Taskserver inherited Taskwarrior\'s `l10n` utility, and finds unused strings.
  [2015-05-03]{.small}   Taskwarrior documentation interchangeably used ambiguous terms to describe sync server configuration.
  [2015-05-04]{.small}   A problem was found, then fixed, with some write commands, when GC (Garbage Collection) was manually shut off. Although a bug, don\'t turn off GC. It has been harming the bee populations. This should help.
  [2015-05-04]{.small}   Taskserver now recognizes libc++ memory errors. It doesn\'t do anything about it, but at least it knows what\'s happening.
  [2015-05-04]{.small}   Taskserver 1.1.0 beta1 was released.
  [2015-05-04]{.small}   The fish completion script is improved. Yes, fish is a real shell name.
  [2015-05-05]{.small}   The `setup_server.bash` script is significantly improved for correctness and usability. It was much needed.
  [2015-05-06]{.small}   The Taskwarrior test suite is now parallelized, and runs in far less time than before. On some systems, `./run_all --fast` now runs in around 20 seconds.
  [2015-05-09]{.small}   Some old bugs are closed, because they were fixed a while ago, but not recorded.
  [2015-05-09]{.small}   Taskwarrior lexer is improved to better detect tags on the command line when there is preceding text, like `(+tag)`.
  [2015-05-10]{.small}   Example export scripts were not properly handling UTF-8, and were fixed.
  [2015-05-10]{.small}   Taskwarrior 2.4.4 was [released](/news/news.20150510.html).
  [2015-05-11]{.small}   Taskserver 1.1.0 was [released](/news/news.20150511.html).
  [2015-05-13]{.small}   Taskserver learns to listen on `::`, which means dual IPv4/IPv6 localhost. Obviously.
  [2015-05-14]{.small}   Taskserver learns to not fail silently on signal handler errors.
  [2015-05-23]{.small}   Tasksh lost it\'s rudimentary `context` feature, which was eclipsed by a much more powerful Taskwarrior equivalent.
  [2015-05-24]{.small}   Taskwarrior, Taskserver and Tasksh start using C++11 N1984 and N2672, and it feels oh, so good.
  [2015-05-24]{.small}   Through the power of copy/paste, Taskserver fixes bugs by inheriting fixed code from Taskwarrior.
  [2015-05-24]{.small}   Taskwarrior implements an experimental, recursive, O(N\^2) urgency inheritance algorithm that may cause your lights to dim and power utility bills to increase. It may also be killing the bee populations.
  [2015-05-24]{.small}   Tasksh is getting a `review` command.
  [2015-05-25]{.small}   Taskwarrior and Taskserver combined `Path`, `File` and `Directory` classes into one source file and test program named `FS`. While this has no benefit at all (you\'re welcome users!) it keeps the three together, as they are a hierarchy and cannot operate alone.
  [2015-05-25]{.small}   Test suite now better differentiate between tests that pass and tests that are skipped. It\'s important.
  [2015-05-25]{.small}   Taskwarrior can now import tasks from STDIN if `-` is specified as the input file. Or if nothing is specified.
  [2015-05-25]{.small}   Taskwarrior now has a `test/README` document that defines how unit tests should be written, in a desperate attempt to get more tests.
  [2015-05-28]{.small}   The test suite learns how to intrinsically support export. For the bees.
  [2015-05-29]{.small}   Taskwarrior `import` can now `add` or `update` a task as appropriate. Finally.
  [2015-05-31]{.small}   Task `modify` code got refactored nicely, which makes it easier for the developers to look at without convulsions. You\'re welcome users!
  [2015-05-31]{.small}   Some Taskwarrior code that was commented out a long time ago, that we subsequently forgot the intent thereof, was quietly and shamefully deleted.
  ---------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
