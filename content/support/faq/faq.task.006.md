---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I list tasks scheduled today?"
---

### Q: How do I list tasks scheduled today?

To filter tasks within a date range:

```
$ task scheduled \> today and scheduled \< tomorrow list
```

Note how filter operators need to be escaped, otherwise your shell will think it knows what to do.
Alternately, do this:

```
$ task scheduled.after:today and scheduled.before:tomorrow list
```

