---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to import todo.txt"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### How to import todo.txt

I have been using todo.txt task managers for a while (including the original shell, topydo, various apps, etc.) but now I would like to try out Taskwarrior too. In order to do that, however, I would like to import my existing todo.txt with more than a hundred tasks.

I looked into the Taskwarrior JSON documentation, but unfortunately I am not familiar with text manipulation enough to convert my txt into the appropriate format.

I might do it manually/regular expressions, but I was wondering if there is already out there a way to do that relatively easily? Or, if there is no a worked out way, how should I approach the problem?
{{< /question >}}
{{< answer >}}
https://taskwarrior.org/download/import-todo.sh.pl

This is a Perl script that can convert todo.txt data format to JSON.
Then you just import the JSON into Taskwarrior.
You would do this:

$ curl -O https://taskwarrior.org/download/import-todo.sh.pl
$ perl import-todo.sh.pl < todo.txt > taskwarrior.json
$ task import taskwarrior.json
You'll need the Perl JSON module installed.
Note that any extensions to the todotxt format that you are using wil not likely be recognized, but this script should provide a good starting point.

{{< /answer >}}
