---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I remove an attribute?"
---

### Q: How do I remove an attribute?

Modify the attribute and give it a blank value:

```
$ task 16 modify due:
```

Taskwarrior doesn\'t store blank values, so it deletes the attribute.
