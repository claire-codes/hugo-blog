---
title: "How to create an array of unique values in JavaScript using Sets"
date: 2018-05-06T23:57:39+01:00
summary: How to remove all duplicated values from an array by using the Set data object introduced in ES6.
categories:
- javascript
---

## TL;DR

```js
let uniqueArray = [...new Set([5,5,2,2,2,4,2])];
// [5,2,4]
```

## Pardon?

Sorry for the verbose title - sometimes things can be explained better with a code example.

Imagine you have a JavaScript array that contains many elements, some of which are duplicated:

```js
let dupeArray = [1,1,4,5,4,4,2,1,5];
```

Your goal is to remove the duplicates and leave only one entry per value:

```js
let uniqueArray = [1,4,5,2];
```

You might write a for-loop, or use a `map` or `filter` to get this result. There are a million different ways to tackle a problem in computer programming (which is what makes it so fun!). ES6 introduces a bunch of new features, including Sets, which we can also use to solve this problem in one line of code.

_Note:_ the element type could be strings, or a mixture of numbers and strings, but I'm using integers here because they are quicker to type!

## What's a Set?

A Set is a new data structure introduced in ES6. Quoting directly from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set):

> Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

The rule for unique values is one we can use to our advantage here.

Let's create a Set, add some values to it and query the size. (You can follow along in the developer tools console of a modern browser):

```js
let mySet = new Set().add(1).add(3).add(2).add(1);
// Set(3) {1, 3, 2}
mySet.size
// 3
```

Notice how the final `1` wasn't added and the size of the Set remained at 3 instead of 4. In an array, it would have been added and the length would be 4.

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

You can probably see where this is going. All that’s left to do is to convert this Set into an array and we’ve achieved our original goal. There are two ways to do this: both using ES6 methods.

## `Array.from()`

The [`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) method creates a new array from an array-like structure:

```js
let dupeArray = [3,2,3,3,5,2];
let uniqueArray = Array.from(new Set(dupeArray));
```

## Spread operator `...`

Those three dots are ubiquitous in ES6. They crop up everywhere and have several uses (and they're a right pain to google). When we use them as the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) they can be used to create an array:

```js
let uniqueArray = [...new Set(dupeArray)];
```

Which of these two methods should you use? The spread syntax looks cool, but `Array.from` is more explicit in its purpose and easier to read. They both accomplish the same thing here so the choice is yours!

## Conclusion

Something that would have took many lines of code and variables can now be executed in a one-liner in ES6. What a time to be alive.

```js
let uniqueArray = [...new Set([5,5,2,4,2])];
// [5,2,4]
```
