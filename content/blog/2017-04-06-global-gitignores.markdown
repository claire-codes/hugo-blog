---
layout: post
title: Global gitignores - is this thing on?
summary: What are they, how to create one, whether they&#39;re a good idea and how to check it&#39;s working!!
date: 2017-04-06 22:05:26
comments: true
published: true
categories:
- git
---

Do you get tired of typing out `echo node_modules/ > .gitignore` every time you create a new JavaScript project? Do you always forget and commit those pesky node modules to GitHub anyway? And what about those `npm_debug.log` or `.DS_Store` files (what even is `.DS_Store`⁉️)?

Well help is at hand to save you yet more precious keystrokes. Create a ✨global gitignore✨ file which will be used by all your git repos locally on your machine and you may never need to write a `.gitignore` file again! (if you only ever work on projects by yourself 🎻)

## How

From the terminal (bash shell on Mac OS X in my case):

```bash
# Make sure you're in the home directory
cd ~

# Create the file for the gitignore
touch .global_gitignore

# Add this to your global git config
git config --global core.excludesfile ~/.gitignore_global

# Double check it's set up correctly :)
# This should return the full path of the .global_gitignore file
git config --global --get core.excludesfile
```

Use Vim (other command line editors are available) to edit this file and add all the stuff you want ignored in any future git commits. Write them out in the form of glob patterns as you would in a normal `.gitignore` file. Github have a helpful repo with all sorts of file types you may need to ignore depending on you project setup at [https://github.com/github/gitignore](https://github.com/github/gitignore).

## How do I know it's working??

For example, you add `node_modules/` to your global gitignore file. Create a new directory and run `git init` inside it. Run `mkdir node_modules`. When you run `git status` you won't see the new `node_modules/` directory in the output, because this repo is excluded by the global gitignore. This can be confusing at first as you don't have any explicit declarations inside the directory to prevent files and folders from being committed.

Alternatively, go to an existing repo that contains a `.gitignore` file with the `node_modules/` pattern in it (I'm assuming you've got `node_modules/` in your all your `.gitignore` files - haven't you??). Delete that line from the local gitignore. Run `git status` from the command line and you should still see that `node_modules/` is being ignored, and is not appearing on the `git status` results.

However having a global gitignore doesn't mean you can't have or don't need to have a gitignore file locally in your project. Use the local file to match repo-specific files you want to exclude from commits.

## Is this a good idea?

Hmm not really 😑 (now I've explained all of this to you!):

* Confusing to beginners or veterans alike, as it abstracts an option away from the current directory ("why isn't that file being committed when I expect it should be?")
* Can cause clashes on larger projects with many collaborators
* If someone else were to begin working on your project then they would probably end up creating a `.gitignore` in the repo anyway

In my opinion, global gitignores can be helpful in speeding up local development, perhaps when you're experimenting or working on a personal project, but they shouldn't be relied upon to work effectively in larger projects.