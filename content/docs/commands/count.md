---
title: "Taskwarrior - Count Command"
---

[]{#count}

### count

The `count` command simply counts tasks:

    $ task count
    249

By default, all tasks are counted, which includes completed, deleted and
pending. If you want to count just the pending tasks, add a filter:

    $ task status:pending count
    32

If a [context](/docs/context.html) is active, the `count` command obeys it.

[]{#also}

#### See Also

Other ways of counting tasks include:

-   [`_unique`{.sample}](/docs/commands/_unique.html) command
:::
