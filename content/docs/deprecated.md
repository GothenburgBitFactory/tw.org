---
title: "Taskwarrior - Deprecated Features"
---

### Deprecated Features

Taskwarrior, Taskserver, Tasksh and Timewarrior have many features. With each
release new features are added, and sometimes features are removed. A feature
may be removed if it has been superseded by something better, is no longer
relevant, or is very troublesome.

With the Taskwarrior command line syntax becoming more formal and regular with
every release, there will be a corresponding set of changes that remove
ambiguous command line syntax, and add consistent syntax.

Before a feature is removed, it is deprecated, where possible. This means that
it will appear on this list, in one release, and be removed in an unspecified
later release. Deprecation acts as an early warning for disappearing
functionality, giving users time to adapt or complain.

When a feature is removed, any related configuration settings are also removed.
You can see if your `.taskrc` contains any obsolete settings by using the `show`
command:

    $ task show
    ...

The `show` command highlights various problems.

### Taskwarrior

[]{#sync}

#### Push/Pull/Merge [deprecated since 2.3.0]{.label .label-info} [removed in 2.4.0]{.label .label-danger}

Starting with Taskwarrior 2.3.0, the `push`, `pull` and `merge` commands are
deprecated, and gone from 2.4.0. The `sync` command in 2.3.0 replaces this
functionality.

[]{#shadow}

#### Shadow Files [deprecated since 2.4.0]{.label .label-info} [removed in 2.4.0]{.label .label-danger}

Starting in 2.4.0, shadow files are replaced by an equivalent hook mechanism.

[]{#attmods}

#### Attribute Modifiers [deprecated since 2.4.0]{.label .label-info}

Attribute modifiers such as `project.startswith:Ab` are all deprecated starting
with version 2.4.0. In the example above, the replacement is an algebraic
expression, `project ~ ^ab`, which uses the `~` regex match operator, and `^Ab`
which is a regular expression.

[]{#search}

#### Bare Word Search Terms [deprecated since 2.4.0]{.label .label-info}

Simple words being interpreted as search terms is deprecated in 2.4.0 and will
be removed in a future release. The preferred syntax is `task /pattern/ ...`.

[]{#limit}

#### The \'limit\' Pseudo Attribute [deprecated since 2.4.0]{.label .label-info}

The `limit:20` pseudo attribute looks like a task attribute, but is just
syntactic sugar. It is deprecated and will be replaced by `rc.limit` in a future
release.

[]{#inherit}

#### The \'urgency.inherit.coefficient\' Setting [deprecated since 2.4.5]{.label .label-info}

Urgency inheritance changes with 2.4.5, and this settings will no longer be
used.

[]{#iso}

#### ISO Date and Time non-extended formats. [deprecated since 2.4.5]{.label .label-info}

The non-extended formats are just strings of numbers without separators. Here is
an extended date `2015-06-25` and here is the unextended date `20150625`, which
looks like a number or even an abbreviated UUID. Here is an extended time
`12:34:56`, and an unextended time `123456`, with the same issue. The
non-extended forms will be removed.

[]{#unique}

#### Helper commands for unique lists [deprecated since 2.4.5]{.label .label-info}

The `_ids`, `_projects`, `_tags`, and `_uuids` helper commands are deprecated in
favor of the new `_unique` command.

[]{#duetoday}

#### Virtual tag `DUETODAY` [deprecated since 2.6.0]{.label .label-info}

The `DUETODAY` virtual tag is a synonym for the more consistently named `TODAY`
virtual tag.

[]{#boolean}

#### Use of Boolean configuration values other than `0` or `1` [deprecated since 2.6.0]{.label .label-info}

Deprecated use of alternate Boolean configuration settings. Use values \"0\" for
off, and \"1\" for on. Avoid used of \"on\", \"off\", \"true\", \"t\",
\"false\", \"f\", \"yes\", \"y\", \"no\", \"n\".

[]{#dom}

#### DOM references: context.\* [deprecated since 2.6.0]{.label .label-info}

The dom references `context.program`, `context.args`, `context.width`, and
`context.height` are replaced by `tw.program`, `tw.args`, `tw.width`, and
`tw.height`.

### Tasksh

None yet.

### Taskserver

[]{#deny}

#### Client Allow/Deny List [removed in 1.1.0]{.label .label-danger}

Taskserver initially supported the `client.allow` and `client.deny` settings
which filtered connections. The intention was to be able to decline misbehaving
clients. This has proved to be a configuration problem for some, and the
mechanism is easily spoofed, so it will be removed.

### Timewarrior

None yet.
:::
