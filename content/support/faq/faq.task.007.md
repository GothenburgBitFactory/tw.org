---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I bring back a task that I completed or deleted by mistake?"
---

### Q: How do I bring back a task that I completed or deleted by mistake?

Simply changing the `status` of the task to `pending` is enough, Taskwarrior takes care of the rest:

```
$ task <uuid> modify status:pending
```

You can obtain the `<uuid>` in several ways.
Here is how to see the 10 most recently completed or deleted tasks, with the most recent shown first:

```
$ task limit:10 \( status:completed or status:deleted \) rc.report.all.sort:end- all
```
