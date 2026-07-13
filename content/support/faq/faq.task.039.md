---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to sort a report by tasks' due-dates and then their descriptions?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How to sort a report by tasks' due-dates and then their descriptions?
{{< /question >}}
{{< answer >}}
All reports have sorting defined.
For example:

$ task show report.list.sort

Config Variable  Value                                            
---------------- ------------------------------------------
report.list.sort start-,due+,project+,urgency-,description+
This shows the "list" report being sorted by descending start date, ascending due date, ascending project, descending urgency, and ascending description.
You have full control over report sorting, just override this setting.
{{< /answer >}}
