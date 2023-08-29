---
title: "Taskwarrior - Burndown Command"
---

# burndown.weekly (or .daily or .monthly)

The `burndown` command shows a chart that depicts the number of pending, active and completed tasks over different time periods.

This report makes it easy to gauge progress on a project, if a project is specified in the filter.
With a filter, you can see the chart for any set of tasks.

## Alias

There is an alias specified, by default, named `burndown` that expands to `burndown.weekly`.
This could be overridden to show either `burndown.monthly` or `burndown.daily` reports instead.

## Convergence

The `burndown` report tries to predict when the tasks matching the filter will all be completed.
With version {{< label >}}2.5.1{{< /label >}} the following approach is used:

The filtered tasks are scanned to see if a peak number of pending tasks exists.
If the peak number of pending tasks is any time in the last three days, then more tasks are being added than are being completed.
In this case, it is not possible to predict when that will change, and therefore when the tasks will all be completed.

![](/images/nofixrate.png)

In the case where a peak has occurred more than three days ago, and the number of pending tasks has been dropping since, a *net fix rate* can be determined, which is the average number of tasks completed per day.
This rate is shown on the chart.

![](/images/fixrate.png)

If a *net fix rate* is known, then it can be determined how long it might take to complete all the remaining matching tasks.
This duration is added to the current date, and a predicted completion date can be calculated.
This date is shown on the chart.

![](/images/completion.png)

This approach is based on a common pattern, which is that projects tend to move from a planning phase to an execution phase.
This simply means that tasks tend to be created earlier in the process, and completed later in the process.
This tends to create a peak number of pending tasks.

With the convergence date based on a recent completion rate and count, the estimated completion date is just an estimate, and it's accuracy is unknown, but is related to consistency in the size of tasks, consistency in your time spent completing tasks.
A more sophisticated approach such as [Evidence-Based Scheduling](https://www.joelonsoftware.com/2007/10/26/evidence-based-scheduling/) (EBS) would take into consideration estimates, actual time, and your task history.

In earlier releases, the convergence algorithm tried too hard and got it wrong too often.
Let's not mention that.

## See Also

Related topics include:

- `history` command
