---
title: "Taskserver 1.1.0 beta1 Released"
date: 2015-04-04
---

### Taskserver 1.1.0 beta1 Released 

Taskserver 1.1.0 is in beta, and we are asking you to please test this release in your environment.
See https://taskwarrior.org/docs/taskserver/upgrade/ for instructions to upgrade your server.
There have been a few changes:

#### Configuration

- New setup helper script, `setup_server.bash`, which interactively leads the whole setup and configuration process.
- When hosting, the configured server name is no longer ignored.
- Taskserver can now be restricted to IPv4 or IPv6.
- New man page for `taskdctl`.
- Server now supports a configuration setting `trust`, which can be either `strict` or `allow all`, and defaults to `strict`.

#### Security

- Configurable client certificate verification.
- Improved PKI scripts.
- Certificate examples now use CN, and not SANs.
- CRL certificate is now optional.
- Added certificate verification to GnuTLS versions older than 2.9.10.

#### Features

- The `statistics` request is now supported.
- `validate` command will parse/validate a JSON string or file.
  Used for debugging Taskserver clients.
- If the `trust` setting contains a bad value, the `diagnostics` command will indicate this, and the server will log it.
- Can log to STDOUT when configuration setting `log` is set to '-'.
- Improved `diagnostics` command output.
- Taskserver no longer ignore the host definition.
- Improved logging for errors, problems, data conflicts, JSON parsing, ...
- Systemd script: `taskd.service`.

#### Portability

- Taskserver builds with the musl library
- Removed linking of pthreads.

#### Miscellaneous

- Improved I/O performance with better defaults for buffer sizes.
- Removed support for `client.allow`/`client.deny` settings.
- Documentation improvements.
- Most documentation moved online, to keep it more current and correct.
- Many bug fixes.

For full details, see the ChangeLog file included in the release.
The release is immediately available as a source ~~tarball~~.

This is a beta release, and is not recommended for stable environments.
