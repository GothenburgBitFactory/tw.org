---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to preserve tags when task is completed?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How to preserve tags when task is completed?

I'm running v2.3, compiled on Ubuntu 14.04 (packaged only had v2.2).
When tasks are added, I usually include tags.
I'd like to keep those tags associated with a task even after the task is completed (for reporting purposes).
Is this possible?  Whenever I do a "task completed", it doesn't show any tags, like this:

 

adam@perseus-vm1[~]% task 
[task long]
No matches.
adam@perseus-vm1[~]% task add "Create dominant function" pro:eng0 +dev +tools +cte 
Created task 1.
The project 'eng0' has changed.
Project 'eng0' is 0% complete (1 of 1 tasks remaining).
adam@perseus-vm1[~]% task
[task long]
ID Proj Added      Age Tags          Description             
 1 eng0 2014/9/9   4s  dev tools cte Create dominant function
1 task
adam@perseus-vm1[~]% task 1 done
Completed task 1 'Create dominant function'.
Completed 1 task.
The project 'eng0' has changed.
Project 'eng0' is 100% complete (0 of 1 tasks remaining).

adam@perseus-vm1[~]% task
[task long]
No matches.
adam@perseus-vm1[~]% task completed
Complete   Proj Age Description                        UUID                                
2014/9/9   dhcp 1h  Configuration file                 a24f3089-9878-4151-b881-390754c676e2
                      2014-09-09 18:06:11 Started task                                     
                      2014-09-09 18:14:39 Stopped task                                     
2014/9/9   dhcp 1h  TOI session                        63a28f83-fb03-4227-91c6-f0548d7b6c24
2014/9/9   dhcp 1h  Enable known hosts                 ff7d775e-d17a-4059-8d54-fb0b362e45cd
2014/9/9   eng0 17s Create dominant function           ad3b5c51-8148-438c-9309-96080012f79a
4 tasks
 

  Thanks!
{{< /question >}}
{{< answer >}}
Don't worry - your data is intact.
What you're seeing is that your default 'long' report and the 'completed' report show different task metadata.
You can modify these reports if you wish them to show the same columns.

Meanwhile, you can see that your tags are intact, with the 'info' report, which always shows everything.
Try this:

task ad3b5c51-8148-438c-9309-96080012f79a info
{{< /answer >}}
