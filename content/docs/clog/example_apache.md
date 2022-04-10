---
title: "Clog - Apache Rules"
---

# Apache Rules

This example shows color highlighting for HTTP status code.

```
# Apache access.log status codes

apache rule / 2[0-9][0-9] / --> green match
apache rule / 3[0-9][0-9] / --> yellow match
apache rule / 4[0-9][0-9] / --> red match
apache rule / 5[0-9][0-9] / --> bold red match
```
