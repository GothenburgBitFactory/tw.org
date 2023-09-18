---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Android notifier"
---

Back to the [FAQ](/support/faq)

Q: Android notifier

Any chance an android application could ever be developed? I know there are many todo list apps for android but one that would sync with task would be pretty sweet. Also to receive push notifications when certain tasks become urgent for example. Managing tasks on my phone when I'm away and on the other hand having full control while in the command line would be pretty powerful.

I'm certainly willing to do my part if you welcome help developing. Although it's way more fun to develop for the command line than for android!

A: There is a Taskwarrior package for Termux.

It's also possible to send notifications using the Termux-API extension, so I guess you could write a script & a cron job to get the notifications you want (I did something similar in order to always have the most urgent task as a notification).

Termux is pretty awesome IMHO. Definitely worth checking it out.

Hope that helps.

A: This is a common question, and deserves a detailed answer, although not the one you want.

Is there a chance that there will be an Android client?  Yes there is a chance, but I'm not an Android developer, so I won't be writing it.
There are tens of thousands of Android developers out there and as this question comes up a lot, combined with the number of Taskwarrior users out there, I had hoped that a solution would have appeared by now.

But this hasn't happened, so I think the chances are small.
To be fair, there have been about six attempts that I know of, but these efforts start and don't finish.
Mostly these have not been serious attempts to begin with, and don't get beyond the first few steps, which seem to focus on putting up some kind of UI, and not on the necessary technology behind that.

 This is something we already knew - writing any app with a non-trivial feature set is difficult.
It's not the kind of thing you can do in a couple of weekends.
Trivial apps are trivial to create, but secure syncing and notifications (both highly desirable features that you listed) are not trivial features.

Your offer to help is important though - we need more people like you to get this done.
Join us on IRC, there are folks there that also want this.

