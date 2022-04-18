---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I create a task that recurs on more than one day of the week?"
---

### Q: How do I create a task that recurs on more than one day of the week?

This is not supported, but you can simulate this by creating multiple tasks due weekly on different days:

```
$ task add Do the thing due:monday recur:weekly
$ task add Do the thing due:friday recur:weekly
```
