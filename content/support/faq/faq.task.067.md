---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Task Organization for offroad fabricators"
---

Back to the [FAQ](/support/faq)

Q: Task Organization for offroad fabricators

Hello fellow Taskwarrior users,

So at the weekends I am building an offroad truck and Taskwarrior is great for it, but now I want to step it up.

This project is very dependency heavy since most of the tasks need others to be completed, the biggest difficulty its to manage the parts (and tools) need to do certain tasks. Right I do the independently of the Taskwarrior project i have some sets of tags like buy and them a tag for the name of the store. But the organization is not enough because i always get delays on parts and I would like to be more on top of it. So this is both a methodology and technical question. Some problems. I don't know which supplier has or can give me the part, and most the times, they don't know it either, they need to check up their suppliers which may not respond and they may not respond and I always have to keep reminding like: "Hey is my part X there? Price? when can I pick it up?" And this gets very repetitive and most of the times i forget and can't get the part of group of parts in a decent timeframe.

Before this wasn't so much of a problem because I had a bazillion stuff to do, and if i got got blocked on a task i would just do another thing, not so much now and always seems to get locked on my tasks due to a freaking missing part or tool, and the suppliers are closed on weekends, the best thing is that i can do is order the part (send them an email) them call them on monday to remind them to check their email, then call them on friday to check if they already have the part so I can go there and pick it up on saturday morning. 
How can see how can this can be very tedious. I would like to optimize this with Taskwarrior, to right know i have a task like "Needs part X" with the tags +buy +suppliername on it,and the tasks that use this part depend on it. So on the final of the sunday i do task +buy and send emails to the suppliers. 

How can I improve this? 

How to deal with supplier querying process to see if they have the part or not ? 

How to improve my reminders and delays? 

How can I bring online parts into play? 

Can I add some sort of price so I can budget the parts and my monthly income to best order the ones that i need first? Please any advise is welcome. 

A: Hi there Alfredo,

It seems to me that you are trying to squeeze too much "methodology" into Taskwarrior going beyond the uses for which Taskwarrior was designed.

I'd say that the budget aspect of your workflow is outside the scope of Taskwarrior. You will need some extra tool for this. This tool could build on top of Taskwarrior, but it's not something for which Taskwarrior provides easy to use tools.

Regardless, you can use UDAs to store this information but you will need to use some external way to process this data into something useful.

As for waiting for suppliers, you can simply create a task "Check supplier for product X" and have "Buy product X" depend on the first. After this you can use the wait: functionality and a combination of project/priority/tags/... to have these tasks show up on your list with high priority when the time comes.

You use wait: like this:

 task add wait:5d "Check supplier for product X"
which will add and set this task to be hidden from your task list and show up again 5 days from now.

With existing tasks you can use:

task task_id mod wait:5d
to have the task show up 5 days from now.

