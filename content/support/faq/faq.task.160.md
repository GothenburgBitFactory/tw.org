---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Quickly finding a task by description"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Quickly finding a task by description

I find myself fairly frequently piping task list into grep (task list | grep "someregex") to find the ID of a particular task. Does Taskwarrior have a built-in flow for this?

 

If not, I often find that piping the list report into grep produces this rather unhelpful error and frequently line-breaks the tasks so that the ID is not in the same line as the description:

"The report has a minimum width of 81 and does not fit in the available width of 80."

 

Is there any way to avoid this?
{{< /question >}}
{{< answer >}}
Here's a document you might find useful - there are many features you might want to know about:

https://taskwarrior.org/docs/examples.html

 

Meanwhile you can do this:

$ task /someregex/ list
 

Or if you just want the ID as you asked:

$ task /someregex/ ids
 

When you force the output of Taskwarrior into a pipe, it no longer has ability to determine the terminal width (there is no tty in a pipe), so it defaults to 80.
You can override this, and the fact that color is disabled for the same reason.
See 'man taskrc' for full details.

{{< /answer >}}
