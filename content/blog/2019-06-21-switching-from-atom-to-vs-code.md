---
title: "Switching From Atom to VS Code"
date: 2019-06-21T11:43:45+01:00
summary: "Reflecting on the last six months using VS Code as my code editor after three years with Atom"
categories:
  - longread
---

I've been a long-time user of GitHub's [Atom](https://atom.io/), using it as my primary code editor for three years (and three years is a lifetime in the world of frontend development right?). But after seeing so much positive reaction to VS Code, I decided it was time for a change. It's been six months since I made the full-time switch to Microsoft's [VS Code](https://code.visualstudio.com/), which I thought was a good point to reflect on the experience so far.

## Why change?

I started a new job in 2016 and needed to install a code editor to my new laptop. I had just finished a role where I used [IntelliJ](https://www.jetbrains.com/idea/), but I wasn't in love with it, and I wanted to use an editor that didn't require a licence. Even in 2016, I felt like [Sublime Text](https://www.sublimetext.com/) was a little dated and that there were more up-to-date alternatives. Back then, Atom was relatively new and shiny, which was all the reason I needed to choose it! (developers can be fickle) So I downloaded Atom and started the irritating period of learning new software: relearning keyboard shortcuts, locating menu items and working out how to customise settings.

I enjoyed Atom. It was open-source, which made me feel virtuous, developed by a company that I admire (GitHub), and I loved being able to customise it (even though I only ever used a slight variation of the default colour theme!). I added my own code snippets, [changed the colour contrast to make things easier to read](/blog/2017-03-07-improving-colour-contrast-ratios-in-atom/), had a collection of favourite packages, and even developed some packages of my own for it (even releasing one: [rainbow tree](https://atom.io/packages/rainbow-tree)).

However, I began working on Magento 2 projects, which contained _a lot_ of files (mostly backend PHP) and this meant that Atom's performance started to suffer on my MacBook. My laptop often sounded like it was about to take off, because the fans were always on while I was coding, and it was prone to freezing and crashing when I tried to navigate the folder directory.

Around this time, I heard more and more positive reactions from colleagues and developers on my Twitter feed about VS Code. Most people were persuasive about the features of VS Code, while others just unhelpfully rolled their eyes and scoffed "you're still using Atom?" (try not to be this person!).

I couldn't pinpoint exactly what made me stop using Atom and begin using VS Code exclusively. By this time, I had changed companies and escaped the large Magento 2 projects, and was working on a (much smaller) pure React app. Perhaps it was because it was New Year, a time I like to spend introducing new habits and ways of working. Additionally, there's always a little bit of peer-pressure to keep up-to-date with the shiniest tools, and I felt I was falling behind by not giving VS Code a fair try.

## Concerns about changing editors

I was apprehensive about:

1. losing my code snippets and keyboard shortcuts
2. losing my colour scheme
3. losing my packages, particularly one that I used to sync my settings between my work laptop and personal laptop
4. the performance: would it actually be better than Atom?
5. getting used to a new search interface: I really liked Atom's fullscreen search

The first package I installed was [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings), which I still haven't managed to wean myself off yet! That solved my problem with losing Atom's keyboard shortcuts. The second package on my install list was [Atom One Dark Theme](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark): second issue solved. VS Code provides code snippets just like Atom, it was simply a case of setting them up.

Finding VS Code equivalents for my beloved Atom packages was trial and error. Some are easy to replace, like ESLint. Others don't have a direct equivalent and required a little more research. I use [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) as my replacement for Atom's [sync-settings](https://atom.io/packages/sync-settings).

I have never had any problems with performance while using VS Code, not even when navigating the depths of a very large `node_modules` folder. This is both on my new personal 2018 Macbook and a much slower one from 2013 I use at work. Neither have I experienced any unresponsiveness or crashing like I did with Atom, although admittedly I've not worked on a Magento 2 project since the switch.

Other issues, like getting used to the different search interface, could only be resolved by spending time using VS Code. VS Code displays the search results in the left-hand column, compared to Atom which dedicated a whole pane in the editor window. I found the reduced space difficult to use at first, but after a few weeks I got used to it. (I bet there's other ways to configure it or packages that would change the appearance, but I have never spent time looking for them.)

Below, Atom's search interface and VS Code's.

![Atom's search interface](/images/atom-vs-code/atom-search.png)

![VS Code's search interface](/images/atom-vs-code/vs-code-search.png)

## An unexpected benefit

An added benefit I discovered with my new choice of editor was that most of my team use VS Code. This meant that when they found a new package or setting that improved their workflow, they would share it with the rest of the team, which could then improve my developer experience too. It also made pair programming easier as me and my partner would already be largely familiar with each other's environment.

In my experience (a small group of frontend web developers in the UK), most frontend devs use VS Code nowadays. Occassionally I'll meet someone who still uses Sublime 3, or is a Vim or Tmux expert, but I very rarely meet someone using Atom.

## Will I stick with VS Code?

I will definitely continue using VS Code as my main code editor. Even after six months, I still don't feel that I've invested enough time customising my setup and have more work to do. I'd also love to create a package for VS Code and compare the experience with Atom's.

Learning a new tool is tedious but I found benefits to knowing how to use one of the most popular code editors on the market. I'm not advocating that software teams enforce the use of a particular code editor, but there are definite advantages to having a common setup amongst developers working together.

If I ever feel that I'm missing Atom, I would use it for personal projects and continue to use VS Code for work.
