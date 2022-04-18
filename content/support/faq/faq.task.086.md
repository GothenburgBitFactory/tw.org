---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Is it possible to use multiple task commands in one line?"
---

Back to the [FAQ](/support/faq)

Q: Is it possible to use multiple task commands in one line?

I feel always a little bit frustrated when I finish an actie task and have to write seperately: 

$ task XX stop
$ task XX done
Is there a possibility to do this in one line, like for example:

$ task xx stop & done
One could also imagine other scenarios. For example to add two task in one line or something similar. But my current problem is the one mentioned before.

A: Hi Niels-Oliver,

In practice

task done
should be enough and should stop the clock automatically.

There is/was a bug causing the clock not to stop but has been fixed in 2.4.0 which is currently in beta stage and should be out in a few weeks.

There are also a couple of new features included in 2.4.0 (hooks) which will make time-tracking hopefully easier to handle.

A: As Renato said, this particular problem is fixed in 2.4.0

Seeing how Taskwarrior is a commandline application though, it should be mentioned that "chaining" commands can be quite easily done by making use of your shell. For example:

bf@surfbox:~$ function td() { task $1 stop && task $1 done; }
bf@surfbox:~$ td 1
Stopping task 1 'stuff'.
Stopped 1 task.
Completed task 1 'stuff'.
Completed 1 task.
bf@surfbox:~$
How you can make your shell of choice load this function at startup is left as an exercise to the reader.

(Putting it in ~/.bashrc works for bash.)

