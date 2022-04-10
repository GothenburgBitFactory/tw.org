---
title: "Taskwarrior - Add a User to Server"
---

# [4] Add User to Server

A user account must be created, along with a key, cert and ID, before syncing may occur.

## Create Organization

Before creating a user account, you may need to create an organization.
An organization consists of a group of zero or more users.
You can get away with just one organization, and in this example, we will create just one, named \'Public\'.

You can create as many organizations as you wish (even one per user), and the purpose is simply to group users together.
Future features will utilize this.

```
$ taskd add org Public
Created organization 'Public'
```

Now the organization \'Public\' exists, we can add users to that organization.

## Create User

Now we add a new user, named \'First Last\' as an example.
You can use any name you wish, and if it contains spaces, quote the name as shown.

```
$ taskd add user 'Public' 'First Last'
New user key: cf31f287-ee9e-43a8-843e-e8bbd5de4294
Created user 'First Last' for organization 'Public'
```

Note that you will get a different \'New user key\' than is shown here, and you will need to retain it, to be used later for client configuration.
Note that the key is just a unique id, because your name alone is not necessarily unique.

## Create Cert/Key

Go to your `taskd` directory, which depends on which installation method you chose.
Here it is assumed that you installed from the source tarball.

```
$ cd ~/taskd-1.1.0/pki
$ ./generate.client first_last
...
```

This will generate a new key and cert, named `first_last.cert.pem` and `first_last.key.pem`.
It is not important that \'first\_last\' was used here, just that it is something unique, and valid for use in a file name.
It has no bearing on security.

## Client

You have now created a new user account on the server, created a new client cert and key, and have details that need to be transferred to the user, to set up a sync client.
The details needed are:

- `ca.cert.pem` is the certificate authority, and the only way to validate self-signed certs such as the ones we have created here.
- `first_last.cert.pem` is the client certificate.
- `first_last.key.pem` is the client key.
- The new user key (yours will be different): `cf31f287-ee9e-43a8-843e-e8bbd5de4294`
- The organization, `Public`.
- The full and proper username, `First Last`.
- The server address and port, `host.domain:53589`.
  In the [server configuration](/docs/taskserver/configure) we used `localhost` as an example.
  Whatever you actually used there, should be used here.
