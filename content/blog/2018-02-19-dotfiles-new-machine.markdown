---
layout: post
title: "Do your own dotfiles"
summary: "Dotfiles are invaluable when setting up a new machine. Keep them in a format that's easy to understand for you rather than forked from a rockstar developer hero."
date: 2018-02-19 21:35:19
comments: true
published: true
categories:
- git
---

A new job brings lots of changes, including a new laptop or computer. I’m lucky enough to have been able to use a MacBook in all of my developer jobs. (Once you go Mac you never go back!) I recently started a new job and found myself starting from scratch again. I began by downloading Atom, replaced Terminal with iTerm2 and installed some other handy apps.

I used my [dotfiles](https://github.com/claireparker/dotfiles) to customise my terminal prompt, and thanked Past Claire for committing the code for this to the repo. Shell scripts can look like hieroglyphics when you're not using them every day. All I had to do was copy and paste the code into the `.bashrc` file on my new machine , restart iTerm and I was greeted by my familiar prompt.

But there was one terminal shortcut I used to use all the time that I was missing. I used to type ‘git s’ instead of ‘git status’ to see the current state of the files in my branch from the command line. I couldn’t find a definition for it in my dotfiles repo, so I tried to do it with a bash alias, like `alias "git s"="git status"`. This was invalid though as you aren't allowed any spaces in the alias name itself.

So I spent a couple of days retraining my fingers with a slightly amended alias of `gits` for `git status` instead.

I eventually stumbled across a tweet that mentioned [git aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases) and the lightbulb above my head turned on! 🤔💡 That was the method I'd used before. I quickly replaced `gits` with `git s` and have spent the last few days re-retraining my fingers to type `git s` again!

```sh
$ git config --global alias.s status
```

You might think this is a mundane diary entry rather than a tech blog post right now. But bear with me. My takeaways from this were:

- keep your dotfiles up-to-date
- your dotfiles repo can take any format you like

The reason I’d never added the git alias to my dotfiles was that I’d configured it from the command line. I had a misconception that dotfiles should only contain executable files or configs. (It turns out that git aliases live in the `~/.gitconfig` file so that was my second misconception.) But in reality, it doesn’t matter what format the dotfiles repo takes, as long as it’s useful for you. For me, a dotfiles repo should make life easier for Future Claire when setting up clean machine. The format and layout should be easy for me to understand, and not to show off a load of unused aliases I copied from another developer's dotfiles repo.

If a markdown file with a list of commands is helpful for you, then add that to your dotfiles. If you prefer a setup that you could clone to your machine and run immediately, then add that to your dotfiles instead.

With this in mind, I added a couple of new text files to my dotfiles. One was a list of applications I commonly install, as I always forget at least one! Another listed all the packages I currently have installed on Atom. (Although I recommend using the [sync-settings package](https://atom.io/packages/sync-settings) to mirror setup across different machines. This list was a just a backup.) I also added a folder for git-related files. This includes a template gitignore file and a text file explaining how to setup aliases. Hopefully this means next time I won’t spend days typing out the wrong command for `git status`.

[Here's a link to my dotfiles.](https://github.com/claireparker/dotfiles)