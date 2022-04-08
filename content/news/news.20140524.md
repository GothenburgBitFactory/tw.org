---
title: "Taskwarrior 2.4.0 Development Status"
date: 2014-05-24
---

### Taskwarrior 2.4.0 Development Status 

Taskwarrior 2.4.0 is in development.
The main feature of this release is a new command line parser, and some related features such as expression evaluation and ISO-8601 date support.
This is a major undertaking, but the reward will be some very nice new features.

Until now this work, on the 2.4.0 branch in the code repository has been carefully done so as to not completely break functionality.
There are currently 24 failing tests, mostly regarding newly added capabilities.

Now it is time to make significant structural changes, and this is guaranteed to break many more tests, and generally make Taskwarrior 2.4.0-dev unusable, for a while.

To make an analogy, we\'re renovating a house, while living in it.
This involves mere inconveniences some of the time, such as tools lying around, and some holes in the walls.
But there comes a point where the plumbing is disconnected and the electrical system shut off.
Perhaps the windows are missing.
If the work is extensive, this is unavoidable.

This is Taskwarrior 2.4.0-dev right now - the plumbing is about to be shut off.
There is lots of instrumented code slowing things down, for example the command line is parsed twice, by the old parser, and now the new one.
Task filtering is done twice - by the old filter mechanism and by the new expression evaluator.
Everything is currently running very slowly, with lots of debug output.
But it\'s about to get worse.

We feel it is time to issue a warning, namely, please don\'t use version 2.4.0-dev for a while, and please don\'t report issues against it yet.
There will be an alpha release made when things are working again.

You can track the decline and ultimate recovery of this process from our continuous integration report:

```
https://central.gothenburgbitfactory.org/task-2.4.0.html
```

Meanwhile, Taskwarrior 2.3.1 is being prepared for release.
