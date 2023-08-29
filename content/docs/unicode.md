---
title: "Taskwarrior - Unicode"
---

# Unicode

All text in Taskwarrior is UTF8, which means any Unicode characters can be entered and stored.
Here is a demo:

    $ task add Download U+266C U+2669 for the plane
    Created task 5.
    $ task 5 list
    ID Age   P Description                    Urg 
     6 10s   M Download ♬ ♩ for the plane      3.9

Both the `U+NNNN` and `\uNNNN` specifiers are supported, but it is usually simpler to use the first, which does not require the backslashes to be escaped in shells and scripts.

Note that the font you use in your terminal determines whether those characters are rendered, so it is possible to enter characters for which there is no glyph.
