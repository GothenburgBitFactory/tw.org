---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "How to go back in time? Or: Reverting your messed up database!"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How to go back in time? Or: Reverting your messed up database!

I just tested the current beta of Mirakel which supports better handling of recurring tasks but apparently it messed up my database which led to a huge duplication of already completed tasks and some other stuff.

However, I was just wondering: How to back in in time? Al those nasty changes, I do not want to keep them, I'd love to have my database from yesterday back. Any idea?

taskd 1.0.0 and task 2.3.0
{{< /question >}}
{{< answer >}}
Using beta software without first making a backup of your data leads to ... exactly this kind of problem.
Let's assume you have learned your lesson.
Without further lecturing, here is the recovery process:

1. Make sure that you have reported any software issues to the respective teams - if there are bugs, they will be fixed, after all, that's what beta is for, and people are standing by, waiting for the bug reports to roll in.
You can help prevent this from happening to someone else.
2. Make that backup now.
This should include your Taskwarrior data (typically in ~/.task) as well as your Taskserver data (there are no defaults for this, so wherever you chose to store the data).
This will protect you from further problems.
3. Locate your tx.data file in the Taskserver data.
Look at it.
You'll see entries that are tasks, punctuated by UUIDs, like this: 

[...]
[...]
a35e0867-d330-47a8-a0c9-8b3b6d4c2cba
[...]
[...]
[...]
47d60f5e-43f0-46f6-8825-0e26bcff807a
There are blocks of tasks, followed by a UUID - a block of tasks is always followed by a UUID.

4. The tx.data file is a complete list of changes made, in order from top to bottom.
The UUIDs in the file are the points where a "sync" command transferred data.
Go through the data and find the blocks you want to revert.
They should be the blocks at the bottom of the file.
Remove the UUID at the bottom of the file, and the preceding block of tasks.
This should leave a different UUID at the bottom of the file.
Repeat if necessary.
You can use the "modified" attribute in the tasks to help identify which ones need to be removed.
5. When done, go to your client machine and delete the ~/.task/*.data files.
Don't worry, because you made a backup.
6. Run "task sync" and all your data should be pulled down from the server.
Take a good look at your tasks.
7. If there is a mistake, restore from your backup and repeat from step 3.
8. Once you are satisfied, make another backup.
   {{< /answer >}}

