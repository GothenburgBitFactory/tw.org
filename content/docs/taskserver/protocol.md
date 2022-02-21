---
title: "Taskwarrior - Taskserver Protocol"
---

# Protocol Selection

Taskserver [1.1.0] ordinarily binds to the first
interface that matches the hostname and port, regardless of whether that is an
IPv4 or IPv6 interface. You have several options to control this.

The server can be configured to bind to the hostname and port in several ways:

    $ taskd config server localhost:53589
    $ taskd config server 127.0.0.1:53589
    $ taskd config server ::1:53589

The first is the most typical way to setup the server, and is protocol agnostic,
in that `localhost` is usually defined for all interfaces.

The `127.0.0.1` host is an IPv4 address, and the `::1` host is an IPv6 short
address. These settings cause the server to bind to IPv4 and IPv6 addresses
respectively.


## Address Family

There is also the option of specifying the address family:

    $ taskd config family IPv4
    $ taskd config family IPv6

This restricts the server to only bind using the named address family. By
default, no family is specified, which does not restrict the binding.


## Taskwarrior

Similarly, Taskwarrior [2.4.0] can specify the server
host and port in several ways, which restrict the interfaces used:

    $ task config taskd.server localhost:53589
    $ task config taskd.server 127.0.0.1:53589
    $ task config taskd.server ::1:53589
    $ task config taskd.server fe80::1:53589

The \'localhost\' uses whichever your system is set to use. The \'127.0.0.1\' s
an IPv4 address, and therefore uses IPv4. The last two are IPv6 addresses, and
therefore use IPv6.
