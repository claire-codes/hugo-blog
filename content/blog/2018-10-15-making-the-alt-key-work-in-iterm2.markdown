---
title: "Making the Alt Key Work in iTerm2"
date: 2018-10-15T22:13:26+01:00
summary: A quick tip to enable using alt to skip words in iTerm2
categories:
- blogtober
---

[iTerm2](https://www.iterm2.com/) is a replacement for the default Terminal application on Mac OS. I like to use it for the screen splitting abilities because it's open source. However, it has an annoying initial state where you can’t use the Option or Alt key as you would in other applications. This means you can't skip words by pressing alt and the left or right keys.

You can change this behaviour, it just takes a little setup.

Open the Preferences menu: either find it in the "iTerm2" dropdown menu along the top of the screen or press Cmd and comma.

![iTerm2 general preferences menu](/images/iterm/iTerm-general.png)

Navigate to the Profiles menu.

![iTerm2 profiles menu](/images/iterm/iTerm-profiles.png)

Choose the Keys tab.

![iTerm2 keys tab](/images/iterm/iTerm-keys.png)

Within the Key Mappings pane, find the mapping for the alt key plus left. Double click it.

![iTerm2 keys tab with alt Mappings](/images/iterm/iTerm-alt-mappings.png)

Change the action from "Send Hex Code" to "Send Escape Sequence" (you might have to scroll a bit to find this).

In the "Esc +" field, type lowercase "b".

![iTerm2 alt left mapping](/images/iterm/iTerm-alt-left.png)

For alt plus right, also change the action to "Send Escape Sequence".

In the "Esc +" field, type lowercase "f".

And that should be it. Close the menu and start using alt and the left/right arrows to move the cursor over entire words.
