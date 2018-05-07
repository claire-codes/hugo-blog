---
title: "Using ES6 Sets to create an array of unique values in JavaScript"
date: 2018-05-06T23:57:39+01:00
summary: How to remove all duplicated values from an array by using the Set data object introduced in ES6.
categories:
- javascript
---

## TL;DR

```js
let uniqueArray = […new Set([5,5,2,4,2])];
// [5,2,4]
```

That's a wordy title but bear with me - an example is proabably clearer.

What if you have a JavaScript array that contains many elements, some of them duplicated, like this?

```js
let dupeArray = [1,4,5,4,4,2,1];
```

But what you really want is to remove the duplicates and leave only one entry for each value:

```js
let uniqueArray = [1,4,5,2];
```

There are a million different ways to tackle a problem in computer programming (which is what makes it so fun). In the past I would have used loops to accomplish this. But now we have access to ES6 and all its cool features, we can utilise Sets to do this in one line of code.

_Note:_ the element type could be strings, or a mixture of numbers and strings, but I'm using integers here because they are quicker to type!

## What's a Set?

A [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) is a new data structure introduced in ES6. Directly from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set):

> Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

This requirement for unique values is one we can make use of in arrays.

Let's create a Set, add some values to it and query the size. In an modern browser, open up the developer console or Dev Tools and follow along:

```js
let mySet = new Set().add(1).add(3).add(2).add(1);
// Set(3) {1, 3, 2}
mySet.size
// 3
```

Notice how the final `1` wasn't added and the size of the Set remained at 3 instead of 4.

There are two ways to add values to a Set. Firstly by using the `add` method as above. Secondly by passing an array to the constructor (`new Set()`):

```js
let arraySet1 = new Set([3,2,1]);
// Set(3) {3, 2, 1}
```

Duplicated values are also removed if they are included in the initial array:

```js
let arraySet2 = new Set([8,8,9,2]);
// Set(3) {8,9,2}
arraySet2.size;
// 3
```

All that’s left to do is to convert this Set into an array and we’ve achieved our original goal. There are two ways to do this: both using ES6 methods.

## `Array.from()`

We can use [`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) which creates a new array from an array-like structure:

```js
let dupeArray = [3,2,3,3,5,2];
let uniqueArray = Array.from(new Set(dupeArray));
```

## Spread operator

We can also use those three dots to create an array, otherwise known as the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax):

```js
let uniqueArray = […new Set(dupeArray)];
```

Which one should you use? The spread syntax looks cool, but `Array.from` is more explicit and easier to read. But ultimately the choice is yours!

## Browser considerations

As these methods are ES6, they aren't compatible with older browsers (i.e. IE11 and below). Make sure you're running your code through a transpiler before it gets to production in order for your features to be accessible to users with older browsers.

## Conclusion

Something that would have took many lines of code and variables can now be accomplished in a one-liner in ES6. Isn't the future wonderful.

```js
let uniqueArray = […new Set([5,5,2,4,2])];
// [5,2,4]
```
