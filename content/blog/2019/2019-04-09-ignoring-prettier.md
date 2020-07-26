---
title: "Ignoring Prettier"
date: 2019-04-13T21:22:04+01:00
summary: "Exploring different ways in which you can get the Prettier code formatter to ignore sections of code and whether that is a good idea"
categories:
- javascript
---

[Prettier](https://prettier.io/) is an "opinionated code formatter". [Quoting the docs](https://prettier.io/docs/en/index.html):

> It removes all original styling and ensures that all outputted code conforms to a consistent style.

It's commonly used in JavaScript projects, and also offers plugins that support other languages. Prettier can be run through its CLI, or even automatically through your code editor each time you hit save.

Allowing Prettier to be responsible for how your code is formatted is a huge timesaver, especially when working in teams where code reviews can turn into passive-aggressive discussions about indentation and line-length. Instead, you can focus on what your code does rather than what it looks like.

## How to make Prettier ignore your code

However, there's always an edge-case: that one time you don't agree with how Prettier lays out your code. Is it possible to turn Prettier off in some cases?

Yes it is! There's an [entire page of documentation that explains how](https://prettier.io/docs/en/ignore.html).

Prettier can be turned off in several different ways. You can:

* ignore single lines in a file
* ignore several lines in a file (using the range feature available in version 1.12.0+)
* ignore whole files
  * specific one-off files (e.g. `my-template.html`)
  * entire file-types (e.g. `*.html`)

Depending on the issue, it may be solved by changing the configuration for Prettier instead of just ignoring sections of code. Preferences for trailing commas or double quotes can be changed via [CLI and API options](https://prettier.io/docs/en/options.html). However, Prettier purposely ships with minimal customisable options, since the rationale behind the package is to remove many of the discussions and choices around code style.

## Should you use prettier ignore options?

One of the central reasons for using Prettier is to surrender any decisions on code style to it. After making the initial config decisions for semicolons, trailing commas, etc, Prettier handles everything else related to code formatting, even if you don't like the way the tool formats a couple of lines.

If you do setup Prettier to ignore a section of code in order to circumvent a particular formatting style, don't forget that you lose _all_ of Prettier's powers on that code. There's no way to selectively tell Prettier to ignore the indentation for your nested ternary statements in this function, but still enforce the bracket spacing as per the rest of the file.

If you really want Prettier to ignore a line of code, I suggest leaving a comment in your code explaining why. For example, in the code below, Prettier will remove the brackets by default:

```js
// Reason: more readable with brackets
// prettier-ignore
const totalThings = (widgets * 3) + (fizzbobs * 5);
```

It might not pass code review with the rest of your team, but at least you've given a reason!

Do you have any edge-cases where you use `prettier-ignore`? Or do you go with the flow and let Prettier decide?