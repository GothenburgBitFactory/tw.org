---
title: "Vit 1.2 in Homebrew"
date: 2014-06-07
---

### Vit 1.2 in Homebrew 

The recently released [Vit 1.2](/news/news.20140406) is now available from Homebrew.

[Homebrew](https://brew.sh) is "The missing package manager for OSX", and includes recipes for several thousand packages.
If you wish to install Vit easily on OSX, you simply update your brew recipes and install Vit like this:

```
$ brew update
...
$ brew install vit
...
```

As any package manager should, this will resolve dependencies, which in this case include Taskwarrior itself and the Curses module.

Thanks to Benjamin Weber for creating the recipe, and Larry Hynes for bringing this to our attention.

Also available in Homebrew are `task` and `taskd` recipes.
