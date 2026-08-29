---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I find out where tests are needed?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How can I find out where tests are needed?

'd like to contribute to Taskwarrior by writing tests.

Where can I find what to do and what part of the code needs testing?
{{< /question >}}
{{< answer >}}
In addition to unittests (low level), both Taskwarrior and more recently taskd follow a policy of having tests for every valid bug report. These work both as integration (ensure user experience matches expectations) as well as regression tests (ensure that we don't re-introduce bugs that were there before).

With that said, the best way to find out where tests are needed is to search the Issue tracker for reports that either have the needsTest label (you can use this link) or that present a problem/bug with a reproducible scenario that needs to be converted to a testCase (these should also be given the needsTest label).

Once the test is attached to the bug report, the label hasTest should be added and needsTest should be removed. You can see some examples of what I'm talking about here.

A: Renato's answer is the right one.
But here is another suggestion, which is slightly lower on the difficulty scale, but still very valuable:

If a bug/feature doesn't have a hasTest label, then it obviously needs a test.
But before it has a test, it needs a good, clear, minimal example.
The idea here is that it can be difficult to convey what the problem is, using language, but it more precise using commands.
Coming up with one or two commands to illustrate the problem, and therefore what the test should cover is a great way to contribute without writing Python.

For example, take a look at the commands Benjamin added to  TW-1334 - task mod description:"word1 word2" fails to handle space RESOLVED  .
Those make it very clear what the problem is, and form a great basis for writing a unit test.
{{< /answer >}}
