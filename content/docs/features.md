---
title: "Taskwarrior - How to Request a Feature"
---

# How to Request a Feature

We encourage you to request features.

You can submit a feature request using our [issue tracking system](https://github.com/GothenburgBitFactory/taskwarrior/issues).
Simply create an account, create an issue, and set the type to either 'improvement' or 'feature', at your discretion.
But there is a little more to it than that.
After all, wouldn't you like to see your request implemented?

## What Makes a Good Feature Request?

Requesting a feature is easy, but you must remember that it doesn't mean it will get done.
It may be a simple or vague request.
It may be a complex request that needs some analysis, and we will want to discuss it first.
Sometimes we even go so far as to write up an RFC before doing any work.
Here are some tips for making a good feature request:

- Describe a compelling feature, and make us really *want* it.
  What we find most convincing is a statement that illustrates what having the new feature would mean, or would enable.
  What new things could you do if you had this feature?
  How would you be more effective at managing tasks with this feature?
- Describe how the feature might interact with existing features.
  We prefer it when a new feature is more than simply storing a new piece of data, for later retrieval - we have [UDAs](../udas/) for that.
- Describe any new reports that may be needed.
- Describe who might benefit from this feature.
- Describe a feature that doesn't impose a cost on users that choose not to use it.
  We want the basic usage (add, list, done) to remain simple and effective.

One thing to bear in mind is that we have a long term goal of simplifying the way we manage tasks, simplifying Taskwarrior, and improving consistency.

## Things to Avoid

- If your suggestion affects basic usage (add, list, done) then it will not be implemented.
- Don't bother inventing syntax, or coming up with an unused character on your keyboard.
  We would much rather you put your effort into thinking about the feature and the benefits.
  Syntax is our problem.
  Focus on making others wonder how they could possibly live without the feature.
- Don't bother suggesting features that lead Taskwarrior away from its intended purpose - managing tasks.
  We have no intention of adding time-tracking to the Taskwarrior core.
- If you have a suggestion that can be implemented as a hook script, or add-on, please do that instead.
  If the result is compelling enough, we may want to migrate the functionality in-core, but it's not likely.
- Don't tell us how easy something would be, or how quickly you could add it.
  Ease of implementation has nothing to do with whether an idea is good.
  Instead, convince everyone that the idea is great.

## A Good Example

I think dependencies would be a great feature, because it would help me organize tasks and know which ones I need to work on first.
It would also tell me which ones I cannot work on now.
Tasks that are depended upon could affect the 'next' report, because those tasks need to be done first.
Ideally a task could depend on multiple other tasks.
I would need to both add and remove a dependency.
Dependencies are a commonly understood concept, and so would be useful to many users.

## Another Good Example

I should be allowed to use 'status' field in a report.
It doesn't make sense to withhold just this one field.
For the sake of consistency, please add this as a reportable, sortable field.

## A Bad Example

Why can't we just make the @ character mean ...?
How hard can that be?
