---
title: "Taskwarrior - Troubleshooting Sync"
---

# Troubleshooting Sync

Here is a list of problems you may encounter, with the most common ones listed
first. The single most common problem has been that the [Taskserver Setup
Instructions](/docs/taskserver/setup) were not properly followed. Please
review the steps you took.

It is always a good idea to make sure that you are using the latest release of
Taskwarrior and Taskserver, not just because bugs are fixed that may help you,
but also because the solutions below are geared toward the current releases.

If you upgrade from an older release of Taskserver, you will need to follow the
[upgrade instructions](/docs/taskserver/upgrade).


## Problems

+-------------------------------------------------------------------------------+
| [] You tried `task sync` but Taskwarrior |
| showed you a task list instead                                                |
|                                                                               |
| You have a version of Taskwarrior older than `2.3.0`, which means there was   |
| no `sync` command, and you are seeing a list filtered by the search term      |
| \'sync\'. Upgrading is the only solution.                                     |
+-------------------------------------------------------------------------------+
| [] You tried `task sync` and saw         |
| \'Taskwarrior was built without GnuTLS support. Sync is not available.\'      |
|                                                                               |
| You are using version `2.3.0` or later, but the Taskwarrior binary was        |
| compiled without [GnuTLS](https://www.gnutls.org) support.                    |
|                                                                               |
| If you installed Taskwarrior using your OS\'s package manager, you may be     |
| suffering from an out of date package. Prod your OS\'s package maintainer for |
| an update.                                                                    |
|                                                                               |
| Recent releases make GnuTLS support opt-out instead of opt-in, so upgrading   |
| to the latest version may help. Otherwise, you will need to build Taskwarrior |
| from the [latest source tarball](/download/task-latest.tar.gz), following the |
| instructions in the `INSTALL` file. If you are a developer, do that. If you   |
| are not, then installing a development environment is probably not something  |
| you want to do, in which case contact your OS\'s package maintainer.          |
|                                                                               |
| Verify that your Taskwarrior was built with GnuTLS support by running         |
| `task diagnostics`:                                                           |
|                                                                               |
|     $ task diagnostics | grep libgnutls                                       |
|       libgnutls: 3.3.18                                                       |
+-------------------------------------------------------------------------------+
| [] nodename nor servname provided, or    |
| not known                                                                     |
|                                                                               |
| Despite the terrible wording, this means the Taskwarrior setting              |
| `taskd.server=<host>:<port>` refers to a host name that cannot be seen by     |
| Taskwarrior.                                                                  |
|                                                                               |
| Is it spelled correctly? Is the domain correct? Is there a valid DNS          |
| resolution for the name? Is there a firewall between Taskwarrior and          |
| Taskserver that is not letting through `<port>` traffic?                      |
+-------------------------------------------------------------------------------+
| [] Could not connect to \<host\>         |
| \<port\>                                                                      |
|                                                                               |
| Taskserver may not be running on `<host>`. Check with                         |
| `ps -leaf | grep taskd`.                                                      |
+-------------------------------------------------------------------------------+
| [] Unable to use port 53589?             |
|                                                                               |
| By default, port `53589` is used, but whichever you chose must be open on the |
| server.                                                                       |
|                                                                               |
| If you are unable to open firewall ports, you can use an SSH Tunnel to route  |
| port `53589` traffic over port `22`:                                          |
|                                                                               |
|     $ ssh -L localport:dsthost:dstport user@example.com                       |
|                                                                               |
| Then try:                                                                     |
|                                                                               |
|     task rc.taskd.server:localhost:localport                                  |
+-------------------------------------------------------------------------------+
| [] Certificate fails validation,         |
| Handshake failed                                                              |
|                                                                               |
| There are many reasons that the TLS handshake can fail.                       |
|                                                                               |
| When you generated certificates, you modified a `vars` file, in particular    |
| the `CN=<name>` setting. That name must match the output of `$ hostname -f`   |
| on the server for the certificate to validate.                                |
|                                                                               |
| Additionally, that name must also be used in the `taskd.server=<host>:<port>` |
| setting for Taskwarrior. Otherwise you\'ll need                               |
| `taskd.trust=ignore hostname`.                                                |
|                                                                               |
| If you are using a self-signed certificate, did you specify it using the      |
| `taskd.ca` setting?                                                           |
|                                                                               |
| Setting `taskd.ciphers` can force the use of different ciphers. Use           |
| `gnutls-cli --list` to see a list of installed ciphers, and confirm that      |
| there is overlap between client and server. There needs to be a cipher that   |
| is available to both, otherwise they cannot communicate.                      |
+-------------------------------------------------------------------------------+
| [] Is your certificate still valid?      |
|                                                                               |
| Certificates have expiration dates, and if you followed our instructions, you |
| created a certificate that is valid for one year. Check your certificate with |
| this command:                                                                 |
|                                                                               |
|     $ certtool -i --infile ~/.task/<YOUR NAME>.cert.pem                       |
|                                                                               |
| If your certificate has expired, you need a new one. You may also need to     |
| regenerate expired server certificates.                                       |
|                                                                               |
| Note that creating certificates that never expire is a bad idea. Certificates |
| may be compromised. A certificate that is considered secure today, may not be |
| considered secure in a year. Is the key length you chose something that will  |
| remain suitable in the future? Will the algorithms you chose remain secure?   |
| For these reasons, choose an expiration date that lets you reevaluate your    |
| choices in the relatively near future.                                        |
+-------------------------------------------------------------------------------+
| [] Is your GnuTLS library up to date?    |
|                                                                               |
| As a [security product](https://gnutls.org/security), it is imperative   |
| that you keep your GnuTLS up to date.                                         |
|                                                                               |
| As with many security products, GnuTLS is maintained by a responsible and     |
| quick-responding team that takes security very seriously. Benefit from their  |
| diligence by keeping your GnuTLS up to date.                                  |
|                                                                               |
| We have received reports of issues with older GnuTLS releases. Specifically,  |
| version 2.12.20 has problems validating certificates under certain            |
| conditions. Newer releases have addressed memory leaks that were able to take |
| down Taskserver.                                                              |
+-------------------------------------------------------------------------------+
| [] ERROR: Could not find common ancestor |
| for \...\                                                                     |
| Client sync key not found.                                                    |
|                                                                               |
| You skipped the important step of running:                                    |
|                                                                               |
|     $ task sync init                                                          |
|                                                                               |
| This performs an initial upload of your pending tasks, and sets up a local    |
| sync key, which identifies the last sync transaction.                         |
+-------------------------------------------------------------------------------+


## Debugging

You may wish to try and debug the problem yourself. You will probably not. But
if you do, here is how.

Both Taskwarrior and Taskserver have a `diagnostics` command, the purpose of
which is to show you relevant troubleshooting details. Additionally it will
indicate problems directly, for example, it will tell you if your cert/key files
are not readable. The output from `diagnostics` is intended to be included in
bug reports, and doing so saves you a lot of time, because it\'s the first thing
we\'ll ask for.

    $ task diagnostics
    ...
    $ taskd diagnostics
    ...

Read the output of the `diagnostics` commands carefully, there may be several
types of problems mentioned, which need to be addressed before going further.

The next step would be to run the server in debug mode. First shutdown your
Taskserver, then launch it interactively:

    $ taskdctl stop
    ...
    $ taskd server
    ...

You can hit `Ctrl-C` to stop this server. For highly verbose output, try this:

    $ taskd server --debug --debug.tls=2
    ...

Similarly, Taskwarrior has a verbose debug mode, and debug TLS mode:

    $ task rc.debug=1 rc.debug.tls=2 sync
    ...


## Getting Help

As a last resort, ask for help. But please make sure you have carefully reviewed
your setup, and gone through the checks above before asking. No one wants to
lead you through the steps above to discover that you didn\'t.

We\'ll ask you to provide the `diagnostics` output for both Taskwarrior and
Taskserver, then we\'re going to go through the steps above, because this is our
checklist also.

Impress us and mention the codeword \'Weasel\', to prove that you at least read
this page all the way to the end.

There are several ways of getting help:

-   Check the FAQ (coming soon).
-   Email us at <taskwarrior-user@googlegroups.com>, then wait patiently for a
    volunteer to respond.
-   Join us IRC in the \#taskwarrior channel on Freenode.net, and get a quick
    response from the community, where, as you have anticipated, we will walk
    you through the checklist above.
