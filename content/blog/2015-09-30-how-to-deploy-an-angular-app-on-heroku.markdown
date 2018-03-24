---
layout: post
title: "How to Deploy an AngularJS App on Heroku"
date: 2015-09-30 00:00:00 +0100
comments: true
categories:
- javascript
- angularjs
- heroku
---

## Or getting an EAN app running on Heroku

_EAN rather than [MEAN](http://mean.io/) because we'll be using Express, AngularJS and Node but not Mongo this time._

When googling deploying an AngularJS app to Heroku, all the tutorials I looked at (i.e. the top 3 in the first page of results ...) assumed I'd cloned the [Angular seed app](https://github.com/angular/angular-seed) - which I hadn't and didn't want to. I had a dead simple one controller, one service AngularJS app (note: 1.x) that I'd started from scratch and wanted to host on Heroku. What did the the seed app provide that I didn't already have? TL;DR a package.json file.

### Let's begin

Let's say you've got your Angular app and the project structure looks a bit like this:

```bash
root
│   README.md
│   index.html   
│
└───js
│   │   controllers.js
│   │   services.js
│   |   angular.js
│   └── myAmazingAngularApp.js
│   
└───css
    │   styles.css
```

No, I am not telling you how to write an Angular app.

Navigate to the root folder of your project in the terminal. If you haven't already, make sure you've got the following installed:

* [Node & NPM](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [Heroku toolbelt](https://toolbelt.heroku.com/)

Install Express from the command line (the `-g` installs it globally on your machine). We're using [Express](http://expressjs.com/) for routing.

```bash
npm install -g express
```

Next make a `package.json` file for the app. From the command line, type the following command and answer the questions.

```bash
npm init
```

Use the `npm init` command because it does it interactively for you and because you're lazy. You can't go wrong with your answers - if in doubt accept the default.

Add a couple more properties to the file so that Heroku will know exactly how to run your app:

```javascript
  "dependencies": {
    "ejs": "^2.3.1",
    "express": "~4.9.x"
  },
  "engines": {
    "node": "0.12.2"
  }
```

A `package.json` file contains lots of metadata about your Node app. Install all the stuff that it specifies to your machine by running from the command line:

```bash
npm install
```

Now you need a file which defines your project routes. Create a file called `app.js` and copy the following text:

```javascript
var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(__dirname)); // set static files location, in this case the route, add a file name if not
app.listen(process.env.PORT || 3000);
```

We've set up the root route (not a typo), which returns the view we want to use. It's important to use the notation on line 6 instead of an absolute pathname: see [this StackOverflow question](http://stackoverflow.com/questions/25463423/res-sendfile-absolute-path) for why.

### Nearly there ...

Heroku needs a Procfile to correctly run your app.

Make a new file in your project's root called `Procfile` and enter the line:

```bash
web: node app.js
```

Now you just need to set up version control and we're good to go. From the command line, run the following commands:

```bash
git init
heroku create
git add .
git commit -m 'First commit'
git push heroku master
```

You've initialised the directory as a Git project, created a Heroku project which will also have added it to your git remotes, then committed and pushed your work to Heroku.

If you want to test the app out locally before pushing to Heroku, test it out locally with the command:

```bash
heroku local web
```

If it's not working, run `heroku logs` and solve the problem with Google's help. What, I'm not holding your hand all the way through am I??

Finally, view your app on Heroku and bask in all it's deployed glory.

```bash
heroku open
```

Of course you could use this handy tutorial to set this up but it's not as fun for me that way! [www.devcenter.heroku.com/articles/getting-started-with-nodejs#introduction](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
