---
title: "Clog - Rule Syntax"
---

# Rules Syntax

Clog rules have a very simple syntax, which is this:

```
# <comment>
<section> rule <pattern> --> <action> ...
```

A rule must occupy one and only one line.
You cannot break rules over several lines, or combined two rules on one line.

## Comments

A comment begins with the \'`#`\' character, and continues until the end of the line.
You can add arbitrary descriptions using comments, or you can disable a rule by putting a \'`#`\' at the beginning of the line.
Example rule file fragment:

```
# This is a rule that finds lines containing the word 'ignore'
# and removes them from the output.
default rule "ignore" --> suppress   # Does not check for word boundaries
```
