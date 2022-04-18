---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "How do I set up Taskserver to use LetsEncrypt certs?"
---

### Q: How do I set up Taskserver to use LetsEncrypt certs?

On the Taskserver server:

Generate a self-signed CA (use `taskd/pki/generate.ca`)

Get a copy of your domain\'s TLS certificates from Lets Encrypt

Configure Taskserver:

```
ca.cert=ca.cert.pem
server.cert=example.com.crt
server.key=example.com.key
server=0.0.0.0:53589
```

On each client:

Get a self-signed client keypair from the Taskserver (`taskd/pki/generate.client`)

Get a copy of the DST Root CA X3

Configure Taskwarrior:

```
taskd.certificate=client.cert.pem
taskd.key=client.key.pem
taskd.ca=DST_ROOT_CA_X3.crt
taskd.server=example.com:53589
taskd.credentials=Group/Name/UUID
```

Client certificates and user credentials are created per the docs, as normal.
Client certificates can be revoked by generating a CRL file and pointing `server.crl` to it in the Taskserver config.
See the bottom of `taskd/pki/generate.crl` for invocations.
For personal installations, it is easier just to regenerate the self-signed CA and distribute new client certs.

