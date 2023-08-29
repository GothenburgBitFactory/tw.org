---
title: "Timewarrior 1.1.1 Released"
date: 2018-02-03
---

### Timewarrior 1.1.1 Released 

Timewarrior 1.1.1 is released.
This is a bug fix release and we recommend that everyone upgrade to 1.1.1.

There is one bug fix in this release, and it's an important one that fixes a long-standing problem that has been there from the beginning.

The problem is when a tracked interval spans an exclusion, the recorded interval has only one start and end time, and the exclusion is subtracted from this interval, resulting in multiple interval elements.

While this works, it does mean that if you change your exclusion configuration, then the data from before this change is interpreted as though it was after this change, and therefore wrong.

The new behavior correctly subtracts the exclusion as soon as the interval ends, and therefore the recorded data represents the exclusion configuration active at the time.

There is a script prepared that will fix your timewarrior data, and the download and description is found on the [DB Correction Script](https://timewarrior.net/docs/dbcorrection) page.

The release is immediately available as a source [tarball](https://github.com/GothenburgBitFactory/timewarrior/releases/download/v1.1.1/timew-1.1.1.tar.gz). Binary packages for your OS may appear soon.
