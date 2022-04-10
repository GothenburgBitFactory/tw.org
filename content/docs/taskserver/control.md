---
title: "Taskwarrior - Control Taskserver"
---

# [3] Server Start/Stop

You can now to launch the server:

```
$ taskdctl start
```

This command launched the server as a daemon process.
This command requires the `TASKDDATA` variable.
Your server is now running, and ready for syncing.
Note that to stop the server, you use:

```
$ taskdctl stop
```

Check that your server is running by looking in the `taskd.log` file, or running this:

```
$ ps -leaf | grep taskd
```

## Interactive or Non-Daemon Server

A daemon server is typically how you would want to run Taskserver, but there may be times when you need to run the server attached to a terminal.
These two commands are identical:

```
$ taskdctl start
$ taskd server --data $TASKDDATA --daemon
```

By omitting the `--daemon` option, the server remains attached to the terminal.
Then to stop the server you can enter `Ctrl-C`.

The interactive mode is really only useful for debugging, in conjunction with TLS debug mode, like this:

```
$ taskd config debug.tls 3
$ taskd server --data $TASKDDATA
...
```

With a `debug.tls` setting that is non-zero, you see lots of security-related diagnostic output.

## Configure Taskserver to run with a systemd-unit-file

You can start Taskserver using a systemd-unitfile like the following (please add the contents of `$TASKDDATA` not the variable itself).
Running the Taskserver as root is not recommended, please add an appropriate user and group to run the daemon with (`$TASKDUSER` and `$TASKDGROUP`).

```
[Unit]
Description=Secure server providing multi-user, multi-client access to Taskwarrior data
Requires=network.target
After=network.target
Documentation=https://taskwarrior.org/docs/#taskd

[Service]
ExecStart=/usr/local/bin/taskd server --data $TASKDDATA
Type=simple
User=$TASKDUSER
Group=$TASKDGROUP
WorkingDirectory=$TASKDDATA
PrivateTmp=true
InaccessibleDirectories=/home /root /boot /opt /mnt /media
ReadOnlyDirectories=/etc /usr

[Install]
WantedBy=multi-user.target
```

Afterwards prepare systemd to recognise the file.

```
$ cp taskd.service /etc/systemd/system
$ systemctl daemon-reload
$ systemctl start taskd.service
$ systemctl status taskd.service
```

In case everything is running fine, enable the script to start Taskserver on every boot.

```
$ systemctl enable taskd.service
```
