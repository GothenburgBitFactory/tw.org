---
title: "Taskwarrior - _unique"
---

# _unique

The `_unique` command generates a filtered list of unique values for a given attribute.
For example, to generate the list project names:

```
$ task _unique project
Home
Home.Garden
Work
```

In addition to `project`, any attribute can be specified, for example, task `status`:

```
$ task _unique status
pending
deleted
completed
```

There

## Filters

You can specify a filter, to consider a subset of tasks, for example, here we see that the `Home.Garden` project has only pending tasks:

```
$ task project:Home.Garden _unique status
pending
```

 ## Limitations

- Date attributes are presented in raw epoch form.
  This is a helper command, after all.

## See Also

Other ways of generating unique lists include:

- `_aliases` command
- `_config` command
- `_context` command
- `_ids` command
- `_projects` command
- `_show` command
- `_tags` command
- `_udas` command
- `_uuids` command
