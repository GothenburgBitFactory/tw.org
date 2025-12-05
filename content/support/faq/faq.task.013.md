---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I pipe a UUID into another task command?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How do I pipe a UUID into another task command?
{{< /question >}}
{{< answer >}}
You can use Bash subprocess syntax to achieve this:

```
$ task $(task _uuids +FOO) modify -FOO +BAR
```

{{< /answer >}}
