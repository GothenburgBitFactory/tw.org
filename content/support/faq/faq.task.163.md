---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Why can't I export all tasks?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Why can't I export all tasks?

When I try the below command to backup my tasks, nothing happens.

user@host:~$ task export test.json
[
]

No file outputted
Must I specify the exact tasks I want to export?
Is export used for backing up? Or is it better that I backup the .task folder?
{{< /question >}}
{{< answer >}}
Try

task export
alone without a filter like "test.json".


If you want to have the results in a file do a

task export > test.json

{{< /answer >}}
