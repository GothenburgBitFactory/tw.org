---
title: 'Taskwarrior - task-color.5 for task-3.4.1'
viewport: 'width=device-width, initial-scale=1'
layout: single
---
# NAME

task-color - A color tutorial for the Taskwarrior command line todo
manager.

# AUTOMATIC MONOCHROME

It should be mentioned that Taskwarrior is aware of whether its output
is going to a terminal, or to a file or through a pipe. When Taskwarrior
output goes to a terminal, color is desirable, but consider the
following command:

        $ task list > file.txt

Do we really want all those color control codes in the file? Taskwarrior
assumes that you do not, and temporarily sets color to 'off' while
generating the output. This explains the output from the following
command:

        $ task show | grep '^color '
        color                        off

it always returns 'off', no matter what the setting, because the output
is being sent to a pipe.

If you wanted those color codes, you can override this behavior by
setting the \_forcecolor variable to on, like this:

        $ task config _forcecolor on
        $ task config | grep '^color '
        color                        on

or by temporarily overriding it like this:

        $ task rc._forcecolor=on config | grep '^color '
        color                        on

# AVAILABLE COLORS

Taskwarrior has a 'color' command that will show all the colors it is
capable of displaying. Try this:

        $ task color

The output cannot be replicated here in a man page, but you should see a
set of color samples. How many you see depends on your terminal
program's ability to render them.

You should at least see the Basic colors and Effects - if you do, then
you have 16-color support. If your terminal supports 256 colors, you'll
know it!

# 16-COLOR SUPPORT

The basic color support is provided through named colors:

        black, red, blue, green, magenta, cyan, yellow, white

Foreground color (for text) is simply specified as one of the above
colors, or not specified at all to use the default terminal text color.

Background color is specified by using the word 'on', and one of the
above colors. Some examples:

        green                 # green text, default background color
        green on yellow       # green text, yellow background
        on yellow             # default text color, yellow background

These colors can be modified further, by making the foreground bold, or
by making the background bright. Some examples:

        bold green
        bold white on bright red
        on bright cyan

The order of the words is not important, so the following are
equivalent:

        bold green
        green bold

But the 'on' is important - colors before the 'on' are foreground, and
colors after 'on' are background.

There is an additional 'underline' attribute that may be used:

        underline bold red on black

And an 'inverse' attribute:

        inverse red

Taskwarrior has a command that helps you visualize these color
combinations. Try this:

        $ task color underline bold red on black

You can use this command to see how the various color combinations work.
You will also see some sample colors displayed, like the ones above, in
addition to the sample requested.

Some combinations look very nice, some look terrible. Different terminal
programs do implement slightly different versions of 'red', for example,
so you may see some unexpected variation across machines. The brightness
of your display is also a factor.

# 256-COLOR SUPPORT

Using 256 colors follows the same form, but the names are different, and
some colors can be referenced in different ways. First there is by color
ordinal, which is like this:

        color0
        color1
        color2
        ...
        color255

This gives you access to all 256 colors, but doesn't help you much. This
range is a combination of 8 basic colors (color0 - color7), then 8
brighter variations (color8 - color15). Then a block of 216 colors
(color16 - color231). Then a block of 24 gray colors (color232 -
color255).

The large block of 216 colors (6x6x6 = 216) represents a color cube,
which can be addressed via RGB values from 0 to 5 for each component
color. A value of 0 means none of this component color, and a value of 5
means the most intense component color. For example, a bright red is
specified as:

        rgb500

And a darker red would be:

        rgb300

Note that the three digits represent the three component values, so in
this example the 5, 0 and 0 represent red=5, green=0, blue=0. Combining
intense red with no green and no blue yields red. Similarly, blue and
green are:

        rgb005
        rgb050

Another example - bright yellow - is a mix of bright red and bright
green, but no blue component, so bright yellow is addressed as:

        rgb550

A soft pink would be addressed as:

        rgb515

See if you agree, by running:

        $ task color black on rgb515

You may notice that the large color block is represented as 6 squares.
All colors in the first square have a red value of 0. All colors in the
6th square have a red value of 5. Within each square, blue ranges from 0
to 5 left to right, and within each square green ranges from 0 to 5, top
to bottom. This scheme takes some getting used to.

The block of 24 gray colors can also be accessed as gray0 - gray23, in a
continuous ramp from black to white.

# MIXING 16- AND 256-COLORS

If you specify 16-colors, and view on a 256-color terminal, no problem.
If you try the reverse, specifying 256-colors and viewing on a 16-color
terminal, you will be disappointed, perhaps even appalled.

There is some limited color mapping - for example, if you were to
specify this combination:

        red on gray3

you are mixing a 16-color and 256-color specification. Taskwarrior will
map red to color1, and proceed. Note that red and color1 are not quite
the same tone.

Note also that there is no bold or bright attributes when dealing with
256 colors, but there is still underline available.

# LEGEND

Taskwarrior will show examples of all defined colors used in your
.taskrc, or theme, if you run this command:

        $ task color legend

This gives you an example of each of the colors, so you can see the
effect, without necessarily creating a set of tasks that meet each of
the rule criteria.

# RULES

Taskwarrior supports colorization rules. These are configuration values
that specify a color, and the conditions under which that color is used.
By example, let us add a few tasks:

        $ task add project:Home priority:H pay the bills               (1)
        $ task add project:Home            clean the rug               (2)
        $ task add project:Garden          clean out the garage        (3)

We can add a color rule that uses a blue background for all tasks in the
Home project:

        $ task config color.project.Home 'on blue'

We use quotes around 'on blue' because there are two words, but they
represent one value in the .taskrc file. Now suppose we wish to use a
bold yellow text color for all cleaning work:

        $ task config color.keyword.clean 'bold yellow'

Now what happens to task 2, which belongs to project Home (blue
background), and is also a cleaning task (bold yellow foreground)? The
colors are combined, and the task is shown as "bold yellow on blue".

Color rules can be applied by project and description keyword, as shown,
and also by priority (or lack of priority), by active status, by being
due or overdue, by being tagged, or having a specific tag (perhaps the
most useful rule) or by being a recurring task.

It is possible to create a very colorful mix of rules. With 256-color
support, those colors can be made subtle, and complementary, but without
care, this can be a visual mess. Beware!

In such cases, consider using the 'rule.color.merge=no' option to
disable the color blending.

The precedence for the color rules is determined by the configuration
variable 'rule.precedence.color', which by default contains:

        deleted,completed,active,keyword.,tag.,project.,overdue,scheduled,due.today,due,blocked,blocking,recurring,tagged,uda.

These are just the color rules with the 'color.' prefix removed. The
rule 'color.deleted' has the highest precedence, and 'color.uda.' the
lowest.

The keyword rule shown here as 'keyword.' corresponds to a wildcard
pattern, meaning 'color.keyword.\*', or in other words all the keyword
rules.

There is also 'color.project.none', 'color.tag.none' and
'color.uda.priority.none' to specifically represent missing data.

# THEMES

Taskwarrior supports themes. What this really means is that with the
ability to include other files into the .taskrc file, different sets of
color rules can be included.

To get a good idea of what a color theme looks like, try adding this
entry to your .taskrc file:

        include dark-256.theme

You can use any of the standard Taskwarrior themes:

        dark-16.theme
        dark-256.theme
        dark-blue-256.theme
        dark-gray-256.theme
        dark-green-256.theme
        dark-red-256.theme
        dark-violets-256.theme
        dark-yellow-green.theme
        light-16.theme
        light-256.theme
        solarized-dark-256.theme
        solarized-light-256.theme
        dark-default-16.theme
        dark-gray-blue-256.theme
        no-color.theme

Bear in mind that if you are using a terminal with a dark background,
you will see better results using a dark theme.

You can also see how the theme will color the various tasks with the
command:

        $ task color legend

Better yet, create your own, and share it. We will gladly host the theme
file on &lt;https://taskwarrior.org&gt;.

# CREDITS & COPYRIGHTS

Copyright (C) 2006 - 2021 T. Babej, P. Beckingham, F. Hernandez.

Taskwarrior is distributed under the MIT license. See
https://www.opensource.org/licenses/mit-license.php for more
information.

# SEE ALSO

**task(1),** **taskrc(5),** **task-sync(5)**

For more information regarding Taskwarrior, see the following:

The official site at  
&lt;https://taskwarrior.org&gt;

The official code repository at  
&lt;https://github.com/GothenburgBitFactory/taskwarrior&gt;

You can contact the project by emailing  
&lt;support@GothenburgBitFactory.org&gt;

# REPORTING BUGS

Bugs in Taskwarrior may be reported to the issue-tracker at  
&lt;https://github.com/GothenburgBitFactory/taskwarrior/issues&gt;
