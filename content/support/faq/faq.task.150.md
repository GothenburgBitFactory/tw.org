---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Task is deleted, but keeps showing up"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Task is deleted, but keeps showing up

Recently I batch deleted the tasks of a given tag :

task +groceries delete
Problem is, if I type the same command again, I get rows and rows of :

Task 0 'article' is not deletable.
Similar problem happens with

task +groceries delete
How to prevent those task to crawl back into my terminal?
{{< /question >}}
{{< answer >}}
The filter you are using needs to be more specific, because as-is you are attempting to delete already deleted tasks.
You need to restrict it to only the pending tasks.
Use this:

$ task +groceries +PENDING delete

{{< /answer >}}
