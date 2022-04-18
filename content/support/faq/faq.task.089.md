---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Task calendar not dislaying holidays"
---

Back to the [FAQ](/support/faq)

Q: Task calendar not dislaying holidays

I don't know why the calendar is not displaying the holidays. This is the my taskrc :

# [Created by task 2.3.0 7/23/2014 14:29:17]
# Taskwarrior program configuration file.
# For more documentation, see https://taskwarrior.org or try 'man task', 'man task-faq',
# 'man task-tutorial', 'man task-color', 'man task-sync' or 'man taskrc'

# Here is an example of entries that use the default, override and blank values
#   variable=foo   -- By specifying a value, this overrides the default
#   variable=      -- By specifying no value, this means no default
#   #variable=foo  -- By commenting out the line, or deleting it, this uses the default

# Use the command 'task show' to see all defaults and overrides

# Files
data.location=~/.task

# Color theme (uncomment one to use)
#include /usr/local/Cellar/task/2.3.0/share/doc/task/rc/light-16.theme
#include /usr/local/Cellar/task/2.3.0/share/doc/task/rc/light-256.theme
#include /usr/local/Cellar/task/2.3.0/share/doc/task/rc/dark-16.theme
#include /usr/local/Cellar/task/2.3.0/share/doc/task/rc/dark-256.theme
include /usr/local/Cellar/task/2.3.0/share/doc/task/rc/dark-256.theme
#include /usr/local/Cellar/task/2.3.0/share/doc/task/rc/dark-red-256.theme
#include /usr/local/Cellar/task/2.3.0/share/doc/task/rc/dark-green-256.theme
#include /usr/local/Cellar/task/2.3.0/share/doc/task/rc/dark-blue-256.theme
#include /usr/local/Cellar/task/2.3.0/share/doc/task/rc/dark-violets-256.theme
#include /usr/local/Cellar/task/2.3.0/share/doc/task/rc/dark-yellow-green.theme
#include /usr/local/Cellar/task/2.3.0/share/doc/task/rc/dark-gray-256.theme
#include /usr/local/Cellar/task/2.3.0/share/doc/task/rc/holidays.it-IT.rc
include /usr/local/Cellar/task/2.3.0/share/doc/task/rc/holidays.en-US.rc
color = on
dateformat=D-M-Y

dateformat.report=D-M-Y

dateformat.holiday= D-M-Y

dateformat.edit=D-M-Y   H:N:S

dateformat.info=D-M-Y  H:N:S

dateformat.annotation= D-M-Y

report.X.dateformat=D-M-Y

weekstart = Monday

journal.time=yes

journal.time.start.annotation=Task Iniziato!

journal.time.stop.annotation=Task Fermato!

calendar.details=full

calendar.holidays=full

calendar.details.report=list

A: Take a look inside this file that you are including, and verify that you have holidays extending at least until the end of 2014:

/usr/local/Cellar/task/2.3.0/share/doc/task/rc/holidays.en-US.rc

