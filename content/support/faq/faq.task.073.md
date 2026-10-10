---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Prevent modify all tasks"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Prevent modify all tasks

When "mod" is typed before a task it asks "This command has no filter, and will modify all tasks.
Are you sure?"

Seeing as I can't forsee a situation where I'd want to modify ALL tasks and it's a little dangerous even with it asking first (people make mistakes when they're in a hurry) , how can I prevent it from allowing this completely? No yes or no, it just says:

$ task mod 456 blah blah blah
  Nope, try again.
{{< /question >}}
{{< answer >}}
You could use a simple shell function to check the first parameter.

task () {
    if [[ $1 == "mod"* ]]; then
        echo "Nope, try again."
    else
        command task "$@"
    fi
}
This will work in zsh and bash. If you use a different shell, you might need to change the string compare. 

A: This is great observation.
I have added a new configuration setting in 2.4.0 that turns this warning into a fatal error.
You'll be able to specify:

allow.empty.filter=no
which will cause Taskwarrior to simply fail when a write command with no filter is run.
{{< /answer >}}
