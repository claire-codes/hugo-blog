---
title: "Do Prettier and ESLint Do the Same Thing?"
date: 2020-10-19T22:32:05+01:00
summary: "A brief overview of how ESLint and Prettier have different purposes and how they can improve your codebase."
categories:
- blogtober
- javascript
---

Do you have to choose between ESLint and Prettier? No! They both serve a different and complementary purpose in your codebase, and can be used alongside each other.

## What does ESLint do?

[ESLint](https://eslint.org/) is a static code analyser for JavaScript. It analyses the code and identifies any patterns that it considers problematic (bug-causing!). The goal is to make the code more consistent and avoid bugs by enforcing best practices. It's up to the developer to action the ESLint output and fix the problems.

Using the [recommended rules](https://eslint.org/docs/rules/), a file containing any console logs, duplicate keys in objects or code after `return` statements would be output in the error report.

## What does Prettier do?

[Prettier](https://prettier.io/) is a code formatter. It was originally built for JavaScript but now has support for many other languages. The goal is to have a consistent style across the entire codebase, and to elimainate the time-consuming task of formatting for developers. It changes the original formatting of your code automatically if it doesn't conform to its settings. 

For example, after running Prettier against a JavaScript file with the default configuration, all tabs would be changed to a width of 2 spaces, and double quotes would be replaced with single quotes.

## Prettier and ESLint are two different tools

ESLint is a linter. It helps developers spot bugs and inconsistencies in their code by advising best practices and flagging problematic practices. Although it can auto fix some errors, by default ESLint gives the location of the problem and some helpful info, then it's up to the developer to fix it.

Prettier is a code formatter. It will directly change the layout of your code without changing how it works.

Both are useful tools that are well worth using in any modern JavaScript project. This has been an incredibly brief overview of them and I encourage you to go forth and read their respective doc sites to find out more, and to add them to your current projects!