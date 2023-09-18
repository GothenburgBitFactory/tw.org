---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to add an event?"
---

Back to the [FAQ](/support/faq)

Q: How to add an event?
How can I add an event that will occur some day. E.g. I have a test in the day 06, so instead of add it as a task how could I add this event in the Taskwarrior for it appears in the callendar but doesn't appear in the task list?

A: Find out which dateformat for holidays you are using:

$ task show dateformat.holiday

Config Variable    Value
dateformat.holiday YMD
and add dates accordingly.

$ task config holiday.sysadmin.date 20140725
$ task config holiday.sysadmin.name "System Administrator Appreciation Day"

