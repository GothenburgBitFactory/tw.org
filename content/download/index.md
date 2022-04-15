---
title: "Taskwarrior - What's next?"
---

{{< lead >}}Download source tarball or access code repository here.{{< /lead >}}

# Download

## Latest stable release

**taskwarrior 2.6.2** (Released 2022-03-16):
[task-2.6.2.tar.gz](https://github.com/GothenburgBitFactory/taskwarrior/releases/download/v2.6.2/task-2.6.2.tar.gz)  
SHA3 92e547ac6bb88659e674877a19cb88dc9687be2ab989f0279b04f286  
[Changelog](https://github.com/GothenburgBitFactory/taskwarrior/blob/stable/ChangeLog)

**taskd server 1.1.0** (Released 2015-05-10):
[taskd-1.1.0.tar.gz](/download/taskd-1.1.0.tar.gz)  
SHA1 ded339deeee65277e4712f71a9159502f8b20b52  
[Changelog](https://github.com/GothenburgBitFactory/taskserver/blob/master/ChangeLog)

Command reference taskwarrior 2.5.3:
[task-2.5.3.ref.pdf](/download/task-2.5.3.ref.pdf)

See [supported platforms](#distributions) for operating systems.

## Quick Setup

Build the task program according to the directions in the `INSTALL` file.
This transcript illustrates a typical installation:

```
$ ls
task-2.6.2.tar.gz
$ tar xzvf task-2.6.2.tar.gz
$ cd task-2.6.2
$ cmake -DCMAKE_BUILD_TYPE=release .
...
$ make
...
$ sudo make install
```

Please note, that Cygwin is not supported anymore.
Use the Windows Subsystem for Linux to use Taskwarrior on Windows.

Ensure that the installed task program is in your `PATH` environment variable.
On startup, task will check to see if it can find the configuration file and task directory, and if not found, will ask you whether it may create both.

## Distributions

| Distribution                                                                          | Command                                                                                                                                                                                                                     | Available since            |
|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| [Debian sid](https://packages.debian.org/sid/utils/taskwarrior)                       | `sudo apt-get install taskwarrior`                                                                                                                                                                                          | Debian sid                 |
| [Debian](https://backports.debian.org/Instructions)                                   | `sudo apt-get install taskwarrior`                                                                                                                                                                                          | 7.x Wheezy                 |
| [Ubuntu](https://packages.ubuntu.com/search?keywords=taskwarrior)                     | `sudo apt-get install taskwarrior`                                                                                                                                                                                          | 10.10 Maverick Meerkat     |
| [Fedora](https://apps.fedoraproject.org/packages/task)                                | `yum install task`                                                                                                                                                                                                          | Fedora 18                  |
| Red Hat Enterprise Linux                                                              | `task` has been submitted to the EPEL repositories of Fedora.<br/>Please refer to the [EPEL documentation](https://fedoraproject.org/wiki/EPEL/FAQ#howtouse)                                                                | \-                         |
| [OpenSUSE](https://software.opensuse.org/package/taskwarrior?search_term=taskwarrior) | `zypper install taskwarrior`                                                                                                                                                                                                | openSUSE 12.2              |
| [Archlinux](https://www.archlinux.org/packages/community/x86_64/task)                 | `pacman -S task`                                                                                                                                                                                                            | \-                         |
| [Slackware](https://slackbuilds.org/repository/14.0/office/task)                      | `sbopkg -i task`                                                                                                                                                                                                            | 13.0                       |
| [Gentoo](https://packages.gentoo.org/package/app-misc/task)                           | `emerge task`                                                                                                                                                                                                               | \-                         |
| [Sabayon](https://www.sabayon.org)                                                    | `sudo equo install task`                                                                                                                                                                                                    | \-                         |
| [FreeBSD](https://www.freshports.org/deskutils/taskwarrior)                           | To install the port:<br/>`cd /usr/ports/deskutils/taskwarrior/`<br/>`make install clean`<br/>To add the package:<br/>`pkg_add -r taskwarrior` (Deprecated)<br/>`pkg install taskwarrior` (Newer releases)                   | \-                         |
| [OpenBSD](https://www.openbsd.org/cgi-bin/cvsweb/ports/productivity/taskwarrior)      | Before 5.8<br/>`sudo pkg_add -i taskwarrior`<br/>Version 5.8+<br/>`doas pkg_add -i taskwarrior`                                                                                                                             | -                          |
| [Mac OS X](https://github.com/Homebrew/homebrew-core/blob/master/Formula/task.rb)     | [Homebrew](https://brew.sh): `brew install task`<br/>[Homebrew](https://brew.sh): `brew install taskd`<br/>[Homebrew](https://brew.sh): `brew install tasksh`<br/>[MacPorts](https://www.macports.org): `port install task` | \-                         |
| [Cygwin](https://cygwin.com/cgi-bin2/package-grep.cgi?grep=task%2F)                   | Add it during setup                                                                                                                                                                                                         | Windows XP SP3             |
| [Windows 10](https://www.microsoft.com/en-us/software-download/windows10)             | Bash on Ubuntu on Windows 10:<br/>`apt-get install task`                                                                                                                                                                    | Windows 10 Insider Preview |
| [MSYS2](https://msys2.github.io)                                                      | `pacman -S task`                                                                                                                                                                                                            | \-                         |
| [NixOS](https://nixos.org)                                                            | `nix-env -i taskwarrior`                                                                                                                                                                                                    | \-                         |
| [Void](https://voidlinux.org)                                                         | `xbps-install task`                                                                                                                                                                                                         | \-                         |

## Git Repository

Get the whole source and history from our git repository.
You will need [git](https://git-scm.com) installed.

### Disclaimer:

The `master` branch represents the latest stable release.

All other branches are development branches, and are works in progress and may not pass all quality tests, therefore may harm your data.
While we welcome bug reports from the development branch, we do not guarantee proper or timely fixes.

- Broken functionality may arise from ongoing development work
- Make proper backups
- Be aware that using the development branch involves risks

```
$ git clone https://github.com/GothenburgBitFactory/taskwarrior.git
```
Example backup command:

```
$ tar czf ~/.task/task-backup-$(date +'%Y%m%d').tar.gz ~/.task/*
```

### Older Versions

Please [contact us](mailto:support@taskwarrior.org) if you wish to download prior versions.
