---
title: "Taskwarrior - Export Command"
---


# export

The `export` command accepts a filter, and generates a JSON formatted text
output. For example:

    $ task 1 export
    {"id":1,"description":"Buy milk","entry":"20141018T050231Z","modified":"20141018T050231Z","status":"pending","uuid":"a360fc44-315c-4366-b70c-ea7e7520b749","urgency":"2"}

This command allows you to extract all data from Taskwarrior, in a
machine-readable, standard format. The `export` command is used by many
Taskwarrior extensions to gain access to the data.


## JSON Format

The JSON is formatted according to the [Taskwarrior JSON
Format](/docs/design/task), which consists of one JSON object per line,
where one object represents one task.


## Configuration

There is a configuration setting `json.array` which defaults to \'off\', but
when set to \'on\' generates a single JSON array, rather than a set of
individual JSON objects. In the example below you see a set of JSON objects
(`{...}`), one per line:

    $ task 1-2 export rc.json.array=off
    {"id":1,"description":"Buy milk", ...}
    {"id":2,"description":"Buy potatoes" ...}

Setting `json.array` to \'on\', a similar structure is emitted but the task
objects are presented in a list, one per line:

    $ task 1-2 export rc.json.array=on
    [{"id":1,"description":"Buy milk", ...},
    {"id":2,"description":"Buy potatoes" ...}]

Which setting you use depends on how you handle the JSON.


## Limitations

The `export` command JSON includes metadata that is not stored. The `id` and
`urgency` values are included because some external programs want to see this,
but are derived values, not stored values.


## See Also

-   [`_get`](/docs/commands/_get) command
-   `import` command
