---
title: 'Taskwarrior - task-sync.5 for task-3.4.2'
viewport: 'width=device-width, initial-scale=1'
layout: single
---
# NAME

task-sync - A discussion and tutorial for the various **task**(1) data
synchronization capabilities.

# INTRODUCTION

Taskwarrior can synchronize your tasks to a server. This has a few
benefits:  
- Makes your tasks accessible from multiple systems, called
"replicas".  
- Provides a backup of your tasks.  
- Saves disk space.

For example, you might want a replica of your tasks on your laptop and
on your phone.

NOTE: A side-effect of synchronization is that once changes have been
synchronized, they cannot be undone. This means that each time
synchronization is run, it is no longer possible to undo previous
operations.

# MANAGING SYNCHRONIZATION

## Adding a Replica

To add a new replica, configure a new, empty replica identically to the
existing replica, and run \`task sync\`.

## When to Synchronize

For synchronization to a server, a common solution is to run

        $ task sync

periodically, such as via **cron**(8)**.**

# CONFIGURATION

Taskwarrior provides several options for synchronizing your tasks:

\- To a server specifically designed to handle Taskwarrior data. + To a
cloud storage provider. Currently both AWS and GCP are supported. - To a
local, on-disk file.

For most of these, you will need an encryption secret used to encrypt
and decrypt your tasks. This can be any secret string, and must match
for all replicas sharing tasks.

        $ task config sync.encryption_secret <encryption_secret>

Tools such as **pwgen**(1) can generate suitable secret values.

## Sync Server

To synchronize your tasks to a sync server, you will need the following
information from the server administrator:

  
- The server's URL (such as "https://tw.example.com/path")  
- A client ID ("client\_id") identifying your tasks

Configure Taskwarrior with these details:

        $ task config sync.server.url               <url>
        $ task config sync.server.client_id         <client_id>

Note that the URL must include the scheme, such as 'http://' or
'https://'.

$ task config sync.server.origin &lt;origin&gt;

Is a deprecated synonym for "sync.server.url".

## Google Cloud Platform

To synchronize your tasks to GCP, use the GCP Console to create a new
project, and within that project a new Cloud Storage bucket. The default
settings for the bucket are adequate.

Authenticate to the project with:

        $ gcloud config set project $PROJECT_NAME
        $ gcloud auth application-default login

Then configure Taskwarrior with:

        $ task config sync.gcp.bucket               <bucket-name>

However you can bring your own service account credentials if your
\`application-default\` is already being used by some other application

To begin, navigate to the "IAM and Admin" section in the Navigation
Menu, then select "Roles."

On the top menu bar within the "Roles" section, click "CREATE ROLE."
Provide an appropriate name and description for the new role.

Add permissions to your new role using the filter "Service:storage" (not
the "Filter permissions by role" input box). Select the following
permissions:

\- storage.buckets.create - storage.buckets.get -
storage.buckets.update - storage.objects.create -
storage.objects.delete - storage.objects.get - storage.objects.list -
storage.objects.update

Create your new role.

On the left sidebar, navigate to "Service accounts."

On the top menu bar within the "Service accounts" section, click "CREATE
SERVICE ACCOUNT." Provide an appropriate name and description for the
new service account. Select the role you just created and complete the
service account creation process.

Now, in the Service Account dashboard, click into the new service
account and select "keys" on the top menu bar. Click on "ADD KEY" to
create and download a new key (a JSON key).

Then configure Taskwarrior with:

        $ task config sync.gcp.bucket               <bucket-name>
        $ task config sync.gcp.credential_path      <absolute-path-to-downloaded-credentials>

## Amazon Web Services

To synchronize your tasks to AWS, select a region near you and use the
AWS console to create a new S3 bucket. The default settings for the
bucket are adequate. In particular, ensure that no lifecycle policies
are enabled, as they may automatically delete or transition objects,
potentially impacting data availability.

You will also need an AWS IAM user with the following policy, where
BUCKETNAME is the name of the bucket. The same user can be configured
for multiple Taskwarrior clients.

        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Sid": "TaskChampion",
                    "Effect": "Allow",
                    "Action": [
                        "s3:PutObject",
                        "s3:GetObject",
                        "s3:ListBucket",
                        "s3:DeleteObject"
                    ],
                    "Resource": [
                        "arn:aws:s3:::BUCKETNAME",
                        "arn:aws:s3:::BUCKETNAME/*"
                    ]
                }
            ]
        }

To create such a user, create a new policy in the IAM console, select
the JSON option in the policy editor, and paste the policy. Click "Next"
and give the policy a name such as "TaskwarriorSync". Next, create a new
user, with a name of your choosing, select "Attach Policies Directly",
and then choose the newly-created policy.

You will need access keys configured for the new user. Find the user in
the user list, open the "Security Credentials" tab, then click "Create
access key" and follow the steps.

At this point, you can choose how to provide those credentials to
Taskwarrior. The simplest is to include them in the Taskwarrior
configuration:

        $ task config sync.aws.region              <region>
        $ task config sync.aws.bucket              <bucket-name>
        $ task config sync.aws.access_key_id       <access-key-id>
        $ task config sync.aws.secret_access_key   <secret-access-key>

Alternatively, you can set up an AWS CLI profile, using a profile name
of your choosing such as "taskwarrior-creds":

        $ aws configure --profile taskwarrior-creds

Enter the access key ID and secret access key. The default region and
format are not important. Then configure Taskwarrior with:

        $ task config sync.aws.region              <region>
        $ task config sync.aws.bucket              <bucket-name>
        $ task config sync.aws.profile             taskwarrior-creds

To use AWS's default credential sources, such as environment variables,
the default profile, or an instance profile, set

        $ task config sync.aws.region              <region>
        $ task config sync.aws.bucket              <bucket-name>
        $ task config sync.aws.default_credentials true

## Local Synchronization

In order to take advantage of synchronization's side effect of saving
disk space without setting up a remote server, it is possible to sync
tasks locally. To configure local sync:

        $ task config sync.local.server_dir /path/to/sync

The default configuration is to sync to a database in the task directory
("data.location").

# RUNNING TASKCHAMPION-SYNC-SERVER

The TaskChampion sync server is an HTTP server supporting multiple
users. Users are identified by a client ID, and users with different
client IDs are entirely independent. Task data is encrypted by
Taskwarrior, and the sync server never sees un-encrypted data.

The server is developed in
https://github.com/GothenburgBitFactory/taskchampion-sync-server.

## Adding a New User

To add a new user to the server, invent a new client ID with a tool like
\`uuidgen\` or an online UUID generator. There is no need to configure
the server for this new client ID: the sync server will automatically
create a new user whenever presented with a new client ID. Supply the
ID, along with the URL, to the user for inclusion in their Taskwarrior
config. The user should invent their own "encryption\_secret".

# AVOIDING DUPLICATE RECURRING TASKS

If you run multiple clients that sync to the same server, you will need
to run this command on your primary client (the one you use most often):

        $ task config recurrence on

And on the other clients, run:

        $ task config recurrence off

This protects you against the effects of a sync/duplication bug.

# ALTERNATIVE: FILE SHARING SERVICES

There are many file sharing services, such as DropBox, Amazon S3, Google
Drive, SkyDrive and more. This technique involves storing your .task
directory in a shared directory under the control of the file hosting
services.

Syncing happens quickly, although it is possible to run into conflict
situations when there is no network connectivity, and the tasks are
modified in two separate locations. This is because the file hosting
service knows only about files, and it has no idea how to merge tasks.
Avoid this problem by never modifying the same task on two machines,
without an intervening sync.

Setup simply involves creating the directory and modifying your
data.location configuration variable like this:

        $ task config data.location /path/to/shared/directory

Strengths:  
- Good client support  
- Easy setup  
- Transparent use

Weaknesses:  
- Tasks are not properly merged

# CREDITS & COPYRIGHTS

Copyright (C) 2006 - 2021 T. Babej, P. Beckingham, F. Hernandez.

Taskwarrior is distributed under the MIT license. See
https://www.opensource.org/licenses/mit-license.php for more
information.

# SEE ALSO

**task(1),** **taskrc(5),** **task-color(5),**

For more information regarding Taskwarrior, see the following:

The official site at  
&lt;https://taskwarrior.org&gt;

The official code repository at  
&lt;https://github.com/GothenburgBitFactory/taskwarrior&gt;

You can contact the project by emailing  
&lt;support@GothenburgBitFactory.org&gt;

# REPORTING BUGS

Bugs in Taskwarrior may be reported to the issue-tracker at  
&lt;https://github.com/GothenburgBitFactory/taskwarrior/issues&gt;
