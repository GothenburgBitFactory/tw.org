---
title: "Taskwarrior - What's next?"
---

::: {.banner style="background-color:#aab3ab; padding-top:32px;"}
::: {.container style="padding-top:16px;"}
::: {style="color:#ffffff; font-size:32px; font-weight:300;"}
What is Taskwarrior?
:::

::: {.col-md-10}
::: {.col-md-1}
:::

::: {.col-md-9 .main}
::: {.row}
Taskwarrior manages your TODO list from your command line. It is flexible, fast,
efficient, unobtrusive, does its job then gets out of your way.

Taskwarrior scales to fit your workflow. Use it as a simple app that captures
tasks, shows you the list, and removes tasks from that list. Leverage its
capabilities though, and it becomes a sophisticated data query tool that can
help you stay organized, and get through your work.

Taskwarrior is an active project, and we fix bugs, improve and add features
almost every day.
:::
:::
:::
:::
:::

::: {.banner style="background-color:#c4cbb7;"}
::: {.container}
::: {style="color:#000000; font-size:32px; font-weight:300;"}
Why Choose Taskwarrior?
:::

::: {.col-md-10}
::: {.col-md-1}
:::

::: {.col-md-9 .main}
::: {.row}
Five good reasons to use Taskwarrior

1.  Are you a command line user looking for an unobtrusive, fast, efficient,
    flexible tool to let you easily manage your task lists? Taskwarrior is
    low-friction by design, allowing you to capture the details, and get right
    back to work.

        $ task add Prepare the first draft of the proposal due:friday

    Taskwarrior uses a natural and expressive command line syntax.\
    \

2.  Taskwarrior is methodology-neutral. Whether you follow
    [GTD](https://gettingthingsdone.com/), use the [Pomodoro
    technique](http://pomodorotechnique.com), or just do whatever works for you,
    Taskwarrior provides capabilities to help you, not restrict you.\
    \

3.  Taskwarrior has an active and friendly community, providing support and
    various forms of help to new and experienced users. [Start here](/support)
    for a list of support options. Need an immediate answer - check your man
    pages and [online docs](/docs). Need to ask someone a question? try IRC
    \#taskwarrior on freenode.\
    \

4.  Taskwarrior is open in as many ways as it can be:
    -   It is [free and open
        source](https://github.com/GothenburgBitFactory/taskwarrior), using the
        MIT license
    -   It uses human-readable text files for storage. It imports and exports
        [JSON](/docs/design/task.html), so your data is never held captive
    -   There is [DOM](/docs/dom.html) access and a [Hook script
        API](/docs/hooks.html)
    -   There are many available free and open [extension scripts](/tools)
    -   There is [Vit](https://gothenburgbitfactory.org/projects/vit.html), a
        curses-based UI
    -   There is [FreeCinc](https://freecinc.com/), a free online sync service
    -   There is [Inthe.AM](https://inthe.am/about), a free online sync service,
        web UI and iOS client
    -   There is [BugWarrior](https://github.com/ralphbean/bugwarrior), so you
        can import your bug issues from a dozen different bug systems

    \

5.  Taskwarrior is an active, vibrant project. In the last year, it has averaged
    5.58 changes per day. Taskwarrior enjoys lively participation from many
    contributors, with currently over 60 providers of code patches. But there
    are even more contributors (252 of them) helping out with documentation,
    bugs, support, ideas, requests and extensions. It\'s just going to keep
    getting better.\
    \
:::
:::
:::
:::
:::

::: {.banner style="background-color:#ebefc9;"}
::: {.container}
::: {style="color:#000000; font-size:32px; font-weight:300;"}
A Quick Demonstration
:::

::: {.col-md-10}
::: {.col-md-1}
:::

::: {.col-md-9 .main}
::: {.row}
Let\'s see Taskwarrior in action. We\'ll first add a few tasks to our list.

    $ task add Buy milk
    Created task 1.

    $ task add Buy eggs
    Created task 2.

    $ task add Bake cake
    Created task 3.

Now let\'s see the list.

    $ task list

    ID Description
    -- -----------
    1  Buy milk
    2  Buy eggs
    3  Bake cake

    3 tasks.

Suppose we bought our ingredients and wish to mark the first two tasks as done.

    $ task 1 done
    $ task 2 done
    $ task list

    ID Description
    -- -----------
    1  Bake cake

    1 task.

Those are the first three features, the [add]{.kbd}, [list]{.kbd} and
[done]{.kbd} commands, but they represent all you really need to know, to get
started with Taskwarrior.

But there are hundreds of other features, so if you learn more, you can do more.
It\'s entirely up to you to choose how you use Taskwarrior: stick to the simple
three commands above, or learn about sophisticated filtering, custom reports,
user-defined metadata, color rules, hook scripts, syncing and many more.
:::
:::
:::
:::
:::

::: {.banner style="background-color:#eee0b7;"}
::: {.container}
::: {style="color:#000000; font-size:32px; font-weight:300;"}
Get your copy
:::

::: {.col-md-10}
::: {.col-md-1}
:::

::: {.col-md-9 .main}
::: {.row}
There are several ways for you to get a copy of Taskwarrior:

-   Install a binary package. Your operating system probably already has a
    binary package available. These packages are usually named \'task\'.
-   Download a release tarball, from [here](/download), then make sure you have
    libuuid-dev (may be called uuid-dev) and gnutls-dev installed. Then using
    cmake, GCC 4.7 / Clang 3.3, [build Taskwarrior](/docs/build.html).
-   Using [git](https://git-scm.com/), clone the code repository, switch to the
    current development branch, and [build Taskwarrior](/docs/build.html).
:::
:::
:::
:::
:::

::: {.banner style="background-color:#e8caaf;"}
::: {.container}
::: {style="color:#000000; font-size:32px; font-weight:300;"}
What\'s next?
:::

::: {.col-md-10}
::: {.col-md-1}
:::

::: {.col-md-9 .main}
::: {.row}
Probably the most important next step is to simply start using Taskwarrior.
Capture your tasks, don\'t try to remember them. Review your task list to keep
it current. Consult your task list to guide your actions. Develop the habit.

It doesn\'t take long until you realize that you might want to modify your
workflow. Perhaps you are missing due dates, and need more defined deadlines.
Perhaps you need to make greater use of tags to help you filter tasks
differently. You\'ll know if your workflow is not really helping you as much as
it could.

This is when you might look closer at the [docs](/docs) and the recommended
[Best Practices](/docs/best-practices.html).

Welcome to Taskwarrior.
