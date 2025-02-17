---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "taskd with external hostname"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### taskd with external hostname

This project is amazing, I really want to make it work on my server. Thank you guys.

I read the guide, good documentation, great work. (codeword Weasel) xD

I'm having trouble to make taskd work with an external hostname.

You suggest to run

taskd server --debug --debug.tls=2

the resul is:

s: INFO Client certificate will be verified.

s: INFO IPv4: xx.xx.xx.xxx <----my ip

### bind failed

I have poor sysadmin experience, but I thing I'm almost there. Please help me!

Thanks in advance
{{< /question >}}
{{< answer >}}
I have found the same problem a couple of days ago, and fighting with it I have solved the following way:

I have used the external server name on the client side
I have used on the server side the local IP 
The error I found originally was as follows:

Syncing with sub.domain.tld:53589

Could not connect to sub.domain.tld 53589
Sync failed.
Could not connect to the Taskserver.
But the output of diagnostics and debugs was correct on both sides. The subdomain name was correctly resolved and pingable. It was not a certificate problem, since trust all did not solve the problem.

Running the service from the system user created for this service (taskd), I could check what the problem was:

$ taskd server --data $TASKDDATA --debug
### bind failed
Then the "Address already in use" line appeared in the log...

Modifying the config file by hand, editing the line "server" from

 server = sub.domain.tld: 53589
to

server = 192.168.1.2: 53589
Thinking that taskd needed to know what IP it was in, and considering that the server is behind a NAT and the request goes in with local IP, everything works now correctly.

From local I resolve the subdomain name to local IP (via /etc/hosts), and from the outside resolves to the external IP of the NAT, which passes the request locally and works correctly.

$ task sync init
Please confirm that you wish to upload all your pending tasks to the Taskserver (yes/no) yes
Syncing with sub.domain.tld:53589

Sync successful.
No changes.
{{< /answer >}}
