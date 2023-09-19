---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I remove an attribute?"
---

Back to the [FAQ](/support/faq)
{{< question >}}
### How do I remove an attribute?
{{< /question >}}
{{< answer >}}
Modify the attribute and give it a blank value:

```
$ task 16 modify due:
```

Taskwarrior doesn't store blank values, so it deletes the attribute.
{{< /answer >}}
