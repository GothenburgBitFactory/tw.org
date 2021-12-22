---
title: "Plans"
---

::: {.navbar .navbar-default .navbar-inverse .navbar-fixed-top role="navigation"}
::: {.container}
[![](/images/tw-s.png){width="24" height="24"} TASKWARRIOR](/){.navbar-brand
.text-heavy}

::: {.navbar-header}
[Toggle navigation]{.sr-only} []{.icon-bar} []{.icon-bar} []{.icon-bar}
:::

::: {.collapse .navbar-collapse}
-   [News](/news/)
-   [Docs](/docs/)
-   [Download](/download/)
-   [Support](/support/)
-   [Tools](/tools/)
:::
:::
:::

::: {.container}
::: {.col-md-12}
::: {.col-md-10}
There are many interconnected features and technologies in Taskwarrior,
Taskserver, Tasksh and Timewarrior, each piece having it\'s own goals.

This matrix allows a simple reading of where things are, and where they are
going. This is a low-resolution time line. It is subject to change. It does not
constitute a concrete plan. This is an all-volunteer effort, and scheduling is
difficult.

[Last updated 2016-08-08.]{.small}\
\

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Taskwarrior\              [2.5.1]{.label .label-success}\               [2.6.0]{.label .label-danger}\                [2.x]{.label .label-info}\
  Technology/Feature        Current\                                      Next\                                         Future
                            \                                             \                                             
                            Released 2016-02-24                           2017                                          
  ------------------------- --------------------------------------------- --------------------------------------------- ---------------------------------------------------
  Core                      [DOM](/docs/dom.html)\                        [Recurrence](/docs/design/recurrence.html)\   True Color
                            Filters\                                      Shared library\                               
                            Expressions\                                  `purge` command\                              
                            Color Rules\                                                                                
                            Custom Reports\                                                                             
                            Annotations\                                                                                
                            Tags / Virtual Tags\                                                                        
                            [Context](/docs/context.html)\                                                              

  API                       [JSON](/docs/design/task.html)\                                                             `on-sync` hook\
                            Import\                                                                                     Full DOM\
                            Export\                                                                                     DOM access in rc\
                            [Hooks](/docs/hooks.html)\                                                                  `$ENV` access in rc\
                            [Hooks v2](/docs/hooks2.html)\                                                              Report columns as DOM refs\
                            [DOM](/docs/dom.html)\                                                                      
                            Helper commands\                                                                            

  Attributes\               `modified`\                                   `template`\                                   `org`\
  [User Defined Attributes  `priority` as a UDA\                          `rtype`\                                      `group`\
  (UDA)](/docs/udas.html)                                                 Remove `mask`\                                
                                                                          Remove `imask`\                               
                                                                          Remove `parent`\                              

  Reports                   Improved layouts\                             Daily, Weekly reports (history, ghistory)\    
                            Improved Themes                                                                             

  Synchronization           `task sync`\                                                                                `task sync reset`\
                            `task sync init` (all tasks)\                                                               

  TDB (task database)       Local file locking\                                                                         Threaded file load\
                            Single file set\                                                                            Read-only mode
                            Single user                                                                                 

  I18N / L10N               UTF-8 support\                                No I18N / L10N                                Migrate to
                            `deu-DEU`\                                                                                  [gettext](https://www.gnu.org/software/gettext/)\
                            `eng-USA`\                                                                                  
                            `epo-RUS`\                                                                                  
                            `esp-ESP`\                                                                                  
                            `fra-FRA`\                                                                                  
                            `ita-ITA`\                                                                                  
                            `pol-POL`\                                                                                  
                            `por-PRT`\                                                                                  

  Documentation             man: task\                                                                                  New video tutorials\
                            man: taskrc\                                                                                
                            man: task-color\                                                                            
                            man: task-sync\                                                                             
                            youtube: various\                                                                           
                            [taskwarrior.org](https://taskwarrior.org)\                                                 
                            taskwarrior.com: Support Site\                                                              

  Testing                   C++ tests\                                    Migration to Flod2\                           
                            Python tests\                                                                               
                            Sync tests\                                                                                 
                            Parallel tests\                                                                             

  Tool Chain                GCC 4.7 / Clang 3.3\                          GCC 4.9 / Clang 3.4\                          Full C++14 support\
                            C++11 support\                                Full C++11 support\                           Full C++17 support\
                            CMake\                                                                                      
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

\
\
\
\

  -------------------------------------------------------------------------------------------
  Tasksh\              [1.1.0]{.label                 [1.2.0]{.label      [1.x]{.label
  Technology/Feature   .label-success}\               .label-danger}\     .label-info}\
                       Current\                       Next\               Future
                       \                              \                   
                       Released 2016-09-05            2017                
  -------------------- ------------------------------ ------------------- -------------------
  Core                 [Review](/docs/review.html)\                       Pomodoro timer\
                       libreadline\                                       
                       Shared library\                                    

  Tool Chain           CMake\                         GCC 4.9 / Clang     Full C++14 support\
                       GCC 4.7 / Clang 3.3\           3.4\                Full C++17 support\
                                                      Full C++11 support\ 
  -------------------------------------------------------------------------------------------

\
\
\
\

  --------------------------------------------------------------------------------
  Taskserver\          [1.1.0]{.label      [1.2.0]{.label      [1.x]{.label
  Technology/Feature   .label-success}\    .label-danger}\     .label-info}\
                       Current\            Next\               Future
                       \                   \                   
                       Released 2015-05-10 2017                
  -------------------- ------------------- ------------------- -------------------
  Core                 Serial server       Shared library\     Threaded server

  Protocol             v1                  v1.1 - client reset v1.2
                                           request\            

  DB (Data Storage)                                            GC

  Security             Validation                              UUID:Cert
                                                               Verification\
                                                               Combined Certs

  Tool Chain           GCC 4.7 / Clang     GCC 4.9 / Clang     Full C++14 support\
                       3.3\                3.4\                Full C++17 support\
                       CMake\              Full C++11 support\ 
  --------------------------------------------------------------------------------

\
\
\
\

  --------------------------------------------------------------------------------
  Timewarrior\         [1.0.0]{.label      [1.1.0]{.label      [1.x]{.label
  Technology/Feature   .label-success}\    .label-danger}\     .label-info}\
                       Current\            Next\               Future
                       \                   \                   
                       Released 2016-08-20 2017                
  -------------------- ------------------- ------------------- -------------------
  Core                 Shared library\                         True Color

  Reports              `summary` report\                       
                       `gaps` report\                          
                       `day` chart\                            
                       `week` chart\                           
                       `month` chart\                          
                       `totals.py`                             
                       extension\                              

  Rules                Simple                                  Rule System\
                       configuration rules                     

  Integration          Taskwarrior                             
                       `on-modify` hook                        
                       script                                  

  Tool Chain           CMake\              GCC 4.9 / Clang     Full C++14 support\
                       GCC 4.7 / Clang     3.4\                Full C++17 support\
                       3.3\                Full C++11 support\ 
                       C++11 support\                          
  --------------------------------------------------------------------------------

\
\
:::
:::
:::

::: {#footer}
::: {.container}
::: {.col-md-2}
Get Involved\
[Submit a bug](https://github.com/GothenburgBitFactory/taskwarrior/issues)\
[Clone the code](https://github.com/GothenburgBitFactory/taskwarrior)
:::

::: {.col-md-2}
Related Sites\
[gothenburgbitfactory.org](https://gothenburgbitfactory.org)\
[holidata.net](https://holidata.net)
:::

::: {.col-md-2}
Contact\
[[]{.glyphicon .glyphicon-envelope} Email](mailto:support@taskwarrior.org)\
[![](/images/twitter_dark.png){width="16px" height="16px"}
Twitter](https://twitter.com/taskwarrior)
:::

::: {.col-md-2}
Donate\
[Sponsor us on Github
sponsors!](https://github.com/sponsors/GothenburgBitFactory)
:::

::: {.col-md-2}
Copyright &copy: 2018 [Göteborg Bit Factory](/about.html)
:::
:::
:::
