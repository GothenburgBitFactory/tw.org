---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do i manually block and unblock a task?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How do i manually block and unblock a task?

I would like to manually [un]block a task as if it were blocked by a adding a dependancy to another task.

Here's my simple use case:

I have a task that a can't start before my boss give me some documents (in other words: before an external event occurs).

I enter this task to Taskwarrior, and set it blocked.
I will unblock it when i'll get theses documents.
 

I don't know when i will get theses documents so that's why i would like to manually lock/unlock the task.
{{< /question >}}
{{< answer >}}
At the moment the only way to block a task is to have it depend on another task.

You can do this by doing:

$ task add "Check that documents arrived"
Created task 1.
$ task add dep:1 "Do something with the documents"
This way if you include -BLOCKED in your report filters you will only see the task with ID 1.

Alternatively you can use the wait: attribute to have a task "disappear" from your task list until a given point in time.

Have a look at this and other answers for examples of how to use these attributes or use man task for full documentation.
{{< /answer >}}
