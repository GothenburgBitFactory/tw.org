---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "how can I make task conform to the XDG Base Directory Specification?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### how can I make task conform to the XDG Base Directory Specification?
Whether or not Taskwarrior should conform the XDG Base Directory Specification has been debated for years, and while it's possible to make it conform, it's arguable whether the developers should do so, for the general release. That said, if I wanted to follow the conventions for MY install of Taskwarrior, how would I go about it?
{{< /question >}}
{{< answer >}}
Essentially, you're talking about relocating the .taskrc file and .task directory, correct? If so, the task man page mentions the TASKRC and TASKDATA environment variables. Add them to your shell's .profile, .bashrc, or equivalent, and you should be all set.
{{< /answer >}}
