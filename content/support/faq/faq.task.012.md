---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Why have attribute modifiers rather than the more readable and algebraic form?"
---

### Q: Why have attribute modifiers (`urgency.over:10`) rather than the more readable and algebraic form (`urgency>10`)?

Taskwarrior already supports both forms.
The attribute modifier form is older and predates more complex filter support.
The algebraic form requires that you escape any characters that the shell will otherwise interpret.

At some point the attribute modifier form will likely be deprecated.
The algebraic form is already much more capable.

```
$ task help
...
Attribute modifiers make filters more precise.
```

Supported modifiers are:

```
Modifiers         Example            Equivalent           Meaning
----------------  -----------------  -------------------  -------------------------
                  due:today          due = today          Fuzzy match
not               due.not:today      due != today         Fuzzy non-match
before, below     due.before:today   due < tomorrow       Exact date comparison
after, above      due.after:today    due > tomorrow       Exact date comparison
none              project.none:      project == ''        Empty
any               project.any:       project !== ''       Not empty
is, equals        project.is:x       project == x         Exact match
isnt              project.isnt:x     project !== x        Exact non-match
has, contains     desc.has:Hello     desc ~ Hello         Pattern match
hasnt,            desc.hasnt:Hello   desc !~ Hello        Pattern non-match
startswith, left  desc.left:Hel      desc ~ '^Hel'        Beginning match
endswith, right   desc.right:llo     desc ~ 'llo$'        End match
word              desc.word:Hello    desc ~ '\bHello\b'   Boundaried word match
noword            desc.noword:Hello  desc !~ '\bHello\b'  Boundaried word non-match
...
```

See \'man task\', for the `ATTRIBUTE MODIFIERS` and `EXPRESSIONS AND OPERATORS` sections.
