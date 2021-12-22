---
title: "Taskwarrior - Prepend"
---

[]{#prepend}

### prepend

The `prepend` command is a way to add words to the beginning of a task
description, and it mirrors the [`append`{.sample}](/docs/commands/append.html)
command:

    $ task add sandwich
    $ task 1 prepend make me a 

While adding words to the beginning of the description, the `prepend` command
can also update other attributes:

    $ task 1 prepend sudo project:Food
    $ task 1 list

    ID Age  Project Description             Urg
    -- ---- ------- ----------------------- ----
     1 4min Food    sudo make me a sandwich  1.8

[]{#also}

#### See Also

Other ways of modifying task descriptions include:

-   [`modify`{.sample}](/docs/commands/modify.html) command
-   [`append`{.sample}](/docs/commands/append.html) command
:::
