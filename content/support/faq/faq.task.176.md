---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "multi-line report"
---

Back to the [FAQ](/support/faq)

Q: multi-line report

My reports are getting a little wide for an 80-column screen, for example,

ID Tags       R Wait             Due                  Description

 5 remind sdo   2016-08-31 09:00 6d  2016-09-06 09:00 remove the backup disk

 6 remind sdo   2016-09-01 09:00 6d  2016-09-06 09:00 install the backup disk

and I see that Taskwarrior will print a warning when my report gets too wide.

 

Is there a way that I can create a report that will print over two formated lines?  Something like this:

ID Tags       R Wait                 Scheduled

                Due                  Description

 5 remind sdo   2016-08-31 09:00 6d  2016-09-05 09:00

                2016-09-05 09:00 remove the backup disk

 6 remind sdo   2016-09-01 09:00 6d  2016-09-06 09:00

                2016-09-06 09:00 install the backup disk

A: No.

But you can make a custom report that includes fewer columns, or add a report-specific dateformat to shrink the timestamp, etc.

