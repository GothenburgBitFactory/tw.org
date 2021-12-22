---
title: "Clog - Color"
---

### Color

Clog uses the same color model as Taskwarrior. A color iѕ described with one or
more words. You can specify the foreground color, the background color, and some
text effects.

Color can be both simple and complex. You can completely ignore the color models
below, and just use color in one of these ways:

    red
    white on red
    on red
    bold blue
    bold yellow on bright green underline

Or you can have full control using a 256-color model. But sometimes all you need
is red and green.

#### 16-Color Model

The basic color support is provided through named colors:

    black, red, blue, green, magenta, cyan, yellow, white

Shown here used as foreground and background colors:

![](/docs/clog/images/color1.png){.img-responsive}

Foreground color (for text) is simply specified as one of the above colors, or
not specified at all to use the default terminal text color.

Background color is specified by using the word `on`, and one of the above
colors. Some examples:

    green
    green on yellow
    on yellow

![](/docs/clog/images/color2.png){.img-responsive}

These colors can be modified further, by making the foreground `bold`, or by
making the background `bright`. Some examples:

    bold green
    bold white on bright red
    on bright cyan

Bold is not uniformly supported by all terminal emulators. Sometimes it results
in a slightly brighter color, a lightly heavier typeface, or no difference.

The order of the words is not important, so the following are equivalent:

    bold green
    green bold

But the `on` is important - colors before the `on` are foreground, and colors
after `on` are background.

There is an additional `underline` attribute that may be used:

    underline bold red on black

Much like `bold`, you may see different behavior among different terminal
emulators. There is also an `inverse` attribute that flips foreground and
background colors:

    inverse red

Some combinations look very nice, some look terrible. Different terminal
programs do implement slightly different versions of \'red\', for example, so
you may see some unexpected variation across machines. The brightness of your
display is also a factor.

#### 256-Color Model

Using 256 colors follows the same form, but the names are different, and some
colors can be referenced in different ways. First there is by color ordinal,
which is like this:

    color0
    color1
    color2
    ...
    color255

![](/docs/clog/images/color3.png){.img-responsive}

This gives you access to all 256 colors, but doesn\'t help you much. This range
is a combination of 8 basic colors (color0 - color7), then 8 brighter variations
(color8 - color15). Then a block of 216 colors (color16 - color231). Then a
block of 24 gray colors (color232 - color255).

![](/docs/clog/images/color4.png){.img-responsive}

The large block of 216 colors (6x6x6 = 216) represents a color cube, which can
be addressed via RGB values from 0 to 5 for each component color. A value of 0
means none of this component color, and a value of 5 means the most intense
component color. For example, a bright red is specified as:

    rgb500

And a darker red would be:

    rgb300

Note that the three digits represent the three component values, so in this
example the 5, 0 and 0 represent red=5, green=0, blue=0. Combining intense red
with no green and no blue yields red. Similarly, blue and green are:

    rgb005
    rgb050

Another example - bright yellow - is a mix of bright red and bright green, but
no blue component, so bright yellow is addressed as:

    rgb550

A soft pink would be specified as:

    rgb515

You may notice that the large color block is represented as 6 squares. All
colors in the first square have a red value of 0. All colors in the 6th square
have a red value of 5. Within each square, blue ranges from 0 to 5 left to
right, and within each square green ranges from 0 to 5, top to bottom. This
scheme takes some getting used to.

![](/docs/clog/images/color5.png){.img-responsive}

The block of 24 gray colors can also be accessed as gray0 - gray23, in a
continuous ramp from black to white.

#### True Color Model

This is true 24-bit color, and is not yet supported.

#### Mixing Color Models

If you specify 16-color colors, and view on a 256-color terminal, no problem. If
you try the reverse, specifying 256-color colors and viewing on a 16-color
terminal, you will be disappointed, perhaps even appalled. The results are
usually that only the 16-color model is shown, and the rest is just blank.

There is some limited color mapping - for example, if you were to specify this
combination:

    red on gray3

Then you are mixing a 16-color and 256-color specifications. Taskwarrior will
map `red` to `color1`, and proceed. Note that `red` and `color1` are not quite
the same tone.

Note also that there are no `bold` or `bright` attributes when dealing with 256
colors, but there is still underline available.

#### Terminal Settings

All of the above directly emit Xterm escape sequences to control color and have
absolutely nothing to do with your `$TERM` setting.
:::
