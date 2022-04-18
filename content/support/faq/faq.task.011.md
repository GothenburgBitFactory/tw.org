---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do you run a report listing recurring task templates?"
---

Q: List recurring task templates

How do you run a report listing recurring task templates?

A: Using the built in reports:

task status:recurring all
Note that you have to use `all` because the rest of the built in reports impose a status filter like `status:pending` or similar.

You could also use a custom report, such as the following

report.templates.description=Recurring task templates
report.templates.columns=id,priority,due,urgency,project,description
report.templates.labels=id,Pri,Due,Urg,Proj,Desc
report.templates.sort=id+
report.templates.filter=status:recurring

A: As a hack, you can also use `task status:recurring or status:recurring list`, which would translate to the filter `status:pending and status:recurring or status:recurring`.

A: 'info' and 'export' also have no filter.
