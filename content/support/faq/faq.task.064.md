---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to share a task between users?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How to share a task between users?
Or... is it "Organization" parameter in user creation useful at the moment?

Here: https://taskwarrior.org/docs/server_user.html

... says: "Before creating a user account, you may need to create an organization. An organization consists of a group of zero or more users. You can get away with just one organization, and in this example, we will create just one, named 'Public'.

You can create as many organizations as you wish (even one per user), and the purpose is simply to group users together. Future features will utilize this"

Is it actually possible to view/edit task of different users?

Task can be edited by people in the same organization or in the same project?

Cheers and thanks for the nice work
{{< /question >}}
{{< answer >}}
The key phrase there is "Future features will utilize this".
Taskserver will gain the ability to create shared lists (groups), and to transfer tasks between users.
But not yet.

If you wish to share a task list now, you need to put the files in a common location, with read/write access to all, and hope that every client enables file locking.
{{< /answer >}}
