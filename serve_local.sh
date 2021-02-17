#!/bin/bash
# serve_local.sh -- created 2015-05-21, Renato Alves
# @Last Change: 2015-05-21.
# @Revision:    0.1

# Location of the current script. Used to allow launching this from anywhere
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# The root of the HTTP Server
cd $DIR/html 

if [ $# -eq 1 ]; then
    PORT=$1
else
    PORT=8000
    echo "If you wish to run the HTTP server on a different port, pass the port as an argument to this script."
fi

python -m http.server --bind 127.0.0.1 $PORT
