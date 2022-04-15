---
title: "Taskwarrior 2.6.0 released"
date: 2021-10-02
---

### Taskwarrior 2.6.0 released
  
Taskwarrior team is happy to announce the release of Taskwarrior 2.6.0, which brings a number of improvements to your favourite task management tool.
To just pick a few - writeable and configurable contexts, support for XDG Base Directory Specification, and most importantly, the ability to use emojis in your task descriptions 🚀

We also made a number of stability and bug fixing improvements to multiple areas of TW, including parsing, display or platform compatibility.

This is also the first release which supports 64-bit timestamps (also known as Y2038 problem), hence adding tasks that will likely outlive them, barring unprecedented advances in human longevity, is something our users can now indulge in:

```
# Hopefully emojis are still cool in 2100's
$ task add ❤️ Throw a party for 100th birthday of Taskwarrior 🥳 due:2106-11-29
Created task 3.

$ task
ID Age  Project Due     Description                                          Urg
 3 2s   Inbox   85.2y   ❤️ Throw a party for 100th birthday of Taskwarrior 🥳 5.25
```

For more detailed changes, we recommend reading the [ChangeLog](https://github.com/GothenburgBitFactory/taskwarrior/blob/e0f598f91c9734789d4423fe01255a3332d157da/ChangeLog).
If you want to see the release highlights, you can read the NEWS file or try running our freshly minted task news command 🙂
 
This is a recommended upgrade for all Taskwarrior users.
[Download here](/download).