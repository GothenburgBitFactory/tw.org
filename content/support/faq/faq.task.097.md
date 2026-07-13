---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "\"Taskwarrior no longer supports file format 1....\" error while developing hook"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### "Taskwarrior no longer supports file format 1...." error while developing hook

Hi, I am trying to develop a hook for Taskwarrior, but am running into a problem. I am using Taskwarrior 2.4.0.beta3 and I have placed the symlink to my hook into the /.task/hooks/ folder. It is a on-modify hook, and I am simply testing it out and trying to print something to the console. It correctly calls my hook and even prints to the console, but then it displays this error:

"Taskwarrior no longer supports file format 1, originally used between 27 November 2006 and 31 December 2007".

Once I get rid of my hook, I never see this error.
I am giving an exit code of 0 after my script is run. I wondered if maybe I had to return some data back as it should be passed to my script, but as far as I can tell I am not receiving any data. I put "rc.debug.hooks=2" into my .taskrc but I see no trace of any input or output being given to me. "task diagnostics" tells me that it sees my hook and that it is executable. Thanks for any help!
{{< /question >}}
{{< answer >}}
I got the answer to this in the IRC channel. The problem was that I was not returning JSON, and apparently on-modify hooks need to have JSON returned.
{{< /answer >}}
