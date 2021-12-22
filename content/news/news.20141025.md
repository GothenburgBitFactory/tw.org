---
title: "News: Sort Column Indicator"
---

### Sort Column Indicator [2014-10-25]{.small}

In the upcoming Taskwarrior 2.4.0, there is now the ability to apply a different
color to the columns of a report that are part of the sort key.

[![Sort Columns
Demo](/news/images/sort.png){.img-thumbnail}](/news/images/sort.png)

The report column headers are colored using the `color.label` setting, and the
sort columns are colored by `color.label.sort`, if the setting exists. If it
does not, `color.label` is used for all columns.

The color themes are being updated, and some will take advantage of this new
setting.
