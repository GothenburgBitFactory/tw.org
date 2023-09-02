---
title: "Taskwarrior - Hooks v2"
---

## Hooks v2

The API defined here is the [Hooks v2] API.
This API is part of the TaskWarrior 2.4.3 release.

## Events

No change.

## Input

No change.

## Output

No change.

## Exit Status

No change.

## Interfaces

No change.

## Command Line Arguments

To support an evolving Hooks API, Taskwarrior must provide hook scripts with a mechanism for determining which version of the Hooks API is providing the context for the script.
It is anticipated that in future versions, new events will be added, and changes to the interfaces will occur.
A hook script needs to act according to the API version, otherwise it risks incompatibility with Taskwarrior.

The interfaces define what is provided as standard input, and what is expected on standard output.
With `v2` there will also be command line arguments provided to the script.

A script may take advantage of the `v2` enhancements though, to extend its capabilities.

| Argument                       | Meaning                                                                                                                                                                                                                                     |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `api:2`                        | The `2` specified means Hooks API `v2`. This will be a monotonically increasing number, as the Hooks API evolves. The only possible value for this argument is currently `2`, because the `v1` API does not provide command line arguments. |
| `args:task ...`                | The script has read-only access to the command line that Taskwarrior received.                                                                                                                                                              |
| `command:add\|done\|sync\|...` | The command Taskwarrior recognized in its command line arguments.                                                                                                                                                                           |
| `rc:/path/to/.taskrc`          | Absolute path of rc file used by Taskwarrior after all overrides have been applied.                                                                                                                                                         |
| `data:/path/to/task/folder`    | Absolute path of folder containing Taskwarrior's *.data files.                                                                                                                                                                              |
| `version:x.y.z`                | Taskwarrior version calling the hook. Same as the one reported by `task --version`, e.g. `2.4.3`                                                                                                                                            |

Here is a contrived example simulating how a hook script will be invoked:

     $ ~/.task/hooks/on-xxx.yyy \
        api:2 \
        args:'task rc:~/mytaskrc list' \
        command:add \
        rc:/home/foo/mytaskrc \
        data:/home/foo/.task \
        version:2.4.3 \
        <input.txt \
        >output.txt

This information can be used by the script to see that an alternate `rc` file was specified on the command line.

## Backward Compatibility

The `v1` and `v2` API is identical, so any hook script will run unmodified in both scenarios.
This may not be true for future versions.

A script that requires `v2` but is run in a `v1` context should issue a warning that it is not able to perform its function, but it should not fail.
