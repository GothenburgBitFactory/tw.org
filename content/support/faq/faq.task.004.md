---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I filter tasks containing words that are also commands?"
---

### Q: How do I filter tasks containing words that are also commands?

I have tasks with descriptions such as:

```
ID Description
-- -----------------------------------------------
1  Print my report and give it to Bob.
2  Collect more info on daily rates of food waste.
```

When I try to filter them like this, it runs the command instead:

```
$ task report
...
$ tasĸ info
...
```

There is an operator `--` intended for this purpose:

```
$ task -- report
...
$ task -- info
...
```

The `--` operator is a directive that tells Taskwarrior to just treat all subsequent arguments as plain words.
It is also a good way to add a description that might contain things like `dep:`, `proj:`, tags or modifiers.
