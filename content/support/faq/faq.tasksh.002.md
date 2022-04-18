---
title: "Taskwarrior - FAQ"
topic: "Taskshell"
question: "How do I repeat the last command?"
---

### Q: How do I repeat the last command?

In tasksh like most linux shell, you can navigate the list of your last input commands by using the UP/DOWN arrows for history navigation and PageUp/PageDown for prefixed history navigation (other names may apply here).

With prefixed history navigation you can start typing a command, say mod and by using PageUp/PageDown you will only browse history commands that start by mod, whereas full history ignores any input that already exists and simply navigates history in order.

A: if ( e.g. after changing from 2.3.0 to 2.5.1) in tasksh the

Tasksh supports `libreadline`, but make sure the development version is installed, and rebuild.
