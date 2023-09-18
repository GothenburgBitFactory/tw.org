---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Is there a way to set searches to be case insensitive by default?"
---

Back to the [FAQ](/support/faq)

Q: Is there a way to set searches to be case insensitive by default?

task /search/ all by default is case sensitive - so it would match "search" but not "Search". I realize I could use regex to search for s or S, but can I make search case insensitive by default?

A: Yes!  If you read the man page:

$ man taskrc
Then searching for either search, case or insensitive will take you right there.

