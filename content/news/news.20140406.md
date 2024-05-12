---
title: "Vit 1.2 is released"
date: 2014-04-06
---

### Vit 1.2 is released 

Version 1.2 of the VIT front-end for Taskwarrior is available for download now.

Download here: [vit-1.2.tar.gz](https://codeload.github.com/vit-project/vit/tar.gz/refs/tags/v1.2).

See the [VIT 1.2 beta1 announcement](../news.20140220/) for the features introduced in 1.2.

The following are changes included since the beta release:

- the key can now be used in shortcuts
- exit with informative error if shortcut too long (see [#42:](https://github.com/vit-project/vit/issues/42))
- fix colors for running VIT in tmux
- do not print control characters to prompts
- fix recognition of backspace in tmux
- fix a prompt bug that prevented editing
- 'vit -audit' now creates a log with debug info

Many thanks to Devendra Ghate and Nemo Inis, who provided quality feedback.

For bug reports and feature requests, [please register](https://github.com/GothenburgBitFactory/taskwarrior/issues) and create an issue for the project "VIT".

For any other questions, please email Scott Kostyshak at skostysh@princeton.edu.
