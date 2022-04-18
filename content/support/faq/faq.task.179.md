---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "scheduled but still urgent?"
---

Back to the [FAQ](/support/faq)

Q: scheduled but still urgent?

Greetings.
I'm confused about "scheduled" tasks.

The current date is Wed Aug 24 06:44:50 EDT 2016.

My task looks like this:

Name                Value
ID                  3
Description         patches
Status              Pending
Entered             2016-07-25 10:53:27 (4w)
Scheduled           2016-08-25 00:00:00
Due                 2016-08-25 09:00:00
Last modified       2016-08-24 06:39:43 (5min)
Virtual tags        DUE MONTH PENDING SCHEDULED TAGGED TOMORROW UNBLOCKED WEEK YEAR
UUID                aac852b2-45a7-44ae-8dfb-47a8a5ee0dbf
Urgency             9.259

    tags   0.8 *  1 = 0.8
    due  0.692 * 12 = 8.3
    age  0.079 *  2 = 0.159 
                      ------ 
                      9.259
and my current task list looks like this

[task next]
ID Tags           Due              Description               U
-- ---------- --- ---------------- ------------------------- ----
 3            1d  2016-08-25 09:00 patches                   9.26
29 home                            move doctor appointment    6.8
10           13d  2016-09-06 12:00 Root Password Changes     3.81

 
I thought that the "scheduled" tag means "cannot be completed before this."  So I'm not sure why my most urgent task is one that I cannot complete until tomorrow.
I want to see that it's upcoming, but clearly I have more urgent tasks than this one.

Am I missing something?

A: You are using scheduled correctly.
If you intend to spend all day thursday and friday on a lengthy task, then the scheduled date is early thursday, and the due date is late friday.
Schedule and due therefore bracket the time range.

But not all tasks need a scheduled date, and it would be unnecessary work to set one.

The next report sorts by urgency, which is a single-value assessment of the urgency of a task, based on many (tweakable) factors.
You can modify the urgency coefficients to adjust this, but it's important to point out that the next report is not listing only tasks you can actually begin.
It's just listing tasks that have high urgency scores.
Your task remains urgent even though you cannot start yet.

You might want to look at the ready report, which filters out tasks you cannot start.
It is also sorted by urgency, but will not include future scheduled tasks.

And of course, you can change any of the above through configuration, so for example you can use the ready report filter and add it to the next report filter, or set ready as your default command, and you can adjust the urgency coefficients to suit your notion of urgency.
All documented online.

