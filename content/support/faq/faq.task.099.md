---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Does Taskwarrior support a higher time resolution than \"on that day\"?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Does Taskwarrior support a higher time resolution than "on that day"?

For example, I have projects that are due at specific hours of the day. How can I use due: to mark this?
{{< /question >}}
{{< answer >}}
Read "man taskrc" regarding the "dateformat" setting.
If you include time in your dateformat, then you can specify time.

A: Another ways to specify a time is to use the "+" operator. For example

monday+15hours
means monday at 15:00.
{{< /answer >}}
