---
title: "Taskwarrior - Modify Command"
---

# modify

The `modify` command is the most direct way to change a task, for example, replacing a description:

```
$ task 1 modify This is the new description
```

Here a tag is added, and another removed from a task:

```
$ task 1 modify -home +garden
```

The same change, but to several tasks:

```
$ task 1 3 5-10 modify -home +garden
```
The same change, but to a set of tasks matching the filter:

```
$ task \( project:outdoors or /planting/ \) modify -home +garden
```

Correcting a spelling error in a task description:

```
$ task 1 modify /teh/the/
```

Changing just about everything about a task:

```
$ task 1 modify +tag /from/to/ project:New priority:H depends:2 due:tomorrow recur:weekly New description
```

## Configuration

Taskwarrior has a \'bulk\' threshold, which defaults to three tasks.
If you attempt to modify more than three tasks in one command, then additional confirmation is needed:

```
$ task 1-100 modify +later
  - Tags will be set to 'later'.
Modify task 1 'Buy a new dog collar'? (yes/no/all/quit)
```

The `rc.bulk` configuration setting can be modified to raise the threshold, with a value of `0` meaning infinity.
The bulk threshold is intended to protect against commands that have an incorrect filter.

## Recurrence

If you modify a recurring task, you will be asked whether you want the changes propagated to the other instances:

```
$ task add pay the rent recur:monthly due:2015-01-01
$ task list

ID R Due        Description
-- - ---------- ------------
 2 R 2015-01-01 pay the rent
 3 R 2015-02-01 pay the rent
 4 R 2015-03-01 pay the rent
 5 R 2015-04-01 pay the rent
 6 R 2015-05-01 pay the rent
 7 R 2015-06-01 pay the rent
 8 R 2015-07-01 pay the rent
 9 R 2015-08-01 pay the rent

$ task 2 modify /pay/Pay/
Modifying task 2 'Pay the rent'.
This is a recurring task.  Do you want to modify all pending recurrences of this same task? (yes/no) yes
Modifying recurring task 2 'Pay the rent'.
Modifying recurring task 3 'Pay the rent'.
Modifying recurring task 4 'Pay the rent'.
Modifying recurring task 5 'Pay the rent'.
Modifying recurring task 6 'Pay the rent'.
Modifying recurring task 7 'Pay the rent'.
Modifying recurring task 8 'Pay the rent'.
Modifying recurring task 9 'Pay the rent'.
Modified 9 tasks.
```

Declining the modification will affect only the specified task.

## Limitations

- When modifying tasks using a filter, it is easy to forget to limit the changes to just the pending tasks, requiring `status:pending` to be added to the filter.
  Otherwise, it will change all completed and deleted tasks.
- With `rc.confirmation=off`, `rc.bulk=0`, `rc.recurrence.confirmation=off`, and no filter, it is possible to cause great damage.

## See Also

Other ways of modifying tasks include:

- [`append`](/docs/commands/append) command
- `edit` command
- [`prepend`](/docs/commands/prepend) command
