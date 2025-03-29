---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How do you handle these two situations?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How do you handle these two situations?

Hi, I'm wondering you have any best practices for these two situations:

1. I have a list of things (ie: a grocery list) that should be done together.
2. I have tasks that are a member of my family's actions (ie: schedule a house inspection). They're independent of each other. For example, schedule a house inspection is a different project and timeline then pick up packages. I'm torn between having it all, but it clutters my reports with things I can't take action on.
 

I don't have a good solution for #2, but for #1, I have a separate Taskwarrior instance that is lists-only. A project would be 'shopping' and tags would be 'amazon', 'ebay', 'home depot', and any other appropriate ones (since I could buy an item at multiple locations). The downside is it detaches the list of items and the need to go from my main Taskwarrior instance: I need a separate task in main when I create a new shopping list to eventually go shopping.

 

How do you handle these two situations? Since I don't have any answer to #2, I'm really curious what others do there.
{{< /question >}}
{{< answer >}}
I think the solution to item #2 is just one of perspective.
All of the items are things you need to do, so they belong in Taskwarrior.
The problem, I think, is that you are looking at the whole set all the time.

You could create a custom report named 'grocery' that filters only tasks with a 'shopping' tag.
Then you just need to make sure that the right tasks have the right tag, and use the right report at the right time.

Your report is likely cluttered because you are looking at the set of all tasks as one list, and not as a collection of lists, which you pull out using tags.

{{< /answer >}}
