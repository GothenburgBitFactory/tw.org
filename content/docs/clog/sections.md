---
title: "Clog - Rule Sections"
---

# Rule Sections

Each rule belongs to a `section`.
A section is just a simple grouping mechanism, so you can have multiple rules sets in one rule file.
If a rules belongs to the `default` section, then it applies when no section is specified on the command line.

Here is an example rule file, containing two rules:

![](/images/section1.png)

The first rule is in the \'`default`\' section, and looks for the word \'red\', and colors it red.
The second rule is in the \'`special`\' section, and also looks for the word \'red\', and colors it as white on a red background.

Without the difference in sections, these rules conflict.
Here is a demonstration of these rules being used:

![](/images/section2.png)

Clog is invoked four times.
In the first command, no section is specified, so the \'`default`\' section is used, and you can see that the word \'red\' in the input is colored red.
The second command explicitly uses the \'`default`\' section, and the result is the same.

Next the \'`special`\' section is specified, and the corresponding rule applies, yielding a different result.

Finally, a missing section name is specified, and nothing happens.

If multiple sections are specified, then the rules are applied in that order.
In the example, the \'`default`\' section is specified before the \'`special`\' section.
Both rules apply, but because the \'`special`\' section is specified *last*, it takes precedence.

When the order of sections is reversed, the other rule has precedence.

![](/images/section3.png)
