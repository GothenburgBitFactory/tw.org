---
title: "Taskwarrior 2.4.4 Released"
date: 2015-05-10
---

### Taskwarrior 2.4.4 Released 

Taskwarrior 2.4.4 is released.
Although a minor release, there are significant bug fixes which make this a recommended upgrade.
Changes include:

- Fixed a problem where the wrong task may be updated, if GC is disabled.
  This is the primary reason for the release.
- Fixed a problem where filters including parenthesized tags (`... and (+DUE or +OVERDUE)`) were incorrectly handled.
- 32-bit platform support.
- The `obfuscate` configuration setting will hide private data, intended for bug reporting.
- An early Japanese localization.
- Several bug fixes.

For full details, see the ChangeLog file included in the release.

Please bear in mind that [GnuTLS](https://gnutls.org) is a security product, and it is important that you use the most recent version available.
Please upgrade GnuTLS before building Taskwarrior and Taskserver.

The release is immediately available as a source [tarball](/download).
Binary packages will soon be available via your Operating System\'s package manager.
