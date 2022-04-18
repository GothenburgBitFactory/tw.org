---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "combine multiple conditions in filter"
---

Back to the [FAQ](/support/faq)

Q: combine multiple conditions in filter

I was trying to combine multiple conditions in the filter with and/ or between them.

task project:P1 due.before:tomorrow sch.before:tomorrow works as expected.

task project:P1 due.before:tomorrow or sch.before:tomorrow also works as expected.

task project:P1 and "(due.before:tomorrow or sch.before:tomorrow)" returns an error -mismatched parenthesis in expression.

I have tried escaping the brackets using " as shown above, single quote ' and a backslash \ in bash and zsh.

The error is the same.

What am I doing wrong and how do I set it right?

A: You're not doing anything wrong, this looks like a parser bug. Adding a space before the closing ")" can be used as a workaround:

task project:P1 and "(due.before:tomorrow or sch.before:tomorrow )"
If you want to see where Taskwarrior goes wrong, try running it like this:

task rc.debug=1 project:P1 and "(due.before:tomorrow or sch.before:tomorrow)"
and notice how the closing ")" is assumed to be part of the schedule date.

 

The good news is that this will "magically" be fixed in Taskwarrior 2.4.0, which comes with a new and more powerful parser. Still, you might want to open a bug report so Paul doesn't miss this as a potential test case before releasing 2.4.0

