---
title: "Taskwarrior - FAQ"
topic: "Taskshell"
question: "How to run shell command inside tasksh?"
---

Back to the [FAQ](/support/faq)

Q: How to run shell command inside tasksh (or evaluate another task-command)

From the shell you can run
```
task $(task some thing uuid) status:pending
```
to evaluate the task-command inside parentheses and give the result to the task command (here: get the uuid and set it to status:pending)

I am not able to get this work inside the tasksh -shell. Is this possible?

So:
```
shell$ tasksh
task> $(task desc.is:bla stat:complete uuid) stat:pending
```
gives an error: 
```
[Mismatched parentheses in expression]
```

(How) does this work?

A: From the tasksh 1.1.0 man page:
```
exec <commands>
       This command allows you to run shell commands from within
       Tasksh. This is ideal for accessing man pages such as this.
       The '!' command can be used in place of the 'exec' keyword.
       Once the command is run, control returns to Tasksh.
```
But that requires tasksh-1.1.0 installed.

The 2.3.0 you are using has a tasksh command which supports an undocumented xc command.
This older tasksh has been replaced by the above.

