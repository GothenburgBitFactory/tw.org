---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Problem accessing tasks from code..."
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Problem accessing tasks from code...

I'm new to TW (2.5.1) and after using it from the command line for a while, am trying to interact with it from Scala code.

My initial playing with this has involved running "task add" as a system command to add a task as a simple string with no other attributes, and parsing the ID of the new entry from stdout. That works fine.

Immediately after that (ie. the next line of code) I'm using "task export nn" so I can get all the attributes for the new entry, especially the UUID. My problem is that the ID of the task changes between adding it and trying to export it. TW says "Created task 11", but when I do a "task list", it is in there as 10.

I see from the docs that IDs can change, which I guess is what's happening, and so my question is how I retrieve my newly added task, given that I don't know the UUID, the ID has changed, and the description may not be unique.

Or is this not the way I should be approaching this?
{{< /question >}}
{{< answer >}}
If you are using Taskwarrior as a back end to your app, then communicating via the command line interface using IDs is not the right way to do that.
IDs are transient conveniences for users, not for programs.

Using the import and export commands is how you should be getting data in and out.
If you need that UUID, then why not just provide your own on import?  Just be sure to use a proper UUID generation library, and don't do it using random numbers.

See this, and various other online resources written specifically for this:

https://taskwarrior.org/docs/3rd-party.html

{{< /answer >}}
