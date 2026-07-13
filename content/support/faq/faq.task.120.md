---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Import multiple tasks with dependencies"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Import multiple tasks with dependencies

When I plan a project I usually write down all my tasks and subtasks into a simple file. Something like this

 

task1
	foo1
	foo2
	bar
		bar1
		bar2
		bar3
	foo3
task2
	kee1
	kee2
	kee3
 

I know I can represent subprojects with task1.bar but many of these task have common characteristics such as `project:SuperMegaProject`.

 

What would be a good way to import the list above into task including all its dependencies without doing `task add project:SuperMegaProject.task1.bar bar1` for each item?
{{< /question >}}
{{< answer >}}
You could use tags. They're very general in purpose. I use some common tags like +bug or +feature but they are a great way to tie projects together too. I might have projects foo and bar independently but I may also want a baz sub-project to both foo and bar yet not want to have baz as a project in and of itself, so I would just tag certain tasks belonging to foo or bar with +baz.
{{< /answer >}}
