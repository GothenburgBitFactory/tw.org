#!/usr/bin/perl
# task-data-anon.pl - User data anonymizer for use during bug submission
# based on task-anon.pl by Cory Donnelly
#
# Copyright 2011 Johannes Schlatow
# All rights reserved.
#
# This script is part of the taskwarrior project.
#
# This program is free software; you can redistribute it and/or modify it under
# the terms of the GNU General Public License as published by the Free Software
# Foundation; either version 2 of the License, or (at your option) any later
# version.
#
# This program is distributed in the hope that it will be useful, but WITHOUT
# ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
# FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more
# details.
#
# You should have received a copy of the GNU General Public License along with
# this program; if not, write to the
#
#     Free Software Foundation, Inc.,
#     51 Franklin Street, Fifth Floor,
#     Boston, MA
#     02110-1301
#     USA
#
# This script replaces project names, task descriptions, and annotations with a
# 32 character md5_hex encoded string that includes a salt.
#
# Note that this script does not anonymize tags, allowing users to apply
# descriptive tags addressed to the taskwarrior team.
#
# To use this script, call it against the .data files of taskwarrior, e.g.:
#
# $ cat ~/task/undo.data | task-anon.pl > undo_anon.data

use strict;
use Digest::MD5 qw(md5_hex);

my $seed = rand();

while( my $str = <> ){
 $str =~ s/(description|project|annotation_\d+):\s*"(.+?)"(\s*)/$1 . ":\"" . md5_hex($seed . $2) . "\"" . $3/eg;
 print $str;
}

