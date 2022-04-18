---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I change many due dates using one command?"
---

### Q: How do I change many due dates using one command?

Something come up yesterday and completely derailed my day.
As a result, I have many tasks that need to be rescheduled to today.
What command can I use to change the due date of tasks I missed yesterday to be due today?

This will change all overdue tasks to be due today:

```
$ task +OVERDUE mod due:today
```

Depending on whether you want all overdue tasks or not, you\'ll need to adjust the filter.
