---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "ways to handle follow-up"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### ways to handle follow-up

I was wondering how Taskwarrior users were handling followup of their tasks.

By “followup” I mean « check that I got an answer when I left a message or sent an email » (calling or sending the email being the task reccorded in Taskwarrior) or « ping J.Doe one week after I sent him an email to ask for something » (sending the email being the task recorded in Taskwarrior).

Is it better to update wait: and due: dates and eventually add an annotation to the task? But then the task is cluttered and one looses a kind of atomicity.

Or actually flag the task as done and create a new task? (eventually with a specific tag such as +followup). One looses the relationship with the main task I think with this solution.

Or any other solution?
{{< /question >}}
{{< answer >}}
I'm not sure there's a good answer for you.

It seems there is a need to record the expectation of a response.
That could be an annotation with a date in it, or perhaps a new task representing the response, with the original task depending on the response.

A: I am tagging such tasks with +delegated, and changing due and wait. Then it's trivial to just do "task +delegated" to see what I'm waiting for. When the wait opens the task, I follow it up and make an annotation on it like: 

task 111 done "Sari did the purchase; cost was 9,999."
 

What would help me is en passant annotation when I'm updating due and wait but I have not figured it out.

{{< /answer >}}
