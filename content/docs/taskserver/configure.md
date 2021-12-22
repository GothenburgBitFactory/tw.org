---
title: "Taskwarrior - Taskserver Configuration"
---

[]{#config}

### [3]{.label .label-success} Server Configuration

Configuring the server is straightforward, but needs a little planning.

[]{#location}

#### Choose a Data Location

A location for the data must be chosen and created. The `TASKDDATA` environment
variable will be used to indicate that location to all the `taskd` commands.

    $ export TASKDDATA=/var/taskd
    $ mkdir -p $TASKDDATA

If the `TASKDDATA` variable is not set, then most `taskd` commands require the
`--data ...` argument, otherwise the commands rely on the `TASKDDATA` value to
indicate the location. Everything the server does will be confined to that
directory.

Note that there are two \'D\'s in `TASKDDATA`, and omitting one is a common
mistake to make.

Note that there must be write permission in the directory for the user that will
run the server.

[]{#init}

#### Initialization

Now we let the server initialize that directory:

    $ taskd init
    You must specify the 'server' variable, for example:
      taskd config server localhost:53589

    Created /var/taskd

[]{#keys}

#### Keys & Certificates

Now we create certificates and keys. The command below will generate all the
certs and keys for the server, but this uses self-signed certificates, and this
is not recommended for production use. This is for personal use, and this may be
acceptable for you, but if not, you will need to purchase a proper certificate
and key, backed by a certificate authority.

The certificate and key generation scripts make assumptions ***that are
guaranteed to be wrong for you***. Specifically the `generate.server` script has
a hard-coded `CN` entry that is not going to work. You ***need*** to edit the
`vars` file.

    ...
    CN=localhost
    ...

You will need to modify this value to match your server. It is this value
against which Taskwarrior validates the server name, so use a value similar to
`foo.example.com`, but of course don\'t expect that to work for you. If you do
not change this value, the only option for the client is to skip some or all
certificate validation, ***which is a bad idea.***

Go to your `taskd` directory, which depends on which installation method you
chose. Here is is assumed that you installed from the source tarball.

    $ cd ~/taskd-1.1.0/pki
    $ ./generate
    ...
    $
    $ cp client.cert.pem $TASKDDATA
    $ cp client.key.pem  $TASKDDATA
    $ cp server.cert.pem $TASKDDATA
    $ cp server.key.pem  $TASKDDATA
    $ cp server.crl.pem  $TASKDDATA
    $ cp ca.cert.pem     $TASKDDATA
    $
    $ taskd config --force client.cert $TASKDDATA/client.cert.pem
    $ taskd config --force client.key $TASKDDATA/client.key.pem
    $ taskd config --force server.cert $TASKDDATA/server.cert.pem
    $ taskd config --force server.key $TASKDDATA/server.key.pem
    $ taskd config --force server.crl $TASKDDATA/server.crl.pem
    $ taskd config --force ca.cert $TASKDDATA/ca.cert.pem

There are three classes of key/cert here. There is the CA (Certificate
Authority) cert, which has cert signing capabilities and is used to sign and
verify the other certs. There are the server key/certs, which are used to
authenticate the server and encrypt. Finally there are client key/certs, which
are not what you might expect. These are for API access, and not for your
Taskwarrior client. Those are created later.

[]{#other}

#### Configuration

Now we configure some basic details for the server. The chosen port is 53589.
Note that we allow Taskwarrior clients specifically.

    $ cd $TASKDDATA/..
    $ taskd config --force log $PWD/taskd.log
    $ taskd config --force pid.file $PWD/taskd.pid
    $ taskd config --force server localhost:53589

Note that we have chosen `localhost:53589`, but this choice has consequences.
The name `localhost` is not network visible, which limits the server to only
serving clients on the same machine. Use your full machine name for proper
network addressability.

You can look at all the configuration settings:

    $ taskd config

You can view all the supported settings with:

    $ man taskdrc
:::
