---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Deleting recurring task"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Deleting recurring task

I have a parent recurring task that has been deleted but it is still present in my ~/.task/pending.data file with the following mask:

 

[description:"pay the rent" due:"1353387600" entry:"1351944626" mask:"++++++++++++++++XXXXXXXX" modified:"1411263554" recur:"monthly" status:"recurring" uuid:"23c826a7-c936-49ed-9d44-1af8ee829142"]
 

When I type `task recurring`, this task does not show up but it stills creates a monthly task. Is it safe to delete the corresponding line in the pending.data file or else how can I delete this recurring task?

 

I have tried to run this command (on Taskwarrior 2.3.0):

 

$task 23c826a7-c936-49ed-9d44-1af8ee829142 delete

Task 24 'pay rent' is not deletable.
{{< /question >}}
{{< answer >}}
Yes, it is safe to delete that line from pending.data.
But you should be able to delete it using this:

task 23c826a7-c936-49ed-9d44-1af8ee829142 delete
I should add that if you are syncing using Taskserver, manually deleting lines bypasses the mechanism that keeps things in sync.
{{< /answer >}}
