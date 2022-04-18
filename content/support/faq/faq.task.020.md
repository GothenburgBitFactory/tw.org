---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I record a task that is already completed?"
---

### Q: How do I record a task that is already completed?

There are several ways to do this.
The simplest is to use the `log` command, which creates a new task and immediately sets the status to `completed`:

```
$ task log ...
```

You can achieve the same thing using the `add` command:

```
$ task add status:completed ...
```

Furthermore, if you wish to record the date the task was completed:

```
$ task log end:2018-01-22 ...
```
