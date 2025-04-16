---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Filter by end/entry/modified date"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Filter by end/entry/modified date

Filtering tasks by due date seems to work pretty well:

task status:pending due:2014-10-02
But similar queries for `end`, `entry` or `modified` date fields don't work, e.g. if I want to get a list of all tasks that are completed and have their end date of Sept 30:

task status:completed end:2014-09-30
Any ideas how to do this? or is filtering by these date fields not supported?
{{< /question >}}
{{< answer >}}
To answer my own question:

task status:completed end:2014-09-30 all
Otherwise, we're just looking at pending tasks by default.
{{< /answer >}}
