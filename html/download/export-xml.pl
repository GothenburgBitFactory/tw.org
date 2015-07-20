#! /usr/bin/perl
################################################################################
##
## Copyright 2006 - 2015, Paul Beckingham, Federico Hernandez.
##
## Permission is hereby granted, free of charge, to any person obtaining a copy
## of this software and associated documentation files (the "Software"), to deal
## in the Software without restriction, including without limitation the rights
## to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
## copies of the Software, and to permit persons to whom the Software is
## furnished to do so, subject to the following conditions:
##
## The above copyright notice and this permission notice shall be included
## in all copies or substantial portions of the Software.
##
## THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
## OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
## FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
## THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
## LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
## OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
## SOFTWARE.
##
## http://www.opensource.org/licenses/mit-license.php
##
################################################################################

use strict;
use warnings;

# Give a nice error if the (non-standard) JSON module is not installed.
eval "use JSON";
if ($@)
{
  print "Error: You need to install the JSON Perl module.\n";
  exit 1;
}

# Use the taskwarrior 2.0+ export command to filter and return JSON
my $command = join (' ', ("env PATH=$ENV{PATH} task rc.verbose=nothing rc.json.array=no export", @ARGV));
if ($command =~ /No matches/)
{
  printf STDERR $command;
  exit 1;
}

# Generate output.
print "<tasks>\n";
for my $task (split "\n", qx{$command})
{
  my $data = from_json ($task);

  print "  <task>\n";
  for my $key (keys %$data)
  {
    if ($key eq 'annotations')
    {
      print "    <annotations>\n";
      for my $anno (@{$data->{$key}})
      {
        print "      <annotation>\n";
        print "        <$_>$anno->{$_}</$_>\n" for keys %$anno;
        print "      </annotation>\n";
      }
      print "    </annotations>\n";
    }
    elsif ($key eq 'tags')
    {
      print "    <tags>\n";
      print "      <tag>$_</tag>\n" for @{$data->{'tags'}};
      print "    </tags>\n";
    }
    else
    {
      print "    <$key>$data->{$key}</$key>\n";
    }
  }
  print "  </task>\n";
}

print "</tasks>\n";
exit 0;

################################################################################

