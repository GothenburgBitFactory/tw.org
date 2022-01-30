---
title: "Taskwarrior - Workflow Examples"
---

# Workflow Examples

Everyone uses Taskwarrior differently. Here are some example workflows, to make
you think about your own particular approach.

## Joshua

-   **Where do you use Taskwarrior?**
    Everywhere to get track of things. I keep my personal thing separated and
    two zones for work projects each on it's own git repository.
-   **For what kind of work do you use Taskwarrior?**
    At work to organize my projects, chop them into small tasks have a log of
    what I am doing, and log of how did I solved problems.
-   **How do you sync? What kind of devices do you use?**
    I use a custom git hook that commits only `pending.data` and
    `completed.data` and push to a local private repository where the team also
    commits, The script also detects completed tasks and the latest version of
    the task in case multiple versions of the same tasks are found. Currently
    i'm implementing an annotator to document projects.
-   **Which is your default report?**
    Task next, with customized filter and sort order:
    `rc.report.next.filter=status:pending,+UNBLOCKED`
    `report.next.sort=status-,start-,priority-,project+,due+`
-   **Do you use a standard or customized methodology?**
    Mostly GTD, but will try to add kanban elements.
-   **Do you use extensions? Hook scripts?**
    Custom git synchronization script. Posibly custom git editor script.
-   **What features do you rely on most?**
    I use start to see what I'm doing, but i'd like to use it to keep track of
    the time, so I'll need another mecanism to use kanban like «In progress». I
    use annotations to document procedures or important things. I also use
    projects, tags, scheduled and due dates to classify tasks.
-   **What features do you deliberately not use?**
    No urgency. No undo (as that goes in git).
-   **How do you review your list?**
    I usually use `task` to see what's in progress and continue doing that. I
    have my tasks sorted by projects and priority, so I'll seek the project
    that needs to advance and check the most important task for that.
-   **Other Notes**
    I'd like an easy to deploy kanban like project visualization tool.

## Paul

-   **Where do you use Taskwarrior?**
    I use Taskwarrior at home.
-   **For what kind of work do you use Taskwarrior?**
    I mostly use it for software development projects, but there are some other
    projects including training. Taskwarrior was mostly developed using
    Taskwarrior to track features and bugs.
-   **How do you sync? What kind of devices do you use?**
    I use Taskserver, set up on a VPS, to sync two clients, a laptop and
    desktop. I am one of several people using that Taskserver.
-   **Which is your default report?**
    I use the `next` report most often, and have tweaked the coefficients to
    represent my definition of urgent. The `next` report doesn't yield
    surprises, so I can rely on it. I don't have any of my own custom reports.
-   **Do you use a standard or customized methodology?**
    I don't follow any standard methodology. I use project hierarchies (tw,
    tw.242, tw.250 \...) so I can look at projects at different levels.
-   **Do you use extensions? Hook scripts?**
    I have two hook scripts active. One is an on-add hook script that converts
    'tw-179' to
    'https://github.com/GothenburgBitFactory/taskwarrior/issues/179'. The
    other is also an on-add hook that warns me when I add a task without a
    project.
-   **What features do you rely on most?**
    I rely on `sync`, `next` and virtual tags a lot. I use 'wait' to hide
    things. This is because I prefer to look at shorter lists.
-   **What features do you deliberately not use?**
    I do not use priorities at all. I did use them, but found that I spent too
    much time fiddling with the values. I think priority is a fluid thing,
    shifting a lot, and having these values assigned just means a lot of
    maintenance work.
-   **How do you review your list?**
    I use a new review feature in tasksh, which is not completed yet but is
    proving effective already. This will be released in early 2016. I have not
    yet developed good review habits, so it happens less often that it should.
-   **Other Notes**
    -   I don't use due dates unless there really is a hard, real-world due
        date.
    -   I use dependencies when there are several related tasks and a clear
        sequence, but there aren't that many.
    -   I use `start` and `stop` to indicate what I am currently working on, so
        I can remember where to pick up the next day.
    -   I use a few keyword-based color rules so that groups of things I care
        about stand out in lists. I color the `Documentation` and `Performance`
        keywords, and the`+bug` tag.
    -   My list is mainly things I don't want to forget, not a list of things I
        need to do today.

## Tomas

-   **Where do you use Taskwarrior?**
    I use a separate Taskwarrior database for tracking of my daily habits. This
    is achieved by setting `alias habit="task rc.data.location=~/.habit"` in my
    .bashrc.
-   **For what kind of work do you use Taskwarrior?**
-   **How do you sync? What kind of devices do you use?**
    Currently, I am using only one laptop, so I am not using sync. Nevertheless,
    in the past I did use sync.
-   **Which is your default report?**
-   **Do you use a standard or customized methodology?**
    I have a default.project set to Inbox, where every task goes initially,
    unless I assign its particular project directly when adding it. Every task
    belongs to a project. Project hierarchy corresponds to different areas of my
    life, and I use subprojects a lot. Project examples include
    'Work.Tickets', 'Home' or 'Volunteering.Floss.Taskwarrior'.
-   **Do you use extensions? Hook scripts?**
-   **What features do you rely on most?**
    Since I use projects to distinguish areas in which the tasks fall, I tend to
    use tags to distinguish what kind of a task it is. Currently, I only use
    this consistently for programming-related activities (+bug, +rfe, +test,
    etc.), but I plan to expand that in the future. I try to not add new tags
    carelessly. I use new tags only after careful consideration. I use due dates
    both for real-world deadlines and self-imposed deadlines. This is probably
    wrong, since I tend to shift tasks a lot then, and I treat the 'due date'
    with much less importance than it deserves. I should move to scheduled for
    self-imposed deadlines. I use dependencies for enumerating sub-tasks of any
    bigger tasks that need to be broken down into individual steps. Since
    entering dependencies requires more work (enumerating IDs), I usually do
    this step in taskwiki, which can set dependencies by indentation. I do not
    have multiple blocked task for one task, so my task lists can be shown in
    the form of a dependency tree.
-   **What features do you deliberately not use?**
    I do not use priorities much. I just never felt the need to. I do not use
    reports very often. This is due to the fact that Taskwarrior currently
    cannot display dependency trees, which coupled with my habit of breaking
    down tasks into small subtasks makes the task lists often confusing. I
    suppose I could try configuring Taskwarrior to exclude the child tasks by
    default, but it only occurred to me now. I do not use any custom color rules
    yet.
-   **How do you review your list?**
-   **Other Notes**
    -   When deciding how to continue with a given project, I open the
        corresponding taskwiki file, which serves as a permanent dynamic report
        coupled with project-related notes.
    -   I use simple contexts that usually are just implicit project selectors,
        such as `project:Work`.
    -   I use `start` and `stop` to indicate what I am currently working on. I
        have a little tmux powerline plugin, which displays the description of
        the currently active task (within the selected context), which helps me
        to focus back on the currently active task if I manage to distract
        myself.
    -   I use taskwiki to generate a daily journal of tasks that need to be
        completed on the given day. I also use this file to review my day in few
        lines. This gives me an ability to quickly see what I did on an
        particular day.
    -   My list attempts to be not only a list of tasks I must remember, but a
        somewhat accurate description of what I did. I even tend to create and
        log new completed tasks for stuff that was not planned, but was achieved
        on any given day.

## Dirk

-   **Where do you use Taskwarrior?**
    I do not use Taskwarrior at work, because my work systems are behind strict
    proxies, but I manage my work tasks with private devices to have all
    todo-items in one solution. I experimented a lot with nearly each and every
    features of Taskwarrior and came back to the basics recently.
-   **For what kind of work do you use Taskwarrior?**
-   **How do you sync? What kind of devices do you use?**
    I use Taskwarrior on every device with a full, non-proxied internet
    connection and sync those installations with a self-hosted Taskserver on the
    net. All devices have the same configuration. \"Every device\" includes my
    notebook (Fedora Linux), a fix home-based computer (CentOS), four servers on
    the net (CentOS) and my mobile phone and my tablet as well (both Android).
-   **Which is your default report?**
-   **Do you use a standard or customized methodology?**
-   **Do you use extensions? Hook scripts?**
-   **What features do you rely on most?**
    Nearly all of my tasks have due dates, even though I am not able to do some
    of them in time. My most important modifier is wait. This is how I keep my
    todolist clean. I am using projects and subprojects to organize my tasks.
    That makes filtering easy for me. On the other hand I do not use any tags
    apart from virtual tags. To do work in a specific area I filter my tasks
    with projects, but I think I will change to use contexts instead. I like
    annotations and use them a lot. On the one hand to set my longterm goals
    (private and business wise), on the other hand I annotate tasks with links.
    To make handling of annotations easier, I love
    [taskopen](https://github.com/ValiValpas/taskopen) on my desktop and
    strictly recommend this to everyone.
-   **What features do you deliberately not use?**
    Very seldom I use dependencies, mostly I steer that with time constraints.
    Task B has a due date end-of-work-week and task B has a wait-date till
    beginning of next work-week. I do not use priorities at all.
-   **How do you review your list?**
-   **Other Notes**
    -   I run a minimal configuration, choosing a theme that pleases me, Monday
        as weekstart, `calendar.details=full` and `calendar.holidays=sparse`.
    -   Even though that does not make much sense I use `wait:someday` sometimes
        to move tasks completely out of the way. (Hint: you can find them with
        `task waiting`).
    -   I do not write everything into Taskwarrior. I have a brain and I am
        willing to use it ;-)

## Fredde

-   **Where do you use Taskwarrior?**
-   **For what kind of work do you use Taskwarrior?**
-   **How do you sync? What kind of devices do you use?**
    Taskserver for \"backup\" - have used git on the task folder previously. Two
    separate (logical and physical (different computers/servers)) task
    installations - one for work, one for private tasks.
-   **Which is your default report?**
-   **Do you use a standard or customized methodology?**
-   **Do you use extensions? Hook scripts?**
-   **What features do you rely on most?**
    Projects and tags to simulate state of tasks like in Kanban. Easy basic
    reports to filter on project and then on \"state tags\". Annotations to
    record information or refer to my big-arse-text-file-from-hell. Task
    calendar is used a lot to find out about calendar weeks and dates at work.
-   **What features do you deliberately not use?**
    No due dates at all. No urgency; I read through the list and decide on the
    most \"obvious" task (whatever that means).
-   **How do you review your list?**
