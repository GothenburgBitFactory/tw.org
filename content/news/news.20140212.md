---
title: "News: Git Hosting has migrated"
---

### Git Hosting has migrated [2014-02-12]{.small}

The new repository manager, Stash, is running on the new server:

~~`https://git.tasktools.org`~~

The old server will still be active for a little while longer, but will not be
updated, so the repositories there are read-only and already out of date. You
can re-clone your Taskwarrior repository from the new server, or update the
origin URLs in your existing clone like this:

    $ cd task.git
    $ git config remote.origin.url https://git.tasktools.org/TM/task.git

Similarly for Taskserver:

    $ cd taskd.git
    $ git config remote.origin.url https://git.tasktools.org/TM/taskd.git

The continuous integration servers are currently offline, and will return
shortly.
