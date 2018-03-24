---
layout: post
title: "Deleting multiple local git branches with grep"
summary: Save yourself keystrokes by harnessing the power of grep.
date: 2018-03-13 22:45:59
comments: true
published: true
categories:
- git
---

After working for a while on a project, it’s likely that you’ll have a lot of branches checked out locally. Branches quickly expire and are no longer needed, so it’s a good idea to delete them. But if you’re like me, you don’t do this very regularly! When I type `git branch` into the terminal I'm confronted with dozens of dead branches.

Delete local branches by typing `git branch -D branch-name` in your terminal. However, it can be tedious to delete many branches by typing each name individually. But if you have several branch names that match a regular expression, then you can delete them all at once.

```shell
git branch -D `git branch | grep your-regex`
```

## How does this command work?

Imagine if you type `git branch` at your terminal and you see:

```bash
$ git branch
  fix/ticket-123
* master
  task/ticket-123
  task/ticket-123-v2
  task/ticket-345
```

You're currently on the master branch. Ticket-123 was completed weeks ago and the branches associated with it are stale. They should be deleted to keep our enviroment tidy. Using grep, we can select only those branches, since the names have a common pattern:

```bash
$ git branch | grep ticket-123
  fix/ticket-123
  task/ticket-123
  task/ticket-123-v2
```

This command lists all the branches and pipes the output to grep. Grep then filters the branches by the pattern provided. Grep can use complex regular expressions to search, but here all we need is a simple string pattern, `ticket-123`.

Now we have our list of filtered branches, we can delete them all. Using backticks, we pass the branch names to the `git branch -D` command. This has the same result as writing `git branch -D fix/ticket-123 task/ticket-123 task/ticket-123-v2` which deletes each of these branches. We've avoided writing out each branch name one-by-one!

## Danger ⚠️

Use caution when executing this command, as it will be difficult to recover branches deleted by accident. Always test the regular expression to select your branches `git branch | grep foo` before passing them to `git branch -D`.

## Note

`git branch -D` only deletes local branches, and not the remote versions in the repo.

## Further reading

[https://stackoverflow.com/questions/3670355/can-you-delete-multiple-branches-in-one-command-with-git](https://stackoverflow.com/questions/3670355/can-you-delete-multiple-branches-in-one-command-with-git)
