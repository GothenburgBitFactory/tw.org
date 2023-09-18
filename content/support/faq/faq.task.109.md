---
title: "Taskwarrior - FAQ"
topic: "Taskwarrior"
question: "How to stop numeric UDAs from being stored as a decimal (even when the input is an integer)?"
---

Back to the [FAQ](/support/faq)

Q: How to stop numeric UDAs from being stored as a decimal (even when the input is an integer)?
Sometimes when storing a value for a numeric UDA when adding a task, the resulting value is stored as a decimal even when the input is an integer. This always happens when modifying the value using the modify command.

Is there a way to force the value to either a decimal or an integer?

A: No, numeric is the only type - there is no integer UDA.

Edit: Storing the value as a string should keep it intact, but will eliminate the possibility of arithmetic.

