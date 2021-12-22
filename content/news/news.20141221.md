---
title: "News: Tasksh 1.0.0 Released"
---

### Tasksh 1.0.0 Released [2014-12-21]{.small}

The taskwarrior shell, tasksh 1.0.0, is released.

Up to, and including, Taskwarrior 2.3.0, the `shell` command implemented this
functionality. Starting with Taskwarrior 2.4.0, there is no `shell` command.
Instead there is the `tasksh` project.

[![Tasksh
Demo](/news/images/tasksh.png){.img-thumbnail}](/news/images/tasksh.png)

The tasksh supports libreadline, although can be built without it. Libreadline
provides command history and command editing.

As a separate project, tasksh can innovate and release on its own schedule, as
it remains independent of Taskwarrior, and supports all known releases. It
achieves this by having almost no features.

The 1.0.0 release is a starting point, a platform on which we can build
interesting capabilities that are external to Taskwarrior.

The release is available as a source [tarball](/download/tasksh-1.1.0.tar.gz).
