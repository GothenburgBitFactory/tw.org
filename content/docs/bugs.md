---
title: "Taskwarrior - How to report a bug"
---

# How to Report a Bug

Please report bugs and odd behavior when you see it.
We don't necessarily know it's broken, unless you tell us.
A good bug description improves response time and reduces the burden on the developers.

It helps if you first determine whether this is a known bug.
To do this, you will need to look at the current list of bugs here:

<https://github.com/GothenburgBitFactory/taskwarrior/issues>

If you don't see the bug listed, sign up for an account at the link above, and create a new issue.
Please include the following information, as it helps us categorize, prioritize and replicate the problem:

- Tell us *exactly* what command you ran
- Tell us what happened
- Tell us what you expected to happen
- Tell us about your installation, by running the command `task diagnostics` and including the output in the issue description.
  Notice that the `diagnostics` command was added specifically for reporting issues, and it gives us information about your operating system, libraries, compiler and so on.
  If you feel some of the information is personal, then remove that line.
- If you need to demonstrate a problem with a screenshot, you can hide your private data with the `rc.obfuscate=1` configuration override:
  [![Data Obfuscation](/images/obfuscate.png)](/images/obfuscate.png)
