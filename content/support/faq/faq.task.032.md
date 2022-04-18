---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I track my 'not to be done' list?"
---

Back to the [FAQ](/support/faq)

Q: How can I track my 'not to be done' list?

A: As far as I know Taskwarrior has no status that represents "not to be done".
In practice most people simply delete tasks that are no longer valid.

Still, you can use existing functionality to provide such feature.

One possibility is to set the task waiting till the end of days:

```
task add wait:someday Buy a private spaceship
```

Technically this would be waiting until 1/18/2038, but you get the idea.

An alternative would be to create a project that holds all your "not to be done" tasks and that is never displayed in your default reports:

```
task add proj:wontdo "Do yesterday's dinner"
```

and then simply add:

```
default.command=next proj.not:wontdo
```

to your .taskrc file, or any variation using your preferred report.

Then when you want to see these tasks, a simple:

```
task all proj:wontdo
```

will do.

Another possibility is to create a TAG and explicitly filter based on presence or absence of said TAG:

```
task add +wontdo "Travel back in time to tell myself I was wrong"
```

and apply the same principle to the default command in .taskrc:

```
default.command=next -wontdo
```

Given all these possibilities, choose the one that you find easier to use and best suits you.

PS: There may be better ways to specify default options.
I need to dig into that subject myself.
