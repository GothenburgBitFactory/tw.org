---
title: "Taskwarrior - What's next?"
---

::: {.navbar .navbar-default .navbar-inverse .navbar-fixed-top role="navigation"}
::: {.container}
[![](/images/tw-s.png){width="24" height="24"} TASKWARRIOR](/){.navbar-brand
.text-heavy}

::: {.navbar-header}
[Toggle navigation]{.sr-only} []{.icon-bar} []{.icon-bar} []{.icon-bar}
:::

::: {.collapse .navbar-collapse}
-   [News](/news/)
-   [Docs](/docs/)
-   [Download](/download/)
-   [Support](/support/)
-   [Tools](/tools/)
:::
:::
:::

::: {.container}
::: {.col-md-12}
The latest news and blog articles.\
[![RSS Feed](/images/rss.gif){width="36px" height="14px"}](/feed.rss)
:::

::: {.col-md-10 .main}
::: {.row}
#### [News: Taskwarrior 2.5.3 released](/news/news.20210125.html) [2021-01-03]{.small}

Taskwarrior 2.5.3 is released! Too much has happened over the past two years,
adding up to over 900 commits between 2.5.2 and 2.5.3.

The [full
changelog](https://github.com/GothenburgBitFactory/taskwarrior/blob/2f47226f91f0b02f7617912175274d9eed85924f/ChangeLog)
is a *very* impressive read. [Download here](/download/).

This is a recommended upgrade for all Taskwarrior users.
:::
:::
:::

#### [News: Timewarrior 1.2.0 released](/news/news.20180204.html) [2019-11-23]{.small}

Timewarrior 1.2.0 is released! Here are the highlights:

-   Print warning when a new tag is entered (\#2)
-   New command \'undo\' (\#9)
-   New command \'annotate\' (\#68)
-   Bash completion (\#96)
-   Show man pages with \--help option

The [full
changelog](https://github.com/GothenburgBitFactory/timewarrior/blob/v1.2.0/ChangeLog)
is an impressive read. [Download here.](https://timewarrior.net/)

This is a recommended upgrade for all Timewarrior users.

#### [2018 Plans](/news/news.20180204.html) [2018-02-04]{.small}

We have made good use of beer time at FOSDEM to lay out our plans for 2018. Here
is what we are doing, starting immediately in most cases.

\...

#### [Timewarrior 1.1.1 released](/news/news.20180203.2.html) [2018-02-03]{.small}

Timewarrior 1.1.1 is released. This is a bug fix release and we recommend that
everyone upgrade to 1.1.1.

There is one bug fix in this release, and it\'s an important one that fixes a
long-standing problem that has been there from the begining.

\...

There is a script prepared that will fix your timewarrior data, and the download
and description is found on the [DB Correction
Script](https://timewarrior.net/docs/dbcorrection.html) page.

The release is immediately available as a source
[tarball](/download/timew-1.1.1.tar.gz). Binary packages for your OS may appear
soon.

#### [Services Migration](/news/news.20180203.html) [2018-02-03]{.small}

We are migrating services, and there will be a lot of changes. Here is what is
happening right now:

We have a new support email address that should be used for all support
requests:

<support@gothenburgbitfactory.org>

\...

#### [FOSDEM 2018: Taskwarrior Presence](/news/news.20180129.html) [2018-01-29]{.small}

The Taskwarrior Team will be attending [FOSDEM
2018](https://archive.fosdem.org/2018/) on February 3rd and 4th in Brussels.
This is the second annual carbon-space meetup.

What will the focus be this time? Are we traveling all this way and meeting up
to give talks and demos? Will be sharing ideas and collaborating? Will we be
planning features and releases?

\...

#### [Activity Digest: May - December 2017](/news/news.20180114.html) [2018-01-14]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in our projects. Here is what happened between May and December 2017.
This is not a complete list of all activity, just work that results in a
non-trivial change. For a full list, see the git history of all the projects.

This covers a seven month period. Due to unforeseen circumstances, there was a
lengthy break in 2017. We\'re back.

\...

#### [Timewarrior 1.1.0 Released](/news/news.20180113.html) [2018-01-13]{.small}

Timewarrior 1.1.0 is released. With 18 months of updates, many bugs fixed, and
new convenience features added, Timewarrior 1.1.0 is stable and ready.

Timewarrior tracks your time from the command line and generates reports. Your
data is stored locally in clear text. It integrates well with Taskwarrior.

![](/news/images/ti.png){.img-responsive}

Here are the changes in 1.1.0:

\...

#### [BYOP MeetUp in Gothenburg](/news/news.20170510_2.html) [2017-05-10]{.small}

A BYOP (Bring Your Own Project) MeetUp was held in Gothenburg. We had the chance
to present FLOD2 - our own CI, and distribute Taskwarrior stickers. The MeetUp
presentation was followed by sitting together, hacking away and having a couple
of beers.

![](/news/images/meetup.jpg){.img-responsive}

#### [Activity Digest: April 2017](/news/news.20170509.html) [2017-05-09]{.small}

April was a relatively quiet month, but with two main efforts: Timewarrior 1.1.0
bug fixing, and deployment of our Flod CI system for all projects.

Flod CI is now operating on five platforms (more coming soon), for every commit
on every branch for every project. This transition allowed us to decommission
several old machines.

![](/news/images/tw.png){.img-responsive}

#### [Code Repositories Moved](/news/news.20170402.html) [2017-04-02]{.small}

The code repositories have been relocated to our new
[Gitea](https://gitea.io/en-US/) server.

Gitea is a community managed fork of Gogs, lightweight code hosting solution
written in Go and published under the MIT license. We like all of those things.

You can browse all our repositories here:

~~`https://git.tasktools.org`~~

##### Update [2018-02-18]{.small}

The code repositories have been relocated to our new
[GitHub](https://github.com).

You can browse all our repositories here:

[`https://github.com/GothenburgBitFactory`](https://github.com/GothenburgBitFactory)

#### [Activity Digest: March 2017](/news/news.20170401.html) [2017-04-01]{.small}

Timewarrior bug fixes are bringing the 1.1.0 release closer. We are down to 7
open issues currently needing to be fixed.

Taskwarrior is undergoing big changes to incorporate the new recurrence
features. This leads to instability, so if anyone is using the 2.6.0 development
branch, this would be a good time to stop.

The Taskwarrior 2.6.0 branch has a `stable` tag which indicates the last commit
where all tests passed on all platforms.

The libshared project got a major update to the date and duration handling
features, fixing bugs and providing a consistent implementation for Taskwarrior
and Timewarrior to use.

#### [HELLOTUX Shirts](/news/news.20170308.html) [2017-03-08]{.small}

We\'d like to thank [HELLOTUX](https://www.hellotux.com/) for doing a fantastic
job designing embroidered apparel for Taskwarrior fans. This is the real thing -
quality embroidery, not merely printed.

![](/news/images/shirt.png){.img-responsive}

The Taskwarrior project receives some money for each item sold.

#### [Activity Digest: February 2017](/news/news.20170301.html) [2017-03-01]{.small}

![](/news/images/perbacco.png){.img-responsive}

[The team attended FOSDEM](news.20170208.html) in Brussels, all meeting for the
first time. No one was hurt. Although we had hoped to accomplish a lot during
this time, we instead fell in love with a certain restaurant and Belgian beer.

We would like to welcome Thomas Lauf, who is now pushing to the Timewarrior
repository, and Timewarrior is now being fixed and improved at a much faster
rate. Welcome, Thomas.

The flod2 CI system is coming online, which means that Taskwarrior is now being
built in parallel by two CI systems as we prepare for a more general transition.

-   ~~Taskwarrior 2.6.0 on Flod~~

A generous donation from [DigitalOcean](https://www.digitalocean.com) is making
this possible.

#### [Activity Digest: January 2017](/news/news.20170209.html) [2017-02-09]{.small}

The rat parser is now mostly complete, and ready to take on the syntax of the
rules system.

The [Taskwarrior bug
database](https://github.com/GothenburgBitFactory/taskwarrior/issues) haѕ had
another cleanup pass that removed obsolete or accidentally fixed issues.

The flod2 CI system is now online and is about to begin processing builds
instead of the old flod system. Both system will be online until the switchover
is complete.

Finally, the team spent a little time getting ready for FOSDEM.

[FOSDEM 2017: Reprise](/news/news.20170208.html) [2017-02-08]{.small}

It was the first time the whole Taskwarrior Team met in carbon space.

What do you get when people from the US, the Czech Republic, Germany, Sweden und
Switzerland meet for the first time?

[FOSDEM 2017: Taskwarrior Presence](/news/news.20170113.html)
[2017-01-13]{.small}

The Taskwarrior Team will be attending [FOSDEM 2017](https://fosdem.org/2017/)
on February 4th and 5th in Brussels.

There is no better opportunity to register your complaints directly and receive
your own personalized sincere apology and refund.

We should be easily recognizable: that far-away look in our eyes, logo stickers,
beer and of course, no mouse.

Find us, talk to us. We\'d love to hear what you think.

#### [Activity Digest: December 2016](/news/news.20170102.html) [2017-01-02]{.small}

Both Taskwarrior and Taskserver improved GnuTLS support, in particular with more
robust certificate validation, and error reporting/logging.

The rat parser is now handling complex grammars, such as the clog configuration
file, and will later be used to handle command line parsing in all projects.

The Taskwarrior overhaul of recurrence features has begun, which will culminate
in the 2.6.0 release with new types of recurring tasks.

\...

#### [In-House Talk and Workshop at TNG Technology Consulting](/news/news.20161209.html) [2016-12-09]{.small}

\
[![TNG Technology
Consulting](/news/images/tng.png){.img-repsonsive}](https://www.tngtech.com)\
\

TNG Technology Consulting GmbH, of Unterföhring Germany, hosted an internal
event \"Techday\" on December 9th, which is a regular occurrence at TNG.

TNG invited Dirk Deimeke to attend and give a talk and workshop, where he
discussed Taskwarrior and related projects, with a workshop that covered a lot
of functionality.

\...

#### [Activity Digest: November 2016](/news/news.20161203.html) [2016-12-03]{.small}

The focus has been on migrating code back to libshared.git, and in turn making
use of that code. This not only shrinks the size of the projects, but means that
bug fixes in libshared.git benefit all projects, and reduces effort.

\...

#### [Resolving with dnsimple](/news/news.20161116.html) [2016-11-16]{.small}

Since a couple of weeks ago the resolving of our hostnames and domains is
handled via services of dnsimple. They are kindly enough to sponsor the
taskwarrior project. We will not only profit from the *developer friendly*
management console but in particular from the powerful API to handle our DNS
tasks when we move towards our new CI system *flod2*. Please check them out
under [dnsimple.com](https://dnsimple.link/resolving-taskwarrior).

#### [Activity Digest: October 2016](/news/news.20161102.html) [2016-11-02]{.small}

Flod2 is now being rolled out for testing. This is a CI system rewrite that
eliminates build server daemons and the pull model. This will allow greater use
of virtual machines, and more automation. For example, we will now be able to
automatically generate coverage reports and snapshot tarballs, based on build
characteristics.

\...

#### [Activity Digest: September 2016](/news/news.20161002.html) [2016-10-02]{.small}

Tasksh 1.1.0 released, Anomaly 1.1.0 released. Flod2 is a major update that
greatly improves speed and reliability of the CI system. It is working well, and
will be rolled out in October, with new features and greater automation.

\...

#### [Tasksh 1.1.0 Released](news.20160905.2.html) [2016-09-05]{.small}

Tasksh 1.1.0 is release, with an interactive review feature, ability to execute
shell commands, and bug fixes. This release is a recommended upgrade.

Here is a quick demo of the review feature:

\...

#### [Activity Digest: August 2016](/news/news.20160905.html) [2016-09-05]{.small}

August saw a lot of documentation updates and preparation for the release of
Timewarrior 1.0.0 and FrOSCon 2016. Focus then shifted to finishing up Tasksh
1.1.0 work.

\...

#### [FrOSCon 2016 Materials Online](/news/news.20160824.html) [2016-08-24]{.small}

![](/news/images/froscon.jpg){.img-responsive} [Photo: [Sujeevan
Vijayakumaran](https://twitter.com/svijee)]{.small}

Materials presented by [Dirk Deimeke](https://www.deimeke.net/dirk/blog/) at
[FrOSCon 2016](https://www.froscon.de/) are now online, as promised:

\...

#### [Timewarrior 1.0.0 Released](/news/news.20160821.html) [2016-08-21]{.small}

Timewarrior 1.0.0 is released. Timewarrior tracks your time from the command
line, and generates reports. Your data is stored locally in clear text.
Integrates with Taskwarrior.

![](/news/images/ti.png){.img-responsive}

\...

#### [FrOSCon 2016 - Taskwarrior Coverage](/news/news.20160813.html) [2016-08-13]{.small}

Taskwarrior will be well-represented at [FrOSCon 2016](https://www.froscon.de),
on August 20th and 21st, at the Bonn-Rhein-Sieg University of Applied Sciences.

Dirk Deimeke will be presenting a series of related workshops and lectures:

**August 20th**\
Project Room\
C130

10:00 - 12:30

Workshop: [Compile Taskwarrior and
Taskserver](https://programm.froscon.de/2016/events/1876.html)

14:00 - 15:00

Lecture: [Introduction to
Timewarrior](https://programm.froscon.de/2016/events/1877.html)

15:15 - 16:15

Lecture: [Taskwarrior
Universe](https://programm.froscon.de/2016/events/1878.html)

16:30 - 17:30

Lecture: [Contribute to
Taskwarrior](https://programm.froscon.de/2016/events/1879.html) (including FAQ,
FOQ, Lessons learned)

**August 21st**\
Main Workshop Room\
C115

10:00 - 12:00

Workshop: [Introduction to
Taskwarrior](https://programm.froscon.de/2016/events/1702.html)

\...

#### [Activity Digest: July 2016](/news/news.20160810.html) [2016-08-10]{.small}

July was spent mostly getting Timewarrior ready for beta.

\...

#### [Timewarrior 1.0.0 Beta Release](/news/news.20160725.html) [2016-07-25]{.small}

Timewarrior 1.0.0 is in beta! Please download and give us feedback.

Download here:\
[timew-1.0.0.tar.gz](/download/timew-1.0.0.tar.gz)\

Online documentation here:\
[Timewarrior Documentation Home](https://timewarrior.net/docs.html)

\...

#### [Activity Digest: June 2016](/news/news.20160707.html) [2016-07-07]{.small}

The main focus for June is getting [Timewarrior](https://timewarrior.net) ready
for an alpha, and subsequent beta release. The purpose of an alpha release is to
gather feedback that guides the subsequent beta release. Timewarrior is a new
project that introduces new concepts. This new functionality needs to be refined
before a beta release.

The [Timewarrior bug
tracker](https://github.com/GothenburgBitFactory/timewarrior/issues) is now open
for business.

\...

#### [Clog 1.3.0 Release](/news/news.20160627.html) [2016-06-27]{.small}

Clog 1.3.0 is released, with regular expression improvements, bug fixes, rule
precedence and overlapping match support. This release is a recommended upgrade.

The release is immediately available as a source tarball
[clog-1.3.0.tar.gz](https://gothenburgbitfactory.org/download/clog-1.3.0.tar.gz).

Clog has a full set of [online documentation](/docs/clog).

\...

#### [Timewarrior 0.9.5 Alpha Release](/news/news.20160620.html) [2016-06-20]{.small}

Timewarrior 0.9.5 is in alpha! Please download and give us feedback.

Download here:\
[timew-1.0.0.tar.gz](/download/timew-1.0.0.tar.gz)\
(Edit: Updated to beta tarball)

Online documentation here:\
[Timewarrior Documentation Home](https://timewarrior.net/docs.html)

#### [Activity Digest: May 2016](/news/news.20160604.html) [2016-06-04]{.small}

The main focus for May is getting [Timewarrior](https://timewarrior.net) ready
for an alpha release. The purpose of an alpha release is to gather feedback that
guides the subsequent release. Timewarrior is a new project that introduces new
concepts. This new functionality needs to be refined before a beta release.

The [Timewarrior bug
tracker](https://github.com/GothenburgBitFactory/timewarrior/issues) is now open
for business.

Additionally the `libshared` library is being improved. This is a Git submodule
that nearly all the projects share, and helps with code reuse. Most importantly,
fixing bugs in `libshared` will fix bugs in all projects, without a lot of
manual patching.

\...

#### [Taskwarrior Tools Search](/news/news.20160522.html) [2016-05-22]{.small}

The [Taskwarrior Tools page](/tools/) now has interactive categorized search
capabilities, thanks to a significant contribution by Bruno Vernay. We encourage
you to take a look.

This feature is driven by automated [Github](https://github.com) data
extraction, which identifies taskwarrior-related projects and finds their
metadata.

\...

#### [Timewarrior Preview](/news/news.20160514.html) [2016-05-14]{.small}

Timewarrior is coming soon. Here is a peek at the work in progress.

#### [Activity Digest: April 2016](/news/news.20160501.html) [2016-05-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in April 2016.

\...

#### [Taskwarrior running under \"Bash on Ubuntu on Windows\"](/news/news.20160407.html) [2016-04-07]{.small}

Today we could verify that Taskwarrior works out of the box under \"Bash on
Ubuntu on Windows 10\". Either by installing it via apt-get (which pulls the
regular Ubuntu package) or by compiling it. No changes needed to the source
code. You compile it as you would do it on native Ubuntu. A few tests were
failing. But no major ones. Enjoy the screenshot and enjoy the thoughts of being
able to abandon Cygwin soon, if you are using Taskwarrior on Windows.

[![Bash on Ubuntu on
Windows](/news/images/win10-thumb.png){.img-thumbnail}](/news/images/win10.png)

\...

#### [Activity Digest: March 2016](/news/news.20160401.html) [2016-04-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in March 2016.

\...

#### [Activity Digest: February 2016](/news/news.20160301.html) [2016-03-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in February 2016.

\...

#### [Taskwarrior for Android Released](/news/news.20160225.html) [2016-02-25]{.small}

Author Konstantin Vorobyev has created an Android client with Syncing and many
other features.

[![Taskwarrior for
Android](/news/images/twa1.png){.img-thumbnail}](/news/images/twa1.png)

\...

#### [Taskwarrior 2.5.1 Released](/news/news.20160224.html) [2016-02-24]{.small}

Taskwarrior 2.5.1 is released. Although this is a minor release, it contains
many bug fixes and performance enhancements. There have been a lot of changes.
Here are the new features:

-   Nope

There aren\'t any, this is a bug fix and performance release.

\...

#### [Taskwarrior Workflow Study](/news/news.20160209.html) [2016-02-09]{.small}

Taskwarrior aims to provide a toolkit of various capabilities, which can be
cherry-picked to support many custom methodologies.

We have learned over the years that everyone uses it differently, and for
different things. There is a lot to be learned from how someone uses software,
the features they use, and the ones they do not.

\...

#### [Taskwarrior 2.5.1 Beta Released](/news/news.20160205.html) [2016-02-05]{.small}

This release is a bug-fix, code cleanup and performance release only. There are
no new features, but the existing features all work a little more reliably, and
a lot faster.

\...

#### [Activity Digest: January 2016](/news/news.20160201.html) [2016-02-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in January 2016.

\...

#### [Activity Digest: December 2015](/news/news.20160101.html) [2016-01-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in December 2015.

\...

#### [Activity Digest: November 2015](/news/news.20151201.html) [2015-12-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in November 2015.

\...

#### [Cygwin Package Maintainer Needed](/news/news.20151101.2.html) [2015-11-01]{.small}

We're looking for someone to assume the responsibility of packaging Taskwarrior
etc for Cygwin.

Cygwin doesn't get the care and attention from us that it should. We often skip
releasing on Cygwin because we don't have the equipment and must borrow it, and
furthermore don't use Cygwin day to day, so every package update involves a full
install, and it takes hours.

\...

#### [Activity Digest: October 2015](/news/news.20151101.html) [2015-11-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in October 2015.

\...

#### [Taskwarrior Mailing Lists](/news/news.20151029.html) [2015-10-29]{.small}

The Taskwarrior user and developer mailing lists are back in play. Subscribe and
talk to us:

-   User Discussions:
    <https://groups.google.com/forum/#!forum/taskwarrior-user>.
-   Developer Discussions:
    <https://groups.google.com/forum/#!forum/taskwarrior-dev>.

#### [Taskwarrior 2.5.0 Released](/news/news.20151021.html) [2015-10-21]{.small}

After an intense five months which focused mainly on a more capable command-line
parser, more extension-friendly behavior, and significant improvements to
testing, Taskwarrior 2.5.0 is now released.

This is a major release, with 1300+ code changes and well over a hundred bug
fixes. We recommend all users upgrade, this release represents a significant
increase in quality.

#### [Taskwarrior 2.5.0 beta3 Released](/news/news.20151017.html) [2015-10-17]{.small}

A new beta3 is available for the upcoming 2.5.0 release.

#### [Clog 1.2.1 Released](/news/news.20151012.html) [2015-10−12]{.small}

Clog 1.2.1 is released, due to a problem with OSX and Xcode 7.

The release is immediately available as a source tarball
[clog-1.2.1.tar.gz](https://gothenburgbitfactory.org/download/clog-1.2.1.tar.gz).

Clog is a colorized log tail utility. It can spot patterns in an input stream
and colorize or suppress the lines. It can also decorate the lines with time- or
date-stamps.

#### [Activity Digest: September 2015](/news/news.20151001.html) [2015-10-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in September 2015.

\...

#### [answers.tasktools.org Online](/news/news.20150929.html) [2015-09-29]{.small}

The ~~`answers.tasktools.org`~~ site is online, and providing not only the
answer to your question, but those of many before you. It is becoming a valuable
resource for both beginners and experienced users.

[![answers.tasktools.org](/news/images/answers.png){.img-thumbnail}](/news/images/answers.png)

#### [Clog 1.2.0 Released](/news/news.20150927.html) [2015-09−27]{.small}

Clog 1.2.0 is released, with regular expression improvements and bug fixes.

The release is immediately available as a source tarball
[clog-1.2.0.tar.gz](https://gothenburgbitfactory.org/download/clog-1.2.0.tar.gz).

Clog is a colorized log tail utility. It can spot patterns in an input stream
and colorize or suppress the lines. It can also decorate the lines with time- or
date-stamps.

#### [Vramsteg 1.1.0 Released](/news/news.20150926.html) [2015-09-26]{.small}

Vramsteg 1.1.0 is released, with bug fixes and 64-bit value support.

The release is immediately available as a source tarball
[vramsteg-1.1.0.tar.gz](https://gothenburgbitfactory.org/download/vramsteg-1.1.0.tar.gz).

Vramsteg, from the Swedish framsteg (progress), is a CLI progress bar that can
be used from any script language. It supports color, labels, percentage
completion, elapsed time and estimates.

#### [Taskwarrior 2.5.0 beta2 Released](/news/news.20150916.html) [2015-09-16]{.small}

A new beta2 is available for the upcoming 2.5.0 release.

#### [Taskwarrior 2.5.0 beta1 Released](/news/news.20150907.html) [2015-09-07]{.small}

After an intense four month effort, which focused mainly on a more capable
command-line parser, more extension-friendly behavior, and significant
improvements to testing, Taskwarrior 2.5.0 beta1 is now released.

We are asking you to please [build](/docs/build.html) and test this release in
your environment.

This is a major release, with about 1100 code changes and a hundred or so bug
fixes, but still resulting in a smaller codebase.

There have been a lot of changes. Here are the highlights:

\...

#### [Activity Digest: August 2015](/news/news.20150901.html) [2015-09-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in August 2015.

\...

#### [Activity Digest: July 2015](/news/news.20150801.html) [2015-08-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in July 2015.

\...

#### [Activity Digest: June 2015](/news/news.20150701.html) [2015-07-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in June 2015.

\...

#### [GTD With Taskwarrior - a tutorial series](/news/news.20150627.html) [2015-06-27]{.small}

Tom Sydney Kerckhove is writing a series of articles, explaining how he uses GTD
with Taskwarrior. The first three articles are up:

[Part1 -
Intro](https://cs-syd.eu/posts/2015-06-14-gtd-with-taskwarrior-part-1-intro.html)\
[Part2 -
Collection](https://cs-syd.eu/posts/2015-06-21-gtd-with-taskwarrior-part-2-collection.html)\
[Part3 -
Tickling](https://cs-syd.eu/posts/2015-06-28-gtd-with-taskwarrior-part-3-tickling.html)\
[Part4 -
Processing](https://cs-syd.eu/posts/2015-07-05-gtd-with-taskwarrior-part-4-processing.html)\
[Part5 -
Doing](https://cs-syd.eu/posts/2015-07-12-gtd-with-taskwarrior-part-5-doing.html)

\...

#### [Activity Digest: May 2015](/news/news.20150601.html) [2015-06-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in May 2015.

\...

#### [Taskwarrior Live Demo](/news/news.20150524.html) [2015-05-24]{.small}

Try Taskwarrior [live in your browser](https://wbsch.de/jswarrior/).

[![Live
Demo](/news/images/live_demo-thumb.png){.img-thumbnail}](/news/images/live_demo.png)

#### [Taskserver 1.1.0 Released](/news/news.20150511.html) [2015-05-11]{.small}

After more than a year of improvements, Taskserver 1.1.0 is released.

This is a major release, with greatly improved setup, security and logging,
which make this a recommended upgrade. Changes include:

#### Configuration

-   New setup helper script, `setup_server.bash`, which interactively leads the
    whole setup and configuration process.
-   When hosting, the configured server name is no longer ignored.
-   Taskserver can now be restricted to IPv4 or IPv6.
-   New man page for `taskdctl`.
-   Server now supports a configuration setting `trust`, which can be either
    `strict` or `allow all`, and defaults to `strict`.

\...

#### [Taskwarrior 2.4.4 Released](/news/news.20150510.html) [2015-05-10]{.small}

Taskwarrior 2.4.4 is released. Although a minor release, there are significant
bug fixes which make this a recommended upgrade. Changes include:

-   Fixed a problem where the wrong task may be updated, if GC is disabled. This
    is the primary reason for the release.
-   Fixed a problem where filters including parenthesized tags
    (`... and (+DUE or +OVERDUE)`) were incorrectly handled.
-   32-bit platform support.
-   The `obfuscate` configuration setting will hide private data, intended for
    bug reporting.
-   An early Japanese localization.
-   Several bug fixes.

For full details, see the ChangeLog file included in the release.

\...

#### [Tasksh in Homebrew](/news/news.20150509.html) [2015-05-09]{.small}

Tasksh, the Taskwarrior Shell, can now be installed using
[Homebrew](https://brew.sh) on the Mac:

    $ brew install tasksh

This means that all three related Taskwarrior family members can now be
installed via Homebrew:

    $ brew install task
    ...
    $ brew install taskd
    ...
    $ brew install tasksh
    ...

\...

#### [Taskserver 1.1.0 beta1 Released](/news/news.20150504.html) [2015-05-04]{.small}

Taskserver 1.1.0 is in beta, and we are asking you to please test this release
in your environment. See https://taskwarrior.org/docs/taskserver/upgrade.html
for instructions to upgrade your server.

There have been a few changes:

\...

#### [Activity Digest: April 2015](/news/news.20150430.html) [2015-04-30]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in April 2015.

\...

#### [Taskwarrior 2.4.3 Released](/news/news.20150419.html) [2015-04-19]{.small}

Taskwarrior 2.4.3 is released. This release contains the Hooks API v2, and
several bug fixes. This is a recommended upgrade.

User Defined Attributes ([UDAs](/docs/udas.html)) have been enhanced so that
type `string` attributes may now designate the sort order of allowed values.
This enhancement permits the migration of the `priority` attribute to a UDA.
This means you may now define your own priority levels, sorting and urgency
coefficients.

\...

#### [Activity Digest: March 2015](/news/news.20150331.html) [2015-03-31]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in March 2015.

\...

#### [Taskwarrior 2.4.2 Released](/news/news.20150315.html) [2015-03-15]{.small}

Taskwarrior 2.4.2 is released. This is primarily a bug fix release to address a
bad hook problem that prevented on-modify hooks from modifying tasks.

Additionally the new `context` command is included, as are updated themes with
higher contrast. Although this is a minor release, there are significant bug
fixes and new features make this a recommended upgrade. Changes include:

\...

#### [Activity Digest: February 2015](/news/news.20150301.html) [2015-03-01]{.small}

This is the second of an ongoing series of activity reports, published monthly,
to highlight activity in the Taskwarrior project. Here is what happened in
February 2015.

\...

#### [Taskwarrior 2.4.1 on Cygwin 32 and 64 bit](/news/news.20150228.html) [2015-02-28]{.small}

Taskwarrior 2.4.1 is now available in binary and source package form for both
Cygwin 32-bit and 64-bit systems.

This release represents the first sync-capable Taskwarrior release on the Cygwin
platform. This exposes our Cygwin users to new online services, such as:

\...

#### [Taskwarrior 2.4.1 Released](/news/news.20150216.html) [2015-02-16]{.small}

Taskwarrior 2.4.1 is released. Although this is a minor release, there are
significant bug fixes and Hook support improvements that make this a recommended
upgrade. Changes include:

\...

#### [Activity Digest](/news/news.20150207.html) [2015-02-07]{.small}

This is the first of an ongoing series of activity reports, published monthly,
to highlight activities in the Taskwarrior project. Here is what happened in
January 2015.

\...

#### [Date & Time Support](/news/news.20150103.html) [2015-01-03]{.small}

Taskwarrior 2.4.0 supports many new date & time formatting options. These are
all documented in the new [Date & Time](/docs/dates.html) page. Here is a small
sample:

[![ISO Date
Demo](/news/images/iso_date.png){.img-thumbnail}](/news/images/iso_date.png)

#### [Taskwarrior 2.4.0 Released](/news/news.20150101.html) [2015-01-01]{.small}

Taskwarrior 2.4.0 is released, it\'s a major release, and a recommended upgrade.
Happy new year.

After almost a year of development, 108 bug fixes, 47 new/improved features,
1,750 code changes and over 50 community-provided patches, version 2.4.0
represents a significant improvement to task list management. Changes include:

\...

#### [Tasksh 1.0.0 Released](/news/news.20141221.html) [2014-12-21]{.small}

The taskwarrior shell, tasksh 1.0.0, is released.

Up to, and including, Taskwarrior 2.3.0, the `shell` command implemented this
functionality. Starting with Taskwarrior 2.4.0, there is no `shell` command.
Instead there is the `tasksh` project.

[![Tasksh
Demo](/news/images/tasksh.png){.img-thumbnail}](/news/images/tasksh.png)

\...

#### [Taskwarrior 2.4.0 beta3](/news/news.20141111.html) [2014-11-11]{.small}

A new beta 3 for Taskwarrior 2.4.0 is now available as a source ~~tarball~~.

\...

#### [Sort Column Indicator](/news/news.20141025.html) [2014-10-25]{.small}

In the upcoming Taskwarrior 2.4.0, there is now the ability to apply a different
color to the columns of a report that are part of the sort key.

[![Sort Columns
Demo](/news/images/sort.png){.img-thumbnail}](/news/images/sort.png)

\...

#### [Taskwarrior 2.4.0 beta2](/news/news.20141011.html) [2014-10-11]{.small}

A new beta 2 for Taskwarrior 2.4.0 is now available as a source ~~tarball~~.

\...

#### [Cloud Server Reboots](/news/news.20140928.html) [2014-09-28]{.small}

Rackspace has announced that it will reboot all of its cloud server
infrastructure joining other hosting providers. The data center we are hosted in
is the third in the row of IAD, DFW and ORD. The announced maintenance window is
from 2014-09-28 1100 UTC to 2014-09-29 1101 UTC. This will cause interruptions
here at taskwarrior.org. You can follow the status at ~~`status.tasktools.org`~~
and read more on global reboot at [Rackspace\' status
site](https://status.rackspace.com).

#### [Taskwarrior 2.4.0 beta1](/news/news.20140915.html) [2014-09-15]{.small}

Taskwarrior 2.4.0 is in beta, and available as a source ~~tarball~~.

-   Calc command `task calc '1 + 1'` Hint: it\'s \'2\', but it\'s a beta, so who
    knows? And yes, it can do more than that.
-   Enhanced DOM support `task add due:123.due`
-   Date math `task add ... due:eom wait:'due - 1week'`
-   Unicode: `task add \\u2615`
-   \...

#### [Fish Shell Completion Demo](/news/news.20140906.html) [2014-09-06]{.small}

Taskwarrior 2.4.0 will be released with a new and fully updated Fish shell
completion script, from Roman Inflianskas. Here is a demo gif that Roman put
together.

[![Fish Completion
Demo](/news/images/fish.gif){.img-thumbnail}](/news/images/fish.gif)

\...

#### [Development Status](/news/news.20140816.html) [2014-08-16]{.small}

Development is shifting focus for Taskwarrior and Taskserver. No more features
will be added, and completeness, stability and testing become the new focus.

The goal is to work towards good beta releases for Taskwarrior 2.4.0, Taskserver
1.1.0 and Tasksh 1.0.0. \...

#### [Taskwarrior 2.4.0 Preview](/news/news.20140704.html) [2014-07-04]{.small}

The Taskwarrior 2.4.0 development branch has been unusable for a a few weeks
([mentioned here](/news/news.20140524.html)) while new functionality was
integrated. It has been a long process, with about 750 commits made so far, but
now all the tests are passing again.

Does this mean it\'s ready for alpha and beta? No, not yet, because now there is
a need for a lot of new tests to cover all the new functionality. This is the
next phase of cycle, improving tests, fixing open bugs, and updating
documentation.

Now it\'s time for a preview of some of the new features\...

#### [Vit 1.2 in homebrew](/news/news.20140607.html) [2014-06-07]{.small}

The recently released [Vit 1.2](/news/news.20140406.html) is now available from
Homebrew.

[Homebrew](https://brew.sh/) is \"The missing package manager for OSX\", and
includes recipes for several thousand packages. If you wish to install Vit
easily on OSX, you simply update your brew recipes and install Vit like this:

    $ brew update
    ...
    $ brew install vit
    ...

#### [Taskwarrior 2.4.0 Development Status](/news/news.20140524.html) [2014-05-24]{.small}

Taskwarrior 2.4.0 is in development. The main feature of this release is a new
command line parser, and some related features such as expression evaluation and
ISO-8601 date support. This is a major undertaking, but the reward will be some
very nice new features.

Until now this work, on the 2.4.0 branch in the code repository has been
carefully done so as to not completely break functionality. There are currently
24 failing tests, mostly regarding newly added capabilities. \...

#### [Swiss Ubucon Taskwarrior Workshop](/news/news.20140510.html) [2014-05-10]{.small}

On Saturday May 10th 2014, Dirk Deimeke presented a Taskwarrior workshop at
[Swiss Ubucon](https://wiki.ubuntu.com/SwissTeam/).

Dirk presented a live demo, with a handout PDF (which we will link here soon)
that covers every aspect including downloading, building, installing, setup,
first use, all the way to some of the more complex use cases. \...

#### [Teaching the Parser New Tricks](/news/news.20140429.html) [2014-04-29]{.small}

With Taskwarrior version 2.4.0, we are building a better command line parser. In
addition to fixing a lot of annoying little bugs, we would like it to be more
flexible and robust. That means it will be able to handle more strange inputs
than before, but can it do better?

#### [Taskserver Documentation Update](/news/news.20140412.html) [2014-04-12]{.small}

The Taskserver setup documentation has been significantly improved. The main
setup page is:

[Setting up your own Taskserver](/docs/taskserver/setup.html)

The sub pages now cover single topics: \...

#### [Q & A Site Launched](/news/news.20140407.html) [2014-04-07]{.small}

The new Q & A site is live! Take a look at the site, which can be found here:

~~`https://answers.tasktools.org`~~

There is a searchable knowledge base of community-provided questions and
answers. The answers are voted and selected, good answers becomes more
prominent, bad answers sink lower. You know how it works. \...

#### [Vit 1.2 is released](/news/news.20140406.html) [2014-04-06]{.small}

Version 1.2 of the VIT front-end for Taskwarrior is available for download now.

Download here: [vit-1.2.tar.gz](/download/vit-latest.tar.gz).

See the [VIT 1.2 beta1
announcement](https://taskwarrior.org/news/news.20140220.html) for the features
introduced in 1.2. \...

#### [System Status Pages](/news/news.20140309.html) [2014-03-09]{.small}

New system status pages are online, which provide up to the minute status for
the various services now online. The first is a Pingdom public report showing
system status of the bug system, git hosting, web services and others. Check
this page for outages.

The second is an operations information page from
[StatusPage.io](https://statuspage.io/) which shows status, uptime, response
time and incidents. \...

#### [Atlassian Licences](/news/news.20140303.html) [2014-03-03]{.small}

We have received the very generous donation of software licences from Atlassian.
This allows us to fully utilize Jira, Stash and Confluence Questions giving us
high quality, integrated infrastructure, which in \...

#### [New Site Live](/news/news.20140227.html) [2014-02-27]{.small}

We have shut off the old website, and replaced it with this. Although this site
is a fraction of the size, it nevertheless has much less redundancy, and no
obsolete documents. \...

#### [Registrations Disabled](/news/news.20140226.html) [2014-02-26]{.small}

We have shut off the registration of users on this site. This is part of our
ongoing migration to new systems. This taskwarrior.org site content will be
replaced soon, but the URLs will not change. \...

#### [VIT 1.2 beta1 is available](/news/news.20140220.html) [2014-02-20]{.small}

Beta1 of the VIT front-end for Taskwarrior is available for download now.
Download here: ~~vit-1.2.beta1.tar.gz~~. VIT 1.2 brings a customizable way to
interact with your tasks with user-defined shortcuts. You can now define keys to
launch external \...

#### [Server Migration](/news/news.20140217.html) [2014-02-17]{.small}

As we migrate to our new servers, you\'ll find that the services are being
migrated first, and the content follows after. We are taking this opportunity to
reorganize everything\...

#### [Git Migration](/news/news.20140212.html) [2014-02-12]{.small}

The new repository manager, Stash, is running on the new server
~~`https://git.gothenburgbitfactory.org`~~. The old server will still be active
for a little while longer, but \...

::: {#footer}
::: {.container}
::: {.col-md-2}
Get Involved\
[Submit a bug](https://github.com/GothenburgBitFactory/taskwarrior/issues)\
[Clone the code](https://github.com/GothenburgBitFactory/taskwarrior)
:::

::: {.col-md-2}
Related Sites\
[gothenburgbitfactory.org](https://gothenburgbitfactory.org)\
[holidata.net](https://holidata.net)
:::

::: {.col-md-2}
Contact\
[[]{.glyphicon .glyphicon-envelope} Email](mailto:support@taskwarrior.org)\
[![](/images/twitter_dark.png){width="16px" height="16px"}
Twitter](https://twitter.com/taskwarrior)
:::

::: {.col-md-2}
Donate\
[Sponsor us on Github
sponsors!](https://github.com/sponsors/GothenburgBitFactory)
:::

::: {.col-md-2}
Copyright &copy: 2018 [Göteborg Bit Factory](/about.html)
:::
:::
:::
