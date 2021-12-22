---
title: "News: Taskwarrior 2.4.0 Released"
---

### Taskwarrior 2.4.0 Released [2015-01-01]{.small}

Taskwarrior 2.4.0 is released, it\'s a major release, and a recommended upgrade.
Happy new year.

After almost a year of development, 108 bug fixes, 47 new/improved features,
1,750 code changes and over 50 community-provided patches, version 2.4.0
represents a significant improvement to task list management. Changes include:

-   New localization: Portuguese and Esperanto translations
-   New `dateformat` space handling
-   New date support: \'february\', extensive support for ISO-8601
-   New column formats: `description.truncated_count`, `uda.NAME.indicator`,
    `recur.short`, tag sorting
-   New color rules: `color.uda.NAME.VALUE`, `color.label.sort`, `color.until`
-   New virtual tags: READY, YESTERDAY, TOMORROW, PENDING, DELETED, COMPLETED,
    TAGGED
-   New verbosity tokens: `new-uuid`
-   New command: `calc`, `_zshattributes`
-   New theme: dark-gray-blue­256.theme
-   New report feature: listing breaks
-   New Python testing framework for higher-level testing
-   New DOM support: `ID.annotation.0.description`, `ID.due.month` \...
-   New Hooks support: `on-add`, `on-modify`, `on-launch` and `on-exit` event
    hook support
-   New Regular Expression support enabled by default
-   New algebraic expression support: date math, fuzzy matches
-   Improved command line: handling of quoted and escaped content, partial
    UUIDs, searching all attributes, projects with spaces
-   Improved utilities: `l10n`
-   Improved `show` command: displays default settings
-   Improved `information` command: urgency calculation details, runs by default
    when just an ID/UUID is specified
-   Improved `diagnostics` command: shows environment variables, hooks,
    indicates configuration errors
-   Improved urgency calculations: inherited urgency via dependencies, UDA
    participation, affects nag feature
-   Improved documentation: redesigned reference PDF, man pages moved online
-   Improved security: certificate validation, hostname validation
-   Improved report filters
-   Improved front-end support: file locking, confirmation suppression
-   Improved debugging output, sync diagnostics
-   Improved completion scripts: zsh, fish
-   Improved Vim support files
-   Updated holiday files
-   Removed deprecated features: `push`, `pull`, `merge`, old file formats,
    unused configuration settings
-   Removed the misunderstood \'total active time\' feature, replaced by a 3rd
    party hook script
-   Removed the shadow file feature, replaced by a hook script example

For full details, see the ChangeLog file included in the release.

Look for a series of new online documents over the coming days, highlighting
some of the new functionality.

The release is immediately available as a source
[tarball](/download/task-2.4.0.tar.gz). Binary packages will soon be available
via your Operating System\'s package manager.
