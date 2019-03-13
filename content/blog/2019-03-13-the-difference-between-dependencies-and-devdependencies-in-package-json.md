---
title: "The difference between dependencies and devDependencies in a JavaScript project"
date: 2019-03-13T10:08:30Z
summary: "Explaining where to install a package in your project's package.json file: dependencies or devDependencies."
categories:
  - javascript
---

When you use [npm](https://www.npmjs.com/) to install a package to your project with the command `npm install <package-name>`, the name and version of the package appears in the project's package.json file under the “dependencies” key. For example, `npm install react` will look write something like this to the file:

```js
{
    ...
    "dependencies": {
        "react": "^16.8.4",
        ...
    }
    ...
}
```

The code for the package will be installed in the project's local `node_modules` folder.

(Note: with older versions of npm, the `--save` or `-S` flag was required in order to write the package to the package.json. The latest version of npm at time of writing is 6.9.0).

The list of packages in package.json is used by npm when your app is installed from scratch. Alongside the package-lock.json file, it ensures that the packages used in your app are a consistent version.

It's also possible to add packages under the `devDependencies` key in package.json. Instead, add the `--save-dev` or shorter equivalent `-D` flag when installing, for example:

```sh
npm i -D jest
```

## What is the difference between devDependencies and dependencies?

### dependencies

"dependencies" are packages required to run the application in a production-ready environment. Without these packages, your app won't work. A couple of general examples are:

- **frameworks**: React, AngularJS, Vue.js
- **utility libraries**: lodash, Ramda, date-fns, polished

### devDependencies

"devDependencies" are required to develop and build your app, but are not needed to run the final version that customers will use. For example:

- **testing libraries**: Jest, Mocha, Jasmine
- **linters**: ESLint, Prettier
- **transpilers**: webpack, Babel (since production-ready code is already transpiled and minified)

When you run `npm install` in the root of a project with a package.json file, **all packages** in both dependencies and devDependencies are installed. This is because you're working with the source code, so are probably developing this app and therefore need the code in every package. However, if you only want to install the packages listed under the dependencies key, then use the `—-production` flag, like `npm install --production`.

In conclusion, when deciding where a package should sit in the package.json file, ask yourself whether the package is required for the app to work in the final, production-ready version. If it's not, add it to the devDependencies object, otherwise, it belongs in dependencies.

For more information, see the [official npm documentation page for the npm install command](https://docs.npmjs.com/cli/install).

## Equivalent Yarn commands

If you use [yarn](https://yarnpkg.com/) as your package manager instead of npm, the equivalent commands mentioned in this post are:

| npm                    | yarn                 |
| ---------------------- | -------------------- |
| npm install            | yarn install         |
| npm install react      | yarn add react       |
| npm i --save-dev react | yarn add --dev react |
| npm i -D react         | yarn add -D react    |
