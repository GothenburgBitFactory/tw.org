---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Can I add due date to blocked task: \"30 days after blocking task is done\"?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Can I add due date to blocked task: "30 days after blocking task is done"?
I have two tasks. Task A is blocking task B. Task B could be started only after completing task A, and it will take some time to complete. I would like to automatically add due date to task B (30 days for example) after task A is complete. Is this possible?
{{< /question >}}
{{< answer >}}
Short answer:
Not at the moment and not automatically.

Long answer:
A similar feature has been discussed but is pending an official proposal. Informally said feature has been called "event hooks". They would allow setting up certain actions to occur at certain moments such as, after completing a task or after modifying a task, once all tasks in a project are finished, etc.
However, I think the scenario you mention would not be solved by this because the current discussion is going towards a global scale (e.g. completing any task creates a pop-up) and not a per task basis (completing task 12 rings a bell, while task 20 fires up a browser).

If you know the code versioning tool Git, the "event hooks" that I'm talking about will be similar to the hooks on this tool.

So as of now Taskwarrior doesn't support triggering events, even less events that affect other tasks.

This has been added as a feature request.
{{< /answer >}}
