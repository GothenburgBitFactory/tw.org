---
title: "News: Activity Digest: July 2015"
---

### Activity Digest: July 2015 [2015-08-01]{.small}

This is an ongoing series of activity reports, published monthly, to highlight
activity in the Taskwarrior project. Here is what happened in July 2015.

This is not a complete list of all activity, just work that results in a
non-trivial change. For a full list, see the [full Git
history](https://github.com/GothenburgBitFactory/taskwarrior/commits/v2.5.0).

[2015-07-01]{.small}
:::
:::
:::

-   Task: C++ unit tests now produce the same colorful output in TTY mode as the
    Python tests.
-   Task: The notion of \'ambiguity\' was dropped from Lexer, Eval, calc. It is
    no longer needed.
-   Flod: \'Prevent collapsible links to jump to top of page\' fixed

[2015-07-03]{.small}

-   Task: Test assumed that if /foo/ appears in the output, all is well, but
    there is a false positive case where \'foo\' is also in the path name of
    unrelated output.
-   Task: TAP: Show name of file containing the test(s)
-   Task: TAP: Don\'t show `__main__` in output if description is undefined
-   Task: TAP: self.t() single-arg call now propagated to self.t.runError()
-   Task: `json.array` now defaults to `on`, which means `export` works
    out-of-the-box with all JSON parser

[2015-07-04]{.small}

-   Task: Lexer added look-behind rules to improve tag recognition
-   Task: Lexer uses maximal matching for `pair` args
-   Task: Oops, restored `YYYYMMDDThhmmssZ` and `YYYYMMDDThhmmss` ISO form
    support, which should not have been removed
-   Task: Lexer learned that when there are two `--` separators, the second one
    is a literal `--`, not a separator

[2015-07-05]{.small}

-   Task: Lexer dropped support for UUID lists
-   Task: ISO8601 date parsing added range checking, preventing `25` as an hour,
    for example
-   Task: CLI2 refactoring removed lots of code and bugs

[2015-07-06]{.small}

-   Task: Lexer learned to decompose `pair` arguments into their components, for
    example `name.not:value` has a name, an attribute modifier, a separator `:`
    and a value
-   Task: CLI2 no longer attempts to canonicalize everything, just most things
-   Task: Lexer learned how to read UTF8 words out of strings, taking into
    consideration quotes, escaped characters and `U+NNNN`, `\uNNNN` Unicode
    sequences
-   Task: Fixed zsh completion autoload function boilerplate
-   Task: The `_tags` helper command now also shows virtual tags

[2015-07-07]{.small}

-   Task: The test suite now supports Python3 in addition to Python2.7

[2015-07-10]{.small}

-   Task: All `<name>:<value>` pairs now support escapes, quotes and Unicode
    escapes for `<value>`
-   Clog: \'Blank input lines are silently eaten\' fixed

[2015-07-11]{.small}

-   Task: Recurring template tasks are no longer include in the `+OVERDUE`
    virtual tag
-   Task: With patterns `/pattern/` and substitutions `/from/to/[g]`, there is
    now the possibility of added other flags than `g` at the end
-   Task: Removed a performance shortcut fir fixed-width columns that was
    preventing `print.empty.columns` from working on indicator columns

[2015-07-12]{.small}

-   Task: New command `_unique` queries unique values from the specified
    attribute, which will ultimately replace several helper functions

[2015-07-13]{.small}

-   Task: Test suite gained a `stress_test` tool to detect test result flapping
-   [\#1351: UDA is NOT sorted corresponding to the order of UDA list
    entries](https://github.com/GothenburgBitFactory/taskwarrior/issues/1351)
    fixed
-   [\#1416: tw will import same UUID n-times if part of same
    import](https://github.com/GothenburgBitFactory/taskwarrior/issues/1416)
    fixed
-   [\#1446: On add \'-tag\' is considered a tag removal, which makes no
    sense.](https://github.com/GothenburgBitFactory/taskwarrior/issues/1446)
    fixed
-   [\#1457: Slashes in project names don\'t
    work](https://github.com/GothenburgBitFactory/taskwarrior/issues/1457) fixed
-   [\#1481: Filter parser does not properly handle parentheses in
    attributes](https://github.com/GothenburgBitFactory/taskwarrior/issues/1481)
    fixed
-   [\#1482: Filter parser does not always handle multiple arguments bundled
    into one with
    apostrophes](https://github.com/GothenburgBitFactory/taskwarrior/issues/1482)
    fixed
-   [\#1501: task config expands values with unnecessary
    spaces](https://github.com/GothenburgBitFactory/taskwarrior/issues/1501)
    fixed
-   [\#1505: Task arguments not properly parsed if they contain a
    space](https://github.com/GothenburgBitFactory/taskwarrior/issues/1505)
    fixed
-   [\#1506: Weird behaviour on redundant filter beginning with
    number](https://github.com/GothenburgBitFactory/taskwarrior/issues/1506)
    fixed
-   [\#1514: You have more urgent
    tasks](https://github.com/GothenburgBitFactory/taskwarrior/issues/1514)
    fixed
-   [\#1537: Project titles not properly parsed if they contain
    hyphens](https://github.com/GothenburgBitFactory/taskwarrior/issues/1537)
    fixed
-   [\#1553: Extra spaces added around
    slashes](https://github.com/GothenburgBitFactory/taskwarrior/issues/1553)
    fixed
-   [\#1555: Parser incorrectly inserting spaces into task
    description](https://github.com/GothenburgBitFactory/taskwarrior/issues/1555)
    fixed
-   [\#1595: update wait: manpage
    entry](https://github.com/GothenburgBitFactory/taskwarrior/issues/1595)
    fixed
-   [\#1601: `task log` mangles URLs when
    quoted](https://github.com/GothenburgBitFactory/taskwarrior/issues/1601)
    fixed
-   [\#1624: Filtering \"regressions\"(?) in task-2.4.3,
    task-2.4.4](https://github.com/GothenburgBitFactory/taskwarrior/issues/1624)
    fixed
-   [\#1633: In \'urgency\<10\', 10 is interpreted as an
    ID](https://github.com/GothenburgBitFactory/taskwarrior/issues/1633) fixed
-   [\#1636: Spurious whitespace added in task descriptions around certain
    symbols](https://github.com/GothenburgBitFactory/taskwarrior/issues/1636)
    fixed
-   [\#1639: Japanese translation for
    Taskwarrior(150513)](https://github.com/GothenburgBitFactory/taskwarrior/issues/1639)
    fixed
-   [\#1641: Can\'t search for multi-word
    project](https://github.com/GothenburgBitFactory/taskwarrior/issues/1641)
    fixed
-   [\#1656: Japanese translation for
    Taskwarrior(150713)](https://github.com/GothenburgBitFactory/taskwarrior/issues/1656)
    fixed

[2015-07-15]{.small}

-   [\#1618: Able to add duplicate tags using
    \'tags:\'](https://github.com/GothenburgBitFactory/taskwarrior/issues/1618)
    fixed
-   [\#1650: Wrong wait
    date](https://github.com/GothenburgBitFactory/taskwarrior/issues/1650) fixed

[2015-07-16]{.small}

-   Task: Import now allows JSON arrays as input
-   Task: Fixed bug where zero seconds was stored as `P0S`, which should be
    `PT0S`
-   Task: UDA values of type `duration` are now storeѕ as ISO8601 values
-   [\#1646: Duration UDA can\'t take an algebraic
    expression](https://github.com/GothenburgBitFactory/taskwarrior/issues/1646)
    fixed

[2015-07-17]{.small}

-   Task: Incorporated the latest `wcwidth.c` from Markus Kuhn
-   Task: Fixed bug where two feedback messages were concatenated without
    intervening space

[2015-07-18]{.small}

-   Task: Fixed bug where the width of ID columns was mis-calculated for 5-digit
    task IDs
-   Task: Fixed bug where UDAs were missing from the `columns` command output
-   Task: Fixed typos in translation files

[2015-07-19]{.small}

-   [\#96: server\_setup.bash won\'t run on Mac OS X and
    BSD](https://github.com/GothenburgBitFactory/taskserver/issues/96) fixed
-   [\#99: Manual page of taskd has hyphen instead minus sign
    \"-\"](https://github.com/GothenburgBitFactory/taskserver/issues/99) fixed
-   [\#101: taskdrc man page says \"trust\" defaults to \"strict\", but server
    complains if none
    set](https://github.com/GothenburgBitFactory/taskserver/issues/101) fixed
-   [\#1492: UDA with type duration is stored as
    text/string](https://github.com/GothenburgBitFactory/taskwarrior/issues/1492)
    fixed
-   [\#1504: due:easter sets the easter of the current year regardless of the
    date](https://github.com/GothenburgBitFactory/taskwarrior/issues/1504) fixed
-   [\#1511: can\'t delete recurring tasks (except by
    workaround)](https://github.com/GothenburgBitFactory/taskwarrior/issues/1511)
    fixed
-   [\#1541: abbreviation.minimum does not apply to date
    recognition](https://github.com/GothenburgBitFactory/taskwarrior/issues/1541)
    fixed
-   [\#1547: task project!=PROJECTNAME does not work
    (Regression)](https://github.com/GothenburgBitFactory/taskwarrior/issues/1547)
    fixed
-   [\#1569: cmake complains \"test\" is not a valid target (on arch
    linux)](https://github.com/GothenburgBitFactory/taskwarrior/issues/1569)
    fixed
-   [\#1579: Setting defaultheight:0 makes burndown command
    hang](https://github.com/GothenburgBitFactory/taskwarrior/issues/1579) fixed
-   [\#1658: due.not:\<date\> excludes only tasks scheduled at
    mitnight](https://github.com/GothenburgBitFactory/taskwarrior/issues/1658)
    fixed
-   [\#1659: Running \"task anystringatall\" does not filter
    anything](https://github.com/GothenburgBitFactory/taskwarrior/issues/1659)
    fixed
-   Task: Fish shell completion fixed for OSX
-   Task: Day names and month names are now specifiable using abbreviations
-   Task: Editing failure now stops all editing of multiple tasks

[2015-07-20]{.small}

-   [\#1479: The uuid: filter does not
    work](https://github.com/GothenburgBitFactory/taskwarrior/issues/1479) fixed
-   [\#1498: Syntactic sugar morphs into regex expressions, even if turned
    off](https://github.com/GothenburgBitFactory/taskwarrior/issues/1498) fixed
-   [\#1662: Undo doesn\'t work when a context is
    set](https://github.com/GothenburgBitFactory/taskwarrior/issues/1662) fixed
-   Task: A Bash TAP library allows the rapid creation of simple tests
-   Task: Bash test scripts now participate in parallelization
-   Task: The example add-on scripts for import and export are relocated online
-   Task: Renamed a report column named \'for\'

[2015-07-22]{.small}

-   Task: Test Framework gained a MetaTest capability, which simplifies dynamic
    test creation

[2015-07-23]{.small}

-   [\#1559: dateformat confusion, regress
    tests](https://github.com/GothenburgBitFactory/taskwarrior/issues/1559)
    fixed
-   [\#1592: Context is applied on \'task
    export\'](https://github.com/GothenburgBitFactory/taskwarrior/issues/1592)
    fixed
-   [\#1664: \'\_get .start\' for an inactive tasks returns a date formatted
    from
    epoch 0.](https://github.com/GothenburgBitFactory/taskwarrior/issues/1664)
    fixed
-   Task: Bug that causes UDA orphans not to be shown in the \'info\' report
    fixed
-   Task: Tags: New \'UDA\' and \'ORPHAN\' virtual tags

[2015-07-25]{.small}

-   [\#1665: \'edit\' should process or reject \<mods\>
    arguments](https://github.com/GothenburgBitFactory/taskwarrior/issues/1665)
    fixed
-   Task: RX: Was missing REG\_ENHANCED, which omits \\d support
-   Task: Commands that do not accept filters or modifications now generate an
    error when extra arguments are specified
-   Task: There are now a class of command to which `context` does not apply

[2015-07-26]{.small}

-   Task: DOM references are now detected using precise templates, rather than
    patterns, which makes them more reliable
-   Task: zsh completion now categorizes commands

[2015-07-27]{.small}

-   Task: The last traces of Perl in the test suite are removed. This concludes
    the first phase of the test suite refactoring. Remaining is the effort to
    organize tests in feature-specific scripts, which is not complete
-   Task: Added support for free-form JSON input, as well as the traditional
    one-line-per-task form

[2015-07-28]{.small}

-   [\#1581: Project Names Converted to
    Dates](https://github.com/GothenburgBitFactory/taskwarrior/issues/1581)
    fixed
-   [\#1651: \'mon\' is replaced with date in project
    field](https://github.com/GothenburgBitFactory/taskwarrior/issues/1651)
    fixed
-   [\#1661: project name \"mod\" interpreted as
    date](https://github.com/GothenburgBitFactory/taskwarrior/issues/1661) fixed
-   [\#1666: After \"\--\", an apostrophe unexpectedly ends the task
    description](https://github.com/GothenburgBitFactory/taskwarrior/issues/1666)
    fixed
-   Task: The test suite now reports when tests unexpectedly succeed
-   Task: The test suite can now test all `confirmation` configurations
-   Task: Dependencies are now exported as a JSON array, which can be disabled
    with `rc.json.depends.array=off`.

[2015-07-29]{.small}

-   [\#210: JSON export should model dependencies as
    array](https://github.com/GothenburgBitFactory/taskwarrior/issues/210) fixed
-   [\#1453: Adding a date in 1963 (why not?) stores a negative epoch, which
    fails to
    export](https://github.com/GothenburgBitFactory/taskwarrior/issues/1453)
    fixed
-   [\#1645: Recurrent parent tasks shouldn\'t be counted in
    history](https://github.com/GothenburgBitFactory/taskwarrior/issues/1645)
    fixed
-   [\#1570: requested a \"Do you want to set context \$name now?\" prompt when
    defining a context; this does the next best thing and shows how to activate
    the context right
    away](https://github.com/GothenburgBitFactory/taskwarrior/issues/1596)
