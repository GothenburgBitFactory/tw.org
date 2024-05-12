---
title: "Taskwarrior - Synchronize"
---

# synchronize

The `synchronize` command, which first appeared in version 2.3.0, connects your Taskwarrior client to a [Taskserver](../../#taskserver) instance, uploads local changes, downloads remote changes, and merges the results.
You can have several clients making local changes all of which sync to a single server instance, and they will all be kept up to date.

The Taskserver is designed to handle multiple clients that may not have synchronized recently, all with local changes, with only temporary network connectivity, and still do the right thing.

With a [correctly configured](../../taskserver/taskwarrior/) client, adding a task, or modifying an existing task, creates a local change that needs to be synced.
Taskwarrior will add a footnote to all output if a `synchronize` is needed.

```
$ task add Check the six hydrocoptic marzlevanes in the panametric fam
Created task 1.

$ task list

ID Age Description                                                 Urg
-- --- ----------------------------------------------------------- ----
 1 4s  Check the six hydrocoptic marzlevanes in the panametric fam    0

1 task
There are local changes.  Sync required.
```

Note that this is only a local check - Taskwarrior knows about the local change, but not any remote changes.

There is no requirement that you immediately synchronize when you see this message, and it causes no harm to ignore it, but you may choose to, in which case you run the `synchronize` command, commonly abbreviated to `sync`:

```
$ task sync
Syncing with foo.example.com:53589

Sync successful.  1 changes uploaded.
```

This shows a successful sync, uploading our one change.
If there were remote changes to download, the message would include that.
It is safe to sync as often as you wish, although it does waste some bandwidth setting up a TLS connection with the Taskserver.

```
$ task sync
Syncing with foo.example.com:53589

Sync successful.  No changes.
```

## Limitations

- Network connectivity is required in order to sync.
- Taskwarrior must be [correctly configured](../../taskserver/taskwarrior/) to connect to a Taskserver.

## See Also

Other ways of moving tasks around include:

- [`export`](../export/) command
- `import` command
