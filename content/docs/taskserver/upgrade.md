---
title: "Taskwarrior - Upgrading Taskserver"
---

# Upgrading Taskserver

Upgrading to Taskserver {{< label >}}1.1.0{{< /label >}} requires some configuration changes.
The required changes are mostly concerned with improvements to security and encryption.
Updating the software itself is straightforward.

## Upgrade the Software

This is simply a matter of shutting down the server, installing the new software, modifying the configuration as discussed below, and restarting the server.
Before doing this, please read the issues below, so that you will be prepared, and more secure.

## PKI

If you used self-signed certificates, and the scripts provided with Taskserver 1.0.0, then you will want to regenerate all your CA, CRL, server, client and user certificates using the updated scripts.

The scripts now properly use the `CN` field, and no longer use `SAN`s.
This is important for hostname verification, and required for `strict` validation.

Please note also that the PKI scripts provided use a certificate expiration of 365 days.
This means no certificate is valid after a year.
If you used the default scripts when you installed Taskserver 1.0.0, you may have already discovered this.

It is generally a good idea to expire and renew certificates.
Long-term certificates may need to be revoked using the CRL, so short-term certificates provide a dead-man\'s switch approach.

## Allow/Deny

The `client.allow` and `client.deny` configuration settings should be removed, as this feature has been removed from the server.
As it is easy to spoof a valid client, this technique offered no security.

## Trust

The new `trust` configuration setting determines how client certificates are validated.
Values maybe either `allow all` or `strict`.
The value `allow all` performs no client certificate validation.
This is not recommended.
The value `strict` causes the client certificate to be validated against a CA.

Note that using the `strict` value may require that your server certificates be replaced.
This depends on the data used to create your original certificates.
Taskserver PKI scripts now create certificates with a proper CN value.

## GnuTLS

Please bear in mind that [GnuTLS](https://gnutls.org) is a security product, and it is important that you use the most recent version available.
Please upgrade GnuTLS before building Taskwarrior and Taskserver.

We have received many reports of problems with older GnuTLS releases, specifically version 2.12.20 and earlier cannot complete handshake with a CRL.

Versions prior to 3.2 also suffer from significant memory leaks, which will take down your Taskserver over time.

In addition to benefiting from bug fixes and leak fixes, newer GnuTLS versions include new and more secure default ciphers and algorithms.
Security is important.
