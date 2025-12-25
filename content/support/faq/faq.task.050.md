---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Sort on due or scheduled"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Sort on due or scheduled

I want tasks sorted in the increasing order of due or scheduled date.

So, task due on 2014-05-06 is followed by the task scheduled on 2014-05-07 is followed by a task due on 2014-05-08, etc.

Any way to accomplish this?
{{< /question >}}
{{< answer >}}
So you want ascending order, not descending order of due dates.
Whichever report you are referring to (you didn't mention) has a sort order defined.
Look at the sort order with this:

$ task show report.WHICHEVER
...
You will see a sort order like this:

report.WHICHEVER.sort=...,due-,...
Just change that 'due-' to a 'due+' to reverse the sorting on that field.

You might be interested in the Report Tutorial.

A: it is not just ascending or discending. I want to sort on due date OR scheduled date.

Let me explain:

task1 due:2014-05-07

task2 sch:2014-05-08

task3 due:2014-05-09

task4 sch:2014-05-10

If I sort on:

due+,sch+, I will get:

task1,task3, task2, task4

I want to get:

task1, task2, task3, task4

A: I see. That's not supported. I'm not sure it even makes sense.

A: in certain workflows (mine, for instance), it does make sense :) I wish I could use a filter that says (due OR sche)+

A: You can - a filter is a different animal than a sort.
{{< /answer >}}
