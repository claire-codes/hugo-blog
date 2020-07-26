---
layout: post
title: When strict equality goes wrong
summary: With great power comes great responsibilty, and null !== false.
date: 2016-11-07 21:24:01
comments: true
published: true
categories:
- javascript
- testing
---

I recently saw this code in the wild. _Names have been changed to protect those involved._

```javascript
function makeFizzbobs (widget) {
    if (widget === null) {
        return {};
    } else {
        // Does something interesting with widget
        return 42;
    }
}
```

I could imagine what the author of the code thought they were doing: they were guarding against an empty function parameter right? Cos null sounds like what you'd be left with if the user didn't supply an argument like `floop` or `321`. And all this linting software tells you to use triple equals instead of doubles so it must be right? User passes something in: carry on with the function, user doesn't pass something to the function: we return an empty object. Job done.

🚨 No.

This is what actually happens:

```javascript
makeFizzbobs(); // 42
```

Oh. So an empty argument isn't the same thing as `null`? 🤔 No. No it's not. Well what about an empty string, or maybe that `undefined` value, that sounds empty:

```javascript
makeFizzbobs(''); // 42
makeFizzbobs(undefined); // 42
makeFizzbobs(false); // 42
makeFizzbobs(null); // {}
```

So it turns out that null only strictly equals itself, or `null === null`. Unsurprisingly, `null !== undefined` or any of the other values we tried above.

In fact, when you call the method with no arguments, `widget` gets the value `undefined` (add a `console.log(widget)` in the method to see for yourself). So how can we fix this function to guard against an empty argument? We could change the check in the if-statement from `null` to `undefined`, but then we'll let `null`s through instead.

Maybe you'd think that we could have a long if-clause, like:

```javascript
if (widget === null || widget === undefined || widget === ... ) {
```

But there is a better way!

_You can play along at home by whipping up some quick unit tests like I outlined [in my other blog post](/blog/super-quick-regex-tdd-setup). Define the `makeFizzbobs` function at the top of the test file and write some test cases._

Personally, I would short-circuit the function execution by checking for a falsey. There are 6 falsey values in JavaScript, and it's likely that you aren't interested in any of them:

- false
- NaN
- 0
- undefined
- null
- ''

A falsey evaluates to `false` in an if-clause, which we can use like so:

```javascript
function makeFizzbobs (widget) {
    if (widget) {
        // Do something exciting
        return 42;
    } else {
        return {};
    }
}
```

You may notice that I've swapped the order around, so I'm dealing with desirable input first and then the falsey is dealt with in the `else` clause. This is because I think the if-clause reads a little clearer and is easier to comprehend this way, rather than having to reverse the logic in your head to work out what `!widget` means (I'm lazy, so what 😴).

So now the function works like:

```javascript
makeFizzbobs(); // {}
makeFizzbobs(null); // {}
makeFizzbobs(''); // {}
makeFizzbobs(123); // 42
makeFizzbobs('abc'); // 42
```

Of course, this may not be suitable for your needs: perhaps you want to do something really interesting with an empty string `''` or you just want to deal with `0` like any other number, or perhaps you really don't want an empty array passed in, or `Infinity`, or the string `"flibbertigibbet"`, but this is a good place to start in JavaScript's loosely typed Wild West, and a good reminder that things are never what they seem with type checking in JavaScript.