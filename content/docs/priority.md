---
title: "Taskwarrior - Priority"
---

# Priority

Taskwarrior has supported the notion of task priority since the beginning.
Priority was defined to have four allowable values, `H`, `M` and `L`, with the additional option of having no priority at all.
The values represent High, Medium, Low and No priority.
The `L` value is considered a higher priority than no priority.
Priority has been used to sort tasks in most built-in reports.

Beginning with Taskwarrior 2.4.3, priority is no longer a core attribute, and is replaced with an equivalent [User Defined Attribute](../udas/).
This offers several advantages, and users may now configure priority and attributes that affect urgency to match their needs more closely.

This change should go unnoticed, but there are some differences.
This document describes how you may further customize priority to match *your* notion of what priority means.

## Default Configuration

Here is the new default configuration for the UDA priority, which closely matches the old core attribute priority.

```
color.uda.priority.H=color255
color.uda.priority.L=color245
color.uda.priority.M=color250

uda.priority.label=Priority
uda.priority.type=string
uda.priority.values=H,M,L,

urgency.uda.priority.H.coefficient=6.0
urgency.uda.priority.L.coefficient=1.8
urgency.uda.priority.M.coefficient=3.9
```

There are several points to note, the first of which is that the color rules are now UDA color rules.
The themes that are distributed with Taskwarrior have all been updated to accommodate this change, but you may have local overrides that have not yet been modified.

The `uda.priority.values` setting specifies the possible values, which are `H`, `M`, `L`, and no priority.
Notice the comma at the end with no value after it -
that is how you specify that an empty value is allowed.

## Custom Configuration

If you believe that a priority level of `L` should be the lowest value, lower even than no value, you can do this:

```
$ task config uda.priority.values H,M,,L
```

Those two commas indicate that the blank value lies between `M` and `L`.

Note that the above configuration only changes the sorting order.
The `L` priority will still be considered higher than no priority in urgency calculations.
To change the urgency calculation, you also need to adjust the urgency coefficients of the values.

If you would like priorities that represent severity, then you can do something like this:

```
$ task config uda.priority.values Critical,Important,
```

There is no practical limit on what values, or how many values you use.
This example suggests you might want to rename `priority` to be `severity` instead.

## Warning

If you sync tasks between different clients, you will need to configure those clients in the same way, otherwise you'll find that Taskwarrior will enforce the default configuration.
