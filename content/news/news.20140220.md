---
title: "VIT 1.2 beta1 is available"
date: 2014-02-20
---

### VIT 1.2 beta1 is available 

Beta1 of the VIT front-end for Taskwarrior is available for download now.

Download here: ~~vit-1.2.beta1.tar.gz~~.

VIT 1.2 brings a customizable way to interact with your tasks with user-defined shortcuts.
You can now define keys to launch external commands with the currently selected task as input.
Keybinds can now be specified in `~/.vitrc`.
For example, to use the external script [tasknote](https://github.com/mikebobroski/tasknote) when you press \"ctrl + n\", you can do:

```
map \cn=:!wr tasknote %TASKID<Return>
```

Suppose you currently have highlighted a task with ID 20. Then the command
`tasknote 20` would be run by your shell. `!:` is the VIT command to run external commands; `w` tells VIT to wait until that process finishes and to show you the result before going back to the VIT screen (this allows you to write the note for tasknote in your editor); and `r` tells VIT to reread your task data after the process finishes.

See `man vitrc` for more information and examples.

Navigation is improved: in the prompts, backspace now removes a character and the arrow keys can be used.

Key changes:

- `gg` moves to the top of the task list
- `D` now deletes a task when not over an annotation
- `s` runs `task sync` (task \> 2.30 required)
- `!:` runs a command in the shell (and replaces %TASKID with the selected task ID)
- `c` is renamed to `m` (for *modify* so more consistent with Taskwarrior)
- `P [hmln]` now sets priority
- `q` (`Q`) now quits with(out) confirmation

Misc:

- Fix freezing behavior (caused because Taskwarrior was waiting for input)
- Fix a bug where prompt text was invisible when switching tabs in gnome-terminal
- Clear project prompt string with escape

Please email <skostysh@princeton.edu> if you have any problems or questions.
