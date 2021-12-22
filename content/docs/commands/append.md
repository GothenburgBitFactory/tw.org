---
title: "Taskwarrior - Append Command"
---

[]{#append}

### append

The `append` command is a way to add words to the end of a task description:

    $ task add Fix plumbing
    $ task 1 append before the house floods

While adding words to the end of the description, the `append` command can also
update other attributes:

    $ task 1 append and before winter project:Home +repair
    $ task 1 list

    ID Age  Project Tags   Description                                            Urg
    -- ---- ------- ------ ------------------------------------------------------ ----
     1 4min Home    repair Fix plumbing before the house floods and before winter  1.8

[]{#also}

#### See Also

Other ways of modifying task descriptions include:

-   [`modify`{.sample}](/docs/commands/modify.html) command
-   [`prepend`{.sample}](/docs/commands/prepend.html) command
:::
