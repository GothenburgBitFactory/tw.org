---
title: "Taskwarrior - FAQ"
topic: "Timewarrior"
question: "How to track already added task using 'timew track' command"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### how to track already added task using 'timew track' command

I want to track an already added task for new missed interval. I can do sth like:

```
timew track 8am - 10am "try mimic the name"
```
Is there a way to address exactly already added task? I mean something like:

```
timew track 8am -10am <id of task> 
```
{{< /question >}}
{{< answer >}}
To add an interval with the exact same tag-list as an existing interval, there is the `continue` command.

Assuming you want to continue the interval with id @2 in your database, you will currently have to something like

```
timew continue @2 #starts new interval at <now> with same tags as @2
timew move @1 <start-time> #set the desired start time
timew stop <end-time> #set the desired end time
```
There is a feature request (TI-90) to expand the continue command to accept a start date which could be extended to also accept a date range - so you could write

```
timew continue @2 <start-time> - <end-time>
```
{{< /answer >}}
