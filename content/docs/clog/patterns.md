---
title: "Clog - Rule Patterns"
---

# Rule Patterns

Rules apply when their pattern matches the input, then the actions are performed.
Here is an example:

![](/images/pattern1.png)

When the pattern is quoted as above, `"blue"`, then the pattern is interpreted as a direct match, character-for-character.
This means the input must contain exactly `blue` for a match.

Alternately, a regular expression may be used, by enclosing the pattern in slash characters like `/blue/`.
This is a bad example of a regular expression because it is also simply character-for-character match.
This example will likely just run slower.

But regular expressions have capabilities that go beyond simple patterns.
Here is an example that allows for capitalization of the color names:

![](/images/pattern2.png)

Here is a regular expression that makes sure that the word \'blue\' is a complete word, and not merely part of a bigger word.
It does this by requiring that the \'b\' is preceded by a wo└d boundary, and the \'e\' is followed by a word boundary:

![](/images/pattern3.png)

Note that regular expression can become arbitrarily complex, and correspondingly slow.
If you can use a simple pattern, it is recommended for performance reasons.

For a full explanation of regular expression support, see your system\'s relevant man page:

```
$ man re_format
```
