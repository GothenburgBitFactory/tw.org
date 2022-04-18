---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I hide the change history when using the info report?"
---

Back to the [FAQ](/support/faq)

### Q: How do I hide the change history when using the `info` report?

You need to turn off journaling, like this:

```
$ task config journal.info off
```

See `man taskrc` for more details.
