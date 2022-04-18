---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do I create a traditional GTD Next Actions list?"
---

### Q: How do I create a traditional GTD Next Actions list?

I am looking to create a custom report that lists all pending tasks without a project and the single most urgent from each project.

The report you describe is not possible as a single custom report because it combines multiple independent filters.
It could be done as a series of separate reports (one for the project-less, one for each project), but that\'s not convenient.

What would be better is to instead write a script that automates all this, pulling together a list of task UUIDs and presenting one result report.
Like this:

<https://taskwarrior.org/download/gtdnext.sh>

It\'s a bash script, and easily modifiable.
