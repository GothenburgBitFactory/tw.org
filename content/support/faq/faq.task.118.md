---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "Taskwarrior as a .so library?"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### Taskwarrior as a .so library?

I'm newly trying out Taskwarrior and can see a lot of benefits in its CLI-based design.

However I also think it'd be great to enable more web-based/mobile/etc. clients too.
Clearly, some variety of these already exist, but it looks like joining a web API back-end (e.g. REST) to Taskwarrior is tedious and pretty error-prone: it either implies execing a task process per API call and taking a lot of care on command line arguments, and/or JSON export/import, or manually working the *.data files (bad, clearly).

It looks like there's quite a lot of reinventing the wheel going on for this across different higher level languages (Python bindings, Ruby, Node, etc., all effectively making system() calls to run `task` AFAICS).
Linking things up to get the benefits of the Taskwarrior filter syntax/grammar seems to have been beyond many client-facing add-on apps.
FWIW it also looks like tasksh is going down the same routes.

IMO it would be really nice to be able to separate task into two pieces - the CLI client with its stable commands, and an in-process library with the back-end engine pieces.
That would make it easier to embed Taskwarrior securely into "web" back-end languages (for example) and also hopefully encourage development of a standard API, even standard RESTful API, for tasks, annotations, tags, etc.

Is this something that has been discussed at all? Has it been considered?
{{< /question >}}
{{< answer >}}
This has been discussed, and isn't likely to happen.

You may not be aware of the lack of C++ binary interface standards or the difficulty of shoe-horning C++ objects into a well-designed C API for exposure via .so.
No one wants to do this, and neither do you, which is why you ask about the possibility.

That said, you have several alternatives:

There are already several bindings type libraries/modules that provide an API to a large part of the functionality.
These are being used today, and are supported by their authors. Using these is recommended. The mechanism used is a mix of JSON import/export and direct calls.
Stepping down a layer, communicating via JSON import/export is another way to add a front-end to Taskwarrior. If instead you are looking for full support for filtering, talk to the authors of Option 1.
Write your software in C++ and link to the actual code.
This is not recommended, because there is no desire to stabilize the object APIs. Tasksh is not doing this, but an earlier version did.
It's gone now, for very good reasons.
You do the work - this is open source, after all. But this involves things that are technically hard, perhaps impossible, and will take significant time.
Pay/motivate someone to attempt option 4.
As you pointed out, direct I/O on the *.data files is a very bad idea, because it means you would need to support the four current file formats, and respond to the fifth format, which may happen soon, not to mention implement recurrence, waiting and other features.

https://taskwarrior.org/docs/3rd-party.html
{{< /answer >}}
