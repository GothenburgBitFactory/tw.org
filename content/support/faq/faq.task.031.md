---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I denotate all annotations at once?"
---

Back to the [FAQ](/support/faq)

Q: How can I denotate all annotations at once?
Neither
```
task denotate "*" 123
```
nor
```
task denotate * 123
```
work for the task with id 123.

A: There is currently to way to remove annotations in bulk other than using:

```
task <taskid> edit
```
and removing all the annotation lines.

You could also write a helper script to remove all annotations.
Using the export command will make it easier to parse.
