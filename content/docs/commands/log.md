---
title: "Taskwarrior - Log Command"
---

# log

The `log` command is the same as the [`add`](../add/) command, with one difference - the task is added in the completed state.
Sometimes it is necessary to record tasks that are already completed, if you are faithfully tracking work.
For example:

```
$ task log Order the materials +home +construction
```

This task is immediately recorded as completed, which means it will not be displayed on any report that shows pending tasks.

```
$ task log Order the materials start:2017-02-05 end:2017-02-06
```

This task is immediately recorded as completed with a beginning and an ending date.

## See Also

Other ways of creating tasks include:

- [`add`](../add/) command
- `duplicate` command
- `import` command
