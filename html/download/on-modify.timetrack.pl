#! /usr/bin/perl
#

=head1 NAME

on-modify.timetrack.pl - Writes task start/stop times to timelog

=cut

use strict;
use warnings;

use JSON;
use Time::Piece;

#use Data::Dumper;

our $lfile = sprintf '%s/timetrack.ledger', $ENV{HOME};

=head1 SYNOPSIS

 task $id start $x
 task $id stop $x
 task $id done $x

 ledger -f ~/timetrack.ledger print
 ledger -f ~/timetrack.ledger register

=cut

my %opt;
foreach my $opt (@ARGV)
{
   my ($key, $value) = split(/:/, $opt, 2);
   $opt{$key} = $value;
}

my $json_old = eval{from_json(<STDIN>)};
if ($@) {print "{}\nError parsing original json\n"; exit 1;}
my $json_new = eval{from_json(<STDIN>)};
if ($@) {print "{}\nError parsing modified json\n"; exit 1;}

my $annotation_added = (exists($json_new->{annotations}) and not exists($json_old->{annotations})) ||
		       (exists($json_new->{annotations}) and exists($json_old->{annotations})) &&
		          @{$json_new->{annotations}} > @{$json_old->{annotations}};

my $msg = '';
if ((exists($json_new->{start}) and not exists($json_old->{start})) and $annotation_added)
{
   @{$json_new->{annotations}} = sort {$a->{entry} cmp $b->{entry}} @{$json_new->{annotations}};
   $json_new->{annotations}[-1]{description} =~ /^(\d+)$/;
   if ($1)
   {
      my $mod = $1;
      my $ts = Time::Piece->strptime($json_new->{start}, "%Y%m%dT%H%M%SZ");
      if (not $ts) {printf "{}\nError parsing start time %s\n", $json_new->{start}; exit 1;}
      $ts -= $mod * 60;
      $json_new->{start} = $ts->strftime("%Y%m%dT%H%M%SZ");
      pop(@{$json_new->{annotations}});
      delete $json_new->{annotations} unless @{$json_new->{annotations}};

      $msg = sprintf("Timelog: Started task %s minutes ago.\n", $mod);
   }
} ## end if ((exists($json_new->{start}...
elsif (not exists($json_new->{start}) and exists($json_old->{start}))
{
   my $start = Time::Piece->strptime($json_old->{start}, "%Y%m%dT%H%M%SZ");
   if (not $start) {printf "{}\nError parsing start time %s\n", $json_old->{start}; exit 1;}
   my $ts = gmtime;

   if ($annotation_added)
   {
      @{$json_new->{annotations}} = sort {$a->{entry} cmp $b->{entry}} @{$json_new->{annotations}};
      $json_new->{annotations}[-1]{description} =~ /^(\d+)$/;
      if ($1)
      {
	 my $mod = $1;
	 $ts -= $mod * 60;
	 pop(@{$json_new->{annotations}});
	 delete $json_new->{annotations} unless @{$json_new->{annotations}};

	 if ($ts < $start) {print "{}\nError: Stop date would be before start date!\n"; exit 1;}
	 $msg = sprintf("Timelog: Stopped task %s minutes ago.\n", $mod);
      }
   } ## end if ($annotation_added)

   # Build ledger entry
   open my $l_fh, '>>', $lfile;
   printf({$l_fh} "i %s %s  %s\no %s  ;%s uuid: %s\n\n", $start->strftime("%Y-%m-%d %H:%M:%S"), exists($json_new->{project}) ? $json_new->{project} : 'no project', $json_new->{description}, $ts->strftime("%Y-%m-%d %H:%M:%S"), exists($json_new->{tags}) ? ' :'.join(':', @{$json_new->{tags}}).':' : '', $json_new->{uuid});
   close $l_fh;
} ## end elsif (not exists($json_new->...

#print Dumper($json_new);

printf("%s\n%s", to_json($json_new), $msg);

__END__

=head1 DESCRIPTION

This is a reimplementation of on-modify.timetrack.py in perl as the python
solution is somewhat fragile.

=head1 COPYRIGHT

Copyright (C) 2016 by Klaus Ethgen. All rights reserved.

=head1 LICENSE

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation; either version 2 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
this program; if not, write to the Free Software Foundation, Inc., 675 Mass Ave,
Cambridge, MA 02139, USA.

=head1 AUTHOR

S<Klaus Ethgen E<lt>Klaus@Ethgen.deE<gt>>

=cut

# vim: foldlevel=0
