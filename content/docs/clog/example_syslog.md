---
title: "Clog - Syslog Rules"
---

# Syslog Rules

This example shows color highlighting for `syslog` severities.

```
# Standard syslog entries.

default rule /warn|debug/   --> yellow line
default rule /error|severe/ --> red line
default rule "critical"     --> bold red line
default rule "critical"     --> blank
default rule "ignore"       --> suppress
```
