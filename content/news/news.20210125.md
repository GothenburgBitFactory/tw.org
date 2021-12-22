---
title: "News: Taskwarrior 2.5.3 released"
---

### Taskwarrior 2.5.3 Released [2021-01-03]{.small}

The TaskWarrior team is happy to announce a new release! This bugfix-only
release ships a critical fix for issue
[\#2375](https://github.com/GothenburgBitFactory/taskwarrior/issues/2375), which
can make your task report commands hang and eventually die in certain scenarios.

There were no other critical issues reported specifically for the 2.5.2 release,
which either means we did an exceptional job in backporting bugfixes from 2.6.0,
or nobody tested the 2.5.2 release and we\'re talking to ourselves here. Going
forward, we\'re going to [tweet more](https://twitter.com/taskwarrior). We can
get hearts there.

While most developments happen on the 2.6.0 branch, the 2.5.3 also proudly
features refactored CI system which gave its [stamp of approval for this
release](https://github.com/GothenburgBitFactory/taskwarrior/actions/runs/460332412).

This is a recommended upgrade. The release contains following files:

-   `task-2.5.3.tar.gz (sha3: 816825de93faf042a99da3265982135c4625308a4890cd638e9012a2)`:\
    Release tarball. Use this to build and install TaskWarrior.
-   `tests-2.5.3.tar.gz (sha3: f82ea1e1306998d59c8beeeb67285fd03dfb6ff4e5a8d572fd33df17)`:
    Test suite. Intended for package maintainers to make it easier to
    incorporate testing into the packaging process.

Note: If your distribution does not package sha3sum, you can also use openssl to
verify the tarball integrity using following syntax: openssl dgst -sha3-224
task-2.5.3.tag.gz
