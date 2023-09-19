---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I change due, scheduled and wait all at once?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How do I change due, scheduled and wait all at once?

When I set dates in a task I am usually setting them relatively with "wait:due-5d scheduled:due-3d" or the like. 

Is there an easy way to slide all the dates relatively, say if the task slips 3 days, via a script or some native command that I am missing? 

Another related question is, is the relativeness of the dates remembered, as first entered. Or, is that only when entering. 
{{< /question >}}
{{< answer >}}
All dates are realized on entry, so the relativeness is immediately lost.
But they can be modified relative to themselves:

$ task <id> modify due:due+1wk scheduled:scheduled+1wk wait:wait+1wk
{{< /answer >}}
