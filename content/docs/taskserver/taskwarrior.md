---
title: "Taskwarrior - Taskserver, Configure Taskwarrior"
---

# [4] Configure Taskwarrior

If you have configured Taskserver and created a user account (or better yet, someone created an account for you) then you now have details needed in the configuration of your Taskwarrior client.
You should have these files and this information:

- CA `ca.cert.pem`
- Client certificate: `first_last.cert.pem`
- Client key: `first_last.key.pem`
- User key (yours will be different): `cf31f287-ee9e-43a8-843e-e8bbd5de4294`
- Organization: `Public`
- Account name: `First Last`
- Server:port `host.domain:53589`.
  In the [server configuration](/docs/taskserver/configure) we used `localhost` as an example.
  Whatever you actually used there, should be used here.

Now we feed this information to Taskwarrior.

Copy the Cert, Key and CA to your `~/.task` directory.
The reason we are copying the CA cert is that this is a self-signed cert, and we need the CA to validate against.
Alternately we could force Taskwarrior to trust all certs, but that is not recommended.

```
$ cp first_last.cert.pem ~/.task
$ cp first_last.key.pem  ~/.task
$ cp ca.cert.pem         ~/.task
```

Now we need to make Taskwarrior aware of these certs:

```
$ task config taskd.certificate -- ~/.task/first_last.cert.pem
$ task config taskd.key         -- ~/.task/first_last.key.pem
$ task config taskd.ca          -- ~/.task/ca.cert.pem
```

Now set the server info:

```
$ task config taskd.server      -- host.domain:53589
```

Finally, we provide the credentials, which combine the organization, account name, and user key:

```
$ task config taskd.credentials -- Public/First Last/cf31f287-ee9e-43a8-843e-e8bbd5de4294
```

## Trust

It is possible to configure Taskwarrior's trust level, which determines how the server certificate is treated.

For Taskwarrior {{< label >}}2.3.0{{< /label >}} you can specify `taskd.trust=yes` in order to skip certificate validation.
***This is a bad idea.***
The default is `taskd.trust=no`, which does not trust the server certificate, which is more secure.

For Taskwarrior {{< label >}}2.4.0{{< /label >}} you must specify `taskd.trust=ignore hostname` in order to skip certificate hostname validation.
***This is a bad idea.***
You can also specify `taskd.trust=allow all` to perform no validation.
***This is a worse idea.***
The default value is `taskd.trust=strict` which performs the most stringent verification, and is more secure.

Your Taskwarrior is now ready to sync.
