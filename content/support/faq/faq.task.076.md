---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Can I create a recurring task which repeats based on the date of completion, rather than the due date?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Can I create a recurring task which repeats based on the date of completion, rather than the due date?

Example: Have a task to clean your pet's cage weekly; if you do it a few days early, then the new task should be generated 7 days from the date of completion.
{{< /question >}}
{{< answer >}}
This is not supported.
But there is hope.

Since adding recurrence to Taskwarrior we have learned over the years that there are different types of recurrence.
There is the fixed schedule type that is implemented.
Then there is the kind you describe, which is where the due date of the next task is fixed to the completion date of the previous.

There is another type, perhaps, such as taking the trash out to the curb, such that if you don't do it, the fixed schedule remains, but the task just goes away.

Recurrence is being redesigned, and a future release will cover these cases, and more if they emerge.

A: I was really missing this feature, so I at least put together a hook simulating such recurrence. Being a hook, it requires Taskwarrior 2.4.0.

It is available on GitHub:

https://github.com/JensErat/task-relative-recur
{{< /answer >}}
