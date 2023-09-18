---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Are subtasks possible"
---

Back to the [FAQ](/support/faq)

Q: Are subtasks possible

I like to divide tasks into smaller subtasks. I normally maintain a normal text file for my todos. An example would be like this:

# Every line just contains a single todo
# Subtasks are intended with 4 spaces
 
clean your apartment
    clean the bathroom
        mop the floor
        decalc faucet
        clean the shower
        clean the toilet    
    clean the kitchen
        clean countertop
        remove dust
        mop floor
        vacuum floor
    clean your desk
        remove dust
        clean surface
    clean bedroom
        change sheets
        vacuum floor
    clean living area
        vacuum floor

In Taskwarrior I tried to create projects and subprojects, but only the subprojects have tasks via this system. The Project would be "Clean your apartment" and the tasks "Clean the bathroom" or "Clean the kitchen" would be subprojects.

The "task report summary" command shows a good summary, but I think I am overseeing a way to handle my case.

A: The way Taskwarrior implements subtasks is by creating tasks that depend on other tasks, effectively making one a subtask of the other.

You can define a task to be dependent on another by using the depends: filter like so.

task add Subtask A
task add Subtask B
task list

ID Description  Urg
-- ------------ ----
 1 Subtask A       1
 2 Subtask B       1

task add depends:1,2 Parent task
task list

ID D Description  Urg
-- - ------------ ----
 1   Subtask A       9
 2   Subtask B       9
 3 D Parent task    -4

task list -BLOCKED

ID Description  Urg
-- ------------ ----
 1 Subtask A       9
 2 Subtask B       9

