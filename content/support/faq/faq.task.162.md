---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "automatically tag new tasks"
---

Back to the [FAQ](/support/faq)

{{< question >}}
### automatically tag new tasks

Can I automatically give all new tasks a specific tag via a config option or similar?

Or do I need to implement a hook?
{{< /question >}}
{{< answer >}}
Currently, a hook would be needed.
{{< /question >}}
{{< answer >}}
I wrote the following hook (in php)

#!/usr/bin/php
<?php
$input = json_decode(fgets(STDIN));
$input->tags[] = 'review';
fwrite(STDOUT, json_encode($input));

{{< /answer >}}
