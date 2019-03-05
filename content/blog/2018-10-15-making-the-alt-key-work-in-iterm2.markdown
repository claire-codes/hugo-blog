---
title: "Making the Alt Key Work in iTerm2"
date: 2018-10-15T22:13:26+01:00
summary: A quick tip to enable using the Alt or Option key to skip words in iTerm2
categories:
  - blogtober
---

[iTerm2](https://www.iterm2.com/) is a replacement for the default Terminal application on MacOS. It has many more handy [features](https://www.iterm2.com/features.html) than Terminal , is free to download and is also [open source](https://github.com/gnachman/iTerm2) 🎉.

However, on first install, you can’t use the Option or Alt key (this key: <code>⌥</code>) as you would in other applications: you can't skip or jump over words by pressing Alt and the left or right keys. Instead you see sequences like `[D` or `[C`:

![Broken alt key displaying escape sequences](/images/iterm/broken-alt.gif)

With a little config, you can change this behaviour, which I'll explain below.

_Note:_ I refer to the ["Alt"](https://en.wikipedia.org/wiki/Alt_key) key throughout this post, which is the text written on my old 2013 MacBook Pro keyboard, but this is normally called the "Option" key in MacOS.

---

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

Close the menu and begin using the Alt and the left/right arrows immediately. The cursor will now "jump" over entire words as it does on other applications. Your command line navigation will now be faster and more precise.

![Working alt key moving between words](/images/iterm/working-alt.gif)
