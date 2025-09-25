---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I include the time spent on a task in a custom report?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How can I include the time spent on a task in a custom report?
{{< /question >}}
{{< answer >}}
Total active time is not a reportable field.
It's not even a field, it's simply annotations when `rc.journal.time` is on.
As such it is a faithful account of how long a task was in the active state, but that is not what is needed for time tracking.

Proper time tracking allows for corrections, and mining annotations does not permit corrections.
Many people confuse this for time tracking, which it is not.

You can achieve limited time tracking with hook scripts, and here are two such examples:

<https://github.com/kostajh/taskwarrior-time-tracking-hook>
<https://github.com/coddingtonbear/taskwarrior-timebook-hook>

The real answer, though, is to [Use Timewarrior!](https://timewarrior.net)
{{< /answer >}}
