---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "ERROR: '-2146375696' is not a valid date in the 'm/d/Y' format."
---

Back to the [FAQ](/support/faq)

Q: ERROR: '-2146375696' is not a valid date in the 'm/d/Y' format.
I receive this error in my taskd.log when syncing with Mirakel but haven't yet figured our what it caused. Apparently there is a task in 2038, at least I guess, because 2146375696 is the timestamp for 2038.

Any ideas where/how to identify the faulty task and how to fix it? 

Thanks!

A: Well, after investigating more and more, especially grep'ing through both local data and server data (tx.data) I found my faulty data which caused the error. I haven't figured out what caused the faulty data - who should be clear ... me Lächeln :)

There was one task in tx.data (server) which had the following wait "19011226T163144Z" and after being "gentle" [1] to it, my problem seems to be solved. No more error messages and sync works again just fine.

[1] "gentle" in terms of deleting everything from tx.data that belongs to the faulty task.

A: That 1901 date will do it. I wonder how that got there.

