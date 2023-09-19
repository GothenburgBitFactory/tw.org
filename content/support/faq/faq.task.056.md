---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How can I write a test for task?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How can I write a test for task?
{{< /question >}}
{{< answer >}}
Copied from TW-1334 (pbeckingham):

Here is the basic form:

1) Learn Python
2) Learn Python unittest
3) Take a look at how taskwarrior.git/test/basetest works
4) Take a look at the existing Python unit tests (grep -l python *.t) and write your own
5) Submit the code patch

The unit tests are all of the same structure - set up an rc file, add/manipulate data, check results, remove temp files.

A: Clone the code repository, build and run the test suite, and get familiar with the way we do things.
Look at the Python tests specifically, as we are only accepting new test scripts in Python.
There is documentation on running the tests:

https://taskwarrior.org/docs/build.html
{{< /answer >}}
