---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to show tasks with active \"wait\"-date?"
---

Back to the [FAQ](/support/faq)

Q: How to show tasks with active "wait"-date?
I have various tasks with a wait:-date in the future. Of course, these tasks are not shown in a regular task-list until the wait date matches current date.

Now I want to review these waiting tasks, but I could not find a way to show them. 
I tried "task wait:any" and "task wait.before:eoy", but I was not successful with this in task 2.3.0

Is there a way to do that? 

A: "wait.any:" and "wait.before:eoy" should both work. But there is a chance you also use the "list" report, which has a contradictory filter.

A: There is a report for that, try

task waiting
To be a little more exact, nearly all reports use filters to filter the tasks to be displayed.

$ task show filter

Config Variable         Value
report.active.filter    status:pending +ACTIVE
report.all.filter       status.not:deleted
report.blocked.filter   status:pending +BLOCKED
report.blocking.filter  status:pending +BLOCKING
report.completed.filter status:completed
report.list.filter      status:pending
report.long.filter      status:pending
report.ls.filter        status:pending
report.minimal.filter   status:pending
report.newest.filter    status:pending limit:10
report.next.filter      status:pending limit:page
report.oldest.filter    status:pending limit:10
report.overdue.filter   status:pending +OVERDUE
report.ready.filter     status:pending limit:page -WAITING '(scheduled.none: or scheduled.before:now )'
report.recurring.filter status:pending +CHILD
report.unblocked.filter status:pending -BLOCKED
report.waiting.filter   status:waiting +WAITING
As you can see, the waiting reports uses the filter status:waiting +WAITING.

If you want to see a raw report without any filters use task all.

A: Dirk, that's a bug - "status:waiting" and "+WAITING" are redundant. I'll fix that. Thanks.

