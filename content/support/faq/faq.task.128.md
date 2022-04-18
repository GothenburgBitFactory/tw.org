---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Calendar and holiday questions"
---

Back to the [FAQ](/support/faq)

Q: Calendar and holiday questions

Hello - in the man file for taskrc it explains how to add holidata holidays to .taskrc, so it was no problem getting them to appear. I do consulting with people in various countries, and I like to know when they are on holiday so I can give them a greeting or know they won't be available. If I add more holidays than what I have, US and JP, it's a little confusing. 

So, first: Can I customize the little list that shows up, so that it prepends the country? 

2016-04-18 US Patriots' Day
2016-04-29 JP ????
And second, the holiday files are hard coded to a specific version. Do you happen to know if there's a skillful way to tell it to variable-ize the version? 

A: ncluding multiple holiday files works, and the data does not collide.
But they are not distinguished with the country code in the description.
You could manually edit the files and add a "US" or "JP" prefix to the description.

The Timewarrior/Taskwarrior difference is that Timewarrior uses a namespace approach, and Taskwarrior has a flat configuration structure.
The only real difference is readability of the holiday file.

The problem with simply listing locales, and having Taskwarrior find the files is that the location is different on various operating systems, and versions of operating systems.
Getting this wrong would not only be likely, but not readily correctable, so using an include directive with a path is easier to fix.
There are also those who want to choose their own file locations.

You can include a symlink, for example:

include ~/.task/holidays.en-US
Then make that symlink yourself with this:

$ ln -s /path/to/real/holidays.en-US ~/.tsak/holidays.en-US

