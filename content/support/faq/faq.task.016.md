---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I search for tasks?"
---

### Q: How do I search for tasks?

There are several ways to search the description and annotations of your tasks.
The first is to simply look for a search term:

```
$ task ABC list
```

The second uses the `/.../` syntax, which uses regular expressions.
This is equivalent to the above form:

```
$ task /ABC/ list
```

Regular expressions support sophisticated search terms:

```
$ task /[A-Z]../ list
```
