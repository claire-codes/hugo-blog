---
title: "Template Literals and Arrays"
date: 2018-09-08T21:49:44+01:00
summary: "How arrays are evaluated in template literals."
categories:
- javascript
---

Template literals ([or the feature formerly known as template strings in older versions of the spec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)) are one of my favourite features of ES6. By quoting with backticks instead of quotes, we can create strings that span multiple lines and interpolate variables. For example:

```js
const thing = "World";
`Hello
${thing}`;
// "Hello
// World"
```

(Note, anything preceded by `//` in the code examples is what gets printed to a browser console after executing the code.)

Variable interpolation occurs when you wrap a value in `${}`. The value could be a variable, function or even a basic type like a number or string. The expression is evaluated and embedded in the template literal.

I recently experienced some confusion with the interpolation feature that I'll clear up in this post. When  the return value of the expression is an array, why are the array's square brackets removed in the result, as shown in the following code?

```js
const numberArray = [1, 2, 3];
`${numberArray}`;
// "1,2,3"

const gimmeArray = () => [];
`What array? ${gimmeArray()}`
// "What array? "
```

This is perhaps easier to understand if you consider interpolation as "string substitution", as it's referred to in [this useful post](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings). The array is being converted to a string before being substituted back into the template literal. This is also what happens when you call the `toString()` method on an array:

```js
[1,2,3].toString();
// "1,2,3"

[].toString();
// ""
```

Note that this only happens to arrays between the dollar and curly brackets. If you type bracket characters directly in the template literal, they are interpreted as a string, and stay the same:

```js
`[3,2,1]`
// "[3,2,1]"
```

OK, but what if I really, really want the square brackets in my resulting string? (The problem that inspired this whole blog post: I wanted to write a dynamic GraphQL query that took an array as a field argument).

Surround the variable interpolation syntax with square brackets and problem solved:

```js
const resultArray = [7,8,9];
`[${resultArray}]`
// "[7,8,9]"
```

💃🎉

To read more about template strings, [Mozilla's docs are a great place to start](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) _#notsponsored_.
