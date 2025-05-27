---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I solve \"Taskwarrior was built without GnuTLS support. Sync is not available.\"?"
---

Back to the [FAQ](/support/faq)

### Q: How do I solve "Taskwarrior was built without GnuTLS support. Sync is not available."?

Install `libgnutls-dev` and rebuild:

```
$ make clean
$ rm CMakeCache.txt
$ cmake .
$ make
$ sudo make install
```

