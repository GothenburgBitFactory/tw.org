---
title: "Taskwarrior - Color Themes"
---

# Color Themes

Taskwarrior supports color themes.
These are simply configuration files with defined color rules and rule precedence, which can be included in your `.taskrc`
file like this:

    include /path/to/dark-blue-256.theme

There are several themes included with the distribution, and the default
`.taskrc` file you have references all of them, but these lines are commented out.
Uncomment one line to use the theme.

## Overriding Colors

You can override the color settings by placing changes *after* the include:

    include /path/to/dark-blue-256.theme
    color.overdue=bold white on red

In this way, themes are the basis upon which you specify your color preferences.

## Default Theme

By default, without any selected theme, Taskwarrior uses a simple dark theme
(`dark-16.theme` or `dark-256.theme` depending on your system). This means there is the assumption of a dark-background in your terminal.
If you use a light background this will look bad, and you should select a light theme instead.

There is a `no-color.theme` file that has no color at all, and while this sounds useless, it allows you to start with no color, and add your own.
If you are building your own theme, this is what you would start with.

## Theme Swatches

Below are examples of each of the provided themes.

## dark-16.theme

[![Theme swatch](../../images/dark-16.png)](../../images/dark-16.png)

## dark-256.theme

[![Theme swatch](../../images/dark-256.png)](../../images/dark-256.png)

## dark-blue-256.theme

[![Theme swatch](../../images/dark-blue-256.png)](../../images/dark-blue-256.png)

## dark-gray-256.theme

[![Theme swatch](../../images/dark-gray-256.png)](../../images/dark-gray-256.png)

## dark-gray-blue-256.theme

[![Theme swatch](../../images/dark-gray-blue-256.png)](../../images/dark-gray-blue-256.png)

## dark-green-256.theme

[![Theme swatch](../../images/dark-green-256.png)](../../images/dark-green-256.png)

## dark-red-256.theme

[![Theme swatch](../../images/dark-red-256.png)](../../images/dark-red-256.png)

## dark-violets-256.theme

[![Theme swatch](../../images/dark-violets-256.png)](../../images/dark-violets-256.png)

## dark-yellow-green-256.theme

[![Theme swatch](../../images/dark-yellow-green-256.png)](../../images/dark-yellow-green-256.png)

## light-16.theme

[![Theme swatch](../../images/light-16.png)](../../images/light-16.png)

## light-256.theme

[![Theme swatch](../../images/light-256.png)](../../images/light-256.png)

## solarized-dark-256.theme

[![Theme swatch](../../images/solarized-dark-256.png)](../../images/solarized-dark-256.png)

## solarized-light-256.theme

[![Theme swatch](../../images/solarized-light-256.png)](../../images/solarized-light-256.png)
