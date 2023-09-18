---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Non-cumulative burndown report"
---

Back to the [FAQ](/support/faq)

Q: Non-cumulative burndown report

Hi, I have been using Taskwarrior for almost a month now and I am really enjoying it! It is the only task program I have managed to stick with recently, and I don't see any reason for me to stop anytime soon (apart from me just jinxing it). So thanks for a great program!

To the actual question; is it possible to create a non-cumulative burndown report? I mostly use `burndown.daily` and while the current report is already very useful, it would be well complemented by a non-cumulative report, which would facilitate identifying peaks and trends in the amount of tasks created and completed each day or week. With the cumulative report it gets a little difficult to notice just a few additions/completions since they are contrasted with all the tasks ever added/completed. E.g. with around 50 tasks done and pending, it is difficult to see the impact I get from completing 1 extra task today, but that extra task would seem more important if I was only comparing it with what I did yesterday.

A: There isn't a non-cumulative variation of the burndown chart.

To create the chart you want, you would need to change the burndown report in C++.
You could alternatively export the data and load it into something that can draw the chart you want, or script it.

It would be a good idea though to write up a feature request.

