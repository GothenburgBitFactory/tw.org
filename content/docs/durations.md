---
title: "Taskwarrior - Durations"
---

# Durations

Taskwarrior supports duration values.
In the core, durations are used directly in one place - the `recur` attribute, used for recurring tasks.
For example, here is a recurring task that recurs every monday:

    $ task add Take out the trash due:monday recur:weekly

The value `monday` is interpreted as 'next monday', and the value `weekly` is interpreted as a 7-day duration.

The other place where durations are supported directly is with [UDA attributes](../udas/) of type `duration`.

## Relative Date

There is indirect support for durations everywhere that a date value is expected.
For example, here is a task due in two days:

    $ task add Birthday party due:2days

Whenever Taskwarrior expects a date (due date in this example) but instead finds a duration, it is interpreted as a relative duration added to the current date/time, in this example `now + 2days`.

## Duration Format

* `5 seconds`                            Five seconds.
* `5 second`
* `5 secs`
* `5 sec`
* `5 s`
* `5seconds`
* `5second`
* `5secs`
* `5sec`
* `5s`
* `second`                               One second. Missing ordinal implies one second.
* `sec`
* `5 minutes`                            Five minutes.
* `5 minute`
* `5 mins`
* `5 min`
* `5minutes`
* `5minute`
* `5mins`
* `5min`
* `minute`                               One minute. Missing ordinal implies one minute.
* `min`
* `3 hours`                              Three hours.
* `3 hour`
* `3 hrs`
* `3 hr`
* `3 h`
* `3hours`
* `3hour`
* `3hrs`
* `3hr`
* `3h`
* `hour`                                 One hour. Missing ordinal implies one hour.
* `hr`
* `2 days`                               Two days.
* `2 day`
* `2 d`
* `2days`
* `2day`
* `2d`
* `daily`                                One day. Missing ordinal implies one day.
* `day`
* `3 weeks`                              Three weeks.
* `3 week`
* `3 wks`
* `3 wk`
* `3 w`
* `3weeks`
* `3week`
* `3wks`
* `3wk`
* `3w`
* `weekly`                               One week. Missing ordinal implies one week.
* `week`
* `wk`
* `weekdays`                             Every weekday, Monday to Friday.
* `2 fortnight`                          Twenty eight days.
* `2 sennight`
* `2fortnight`
* `2sennight`
* `biweekly`                             Fourteen days. Missing ordinal implies fourteen days.
* `fortnight`
* `sennight`
* `5 months`                             Five months.
* `5 month`
* `5 mnths`
* `5 mths`
* `5 mth`
* `5 mo`
* `5 m`
* `5months`
* `5month`
* `5mnths`
* `5mths`
* `5mth`
* `5mo`
* `5m`
* `monthly`                              30 days. Missing ordinal implies one
* `month`                                month. This is an imprecise value.
* `mth`
* `mo`
* `bimonthly`                            Sixty one days. Missing ordinal implies two months. This is an imprecise value.
* `1 quarterly`                          Ninety one days.
* `1 quarters`
* `1 quarter`
* `1 qrtrs`
* `1 qrtr`
* `1 qtr`
* `1 q`
* `1quarterly`
* `1quarters`
* `1quarter`
* `1qrtrs`
* `1qrtr`
* `1qtr`
* `1q`
* `quarterly`                            Ninety one days. Missing ordinal implies three months. This is an imprecise value.
* `quarter`
* `qrtr`
* `qtr`
* `semiannual`                           One hundred and eighty-three days.  Missing ordinal implies six months.  This is an imprecise value.
* `1 years`                              One year.
* `1 year`
* `1 yrs`
* `1 yr`
* `1 y`
* `1years`
* `1year`
* `1yrs`
* `1yr`
* `1y`
* `annual`                               Three hundred and sixty-five days. Missing ordinal implies one year. This is an imprecise value.
* `yearly`
* `year`
* `yr`
* `biannual`                             Seven hundred and thirty days. Missing ordinal implies two years. This is an imprecise value.
* `biyearly`

## ISO-8601 Format

ISO-8601 defines a duration format which is supported by Taskwarrior.
The format looks like this:

    P[nY][nM][nD][T[nH][nM][nS]]

The format always begins with a 'P' (period).
The date elements (`[nY][nM][nD]`) are optional, as are the time elements (`[nH][nM][nS]`), but there must be one element specified.

Even though the month and minute values use the character 'M', there is no ambiguity because of the placement of the character 'T' which delineates date from time elements.

Here is a list of examples:

* `P3D`               - Three days.
* `P1000D`            - One thousand days.
* `P2M`               - Two months. This is an imprecise value.
* `P2M3D`             - Two months and three days. This is an imprecise value.
* `P1Y`               - One year. This is an imprecise value.
* `P1Y3D`             - One year and three days. This is an imprecise value.
* `P1Y2M`             - One year and two months. This is an imprecise value.
* `P1Y2M3D`           - One year, two months and three days. This is an imprecise value.
* `PT50S`             - Fifty seconds.
* `PT40M`             - Forty minutes.
* `PT40M50S`          - Forty minutes and fifty seconds.
* `PT12H`             - Twelve hours.
* `PT12H50S`          - Twelve hours and fifty seconds.
* `PT12H40M`          - Twelve hours and forty minutes.
* `PT12H40M50S`       - Twelve hours, forty minutes and fifty seconds.
* `P1Y2M3DT12H40M50S` - One year, two months, three days, twelve hours, forty minutes and fifty seconds. This is an imprecise value.

Precise values include days, hours, minutes, seconds.
Year and month are not precise because they vary, and can only be made precise if the duration is anchored to a known date.
