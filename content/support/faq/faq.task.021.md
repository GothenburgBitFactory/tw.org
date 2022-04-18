---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I include the recurrence frequency in a report?"
---

### Q: How do I include the recurrence frequency in a report?

Try this command:

```
$ task columns
```

This will give you a list of all the columns and their formats that you can use in a report.
What you are looking for is the `recur` column.
