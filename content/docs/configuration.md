---
title: "Taskwarrior - Configuration"
---

[]{#config}

### Configuration

Taskwarrior stores all configuration information in a file in your home
directory, named `.taskrc`. The default `.taskrc` file contains a minimal set of
entries, with only one required setting, which is:

    data.location=~/.task

This is the only setting you need because Taskwarrior has senѕible defaults for
all the settings. This file is really just a list of settings for which you wish
to override those defaults.

[]{#config_cmd}

#### Config Command

The `config` command can be used to modify your `.taskrc` file. In this example
we enable regular expression support in filters, by doing this:

    $ task config regex on
    Are you sure you want to change the value of 'regex' from 'off' to 'on'? (yes/no) yes
    Config file ~/.taskrc modified.

You can use \'on\', or \'1\', \'yes\' or \'true\', all of which are synonyms
which will enable the feature. You are asked to confirm the change, which is
controlled by the `confirmation` setting which of course you can disable with:

    $ task config confirmation off

The general form of the command can be either of these:

    task config name value
    task config name ''
    task config name

These three example show, respectively, setting `name` to `value`, setting
`name` to an empty value, and deleting the setting. Note that only deleting the
setting removes the override and therefore restores the default.

[]{#show_cmd}

#### Show Command

The `show` command displays all the current configuration settings, which is a
list of all the settings and default values, with your local settings overriding
those, and furthermore with any command line overrides. The show command will
also filter the settings by a keyword you specify, so to look at the `minimal`
report definition, you can run this:

    $ task show report.minimal

    Config Variable            Value
    -------------------------- ----------------------------------------
    report.minimal.columns     id,project,tags.count,description.count
    report.minimal.description Pending tasks by project and description
    report.minimal.filter      ( status:pending or status:waiting )
    report.minimal.labels      ID,Project,Tags,Description
    report.minimal.sort        project+,description+,entry+

The `show` command will highlight values that differ from the defaults, and will
also tell you if there are settings which are not recognized. This might
indicate ѕpelling mistakes or obsolete settings.

[]{#include}

#### Includes

The `.taskrc` file supports inclusion, which is used for example, for theme
files.

    include ~/themes/solarized-dark-256.theme

The file included is expected to contain Taskwarrior configuration settings, or
nested includes.

[]{#override}

#### Command Line Override

The `config` command makes permanent changes to your `.taskrc` files, but you
can temporarily override these settings for a single command, using this
technique:

    $ task rc.regex=on /[Tt]otal/ list

One possible use of this feature is to override the `data.location` setting to
use an alternate task list:

    $ task rc.data.location=/alternate/path/.task ...

[]{#env}

#### Environment Variables

There are two environment variables that can be used to specify an alternate
configuration file, and an alternate data location.

    TASKRC=~/.taskrc TASKDATA=~/.task task list

This example uses environment variables to specify both the configuration file
and the data directory.
:::
