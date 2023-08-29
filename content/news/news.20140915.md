---
title: "Taskwarrior 2.4.0 beta1"
date: 2014-09-15
---

### Taskwarrior 2.4.0 beta1 

Taskwarrior 2.4.0 is in beta, and available as a source ~~tarball~~.

- Calc command `task calc '1 + 1'`
  Hint: it's '2', but it's a beta, so who knows?
  And yes, it can do more than that.
- Enhanced DOM support `task add due:123.due`
- Date math `task add ... due:eom wait:'due - 1week'`
- Unicode: `task add \\u2615`
- New command line parser.
  Why would you care? You wouldn't.
  But we do, because it lets us be creative and add more useful features.
- Better `task show` command, that includes default values.
- Hooks.
  Yeah.
- ISO-8601 date support `task add ... due:2014-09-15T18:59:00` and about 30 other formats too, independent of `rc.dateformat`.
- The `task info` report now shows more ... stuff.
- More virtual tags.
  That work now.
- New localizations.
  Now there are eng-USA, esp-ESP, fra-FRA, ita-ITA, por-PRT, epo-RUS. 
  Dolphin and Klingon next.

Tasksh 1.0.0 is also in beta, and available as a source [tarball](https://github.com/GothenburgBitFactory/taskshell/releases/download/v1.0.0/tasksh-1.0.0.tar.gz).
Features in tasksh include:

- Libreadline support for command line history.
  So you can hit `Up-Arrow`, which we know you've dreamed of.
- Nothing else.
  Because this replaces the old one, which did nothing and also crashed.
- It doesn't crash. 
- Or does it? Let us know.
- It is a separate project now, and not bundled with Taskwarrior.

Features are being planned for tasksh, and with subsequent releases you'll see it grow into a useful addition.
Or not.
Who knows what future portends?

But seriously, we need your help and feedback testing this.
It's a big release.

Please note that this is beta software, and not suitable for everyday use.
We welcome your feedback in the form of bug submissions, and general Questions & Answers.
