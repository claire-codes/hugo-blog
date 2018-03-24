---
layout: post
title: "Git Commit message Git Hook"
date: 2015-12-02 00:00:01 +0000
comments: true
categories: 
published: false
---

## What is a Git hook?

A Git hook is some code that executes when you you hit a trigger in Git commands. They can be tagged on to lots of different events.

Eveny time you `git init` a repo and the hidden `.git` directory is created, a directory is created inside this called `hooks`. In this live all the hook scripts, with `.sample` suffixes. They each have a bit a of demo code. In order to use one, just remove the extension and put your code in.

Remember the hook files are just executed as shell scripts: you can have shell scripts execute whatever you want: Ruby, Python, Perl scripts or just simple bash commands to do what you want with them.

### What can you do with them?

Some examples

## An example commit message script in Ruby

We'll use the commit message hook to check that the submitted commit message is over 15 characters long and abort the commit if it isn't.

Start by renaming `./.git/hooks/commit-msg.sample` to `./.git/hooks/commit-msg`

Edit the file using Vim or your favourite editor (remember it's in a hidden folder so you might have to do some jiggery pokery in your file explorer to see it - in Mac, when you're in the Open/Close dialog (which is not Finder) you can hit Cmd + Shift + . to view them). Delete everything that was already there and replace it with this:

```bash
#!/bin/sh

exec < /dev/tty

.git/hooks/commit-msg-length.rb $1
```

On the first line declared that this is a shell script. The second line made the output go somewhere. The third line executed the 'commit-msg-length' Ruby script and passed in the message file to it.

Create a file and make it executable Put this in it.

The possibilities are endless.