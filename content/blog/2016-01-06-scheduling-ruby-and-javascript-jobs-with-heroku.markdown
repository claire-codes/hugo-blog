---
layout: post
title: "Scheduling Ruby and JavaScript jobs with Heroku"
date: 2016-01-06 21:37:32 +0000
comments: true
categories:
- ruby
- javascript
- heroku
---
Need to do a job regularly in your app? If it's on Heroku then there's a free add-on that can run the job for you. It's imaginatively called Heroku Scheduler. Here's how I set up Ruby and JavaScript jobs ready to be scheduled.

Create your app. From the root directory, initialise git and create a Heroku app. I like to use the Heroku toolbelt for all my Heroku command line needs. So something along the lines of:

```bash
mkdir daily-task-app && cd daily-task-app
git init
heroku login
heroku create daily-task-app
```

You could make a rake task to define your scheduled jobs, but I prefer defining scripts. This way you can define a job in whatever language you like, depending on the shebang line at the top of the script.

Make a bin directory in your project's root. This will be where the scripts live. The script names will become commands that you can invoke from your app's bash shell once it's running, so think of good filenames!

```bash
mkdir bin
touch bin/ruby_hello
touch bin/js_hello
```

Let's put some content in the scripts that we can test.

### Ruby

Open `ruby_hello` and put something really simple like:

```bash
#!/usr/bin/env ruby
puts 'Hello Ruby World'
```

I told you it was simple.

### JavaScript

An equivalent JavaScript version for `js_hello` would be:

```bash
#! /app/bin/node
function sayHello() {
   console.log('Hello JS World');
 }
sayHello();
```

### Deploying

Commit and push this work to Heroku.

```bash
git add .
git commit -m 'First commit'
git push heroku master
```

Heroku will do it's stuff and deploy your app. Test that the commands are executable by running a unix shell from the app and trying them out:

```bash
heroku run bash
$ ruby_hello
 => 'Hello Ruby World'
$ js_hello
 => 'Hello JS World'
$ exit
```

I hope that worked for you.

N.B. You may need to edit the shebang line to point to the correct location for node or Ruby.

### Scheduler

Now you know the commands are working, you can schedule them to run at regular intervals using Scheduler.

Install the add-on then open the dashboard from the command-line.

```bash
heroku addons:create scheduler:standard
heroku addons:open scheduler
```

The dashboard will open in your browser. From the dashboard you can set up new jobs and schedule them to run at simple intervals, e.g. daily. The job name should be the same as the filename of the scripts in the `bin` directory, e.g. `hello_js` or `hello_ruby`.

The dashboard gives details of when the job has last run, and you can test they've worked by taking a look at your app's logs where you should be able to see output.

```bash
heroku logs
```

A nice alternative to cron.
