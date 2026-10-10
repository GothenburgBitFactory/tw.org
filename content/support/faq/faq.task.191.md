---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "subtasks with projects or dependencies"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### subtasks with projects or dependencies

Can someone explain to me the nature of projects and dependencies? It seems that sub-tasks are implemented with "dependencies", but what, then, is the purpose of "projects"?<Paste>
{{< /question >}}
{{< answer >}}
Dependencies are not full-fledged subtasks, they just make tasks 'depend' on each other, meaning that one task should not be worked on until the other has been completed. Subtasks support is planned in one of the future releases.

Projects have a simple purpose of grouping tasks into one namespace. I.e. I like to use project:Work and project:Home to separate your work and home tasks.

{{< /answer >}}
