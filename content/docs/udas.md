---
title: "Taskwarrior - User Defined Attributes (UDA)"
---

# User Defined Attributes (UDA)

Taskwarrior supports a set of standard attributes for a task, known as the core attributes.
These include `project`, `description`, `due` and so on.
There are more than 20 standard attributes (see [columns](../commands/columns/) for a full list).
They are necessary to provide all the functionality of Taskwarrior.
For example, the `project` attribute is used to provide feedback on completion of a project, the `projects` command itself, and project hierarchy filtering.
The `project` attribute has a lot of functionality associated with it, and this is why `project` is a core attribute.

Other attributes, such as `priority` do not have much associated functionality.
In fact, beyond storing the value, allowing modification, sorting and inclusion in reports, the `priority` field contributes nothing.
This is why `priority` is not really a core attribute, and will be migrated out of the code and into configuration.

Occasionally people will ask for new attributes, because their workflow includes more metadata than Taskwarrior supports.
A very common request is for an
`estimate` attribute, which would store a scalar quantity of some kind, perhaps a number of days, or large/medium/small.
Until now, the answer to most of these requests is to use tags or annotations to approximate the storage of the metadata.
Now we have UDAs to achieve this.

## What is a UDA?

A UDA is a new metadata item that you define, and taskwarrior faithfully stores, displays, and modifies.
But that is the extent of it, because Taskwarrior does not leverage it for functionality like the `project` attribute, but simply treats it as a data value with a name, allowing you to sort by it, use it in a report, import and export it.

It is intended that, once configured, a UDA is indistinguishable from core attributes, and will not impart performance penalties.

## Data Types

A UDA has a type, which may be one `string`, `numeric`, `date` or `duration`. If a UDA has type `date`, then it will naturally only accept date values, just like the core attribute `due`.
The `string` UDA type is special, in that a list of acceptable values may also be provided, and taskwarrior will only allow modifications if the new value is in the list.

## Example: estimate

A UDA is created by modifying configuration.
There are two or three configuration settings involved.
Let's create an `estimate` UDA that is numeric:

    $ task config uda.estimate.type numeric
    $ task config uda.estimate.label Est

That's all - but note there are three pieces of information there: first there is "estimate", which is the attribute name, then "numeric" which is the type, and finally "Est", which is the default label used when the UDA is included in a report.
Now you can add or modify a task to include an estimate.

    $ task add "Paint the door" project:Home estimate:4
    ...

## Example: size

Now suppose you are developing software in an Agile environment.
You may wish to have a `size` attribute that may contain a fixed set of values, such as "large", "medium" or "small".
This is achieved using an additional configuration setting:

    $ task config uda.size.type string
    $ task config uda.size.label Size
    $ task config uda.size.values large,medium,small

Now if you attempt to store a value such as "tiny", taskwarrior will disallow it.

## Default Values

Default values may be defined.
Continuing the example above, to specify a
`medium` size default for each task, use this setting:

    uda.size.default=medium

This default value will be applied to any task that does not otherwise have a
`size` value.

## Urgency

You can specify that a UDA contributes to the urgency calculation of a task.
As an example, the above `size` UDA could be given an urgency coefficient like this:

    urgency.uda.size.coefficient=2.8

Then whenever a task has a non-trivial value in the `size` UDA, the urgency is boosted by 2.8.

To assign an urgency coefficient that has an empty value leave no space between the attribute and the coefficient.
As an example, to match urgency to an empty priority, the coefficient can be assigned like this:

    urgency.uda.priority..coefficient=2.5

## Orphaned UDAs

Suppose you define an `estimate` UDA and use it.
Then you remove the configuration for the UDA.
You have just created a situation where the data is stored, but is no longer something that can be used in a report or a filter.
This is an orphan UDA.

You might think this is an unusual situation, but it is exactly what happens if you sync data with UDAs to a taskwarrior installation that does not have the UDA configured.
Data loss would be unacceptable, so taskwarrior will preserve all orphan UDA data, but will not let you manipulate it.
Only defined UDAs can be manipulated.
There is one exception - the `edit` command will let you remove UDA orphans by making their values blank, which eliminates any attribute.

## Custom Reports

UDA fields may be used in custom reports, just like any other attribute.
A report containing an attribute that is an orphan UDA is not a valid report.

## Other UDA Uses

The `priority` attribute is soon to be replaced by a UDA equivalent.
This is not something that anyone will notice, but it will make for a smaller, more stable core product.
UDAs are useful for other capabilities though.
An example would be the import of bugs from a Request Tracker.
The additional metadata in the Request Tracker could be created as UDAs in taskwarrior, which will then allow for a full import without data loss.
