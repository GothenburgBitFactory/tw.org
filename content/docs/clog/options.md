---
title: "Clog - Options"
---

# Options

In addition to the rules, Clog supports these command line options which also
affect the output.

## The `--file` Option

When specified, the `--file` option is an override for the default `~/.clogrc`
file. You can use this option to select from several different rule files.

## The `--date` Option

When the `--date` option is specified, the current date in the form `YYYY-MM-DD`
is written before every line. Using this rule set:

![](/docs/clog/images/option1.png)

Then applying it to this sample input (which contains no matches):

![](/docs/clog/images/option2.png)

This is the result:

![](/docs/clog/images/option3.png)

## The `--time` Option

Similarly, when the `--time` option is used, the current time, in the form
`HH:MM:SS` is written before every line. Here is an an example:

![](/docs/clog/images/option4.png)

Note that both `--date` and `--time` can be specified, yielding a complete
timestamp:

![](/docs/clog/images/option5.png)
