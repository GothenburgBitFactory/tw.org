---
title: "Taskwarrior - Unicode"
---

### Unicode

All text in Taskwarrior is UTF8, which means any Unicode characters can be
entered and stored. Here is a demo:

Both the `U+NNNN` and `\\uNNNN` specifiers are supported, but it is usually
simpler to use the first, which does not require the backslashes to be escaped
in shells and scripts.

Note that the font you use in your terminal determines whether those characters
are rendered, so it is possible to enter characters for which there is no glyph.
