---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to show tasks done over given period of time?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How to show tasks done over given period of time?

I'd like a report that shows all tasks completed over a given period of time.

Since beginning of current month.
The month of...
The week of...
Beginning of week
Since last week (7 days ago, even better excluding weekends)
Only show tasks completed with certain project names
Etc...
{{< /question >}}
{{< answer >}}
You need something like this:

$ task end.after:2014-09-01 completed
You could of course define your own reports, each with suitable filters like this.
{{< /answer >}}
