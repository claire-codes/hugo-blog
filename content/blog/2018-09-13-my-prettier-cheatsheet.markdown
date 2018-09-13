---
title: "My Prettier Cheatsheet"
date: 2018-09-13T18:26:03+01:00
summary: "Because I spend far too much time googling how to customise the options each time I add it to a new project."
categories:
- javascript
---

# My Prettier cheatsheet

_At the time of writing, Prettier is on version 1.14.2._

This post is my own personal cheatsheet for Prettier. It contains a brief overview of Prettier and how to set it up on a project. It's not an exhaustive tutorial, just some suggested quickstart methods and my preferred config.

The reason for this post is that I don't set new apps up from scratch very often, and when I do I end up spending too much time trying to remember my preferred settings.

### What is Prettier?

The [docs](https://prettier.io/docs/en/index.html) give a good explanation:

> Prettier is an opinionated code formatter … It removes all original styling and ensures that all outputted code conforms to a consistent style.

Code style refers to things like tab width, line length, trailing commas, etc.

Prettier is very useful if adopted consistently across a team because it can stop you wasting time pointing our styling issues in PRs, and frees up energy to spend discussing what the code actually does instead.

Prettier is different from ESLint and other linting tools, because it only focusses on style, rather than code-quality. Examples of code-quality issues are avoiding unused variables, reassigning variables in a function, using magic numbers, or [many others](https://eslint.org/docs/rules/).

### How to add Prettier to a project

Install Prettier and add it to your dev dependencies:

```bash
$ npm i -D prettier
```

Write a script in the `package.json` file:

```json
"scripts": {
    "prettier": "./node_modules/.bin/prettier --write '**/*.js'"
},
```

This can now be run using `npm run prettier`. Your code will be formatted with Prettier's [default rules](https://prettier.io/docs/en/options.html). **Note:** The glob pattern must be quoted and may need amending to fit your project structure.

### How to customise Prettier's rules

Below are some customisations that I like to make to the default settings of Prettier, written as a JSON object:

```json
{
    "tabWidth": 4,
    "singleQuote": true,
    "trailingComma": "es5"
}
```

There are many ways to add these rules to your configuration. Here are a few methods:

1. Create a file called `.prettierrc` in the root of your project. [Many file formats are valid](https://prettier.io/docs/en/configuration.html) but I prefer JSON. Copy and paste the JSON above into the file.
2. Add the options to the `package.json` script in the CLI format:

    ```json
    "prettier": "./node_modules/.bin/prettier --single-quote --trailing-comma es5 --tab-width 4 --write '*.js'"`
    ```

3. Add the rules under a key called `prettier` in the `package.json` file.
4. Add a `.prettierrc` file at the root of your machine to avoid adding a config file to each project (not recommended if you're working on a team).
5. Configure and use Prettier through your editor: Atom, VSCode, etc, all have packages and plugins to integrate with your workflow. They will probably have an option that formats your code when you press save too, without the need for you to run the script.

I've found Prettier to be a real timesaver and would add it to any project I work on in the future.
