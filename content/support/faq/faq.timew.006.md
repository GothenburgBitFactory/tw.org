---
title: "Taskwarrior - FAQ"
topic: "Timewarrior"
question: "I am trying to correct a task which I left running by deleting it, but I am getting an assertion error"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### I am trying to correct a task which I left running by deleting it, but I am getting an assertion error:

```
timew delete @1

timew: /home/achasen/git/timew-1.0.0/src/Datafile.cpp:111: void Datafile::deleteInterval(const Interval&): Assertion `_range.overlap (interval.range)' failed.

[1]    14876 abort (core dumped)  timew delete @1
```
the output of summary is:

```
W52 2017-12-30 Sat @3 sfdc, slides       10:45:00 11:39:01  0:54:01
                   @2 calendar, review   11:39:21 11:45:35  0:06:14
                   @1 review, tech, test 11:45:35  0:00:00 12:14:25 13:14:40
W52 2017-12-31 Sun @1 review, tech, test  0:00:00  0:00:00 24:00:00 24:00:00
```
I am also curious if there is a better mechanism for "cleaning up" tasks which I left running.
{{< /question >}}
{{< answer >}}
If the time tracking is still active, the "official" way would be

```
timew cancel
```
but

```
timew delete @1
```
should behave the same way.
{{< /answer >}}
