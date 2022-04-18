---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I pipe a UUID into another task command?"
---

### Q: How do I pipe a UUID into another task command?

You can use Bash subprocess syntax to achieve this:

```
$ task $(task _uuids +FOO) modify -FOO +BAR
```

