---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I set the wait date to be 2 days before the due date?"
---

### Q: How do I set the wait date to be 2 days before the due date?

Taskwarrior can do date math, so use this:

```
$ task add ...
due:eom wait:due-2days
```

That `due-2days` value is evaluated by Taskwarrior, using the value you specified for the due date and subtracting two days.
You can also verify that date using the `calc` command:

```
$ task calc eom-2days
2018-01-30T00:00:00
```
