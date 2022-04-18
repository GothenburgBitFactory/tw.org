---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I fix this 'libgnutls-deb0.so.28' error?"
---

### Q: How do I fix this `libgnutls-deb0.so.28` error?

Upon upgrading from Ubuntu 15.10 to 16.04 I am now seeing the following error message when I try to run Taskwarrior:

```
error while loading shared libraries: libgnutls-deb0.so.28: cannot open shared object file: No such file or directory
```

Gnutls was already installed and had been working on my 15.10 installation for some time now.
I attempted to fix it by uninstalling and reinstalling gnutls, but it still doesn\'t work.

Your Taskwarrior was built using a version of GnuTLS that is no longer installed.
If you built Taskwarrior from source, then rebuild.

If you installed Taskwarrior from a binary package, uninstall and reinstall Taskwarrior.
