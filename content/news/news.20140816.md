---
title: "News: Development Status"
---

### Development Status [2014-08-16]{.small}

Development is shifting focus for Taskwarrior and Taskserver. No more features
will be added, and completeness, stability and testing become the new focus.

The goal is to work towards good beta releases. There is no schedule for this
work for a couple of reasons; we are more concerned with quality than delivery
date, and as an all-volunteer organization, participation is not predictable
([you can help](/docs/contribute.html)).

Although Taskwarrior 2.3.0, 2.4.0, and Taskserver 1.0.0, 1.1.0 are all
compatible with each other, there will be an almost simultaneous release of the
updates, as they work together better.

The `tasksh` program, which was bundled with Taskwarrior, is now broken out as a
separate project, which allows it to follow its own release schedule and not be
slowed down by the less frequent Taskwarrior releases. This also allows it to
implement features that are a little outside the scope of Taskwarrior.

#### Taskwarrior 2.4.0

This is a major update for Taskwarrior, probably the largest. The main focus is
a new command line parser, which brings with it new capabilities, mainly the
ability to perform calculations at the command line.

-   New command line parser, with fewer quirks and support for new features.
-   New `calc` command, which shows off the expression evaluation capabilities
    that are built in to many other commands. This allows you to refer to a
    task\'s due date, for example, and add a week to it, in addition to basic
    math.
-   Lots of new virtual tags, which are now used in the custom report
    definitions, for simpler filters.
-   New report improvements and streamlining - the result of many years of use
    and consideration by our designer, urgency calculation details,
    configuration default values, listing breaks.
-   Features: multiline task descriptions, UUID partial matching, default `info`
    report when just an ID/UUID is specified, propagated urgency values,
    improved color rules, new themes, default support for regular expressions.
-   Documentation: new command reference design.
-   I18N: more languages, better coverage.
-   Add-ons: improved completion support.
-   Portability: improvements for Solaris, NetBSD, fewer sh/bash assumptions,
    musl C library support.
-   Security: better GnuTLS support, better certificate verification and
    handling, better sync diagnostics.
-   Many documentation improvements, in both man pages and online.
-   Bug fixes, currently around 100 issues resolved, with more coming.

#### Taskserver 1.1.0

This is a much smaller release, which is focusing on improved security,
stability and diagnostics, with simplified setup.

-   Diagnostic improvements: can log to stdout, includes line numbers for data
    issues, uses more consistent language, log indicates when server is ready,
    shows data statistics with the diagnostic command is provided with
    \'\--data\'.
-   Portability fixes for NetBSD, Solaris, musl C library, fewer sh/bash
    assumptions.
-   Networking: Improved IPv6 support, now obeys hostname.
-   Security: certificates are now validated for older GnuTLS versions.
-   Configutaion: improved PKI scripts, CRL cert is now optional, optional
    hostname verification, removed client.allow/client.deny confirugation, new
    interactive script for easy setup.
-   Documentation corrections, improvements.
-   Add-ons: systemd startup script.
-   Bug fixes, currently around 20 issues resolved, with more coming.

#### Tasksh 1.0.0

The `tasksh` program has been rewritten. This gives it a more solid foundation,
and potential for future improvements that may include timing, reminders,
extensions and complementary features. Initially, `tasksh` will be a minimally
functional release.

-   Stability: as a standalone program with no dependency on Taskwarrior, the
    shell is more lightweight and stable.
-   libreadline support.
