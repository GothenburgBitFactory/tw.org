---
title: "Taskwarrior - Philosophy"
---

# Taskwarrior Philosophy

Taskwarrior is developed using a philosophy that explains a lot about why certain decisions have been made, and will continue to be made.
All Taskwarrior family projects follow this same philosophy.

## Openness

The [source code](https://github.com/GothenburgBitFactory/taskwarrior), [plans](https://github.com/GothenburgBitFactory/taskwarrior/tree/develop/doc/devel/rfcs/plans.md), [designs](https://github.com/GothenburgBitFactory/taskwarrior/blob/develop/doc/devel/rfcs/README.md), [bugs](https://github.com/GothenburgBitFactory/taskwarrior/issues), [testing](https://github.com/GothenburgBitFactory/taskwarrior/actions), [docs](/docs), and [website](https://github.com/GothenburgBitFactory/tw.org) are all free and open source.
Your data is kept as plain text, and never held hostage by a proprietary format.
You are welcome to contribute and identify improvements in all aspects of the project.
There is no hidden agenda.

The goals of the project are to support all workflows at minimal friction and minimal complexity, while improving list management.

## Low Friction

A tool that allows you to capture tasks needs to be low-friction.
This means that there should be no login authentication, lengthy launch delay, or interactivity getting in the way of simply capturing information.
It doesn't get much easier than this:

```
$ task add '...'
```

Any tool that has friction will discourage its own use.

## No Penalty

There should be no penalty for features that you don't use.
As an example, Taskwarrior supports recurrence and dependencies, but if you don't use those features, there is no performance penalty or cost to that.

But that also means the features are there if you need them.
If you decide to start using priorities, then you can, and having tasks where some have priorities and some don't is fine.

## Methodology Agnostic

Productivity methodologies promote simple, habit-forming, repeatable processes and workflow, combined with some discipline to give you an effective approach to getting through your work.
They tend to focus on maintaining a high quality list, doing quickly that which can be done quickly, distinguishing between the important and the unimportant, pacing yourself and not forgetting things.

While methodologies are important, Taskwarrior doesn't impose or prefer any methodology, and instead acknowledges that everyone works differently, placing different emphasis on things like priorities, due dates, dependence and so on.

You may start with a known methodology, but find that there will be parts that work well and not so well for you, and you will likely evolve your own unique methodology.
This means Taskwarrior supports all of the above in some form, as you develop your own working methodology.

## Toolkit

Supporting all methodologies and workflows means there are a lot of features, but you are not expected to use or even be aware of them all.
Think of Taskwarrior as a toolkit that lets you follow any methodology you choose, and any given methodology will only use a small subset of the features.

Your kitchen has many tools and gadgets, but you likely only use a fraction of them.
They exist so that you have options.

## Extension Friendly

Import/export using industry-standard JSON allows you to move data into and out of Taskwarrior, so you can provide a front end, or higher-order feature:

```
$ task 1 export
[
{"description":"Send Alice a birthday card","due":"20161108T000000Z", ...}
]
```

Hook scripts allow you to modify tasks on entry and on modification, or deny changes to enforce policies.

```
$ task add Paint the door
Warning: Task does not have an assigned project
```

Helper commands allow you to extract metadata:

```
$ task project:Home _ids
36
77
89
122
123
```

A full DOM allows you to drill down to a single datum:

```
$ task _get 123.entry.year
2016

$ task _get rc.dateformat
Y-M-D
```

## Community

Taskwarrior is greatly enhanced by the community that surrounds and supports it.
You'll find help, support, extensions, and more online.

Talk to us.
Join the community, help others, help yourself, and advance the project.
We welcome all of you into our community.

Here is our [Code of Conduct](/conduct).

## Focus

Taskwarrior carefully limits the features it supports, in order to focus on doing one thing well.
It does not offer reminders and time tracking, because there are other projects dedicated to implementing those features well.

If a feature improves the way we manage task lists, then it belongs in Taskwarrior, otherwise it belongs in some other software.
