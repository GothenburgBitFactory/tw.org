---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Timewarrior & Taskwarrior: How to represent never-ending tasks?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Timewarrior & Taskwarrior: How to represent never-ending tasks?

What's a reasonable way to represent never-ending tasks for the purposes of tracking time when using the Taskwarrior hook? Take, for instance, email, which is not really a task you can cross off, but still something you'd prefer to log time against.
{{< /question >}}
{{< answer >}}
Good question.
Here are two suggestions:

Create a "Process Email" task, with an email tag, but do not assign a due date.
Then just start and stop this task whenever you are dealing with email, but never complete or delete it.
The Timewarrior hook will keep track of the time spent.

You can define an urgency coefficient for the tag 'email' if you want to influence its position on your next report, as perhaps you want to see this task all the time, or perhaps you don't.
 
Don't create a task, but instead just use Timewarrior directly like this:

$ timew start 'Process Email' email
...
$ timew stop

{{< /answer >}}
