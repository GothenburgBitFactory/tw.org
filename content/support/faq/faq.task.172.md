---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "color a specific task"
---

{{< question >}}
### color a specific task

I see the task-color man page talking about coloring every task in a certain project, or with a certain priority, and stuff like that.

Can I just say "task 2 color red" ?

As far as I can tell, the answer is "I have to assign some sort of condition – a tag, or a project, or a UDA – and color everything with that condition, and then never accidentally use that condition again.
But maybe I missed something?
{{< /question >}}
{{< answer >}}
That's not supported, the color rules apply to group of tasks, not individual ones.
It was once true, but the feature wasn't implemented well, and it was removed.
But it will be back...

 

Meanwhile I think the best alternative is to color a specific tag, then apply that to one task.
This doesn't really scale though.

$ task config color.tag.special_color 'white on red'
$ task 2 modify +special_color

{{< /answer >}}
