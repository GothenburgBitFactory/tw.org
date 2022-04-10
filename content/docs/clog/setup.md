---
title: "Clog - Setup"
---

# Setup

Clog needs a rules file before it can do anything.
If you run `clog` before creating a rules file, you see this:

```
$ clog
Cannot open /home/xxx/.clogrc
See 'man clog' for details, and a sample file.
```

Clog allows you to specify a rules files on the command line, and if that doesn\'t exist, you get the same error:

```
$ clog -f asdf
Cannot open asdf
See 'man clog' for details, and a sample file.
```

Creating a rules file is as simple as creating an empty file:

```
$ touch ~/.clogrc
$
```

Comments in the rule files begin with the \'`#`\' character, so you can also create a rule file like this:

```
$ echo '# Clog Rules' > ~/.clogrc
$
```

Examples of what should be in your rules files are discussed in subsequent documents.
