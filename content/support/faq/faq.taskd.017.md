---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "Systemd unit file error"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Systemd unit file error

The unit file used to start the task server does not seem to be working correctly.
When I check the status it seems to have failed.
The only thing I have found online is related to having /var/tmp symlinked to /tmp of vice verca.
This is not the case.
Are there any suggestions to fix this problem?

Process: 467 ExecStart=/usr/local/bin/taskd server --data /home/user/task_server (code=exited, status=226/NAMESPACE)
{{< /question >}}
{{< answer >}}
If you use the unit file from this page - https://taskwarrior.org/docs/taskserver/control.html - make sure that you remove /home from "InaccessibleDirectories".
{{< /answer >}}
