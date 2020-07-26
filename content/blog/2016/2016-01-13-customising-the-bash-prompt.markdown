---
layout: post
title: "Customising the Bash Prompt"
date: 2016-01-13 21:43:35 +0000
comments: true
categories:
published: false
---
So you've opened up the Terminal and your prompt is hideous: it's the wrong colour for a start and it's got all the useless information in it - and it stretches halfway across the screen! Let's change it.

# 0. Check you've got a Bash shell

Mash your keyboard and hit return. If you see something like this, you've got a Bash shell and I can help you. If you haven't, switch your computer off and spend time with your loved ones instead.

```
$ fsjdkf
-bash: fsjdkf: command not found
```

# 1. Write a new prompt

Use Vim to open the `.bash_profile` file. `.bash_profile` is run when your shell starts up and contains any config you might use to customise your shell.

The dot in its name means it's a hidden file and you need to us `ls -a` instead of `ls` to view it in its directory, which is your home directory. The tilde is shorthand for your home directory and therefore you can open it with:

```
vim ~/.bash_profile
```

The file might contain other bits and bobs depending on your set up but it should also have a line that starts with `export PS1` - this is what we want to change. But wait, that doesn't look anything like your current prompt! Or does it? What you can see is a combination of special escape sequences that represent data and set the colour of the prompt.

## Colours



## Codes

## Putting it all together

# 2. Check it out

Execute the file using source command to check your new prompt looks alright - or restart the terminal.

```
source ~/.bash_profile
```
