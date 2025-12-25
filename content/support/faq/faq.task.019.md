---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I hide tasks that have unfinished dependencies?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How do I hide tasks that have unfinished dependencies?
{{< /question >}}

{{< answer >}}
Try

```
$ task -BLOCKED
```

The virtual tags that are relevant for the present situation are `BLOCKED` and/or `UNBLOCKED`.
{{< /answer >}}
