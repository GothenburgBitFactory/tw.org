---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I use a Windows text editor for \"task edit ...\" on Cygwin?"
---

Back to the [FAQ](/support/faq)

Q: How do I use a Windows text editor for "task edit ..." on Cygwin?

Running notepad++ with the commandline switch -multiInst works - a new instance of np++ doesn't "trick" task into thinking the edit is done.

In .taskrc:

editor=notepad++ -multiInst

A: In case you want to use a console editor everything works perfectly fine, just how you would do it in unix.

Windows editors have problems resolving Cygwin paths, so you have to convert Cygwin paths to Windows with

cygpath -w
Please check https://cygwin-lite.sourceforge.net/html/cygpath.html

