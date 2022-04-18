---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I hide tasks that have unfinished dependencies?"
---

### Q: How do I hide tasks that have unfinished dependencies?

Try

```
$ task -BLOCKED
```

The virtual tags that are relevant for the present situation are `BLOCKED` and/or `UNBLOCKED`.
