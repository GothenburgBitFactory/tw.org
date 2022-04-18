---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "What are subprojects?"
---

Back to the [FAQ](/support/faq)

Q: What are subprojects?

I see subprojects (e.g project:Mainproject.Subproject) mentioned twice in the example workflow page, but they do not seem to be documented anywhere. They also don’t appear to be associated with the main project in any of the reports in my tests.
Are subprojects simply a naming convention? And they are really just a completely separate project with a . in the filename which makes it looks like there is a hierarchical structure?
Edit: Also mentioned here https://taskwarrior.org/download/tw-ubcde11.pdf

A: A project is a string.
If you use the ''.'' notation in the string, then it affects filtering.
For example, you could have these tasks:

$ task add project:Home ...
$ task add project:Home.Garden ...
$ task add project:Home.Garden.Vegetables ...
Then when you issue this filter:

$ task project:Home.Garden list
...
you will see two tasks, because the project filter performs a leftmost match.

A: In addition to xxx's answer, subtasks will also show up as indented under their Main task when running a command like `task summary`:

Home
    Garden
        Vegetables
Completing tasks in subprojects will increase the progress in the main project, so Taskwarrior indeed tracks them as part of that main project.

