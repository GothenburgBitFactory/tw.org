---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Can you use whitespace in project names?"
---

Back to the [FAQ](/support/faq)

Q: Can you use whitespace in project names?

When I try to set a project name containing whitespace, task tries to set the project name to the first whitespace-separated token and then replace the existing task description with the rest of the string. Example:

$ task 19 modify proj:"Max Bedroom"
- Description will be changed from 'Research blinds for Max's bedroom' to 'Bedroom'.
- Project will be changed from 'max_bedroom' to 'Max'.
Modify task 19 'Bedroom'? (yes/no)
I'm assuming at this point that this is by design, but wasn't able to find anything substantiating this in the docs, so I thought I'd throw the question out here. If I can't use whitespace in the project description, is there another way to add some additional descriptive text to a project?

A: On the project description itself:

I think it's a bug. 
Work around it via changing the project text it in an editor:
task 19 edit
On adding additional information:

There are no project annotations.

However, you are free to create a placeholder task which holds additional information. May it just be the projects goal:

task add ">> Redesigned Garden" pro:Garden +goal        # 1.
task config urgency.user.tag.goal.coefficient 100.0     # 2.
task config color.tag.goal rgb550 on magenta            # 3.
task 19 ann "Budget: 5kEUR"                             # 4.
task 19 ann "DIY superstore is open: Mon-Sat 8000-2000"
task 19 ann "Peter is available on next two weekends."
task 19 ann "Inspiration: https://www.gardensillustrated.com"
Let's add a task, assign it to project Garden, tag it with goal.
Configure task to rank goals at top by giving it a high urgency, see https://taskwarrior.org/docs/urgency.html.
Tell task that I want it YELLOW on magenta.
Add some annotations.
You may end up with something like the following:


Is this a qualified answer to your question? Kindly note if I have misunderstood you in any point.

Have I been able to help you solving your problem?

