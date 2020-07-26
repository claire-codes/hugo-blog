---
title: "Quickly Switching Between Two Branches in Git"
date: 2018-06-08T22:17:24+01:00
summary: "Sharing a shortcut I use all the time to save precious keystrokes."
categories:
- git
---

> `git checkout -` checks out the last branch you were working on.


Do you find yourself needing to switch between the same two branches in git again and again? There's a shortcut for that in the terminal!

Instead of typing out the branch name manually each time, substitute the name with the hyphen character `-`.

![Gif demonstrating how to use the `git checkout -` shortcut](/images/long-branch-name-gif.gif)

_Note_: In the gif, I'm using the Bash shell in iTerm2 on a Mac.

If you can't see the gif, here's a text representation, where the line with the dollar `$` represents the command prompt. You'll have to scroll to the right to see all the text because it's a really long line.


```sh
[~test-directory] | first-really-long-branch-name $ git checkout second-super-long-branch-name
Switched to branch 'second-super-long-branch-name'

[~/test-directory] | second-super-long-branch-name $ git checkout -
Switched to branch 'first-really-long-branch-name'

[~/test-directory] | first-really-long-branch-name $ git checkout -
Switched to branch 'second-super-long-branch-name'

[~/test-directory] | second-super-long-branch-name $
```

This shortcut can save keystrokes when toggling between two branches.

It can be helpful when you're working on branches with long names, or your branches have similar names, making autocomplete not as helpful as it could be (e.g. `feature-1123`, `feature-1124`).

---

### P.S.

Speaking of autocomplete in git, [here's how to install it for the Bash shell](https://git-scm.com/book/en/v1/Git-Basics-Tips-and-Tricks), if you don't already have it set up. This provides the ability to type a couple of characters and press tab to autocomplete the rest of the command (or see all possibilities if there's more than one match).

---

### P.P.S.

The same trick can be used to navigate between two directories in the terminal. Try typing `cd -` at the command prompt and the current directory will change to the one you were in last:


```sh
[~/test-directory] | master $ cd /a/long/subdirectory/path

[~/test-directory/a/long/subdirectory/path] | master $ cd -

[~/test-directory] | master $
```
