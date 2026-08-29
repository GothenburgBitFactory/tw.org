---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Tags with numbers in them"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Tags with numbers in them

I'm using TaskWarrior for my GTD and I'm extremely happy with it. However, after temporarily moving to my old laptop I have lost the ability to use my tags. I have set up a group of tags 1.now, 2.next, 3.soon, 4.later, ... and I would use them instead of fixed deadlines with the due: command.

Now, when I issue the command:

$> task add +important +1.now +@home Important action
this is the result:

$> task
[task list]
ID Age  Tags               Description                  Urg 
 1  1s  @home important    +1.now Important action      0.9
I cannot use any tags that have numbers in them, they get added to the description of the task. Has anyone coped with this problem and knows how to fix it?

I was able to use these tags on a previous laptop, they both run Ubuntu 15.10, the same bash, the same .bashrc...
{{< /question >}}
{{< answer >}}
It's a limitation: tags cannot begin with a number, or contain a space.
In your example, it's worse because "+1.now" looks like math, or a malformed DOM reference.
{{< /answer >}}
