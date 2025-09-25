---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "How can I uninstall Taskserver?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### uninstall taskd

I have installed taskd following this instructions: https://mirakel.azapps.de/taskwarrior.html

But now I need to uninstall it.
How do I do it?

I use ArchLinux but as I haven't used pacman, I can't use it to uninstall taskd.

Thanks.
{{< /question >}}
{{< answer >}}
Delete the files.
There is no uninstall.
If you'd used a binary package, there would be an uninstall.

A: That tutorial includes a "make install" step which unless the user running it is root, will fail.
If the user was indeed root or "sudo" was used, make sure you also remove the files from /usr/local/.
{{< /answer >}}
