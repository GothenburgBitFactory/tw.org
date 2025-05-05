---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I assign a task to a project while creating the task?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How can I assign a task to a project while creating the task?
For instance I recently did :

```
$ task project:todaysproject add pick up laundry
```

however when I list all tasks it shows that the task is not assigned to a project.
{{< /question >}}
{{< answer >}}
The "project:todaysproject", when it appears before the "add" command is ignored.
Try putting the command first:

```
$ task add project:todaysproject pick up laundry
```
{{< /answer >}}
