---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "How do you import existing tasks into taskd?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How do you import existing tasks into taskd?

Hello,

I'd like to give a try to taskd and Mirakel and I already have a bunch of task created using the regular Taskwarrior program.
How can I import those tasks into taskd?

I skimmed through the documentation shipped with taskd but didn't find anything about that.
{{< /question >}}
{{< answer >}}
This is documented, run "man task-sync".

A: I don't think the answer is clear in the documentation, actually.
But what you want, Louis, is handled automatically when you run task sync initialize.

{{< /answer >}}
