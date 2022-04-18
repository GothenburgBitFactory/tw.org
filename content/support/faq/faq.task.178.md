---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I test Taskwarrior's actions in the future?"
---

Back to the [FAQ](/support/faq)

Q: How can I test Taskwarrior's actions in the future?
Worthless backstory – I'm trying to determine which is a better workflow for me – using Taskwarrior's built-in recurrence (which has some issues for me but nothing insurmountable) or using an external calendar program  to generate commands to add tasks (which resolves my recurrence oddities but loses some of Taskwarrior's advanced features).

Is there a way that I can set up (let's say) 2 recurring tasks, that is "due" on Mondays with a "wait" for the preceding Saturday, and one that is "due" on Tuesdays with a "wait" for the preceding Sunday; and then have Taskwarrior "Pretend it's Thursday, what happens? Pretend it's Friday, what happens? Pretend it's Saturday, what happens? Pretend it's Sunday, what happens? Pretend it's Monday, what happens? Pretend it's Tuesday, what happens?"

I know I can do that by resetting my system clock and other machine-altering ways.
I'd just rather not.

A: If this is a one-off kind of test, then use faketime.
That's what we use in the test suite.

