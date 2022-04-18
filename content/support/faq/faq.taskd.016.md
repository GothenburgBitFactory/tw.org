---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "Can't Sync Init -- Aborted (core dumped)"
---

Back to the [FAQ](/support/faq)

Q: Can't Sync Init -- Aborted (core dumped)

Hello, I setup a Taskd server and am attempting to initialize the sync with a client. I've worked through the setup guide on Taskwarrior.org, but when I get to syncing the client, I get an error. I enter in task sync init, and I get an error "Aborted (core dumped)". I am running version 2.5.1 on the Ubuntu subsystem for Windows. Any pointers would be very helpful. Thanks in advance!

A: This was discussed online in IRC #taskwarrior, here is a summary of what we saw:

This affects Windows and the Linux subsytem.
The task-2.5.1 binary package core dumped while making a getrusage call, which is not something Taskwarrior does.
Since there is only one dependency, GnuTLS, it seems that it is incorrectly making the call, at least in the 3.2.11 version that was in use.
Commands other than the sync command ran fine, further implicating GnuTLS.
The course of action as we left it was to build Taskwarrior from source, and try an upgraded GnuTLS.
No news yet...

