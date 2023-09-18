---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to set 'wait' until one day before 'due'?"
---

Back to the [FAQ](/support/faq)

Q: How to set 'wait' until one day before 'due'?
Construction:

```
task 1 modify wait:due-1days
```

unfortunately doesn't work.

A: Currently date expressions are not supported.
This means instead of:

```
wait:due-1days
```

You have to calculate 'due-1days' yourself.

Beginning with Taskwarrior 2.4.0, date expressions will be supported, and exactly what you described will just work.
Additionally, algebraic expressions will be supported in several places.
Here is an example from the dev branch, using the new 'calc' command:

```
$ task calc 20140430 - 1days
2014-04-29T00:00:00
```
