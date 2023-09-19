---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I remove duplicate UUIDs?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How do I remove duplicate UUIDs?

If the command:

```
$ task diag
...
```

states that there are duplicate UUIDs, how do I remove them?
{{< /question >}}
{{< answer >}}
As far as I know there is no automated way to deal with duplicate UUIDs.

What follows is what I would do (did) in this situation.

The first thing you should do if task diag identifies one or more tasks with the same UUID is to list those tasks by using the UUID.
If your UUID was 42687c6e-a5c5-45be-a6f5-5c26006abf24 then do:

```
task 42687c6e-a5c5-45be-a6f5-5c26006abf24 info
```

If they are identical it's likely that they got corrupted.
In this situation the only thing left to do is to "get rid" of the duplicates until there is none that is identical.
Read on how to fix them below.

If the matching tasks are different, it's possible that they are still salvageable by assigning a new UUID that is not yet used. 

Fixing duplicates:

Because Taskwarrior uses UUIDs internally to match tasks, you won't be able to edit one task without affecting the other with same UUID.
In fact the first task found with given UUID will receive all changes.

In general editing your .data files by hand is not recommended.
This is probably the one and only exception.

With that said, make a backup of all the files in your $HOME/.task folder.
Then open all your .data files in a text editor (gedit, vim, emacs... not openoffice or such), search for the UUID using the editor's find function.

In the case that the tasks are identical, simply remove one of them by deleting the whole line, until there are no more duplicates.
Save and run task diag again for confirmation.

If on the other hand tasks are different, first find a UUID that is not taken.
Start by incrementing or decrementing the rightmost number.
Then confirm that no such UUID exists by running:

```
task NEW-UUID all
```

Once you are positive, change the UUID of one of the duplicate tasks by replacing it with the NEW-UUID.

Repeat until no more duplicates exist.

Wrapping up

Now, if these duplicates have already been synced, you will also need to correct the database on taskd as well as on other clients.

Taskd should have mechanisms in place to prevent creating tasks with duplicate UUIDs.
This information requires confirmation.

As far as I know the duplicate UUID problem cannot be solved by manually crafting entries in the backlog.data file.

I never had to go this far, but I can only envision a road with a lot of pain!
{{< /answer >}}
