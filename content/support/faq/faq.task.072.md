---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "information about coding style"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### information about coding style

Hi.

Is there somewhere information about the coding style for the different programming languages used?

I only found

Expect feedback … because you violated the coding style

and I've got.

In this case it was Perl. So I tried matching the output of perltidy to an existing file.

perltidy -bl -i=2 -pt=2 -skp -sfp -lp -vt=2 -vtc=2 import.t
This got me close, but the line breaks don't match. Playing with -l=n fixed it at one place, but broke it at an other.

As I'm not a perltidy expert there might be much better options to control the function parameter list or if expression list.

Or is there some formatting only done by eye or smell?

Any tips are highly appreciated, not only for Perl.

Thanks
{{< /question >}}
{{< answer >}}
You're absolutely right - there is nothing written down, and it's done partly by smell.
I was hoping to avoid the need to write down coding conventions by language, by making the coding standard this:

Make all changes and additions such that they blend in perfectly with the surrounding code, so it looks like only one person worked on the source, and that person is rigidly consistent.

That's the general guideline, but to be more explicit about it, here are some of the rules:

Use 2 spaces to indent, and no tabs
Surround operators, expression terms with a space
Stick to an 80 column maximum where possible, although exceptions for readability are fine, if limited
No cuddled braces
I will add a page to the site, containing the above, and we can develop it further, as needed.

 

Edit: https://taskwarrior.org/docs/coding_style.html
{{< /answer >}}
