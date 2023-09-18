---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "urgency.scheduled not being applied"
---

Back to the [FAQ](/support/faq)

Q: urgency.scheduled not being applied

I don't know if this is a bug or just my misunderstanding.

task 2.5.1 built for linux

Name          Value
ID            5
Description   southwest flight checkin
Status        Pending
Entered       2016-08-12 08:47:27 (3mo)
Scheduled     2016-11-18 09:20:00
Due           2016-11-18 09:50:00
Last modified 2016-11-15 16:01:27 (18h)
Tags          home
Virtual tags  DUE MONTH PENDING SCHEDULED TAGGED UDA UNBLOCKED WEEK YEAR
              PRIORITY
UUID          6fa5de3e-6aee-41f7-b13d-4292588ac37d
Urgency       15.22
Priority      H
 
    tags              0.8 *    1 =    0.8
    due             0.658 *   12 =   7.89
    age             0.263 *    2 =  0.526
    UDA priority.H      1 *    6 =      6
                                   ------
                                    15.22
 

 

This task has a "scheduled" date and a SCHEDULED virtual tag, but the urgency.scheduled coefficient is not being applied.
Should it be?

A: This is expected.
The scheduled coefficient only comes into play when the task is ready.
In other words when scheduled < now.

Your task has a scheduled date in the future, which means the task is not ready to start working on, and the urgency from the scheduled coefficient is zero.
You'll see the urgency jump up on 2016-11-18, by the amount of the scheduled coefficient.

