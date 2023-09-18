---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I get the UUID of the last task added?"
---

Back to the [FAQ](/support/faq)

### Q: How do I get the UUID of the last task added?

There is a `LATEST` virtual tag for just this.
It corresponds to the most recently added task.

```
$ task +LATEST uuids
```
