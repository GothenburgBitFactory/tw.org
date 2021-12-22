---
title: "Clog - Rule Actions"
---


-   `line`
-   `match`
-   `blank`
-   `suppress`

#### The `line` Action

The `line` action instructs Clog to color the entire line. This makes the whole
line more visible. An example might be to color a line in a log file if that
line reports a critical error.

#### The `match` Action

The `match` action instructs clog to only color the matching pattern and not the
entire line. This make individual keywords more visible. An example might be to
highlight simply an error code, or server name.

#### The `blank` Action

The `blank` action causes a blank line to be written both before and after the
matching line. This is another form of emphasis.

#### The `suppress` Action

The `suppress` action causes the whole line to be removed from the output. You
will not see a suppressed line at all. This is useful for stripping out noise
from a log file.

#### Example

Here is a default rule set that includes all the different actions. The first
rule will make any line completely blue if it contains the word \'blue\'. The
second rule colors the word \'red\' red. The third puts blank lines around any
line containing the word \'emphasize\'. The fourth rule suppresses any line
containing the word \'ignore\'.

![](/docs/clog/images/action1.png){.img-responsive}

Here is a sample file that triggers every rule, so we shoud see the actions of
all rules taken. Can you predict what will happen?

![](/docs/clog/images/action2.png){.img-responsive}

Here is the output:

![](/docs/clog/images/action3.png){.img-responsive}

This shows rules precedence also - the second rule finds the word \'red\' in the
blue line.
