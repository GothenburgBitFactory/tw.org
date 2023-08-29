---
title: "Teaching the Parser New Tricks"
date: 2014-04-29
---

### Teaching the Parser New Tricks 

With Taskwarrior version 2.4.0, we are building a better command line parser.
In addition to fixing a lot of annoying little bugs, we would like it to be more flexible and robust.
That means it will be able to handle more strange inputs than before, but can it do better?

We would like to see your most strange, supported or unsupported, twisted, Taskwarrior command line that you think should *just work*.

For example, we dislike escaping shell characters, so I want this to *just work*:

```
$ task "(project = foo or project = bar) and +tag" list
```

We want to be able to quote the whole command line as one big argument, so the parentheses don't need to be individually escaped.

What do you want to *just work*? Please submit answers here: [Issues on GitHub](https://github.com/GothenburgBitFactory/taskwarrior/issues)

[Issues](https://github.com/GothenburgBitFactory/taskwarrior/issues) can be submitted here.
Thank you.
