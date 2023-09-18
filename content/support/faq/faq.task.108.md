---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Printing report output"
---

Back to the [FAQ](/support/faq)

Q: Printing report output

I've got a pretty small laptop monitor and an awful lot of tasks, so I can't see more than a sixth of them at once for some projects. Sometimes its useful to have print outs of the whole list, with the colouration and arrangement of the 'next' or 'long' reports.

Saving it to text file via the terminal (which would still lose the colours) doesn't work for me:

"$ task long > tasklist.txt"

"The report has a minimum width of 184 and does not fit in the available width of 80."

The way I've been doing it is to screenshot it, append the images to each other, and print that. But there must be a better way.

Thanks

Ed

A: There are a couple of solutions.
The easiest is this:

$ task long rc.detection:off rc.defaultwidth:184 > tasklist.txt
The other solution is more creative.
Take a look at this:/

https://threebean.org/blog/2011/10/28/python-ansi2html-makes-taskwarrior-fantasktic/

