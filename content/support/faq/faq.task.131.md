---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Tip: TW status one-liner"
---

Back to the [FAQ](/support/faq)

Q: Tip: TW status one-liner

This is not a question but rather a tip. I made a TW status one-liner in my .zshrc, which is convenient so I thought I'd share it. 

# tw status one-liner
tw_get_status_line () {
   echo "TW Done:$(task count end.after:today) Due:$(task count +DUE) Overdue:$(task count +OVERDUE) Next:$(task count +next)"
}
alias tws=tw_get_status_line
 

I alias the function and now just type tws to get a couple of stats I like to see. Season to your liking. I use this in zsh, but this should also work in bash .bashrc.

A: This reminds me of liquidprompt which I enjoy because of its git integration, and the way it piles on so much stuff, so I would want to extend your prompt to include:

Number of active tasks:

$ task +ACTIVE count
Or perhaps just an indicator character that there are active tasks.

The need for a sync, which is not readily available, but can be determined from the number of lines in ~/.task/backlog.data.
If it exceeds 1, a sync is needed.

Name of any active context:

$ task _get rc.context

