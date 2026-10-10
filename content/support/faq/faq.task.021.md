---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I include the recurrence frequency in a report?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How do I include the recurrence frequency in a report?
{{< /question >}}
{{< answer >}}
Try this command:

```
$ task columns
```

This will give you a list of all the columns and their formats that you can use in a report.
What you are looking for is the `recur` column.
{{< /answer >}}
