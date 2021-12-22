---
title: "Taskwarrior - _get"
---

[]{#_get}

### \_get

The `_get` command is a [DOM](/docs/dom.html) accessor. You can use this command
to extract any piece of information stored by taskwarrior. For example to obtain
the description of task 12:

    $ task _get 12.description
    Buy some milk

You can specify multiple data items:

    $ task _get 12.description 12.project
    Buy some milk Kitchen

You can use UUIDs:

    $ task _get a360fc44-315c-4366-b70c-ea7e7520b749.description
    Buy some milk

The `_get` command makes it easy to map between ID and UUID:

    $ task _get 12.uuid
    a360fc44-315c-4366-b70c-ea7e7520b749
    $ task _get a360fc44-315c-4366-b70c-ea7e7520b749.id
    12

The `_get` command is a helper command, which means it is more useful for
scripts and extensions than command line use.

[]{#also}

#### See Also

-   [DOM](/docs/dom.html)
-   [`export`{.sample}](/docs/commands/export.html) command
:::
