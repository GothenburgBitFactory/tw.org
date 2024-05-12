---
title: "Taskwarrior - Done Command"
---

# done

The `done` command is how tasks are marked as completed.

```
$ task add Paint the door
Created task 1.

$ task 1 done
Completed task 1 'Paint the door'.
Completed 1 task.
```

This sets the task status to `completed`, adds an `end` date and updates the `modified` date.

## En Passant

There is a feature shared by several commands, named *en passant*, which allows further changes, above and beyond the command to be made.
An example would be to remove the `important` tag while completing a task:

```
$ task 1 done -important
```

Here the tag removal is the *en passant* move made while completing the task.
Different kinds of modifications may be made when completing a task:

```
$ task 1 done -important /teh/the/ project: +tag
```

One special case is that text provided *en passant* is added to the task as an annotation:

```
$ task 1 done Paint dried overnight
```

Here the text `Paint dried overnight` is added as an annotation.

## UUID

Once a task is completed, it can be referred to by its UUID, because it no longer has an ID:

```
$ task 937bb9e4-25df-42a7-a52e-bd47edb23ccd info

Name          Value
------------- ---------------------------------------------------
ID            -
Description   Paint the door
Status        Completed
Entered       2015-09-01 23:08:22 (22s)
End           2015-09-01 23:08:27
Last modified 2015-09-01 23:08:27 (17s)
Virtual tags  COMPLETED UNBLOCKED LATEST
UUID          937bb9e4-25df-42a7-a52e-bd47edb23ccd
Urgency          0

Date                Modification
2015-09-01 23:08:27 End set to '2015-09-01 23:08:27'.
                    Status changed from 'pending' to 'completed'.
```

## See Also

Related topics include:

- [`log`](../log/) command
- `delete` command
- `undo` command
