---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "Is it possible to use mysql as a backend database for taskserver?"
---

Back to the [FAQ](/support/faq)

Q: Is it possible to use mysql as a backend database for taskserver?

I have a mysql server running on my raspberry anyway and it would be nice if there was a possibility to use is as backend for taskd.

I guess it is not really necessary because it works great with the default backend but I am still curious.

Thanks for your help.

A: Possible: Yes. By using "task export" you can use whatever backend you desire to store your tasks. You will need to write the code for that and take care of the complexity of synchronizing them yourself.

Supported out of the box: No. It's beyond the scope of the project, but as I said, it's easy to extract the tasks from Taskwarrior.

