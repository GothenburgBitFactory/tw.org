---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I solve \"Taskwarrior was built without GnuTLS support. Sync is not available.\"?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How do I solve "Taskwarrior was built without GnuTLS support. Sync is not available."?
{{< /question >}}

{{< answer >}}
Install `libgnutls-dev` and rebuild:

```
$ make clean
$ rm CMakeCache.txt
$ cmake .
$ make
$ sudo make install
```

{{< /answer >}}
