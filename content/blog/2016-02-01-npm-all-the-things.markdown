---
layout: post
title: "npm all the things!"
date: 2016-02-01 21:43:35 +0000
comments: true
categories:
- javascript
---

Are you one of those mugs ☕️ still downloading zip files of libraries for their JavaScript projects? Well you don't have to be! Leverage the power of the command line today and `npm` that thing!

[npm](https://www.npmjs.com/) is Node's Package Manager (how did they come up with that name??) and I am having great fun with it at the moment - packaging, modularising and managing my JavaScript project dependencies with minimal pain.

## An example

`npm init` in your project's root and set up your `package.json`. (You can use the default answers if you want! I don't care!) Now just start npm-install-ing the libraries you need for your app.

Using [Backbone](http://backbonejs.org/)? Alright then, just do

```bash
npm install backbone -S
```

So now you've got a new folder called `node_modules` and a subdirectory called `backbone`, where a bunch of Backbone.js related code lives. This means that all you need to do to use it is point your script tag to this directory, e.g. `<script src="../node_modules/backbone/backbone.js"></script>`. And if you're running a node application all you need to do is stick `require("backbone")` in you `.js` files. Look how quick and easy that was!

That `-S` flag means that as well as installing the module, you're also putting a reference to it in your `package.json` file under the `dependencies` property. This means that you, or anyone else can set up the project easily and install all its required dependencies just by running `npm install` in the same directory as the `package.json` - trust me, your future-self will thank you for it.

That was so fun, let's do another one. How about writing some tests with [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)?

```bash
npm install mocha -D
```

There's now another subdirectory alongside `backbone` in `node_modules` containing all the mocha code. Again, call it using a script tag, for example in your test runner file, or using the `require()` keyword for a node app.

The `-D` flag means save it in the `package.json` file, but this time in the `devDependencies` property, which, as you can guess is where we specify modules that we only need for development.

I'm getting tired now, let's save some keystrokes on this one:

```bash
npm i chai -D
```

Boom! `i` is just an alias for `install`. Look at you, you poweruser! 😌 😁

### Gotcha

But there's always an exception. Say you've got a module like `sinon` which is split into separate modules in separate files and all loaded into the main `sinon.js` file using `require`s: you won't be able to use this within a plain old script tag as the `require`s won't work (no node!). Instead you want to reference single concatenated and/or minified files. This means you _might_ have to download a library from the Internet like in the olden days. 📠

## But npm is still great!

Is there any code that _you_ could make into a package for easy reuse? Never written a node module before? [This is hands down the best tutorial there is](https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738#.y9pim429g).

Here's some package inspiration 🎁

* How about using it to store code you find yourself writing time and time again? Like utility functions? Or custom test matchers?
* The [todomvc examples](http://todomvc.com/) (well, [Backbone](https://github.com/tastejs/todomvc/tree/gh-pages/examples/backbone) is the only one I've looked at properly so far) use a module _just to store the CSS_. What reusable data could you store in a package?
* When you think modular, think small, think tiny. [Sindre Sorhus](https://github.com/sindresorhus) is a prolific package author and advocates one-modules in [this Github comment](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328)

So with that in mind ...

## Go forth and npm all the things

![NPM ALL THE THINGS!](/images/allthethings.jpg "NPM ALL THE THINGS!")
