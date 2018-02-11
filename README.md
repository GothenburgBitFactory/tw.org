# taskwarrior.org Site Repository

This repository contains the content of the taskwarrior.org site.


## To Clone this Repository:

   git clone https://github.com/GothenburgBitFactory/tw.org.git


## Instruction For Updating tw.org/html/tools

1. git clone git@git.tasktools.org:ST/tw.org.git tw.org.git
   cd tw.org.git

2. git clone https://github.com/BrunoVernay/taskwarrior-site-test.git taskwarrior-site-test.git

3. git clone https://github.com/BrunoVernay/tw-tools-update.git tw-tools-update.git

4. git clone https://github.com/PyGithub/PyGithub.git PyGithub.git

5. Get a Github token:
   https://github.com/settings/tokens

   Paul
   2016-05-22
   6a...

6. Add Github token to Config.py:
  cd tw-tools-update.git
  cp Config.py.example Config.py
  vi Config.py (add token)

7. Take the data-tools-old.json, and update it with a scan of github:
  cd tw-tools-update.git
  PYTHONPATH=../PyGithub.git python Main.py

8. cp data-tools.json ../html/tools/tools-data.js

