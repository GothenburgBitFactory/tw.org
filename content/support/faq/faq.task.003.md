---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I list tasks that have no project?"
---

### Q: How do I list tasks that have no project?

There are a few ways:

```
$ task project.none: list
$ task project: list
$ task project == '' list
$ task -PROJECT list
```

The last example makes use of a virtual tag designed for this use case, and is the preferred mechanism.

To list tasks that do have a project assigned, you can use these alternates:

```
$ task project.any: list
$ task project.not: list
$ task project != '' list
$ task +PROJECT list
```
