---
title: "Taskwarrior - FAQ"
topic: "Taskserver"
question: "Building taskd, cmake cannot find gnutls"
---

Q: Building taskd, cmake cannot find gnutls

Cmake (v2.8.4) is not finding GnuTLS, despite both being installed.

$ cmake .
- - Looking for SHA1 references
- - Looking for GnuTLS
CMake Error at /usr/share/cmake-2.8/Modules/FindPackageHandleStandardArgs.cmake:91 (MESSAGE):
  Could NOT find GnuTLS (missing: GNUTLS_LIBRARY GNUTLS_INCLUDE_DIR)
Call Stack (most recent call first):
  /usr/share/cmake-2.8/Modules/FindPackageHandleStandardArgs.cmake:252 (_FPHSA_FAILURE_MESSAGE)
  /usr/share/cmake-2.8/Modules/FindGnuTLS.cmake:60 (FIND_PACKAGE_HANDLE_STANDARD_ARGS)
  CMakeLists.txt:70 (find_package)

A: BTW: You do not need sudo to run cmake. cmake . make sudo make install only the last command needs sudo-privileges.

A: The 

libgnutls-dev
dev library must be installed, in order to build Taskserver from source.
