---
title: "Clog - How does it work?"
---

# How does it work?

Clog is a filter, which means it reads standard input, and writes that input to standard output.
Here is an example of a filter that does nothing:

```
$ echo 'Hello Clog' | clog
Hello Clog
$
```

The input passed through Clog unchanged.
This is because the input matched no default rules.

When you define rules in your `~/.clogrc` file, those rules are matched against the input, and if a rule matches, the action defined by the rule is performed.

When no `section` is specified, as in the example above, the \'`default`\' section is used.
When a section is specified, then the named section is used.
You can specify multiple sections if you wish to combined rule sets.

The rules are applied to the input, in the order in which they are defined in the `~/.clogrc` file.
The first rule is run first, and so on.
This can mean that some rules are eclipsed by others, and you can modify the behavior by reordering the rules.
