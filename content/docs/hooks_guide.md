---
title: "Taskwarrior - Hook Author's Guide"
---

# Hook Author\'s Guide

This guide walks through the process of writing and testing a Taskwarrior hook script.
While this is a simple and straightforward process for developers, there are still many considerations.
A hooks script will be developed, and the various concerns discussed.

## Example Hook Script

As an example, we\'re going to create a hook script that detects tasks that refer to Taskwarrior bug numbers (ie \'TW-179\') in the description, and replaces the bug number with a URL that links to the bug.
Whenever the pattern `tw-179` is found in a task description, it should change to `https://github.com/GothenburgBitFactory/taskwarrior/issues/179`.

This script will simply need to search for a pattern, and perform a replacement, for new tasks only.
This will be a very simple hook script.

## Choosing a Language

You can write a hook script in any language you wish.
But there is more to consider:

- Is performance an issue?
  It is not likely that you need to worry about performance, because the time spent adding or modifying tasks is a one-time cost.
  Performance would be more important if it affected a report.
- Does your language have a readily available JSON parser?
  Most likely it does, but is it installed on the users machine?
  Are you going to be requiring that the user install additional software?
- If you are considering a compiled language, will you ship source or binaries?
  Developers typically have compilers installed, but regular users do not.
  Shipping binaries means you\'ll need to provide them for different OSes and versions.

This example will be written in Python 2.6+, because Python is well known, modern, and commonly available.
It has a built-in JSON parser.
It is ideal for this task.

## Hooks API

Read and understand the [Hooks API](/docs/hooks).
This is important because the hook script must comply with the API requirements.
Taskwarrior is strict about compliance.
Hook scripts have the ability to harm data, so they are carefully monitored.

## Framework

From the API, we know that an `on-add` hook script will need to read a line of JSON from standard input, and emit an optionally modified line of JSON, optionally include feedback, and exit with a zero status indicating success.

To begin with, here is a compliant `on-add` hook script that does nothing, *but does it properly*. It can be the basis for any `on-add` script.

```
#!/usr/bin/env python

import sys
import json

added_task = json.loads(sys.stdin.readline())
print(json.dumps(added_task))
sys.exit(0)
```

This script reads a line of JSON from input and parses it.
This JSON represents the task being added.
The JSON is then serialized and written to output, without modification.
An exit code of zero indicates that the added task is accepted.

Although this script does nothing to the task, it only requires a few more lines added to be complete.

## Testing

You can test your hook script independently from Taskwarrior, which is a good idea.
First we make our script executable, then we simply run it from the command line and feed it sample JSON.
Here is an example test run, using valid JSON, but it is not a valid task - it\'s just a test.

```
$ chmod +x hook.py
$ echo '{"name":"value"}' | ./hook.py
{"name": "value"}
$ echo $?
0
```

Here the hook script was made executable, then sample JSON `{"name":"value"}` is provided as input.
The script emits the JSON unmodified as output, and the exit code is zero.
This script works.

Now we add logic to the script to make it do something.

## Implementation

For the implementation, the script needs to look for bug numbers.
Taskwarrior bug numbers can be represented with a regular expression like this:

```
\b(tw-\d+)\b
```

The script is now modified to `import re`, and perform the substitution on the description attribute.
By comparing the original description to the modified description, the script knows when to provide feedback.
Here is the updated script:

```
#!/usr/bin/env python

import sys
import re
import json

added_task = json.loads(sys.stdin.readline())
original = added_task['description']
added_task['description'] = re.sub(r'\b(tw-\d+)\b',
                                   r'https://github.com/GothenburgBitFactory/taskwarrior/issues/\1',
                                   original,
                                   flags=re.IGNORECASE)
print(json.dumps(added_task))

if original != added_task['description']:
    print 'Link added'

sys.exit(0)
```

Testing the script again with better input yields this:

```
$ echo '{"description":"foo tw-179 bar"}' | ./hook.py
{"description": "foo https://github.com/GothenburgBitFactory/taskwarrior/issues/179 bar"}
Link added
$
$ echo $?
0
```

The script has correctly identified the bug number, and replaced it with the correct URL.
The feedback message indicates this.
We are ready to install this hook script and test it using Taskwarrior.

## Install and Enable

To install the script, copy it to the `~/.task/hooks` directory, creating that directory if necessary, and make sure the script is executable.
It must also be associated with an event, which is done by naming it `on-add*`.

```
$ mkdir -p ~/.task/hooks
$ cp hook.py ~/.task/hooks/on-add-bug-link.py
$ chmod +x ~/.task/hooks/on-add-bug-link.py
```

There is a configuration setting that enables/disables hooks and you\'ll need to make sure hooks are enabled, although this is the default value:

```
$ task _get rc.hooks
on
```

Now run the `diagnostics` command, which will summarize the hooks it finds:

```
$ task diag
...
Hooks
    Scripts: Enabled
             <user>/.task/hooks/on-add-bug-link.py (executable)
...
```

We see that the hook script is found by Taskwarrior.
Now let\'s see it in action, and note that the `--` terminator is being used so that `tw-179` is not perceived as a mathematical expression:

```
$ task add -- Contains no bug number
Created task 181.
$ task add -- Fix tw-179
Created task 182.
Link added
$
$ task _get 182.description
Fix https://github.com/GothenburgBitFactory/taskwarrior/issues/179
```

It works, but we have done minimal testing here.
If you write a hook script with any non-trivial capabilities, your testing should be much more thorough.
This is only an example.

## Debugging

Taskwarrior has a hook debug configuration setting, which will show you how Taskwarrior processes the hook input and output, what happened, and how long it took.
Here a similar task is added with debug information requested.
The output is edited to show just the relevant hook information.

```
$ task rc.debug.hooks=2 add -- Fix tw-98765
...
Found hook script <user>/.task/hooks/on-add-bug-link.py
...
Hook: Calling <user>/.task/hooks/on-add-bug-link.py
Hook: input
  {"description":"Fix tw-98765","entry":"20150301T154518Z","modified":"20150301T154518Z","status":"pending","uuid":"daa3ff05-f716-482e-bc35-3e1601e50778"}
Timer Hooks::execute (<user>/.task/hooks/on-add-bug-link.py) 0.031061 sec
Hook: output
  {"status": "pending", "entry": "20150301T154518Z", "uuid": "daa3ff05-f716-482e-bc35-3e1601e50778", "description": "Fix https://github.com/GothenburgBitFactory/taskwarrior/issues/98765", "modified": "20150301T154518Z"}
  Link added
Hook: Completed with status 0
...
Perf task 2.4.2 f0cc015 20150301T154759Z init:3388 load:2001 gc:0 filter:0 commit:230 sort:0 render:0 hooks:33565 total:39184

Created task 183.
Configuration override rc.debug.hooks:2
Link added
```

The output shows that the hook script was found and run, the input and output is show, along with timing information, feedback and the status.

In this case the hook script ran in 31ms, which is certainly fast enough to not cause the user to wonder what is happening.
In this example all hook processing was completed in 33ms.

## Distribute

With your hook script complete, will you be sharing your script?
It\'s optional of course, but if you do, consider a license and copyright, establish a web presence so it can be found and downloaded, perhaps put contact info in the script so you can be told of problems, then tell people about it.

You can tell us about your hook script, because we\'d like to list it on the [Tools](/tools) page, along with many others.
