---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "What is the search syntax to exclude tasks from a certain project?"
---

Back to the [FAQ](/support/faq)

Q: What is the search syntax to exclude tasks from a certain project?

Or is currently not possible?

A: With 2.4.0 (soon) you will have several options:

task project.not:...
task project '!=' ...
Or using patterns:

task project.nocontain:...
task project '!~' ...
task not /.../

A: Try:

task proj.not:myproject
you can also exclude multiple projects:

task proj.not:myproject proj.not:myotherproject

