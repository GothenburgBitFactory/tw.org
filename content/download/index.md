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
Download source tarball or access code repository here.
:::

::: {.col-md-10 .main}
::: {.row}
::: {.col-md-2 .main}
**Download**
:::

::: {.col-md-10 .main}
**Latest stable release:**

**taskwarrior 2.5.3** (Released 2021-01-03):
[task-2.5.3.tar.gz](/download/task-2.5.3.tar.gz){.piwik_download}\
SHA1 ba1a3cbc5903979755d47f724d14ebeff40b6c81\
[Changelog](https://github.com/GothenburgBitFactory/taskwarrior/blob/master/ChangeLog)

**taskd server 1.1.0** (Released 2015-05-10):
[taskd-1.1.0.tar.gz](/download/taskd-1.1.0.tar.gz)\
SHA1 ded339deeee65277e4712f71a9159502f8b20b52\
[Changelog](https://github.com/GothenburgBitFactory/taskserver/blob/master/ChangeLog)

Command reference taskwarrior 2.5.3:
[task-2.5.3.ref.pdf](/download/task-2.5.3.ref.pdf)

See [supported platforms](#dist) for operating systems.
:::
:::

::: {.row}
### 

::: {.col-md-2 .main}
**Quick Setup**
:::

::: {.col-md-10 .main}
Build the task program according to the directions in the INSTALL file. This
transcript illustrates a typical installation:

    $ ls
    task-2.5.3.tar.gz
    $ tar xzvf task-2.5.3.tar.gz
    $ cd task-2.5.3
    $ cmake -DCMAKE_BUILD_TYPE=release .
    ...
    $ make
    ...
    $ sudo make install

(Please note, that Cygwin is not supported anymore. Please use the Windows
Subsystem for Linux to use Taskwarrior on Windows).

Ensure that the installed task program is in your PATH environment variable. On
startup, task will check to see if it can find the configuration file and task
directory, and if not found, will ask you whether it may create both.
:::
:::

::: {.row}
### 

::: {.col-md-2 .main}
**Distributions**
:::

::: {.col-md-10 .main}
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Distribution                                                                            Command                                                            Available since
  --------------------------------------------------------------------------------------- ------------------------------------------------------------------ --------------------------
  [Debian sid](https://packages.debian.org/sid/utils/taskwarrior)                         `sudo apt-get install taskwarrior`                                 Debian sid

  [Debian](https://backports.debian.org/Instructions/)                                    `sudo apt-get install taskwarrior`                                 7.x Wheezy

  [Ubuntu](https://packages.ubuntu.com/search?keywords=taskwarrior)                       `sudo apt-get install taskwarrior`                                 10.10 Maverick Meerkat

  [Fedora](https://apps.fedoraproject.org/packages/task)                                  `yum install task`                                                 Fedora 18

  Red Hat Enterprise Linux                                                                task has been submitted to the EPEL repositories of Fedora. Please \-
                                                                                          refer to the [EPEL                                                 
                                                                                          documentation](https://fedoraproject.org/wiki/EPEL/FAQ#howtouse)   

  [OpenSUSE](https://software.opensuse.org/package/taskwarrior?search_term=taskwarrior)   `zypper install taskwarrior`                                       openSUSE 12.2

  [Archlinux](https://www.archlinux.org/packages/community/x86_64/task/)                  `pacman -S task`                                                   \-

  [Slackware](https://slackbuilds.org/repository/14.0/office/task/)                       `sbopkg -i task`                                                   13.0

  [Gentoo](https://packages.gentoo.org/package/app-misc/task)                             `emerge task`                                                      \-

  [Sabayon](https://www.sabayon.org/)                                                     `sudo equo install task`                                           \-

  [FreeBSD](https://www.freshports.org/deskutils/taskwarrior)                             To install the port:\                                              \-
                                                                                          `cd /usr/ports/deskutils/taskwarrior/`\                            
                                                                                          `make install clean`\                                              
                                                                                          To add the package:\                                               
                                                                                          `pkg_add -r taskwarrior` (Deprecated)\                             
                                                                                          `pkg install taskwarrior` (Newer releases)                         

  [OpenBSD](https://www.openbsd.org/cgi-bin/cvsweb/ports/productivity/taskwarrior/)       Before 5.8\                                                        \-
                                                                                          `sudo pkg_add -i taskwarrior`\                                     
                                                                                          Version 5.8+\                                                      
                                                                                          `doas pkg_add -i taskwarrior`                                      

  [Mac OS X](https://github.com/Homebrew/homebrew-core/blob/master/Formula/task.rb)       [Homebrew](https://brew.sh/): `brew install task`\                 \-
                                                                                          [Homebrew](https://brew.sh/): `brew install taskd`\                
                                                                                          [Homebrew](https://brew.sh/): `brew install tasksh`\               
                                                                                          [MacPorts](https://www.macports.org/): `port install task`         

  [Cygwin](https://cygwin.com/cgi-bin2/package-grep.cgi?grep=task%2F)                     Add it during setup                                                Windows XP SP3

  [Windows 10](https://www.microsoft.com/en-us/software-download/windows10/)              Bash on Ubuntu on Windows 10:\                                     Windows 10 Insider Preview
                                                                                          `apt-get install task`                                             

  [MSYS2](https://msys2.github.io)                                                        `pacman -S task`                                                   \-

  [NixOS](https://nixos.org/)                                                             `nix-env -i taskwarrior`                                           \-

  [Void](https://voidlinux.org/)                                                          `xbps-install task`                                                \-
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
:::
:::

::: {.row}
### 

::: {.col-md-2 .main}
**Git Repository**
:::

::: {.col-md-10 .main}
Get the whole source and history from our git repository. You will need
[git](https://git-scm.com) installed.

##### Disclaimer:

The `master` branch represents the latest stable release.

All other branches are development branches, and are works in progress and may
not pass all quality tests, therefore may harm your data. While we welcome bug
reports from the development branch, we do not guarantee proper or timely fixes.

-   Broken functionality may arise from ongoing development work
-   Make proper backups
-   Be aware that using the development branch involves risks

```{=html}
<!-- -->
```
    git clone https://github.com/GothenburgBitFactory/taskwarrior.git

Example backup command:

    $ tar czf ~/.task/task-backup-$(date +'%Y%m%d').tar.gz ~/.task/*
:::
:::

::: {.row}
### 

::: {.col-md-2 .main}
**Older Versions**
:::

::: {.col-md-10 .main}
Please [contact us](mailto:support@taskwarrior.org) if you wish to download
prior versions.
:::
:::
:::

::: {.col-md-2 .main}
::: {.alert .alert-warning}
-   [Download](#download){.alert-link}
-   [Quick Setup](#setup){.alert-link}
-   [Distributions](#dist){.alert-link}
-   [Git Repository](#git){.alert-link}
-   [Older Versions](#older){.alert-link}
:::
:::
:::

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
