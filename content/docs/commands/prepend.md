---
title: "Taskwarrior - Prepend"
---


# prepend

The `prepend` command is a way to add words to the beginning of a task
description, and it mirrors the [`append`](/docs/commands/append)
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


## See Also

Other ways of modifying task descriptions include:

-   [`modify`](/docs/commands/modify) command
-   [`append`](/docs/commands/append) command
