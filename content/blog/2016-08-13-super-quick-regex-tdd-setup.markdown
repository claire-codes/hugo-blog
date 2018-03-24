---
layout: post
title: Super quick Regex TDD setup
summary: When setting up a test harness is this quick there&#39;s no excuse for not doing TDD. Plus regexes!
date: 2016-08-13 20:25:22
comments: true
published: true
categories:
- javascript
- testing
---

When you need to build a regex you could either (A) hack around in the console, getting confused and lost, or instead (B) use TDD and write some tests: you can have a clear list of strings your regex should match and those it shouldn't, run them quickly and see whether the regex works and have readymade documentation for future use 🏆

But how do you set that up? If it sounds like a lot of work, it isn't. Follow this post and in five minutes you'll have a working example. :clock1:

Open up the terminal and follow along:

### `$ mkdir regexTest && cd "$_"`

Make new directory and move into it in one command!

### `$ npm init -y`

Set up a new `package.json` file the quick way - no more hitting enter for all the default options!

### `$ npm i -D mocha chai`

Install the latest versions of the `mocha` and `chai` packages as devDependencies (although it doesn't really matter if they're devDependencies or normal dependencies as we're not really creating a  production ready app. To save as a regular `dependency` use the `-S` shortcut instead).

You should now have something like:

```json
{
  "name": "regexTest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Maya Angelou <maya@gmail.com>",
  "license": "ISC",
  "devDependencies": {
    "chai": "^3.5.0",
    "mocha": "^3.0.2"
  }
}
```

Using you favourite text editor, change the `test` property to:

### `"test": "./node_modules/.bin/mocha -R spec"`

If you have mocha installed globally (`npm i -g mocha`) you can just write `mocha -R spec` instead.

The `-R` flag is short for `--reporter` and tells mocha which one we want to use, i.e. how to print out our test results. Here we're using the default `spec` but replace this with `-R nyan` if you want something a bit more fun.

We'll now be able to run the tests with `npm test`. Let's write some to run! From the command line:

### `$ mkdir test`

### `$ touch test/regexTest.js`

Mocha wants to run tests that are in the `test` directory but isn't bothered what the files in it are called. You could have `regexSpec.js` or `wazzock.js` if you like.

Open up this file in your text editor and setup a skeleton for our tests:

```javascript
var expect = require('chai').expect;

describe("My amazing regex", function() {
    it("should pass", function() {
        expect(42).to.equal(42);
    });

    it("should fail", function() {
        expect(42).not.to.equal("42");
    });
});
```

Now run from the command line:

### `$ npm test`

And tada 🎉 you should see some working specs:

![My First Specs](/assets/passingspecs.png)


An explanation of how Mocha works is beyond the scope of this post, but a couple of notes: I prefer the "expect" style assertions rather than the BDD "assert" form as I think they are more readable. I'm using the `chai` matchers library to make our expectations even easier to read. Plus we're going to group lots of expectations within the `it` functions because life is too short to write a new one for each expectation, especially as this is just a quick example.

Now we can set up some expectations to test a regex. Use this matcher structure:

### `expect("string").to.match(regex);`

Write your test cases: replace the current contents with the strings your regex should match and the ones it shouldn't (these are just as important and shouldn't be overlooked).

```javascript
describe("My amazing regex", function() {
    var myRegex = /foo/;

    it("should work", function() {
        expect("light").to.match(myRegex);
        expect("highlight").to.match(myRegex);
        expect("lighten").to.match(myRegex);
        expect("reenlighten").to.match(myRegex); // I made this word up 🙊
        expect(" light ").to.match(myRegex);
    });

    it("shouldn't work", function() {
        expect("highlighter").not.to.match(myRegex);
        expect("enlighten").not.to.match(myRegex);
        expect("").not.to.match(myRegex);
        expect("blah").not.to.match(myRegex);
        expect("LIGHT").not.to.match(myRegex);
    });
});
```

Note that we'll add a variable to hold the regex but we won't fill it in correctly just yet, because first, we want failing specs! Run `npm test` again:

![Passing Specs](/assets/failingspecs.png)

Well OK, the `shouldn't work` block is passing, as our regex is wrong and won't match any of them, which we expect. We use those assertions as our safety net - when we start to write our regex properly, if some of these match then we know the regex is wrong.

And then all is left is to write a regex that makes all of the tests pass: some strings are matched and others aren't. Spolier alert:

```javascript
var myRegex = /^(?!en).*light(?!er)/;
```

Each time you make a change to the regular expression, save and rerun the test command from the terminal. `npm test`:

![Final Specs](/assets/passingspecs.png)

And that's all there is to it.

### FIN
