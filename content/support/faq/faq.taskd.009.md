---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "taskd: \"A TLS packet with unexpected length was received\" on task sync init"
---

Back to the [FAQ](/support/faq)

Q: taskd: "A TLS packet with unexpected length was received" on task sync init

I just setup my task server and it works already great with Mirakel. Unfortunateley, the same credentials and certificates don't work on my laptop (even if I used it for creating the Mirakle config file). 

I get this error message in Taskwarrior on task sync init (task sync yields same problem) 

Handshake failed.
Error in the certificate.
Sync failed.
Could not connect to the Taskserver.
And in my taskd log:

2014-09-30 14:52:29 Error: Handshake has failed (A TLS packet with unexpected length was received.)
Whereas I could successfully synchronize my tasks with Mirakel: 

2014-09-30 14:51:37 [9] 'sync' from 'Home/*** ***' using 'Mirakel 2.7.1' at :0
...
2014-09-30 14:51:37 [9] Loaded 9 records
...
2014-09-30 14:51:37 [9] Serviced in 0.050640s
 

I already checked the configs in Taskwarrior and taskd as described here https://taskwarrior.org/docs/taskserver/setup.html. Everythings looks neat. I double checked the certificates, too.

Has anybody an idea what's happening here?

 

Update: (added diagnostics)

taskd 1.0.0
    Platform: Linux
    Hostname: ***

Compiler
     Version: 4.4.7 20120313 (Red Hat 4.4.7-4)
        Caps: +stdc +stdc_hosted +200809 +LP64 +c1 +i4 +l8 +vp8

Build Features
       Built: Sep 29 2014 13:37:38
      Commit: 2f40c1b
       CMake: 2.8.12.1
        Caps: +pthreads +tls
     libuuid: libuuid + uuid_unparse_lower
   libgnutls: 2.8.5
task 2.4.0.beta1
  Platform: Darwin

Compiler
    Version: 4.2.1 Compatible Apple LLVM 5.1 (clang-503.0.40)
       Caps: +stdc +stdc_hosted +LP64 +c8 +i32 +l64 +vp64 +time_t64

Build Features
      Built: Sep 29 2014 14:59:39
      CMake: 3.0.2
       Caps: -pthreads +tls
    libuuid: libuuid + uuid_unparse_lower
  libgnutls: 3.2.17
 Build type: 

Configuration
       File: /Users/hans/.taskrc (found), 1716 bytes, mode 100644
       Data: /Users/hans/.task (found), dir, mode 40755
    Locking: Enabled
         GC: Enabled
     Server: *****
         CA: /Users/hans/.task/ca.cert.pem (readable)
      Trust: strict

Certificate: /Users/hans/.task/***.cert.pem (readable)
        Key: /Users/hans/.task/***.key.pem (readable)
    Ciphers: NORMAL
      Creds: Home/*** ***/************************************

Hooks
    Scripts: Enabled
             (none)

Tests
      $TERM: ansi (254x63)
       Dups: Scanned 1 tasks for duplicate UUIDs:
             No duplicates found

A: You have the setting

taskd.trust=strict
On your 2.4.0b1 client, that means hostname is checked in the certificate.
Did you set the hostname in the server cert such that this will work?  If not, either regenerate the certs with the right hostname, or change the setting:

taskd.trust=ignore hostname

