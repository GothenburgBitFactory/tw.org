# taskwarrior.org Site Repository

This repository contains the content of [taskwarrior.org](https://taskwarrior.org), the website for the [Taskwarrior](https://github.com/GothenburgBitFactory/taskwarrior) project.

## Contributing

To clone this repository, run
```shell
git clone https://github.com/GothenburgBitFactory/tw.org
```

For minor changes, it is perfectly fine to simply change the relevant Markdown files and make a pull request.

For more complex changes, here is how to build the documentation locally:

1. Install [hugo](https://gohugo.io/getting-started/quick-start/).
2. Run
   ```shell
   hugo server -D -w
   ```
   This defaults to running a web server on `http://localhost:1313`.  
   If you are running on an external host, try
   ```shell
   hugo server -D -w --bind 0.0.0.0 -b http://<hostname>
   ```

## Updating Taskwarrior Versions

To record a new release of Taskwarrior, run `bin/tw-release vX.Y.Z` and make a PR for the result.
