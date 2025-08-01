---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to express precedence, or the reciprocal of dependency?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How to express precedence, or the reciprocal of dependency?

Taskwarrior allow me to specify that a given task (task 1) depends upon another task (task 2). The command for this is specific to task 1:

task 1 modify depends:2
But what if I am working on task 2, and I want to modify task 2 to show that it is a prerequisite for completion of task 1? (Task 1 is an antecedent or a precedent to task 2.*) Is there a way to do this, or must I modify task 1 again every time that I create a new task that is antecedent to it? It would be great if I could just add the antecedent/precedent description to task 2 (and other subsequent tasks), thereby avoiding the extra step of revising task 1 every time. Like so:

task 2 add precedes:1
(*An antecedent is something that logically precedes another thing, so these two words are closely linked. These are probably not the best terms here; they're just the ones I could think of.)
{{< /question >}}
{{< answer >}}
There is a hook script that implements this:

https://gist.github.com/wbsch/a2f7264c6302918dfb30


 The reason this isn't implemented is that it's not just funky syntax - the depends:xxx directly references the attribute depends.
The precedes is not an attribute.

{{< /answer >}}
