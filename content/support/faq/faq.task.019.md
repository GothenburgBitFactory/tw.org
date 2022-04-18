---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I hide tasks that have unfinished dependencies?"
---

Back to the [FAQ](/support/faq)

### Q: How do I hide tasks that have unfinished dependencies?

Try

```
$ task -BLOCKED
```

The virtual tags that are relevant for the present situation are `BLOCKED` and/or `UNBLOCKED`.
