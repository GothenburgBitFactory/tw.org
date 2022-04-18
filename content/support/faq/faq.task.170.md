---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Life without attachments"
---

Back to the [FAQ](/support/faq)

Q: Life without attachments

I'm currently trying to migrate to TW from proprietary task manager but I can't figure how to live essentially without attachments to tasks. According to GTD and other effectiveness techniques you should unload your brain as much as possible. One of the implications is that you have to put the information related to the task in easily reachable location. The most obvious location is task attachment.

Currently I have web UI which allows me to attach arbitrary files as well as text notes to the task and it's one click away from tasklist. But with TW the only solution I could come up with is to have some kind of separate wiki or evernote-like app which will have articles with the same title as the task. Not only this is much harder to maintain than direct task attachments but it's also harder to reach: open the app, open the wiki, manually find the needed article etc.

I understand that this is somehow an implication of CLI app and I'm aware of taskattach, but wanted to ask you guys how you deal with it?

A: There are a few answers to your longing for attachments, the first of which would be annotations. A task can be enhanced with any number of annotations, including multi-line, freeform notes. For a couple of annotation options see: https://github.com/linuxcaffe/tw-ann-hook 

Then there's tasknotes, which are text files related to a specific task by uuid. Tasknotes are implemented in several places; the original implementation is https://github.com/mikebobroski/tasknote (getting old) and taskopen (link above) has an updated implementation, as does https://github.com/blakesweeney/unite-taskwarrior.

Then there's Taskwiki (https://github.com/tbabej/taskwiki) which allows for rich notes to be compiled, directly linked to Taskwarrior. Taskwiki is ideal for maintaining detailed project descriptions that can contain all related task lists. It is highly customizable, with rich-text and tables, can be inter-linked in several ways, and (because it works with vimwiki) you can generate reports in html and/or pdf.

A: Take a look here:

https://taskwarrior.org/tools/

search for 'taskopen'.
This allows the opening of URLs that are added as annotations.

It's not really an attachment solution, but it does let you link your tasks to attachments.

