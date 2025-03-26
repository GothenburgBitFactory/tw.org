---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I get list of all used tags?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How can I get list of all used tags?

task tags seems to only return list of all used tags in pending tasks.
How can I get a list that includes tags used in completed tasks ?
{{< /question >}}
{{< answer >}}
You can enable this setting to see all tags used, not just the pending ones:

$ task rc.list.all.tags:yes tags

A: Is task _tags the command you are looking for?
{{< /answer >}}
