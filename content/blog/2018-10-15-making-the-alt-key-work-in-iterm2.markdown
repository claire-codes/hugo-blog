---
title: "Making the Alt Key Work in iTerm2"
date: 2018-10-15T22:13:26+01:00
summary: A quick tip to enable using Alt to skip words in iTerm2
categories:
  - blogtober
---

[iTerm2](https://www.iterm2.com/) is a replacement for the default Terminal application on MacOS. It has lots of useful [features](https://www.iterm2.com/features.html) that Terminal doesn't, is free to download and [open source](https://github.com/gnachman/iTerm2). However, on first install, you can’t use the Option or Alt key as you would in other applications. By this I mean you can't skip words by pressing Alt and the left or right keys. Instead you get this:

You can change this behaviour, it just takes a little setup, which I'll explain below.

Open the "Preferences" menu: either find it in the "iTerm2" dropdown menu along the top of the screen or press the Cmd and comma keys. <kbd>⌘</kbd> + <kbd>,</kbd>

![iTerm2 general preferences menu](/images/iterm/iTerm-general.png)

Choose the "Profiles" menu.

![iTerm2 profiles menu](/images/iterm/iTerm-profiles.png)

Select the "Keys" tab.

![iTerm2 keys tab](/images/iterm/iTerm-keys.png)

Within the "Key Mappings" pane, find the mapping for the Alt and left keys, which will look like this: <code>⌥←</code>. Double click it.

![iTerm2 keys tab with Alt Mappings](/images/iterm/iTerm-alt-mappings.png)

Change the action from "Send Hex Code" to "Send Escape Sequence" (you might have to scroll a bit to find this).

In the "Esc +" field, type lowercase "b" and click "OK".

![iTerm2 Alt left mapping](/images/iterm/iTerm-alt-left.png)

Open the same context menu for Alt plus right <code>⌥→</code> and again change the action to "Send Escape Sequence".

This time, in the "Esc +" field, type lowercase "f". Click "OK".

Now the mapping will work. Close the menu and using Alt and the left/right arrows to move the cursor over entire words.
