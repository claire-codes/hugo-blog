---
layout: post
title: Top tips for targeting your searches in Atom
summary: Speed up Atom&#39;s slow file search with glob patterns.
date: 2017-03-22 23:10:20
comments: true
published: true
categories:
- atom
---

Are you working on a large project in Atom? Dozens of directories? Thousands of files? Innumerable node modules? You may have discovered that Atom isn't the fatest editor out there when executing search queries across an entire project. Give Atom a helping hand by narrowing down the scope of your search with a few simple glob patterns.

<div class="c-tldr">
    <h2 class="c-tldr__title">TL;DR</h2>
    <ul>
        <li>Exclude a directory from your search by adding an exclamation point in front of its name: <code>!node_modules/</code></li>
        <li>Include or exclude several directories by separating their file paths with commas: <code>web/, !static/</code></li>
        <li>Search for for a specific file type in all subdirectories: <code>frontend/**/*.js</code></li>
   </ul>
</div>

_Note_: The trailing slashes are optional - I use them for clarity here to indicate a folder rather than a file.

Every piece of functionality in Atom is provided by a package, and the search panel is no different. When you press <kbd>Cmd + Shift + F</kbd> on a Mac or <kbd>Ctrl + Shift + F</kbd> on Windows the search panel appears, courtesy of the [find-and-replace package](https://atom.io/packages/find-and-replace). Your search term goes in the first box, and any of the glob patterns in the following tips are placed in the third "File/directory pattern" box.

![The find and replace package panel](/assets/find-and-replace-panel.png)

A glob pattern is a filename that includes wildcard characters. The addition of the wildcard means that the pattern could match more than one path, so `foo*.js` could match the files `foobar.js`, `foo.js` and `foobaz.js`. A glob pattern may remind you of a regular expression, but doesn't behave in quite the same way and aren't as powerful - for example the wildcard `*` is equivalent to the regex `.*`.

## 1. Exclude gitignored files

Open the Core Settings menu and make sure the **Exclude VCS Ignored Paths** option is selected. Now every file and directory in your `.gitignore` file will be excluded from your search. Typically you would add the `node_modules/` directory in the `.gitignore` file so that they aren’t committed to your repo, which can provide a big win in terms of search speed for JavaScript based projects


![Exclude VCS Ignored Paths setting](/assets/VCS-setting.png)

## 2. Search in a specific directory

Do you only want to search for the string "cheezeburger" in the `kittehs/` directory? Then enter this `kittehs/` file path in the Find and Replace panel before hitting return to narrow the search scope to this folder.

![Search only in this directory example](/assets/only-dir.png)

## 3. Search in multiple specific directories

Do you only want to search in either the `kittehs/` folder or the `doge/` folder? Then separate their file paths with a comma to search just within these directories.

![Search in multiple directories example](/assets/multi-dir.png)

## 4. Exclude specific directories from search

How about when you know you definitely don't want to search within a particular folder, but want to look everywhere else in the project? Perhaps you don't want to search within the `tests/` directory for your snippet of code. Perhaps you don't have a `.gitignore` file, or if you do you still need to work with the files and folders listed in it (👋 hello Magento 2 projects and the `vendor/` folder).

It's possible to exclude a directory from the scope of your search by typing its file path in the 3rd field preceded by an exclamation point.

For example, look everywhere but the `node_modules/` directory by just typing `!node_modules/` and running the search.

![Exclude a directory example](/assets/not-dir.png)

## 5. Include and exclude specific directories

You can combine the previous two techniques by separating your various include and exclude glob patterns with a comma. This is useful if you want to search within a directory but exclude a subdirectory of it, e.g. `javascript/, !javascript/tests/`.

![Combining including and excluding patterns example](/assets/all-the-dir.png)

## 6. Search for file types within directories

It's possible to filter by file type by using the wildcard character followed by the desired file extension: to search only for JavaScript files, type `*.js`.

But what if we want to search for our term in JavaScript files but only within the `web/` directory? If we were to type `web/*.js`, this will only search for JavaScript files directly in the `web/` folder, and not in any of `web/`'s subdirectories (if it has any). To include all subdirectories in the search, use the globstar pattern instead: `web/**/*.js`

![File types with glob pattern example](/assets/glob.png)

## 🌟 Bonus tip

With the keyboard focus in any of the search panel fields, press up ⬆️ and your last search term will appear! You can toggle up and down through your previous terms which is really handy 👐 if you're searching for the same few terms over and over.

## Fin

Glob patterns are a useful skill to have in your development ninja toolbelt and will serve you well not only in Atom but in many other editors and search tools, hopefully saving millions of milliseconds of your life when searching for that pesky string. ⏱