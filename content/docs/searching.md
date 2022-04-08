---
title: "Taskwarrior - Searching"
---

# Searching

Searching for keywords and patterns in tasks is straightforward, and uses the `/pattern/` syntax.
First we create some sample tasks, then we\'ll search them.

```
$ task add foo
$ task add bar
$ task add baz
```

In order to locate that first task, by the keyword `foo` we do this:

```
$ task /foo/ list

ID Age   D Description Urg
-- ----- - ----------- ----
 1 1min    foo            0
```

The `/` characters delimit the search term, indicating what Taskwarrior should do.
Because task annotations are also searchable text, we can be sure that any annotations containing the pattern `/foo/` will also be found.
Let\'s add a task with such an annotation:

```
$ task 3 annotate footwear
$ task /foo/ long

ID Created    Mod   Recur Description
-- ---------- ----- ----- ---------------------
 3 2014-09-28 2min        baz
                            2014-09-28 footwear
 1 2014-09-28 2min       foo
```

Here the `long` report is used, so we can see the full annotation text.
Notice that the `foo` in the description of task 1, as well as the `footwear` in the annotation of task 3 were both found.

## Regular Expressions

Beginning in version {{< label >}}2.4.0{{< /label >}} all search terms are by default [regular expressions](/docs/terminology/#regex).
This means we could have searched using this pattern, which means an `f` followed by two `o` characters:

```
$ task /fo{2}/ long

ID Created    Mod   Recur Description
-- ---------- ----- ----- ---------------------
 3 2014-09-28 3min        baz
                            2014-09-28 footwear
 1 2014-09-28 3min       foo
```

In older versions, you would need to explicitly enable regex support like this:

```
$ task rc.regex:on /fo{2}/ long

ID Created    Mod   Recur Description
-- ---------- ----- ----- ---------------------
 3 2014-09-28 3min        baz
                            2014-09-28 footwear
 1 2014-09-28 3min       foo
```

Or you could put the setting in your `.taskrc` file.
You can also turn off regular expression support:

```
$ task rc.regex:off /fo{2}/ long

No matches.
```

This fails because the search term `/fo{2}/` is this time considered just text, not a regular expression and this term does not appear in any task.

## Shell

If your search term contains one or more spaces, then your [shell](/docs/terminology/#shell) is going to break the search pattern into two arguments, and Taskwarrior will be confused.
Solve this by either quoting or escaping like these examples:

```
$ task '/foo bar/' list
$ task /foo\ bar/ list
```

This guarantees that Taskwarrior sees one argument, `/foo bar/` instead of two, `/foo`, `bar/`.

## Operators

The search pattern syntax of `/pattern/` is there as a convenience, but there are more powerful low-level operators, such that the above pattern is equivalent to:

```
$ task description~foo list
```

Here the `~` match operator works much like that in Bash.
To invert that, to search for descriptions that *do not* contain the pattern, use the no-match operator:

```
$ task 'desc!~foo' list
```

Here you see the `!~` no-match operator, an abbreviated `desc` attribute name, and quoting, because Bash will interpret the `!` character in its own way.
