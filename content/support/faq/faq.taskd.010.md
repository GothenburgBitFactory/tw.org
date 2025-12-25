---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "How secure is the Taskserver?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How secure is the Taskserver?

I understand that the communication is ssl-encrypted.
But can the Taskserver itself access my todos?
Or are the encrypted client-side?

Inthe.Am seems like it could be a solution to the problem of not being able to access my tasks on my android smartphone, but what can they access if I sync with them?
{{< /question >}}
{{< answer >}}
Data is not encrypted on the server side.
Communication is the only part that is encrypted.

There are plans to add this in the future.
{{< /answer >}}
