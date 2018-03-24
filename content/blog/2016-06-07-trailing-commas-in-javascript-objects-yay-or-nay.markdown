---
layout: post
title: Trailing commas in JavaScript objects, yay or nay?
summary: And arrays too! It looks like you&#39;ve forgotten something but does it really matter?
date: 2016-06-07 17:33:47
comments: true
published: true
categories:
- javascript
---

<div class="c-tldr">
    <h2 class="c-tldr__title">TL;DR</h2>
    <ul>
<li>A trailing comma on the final property of a JavaScript object is valid syntax in ECMAScript5</li>
<li>... but it will throw an error in IE8 <em>*surprise*</em> 🎉</li>
<li>Trailing commas are also allowed in arrays</li>
<li>But if you try to parse an object with a trailing comma to JSON it will throw an error</li>
</ul>
</div>

Do you notice anything different about this object?

```javascript
{
    cat: "miaow",
    dog: "woof",
    frog: "ribbit",
}
```

Maybe that trailing comma after "ribbit" strikes you as a bit off. Maybe the neat-freak coder inside you who loves linting wants to backspace the heck out of it 💣 Or maybe you were too busy adding and removing properties from your object to care.

Trailing commas on object properties are valid syntax in ECMAScript 5 (I haven't checked the spec but I read a StackOverflow question that says it is), and it won't throw an error. 🚨 Unless, of course, you're in IE8.

### Why?

This style can be considered safer, as it protects you from irritating syntax errors caused by missing commas when you add or remove or rearrange the order of your key-value pairs. It's also considered neater in commit diffs, as to add a new property to the bottom of an object you only end up modifying one line instead of two.

### 🚨 But remember:

JSON Object !== JavaScript object, and if you try to parse a JavaScript object with a trailing comma it'll choke.

```javascript
JSON.parse('{ "cat": "miaow", "dog": "woof", "frog": "ribbit" }');
// This is valid
JSON.parse('{ "cat": "miaow", "dog": "woof", "frog": "ribbit", }');
// Uncaught SyntaxError: Unexpected token } in JSON
```

(Don't forget to double quote your keys too! 😁)

### Arrays

Arrays can also handle trailing commas:

```javascript
['bish','bash','bosh',]     // .length = 3
```

However don't be too liberal with those commas in case you accidentally create blank holes in the array where you don't want them:

```javascript
['bish','bash','bosh',,]     // .length = 4
```

### Yours sincerely,

So it doesn't really matter if you've got commas all over the place (as long as you bear in mind a couple of caveats), as usual it's just a question of preference: make sure you decide which style you like and stick to it consistently throughout the codebase. There is a [nicely customisable rule in ESLint](http://eslint.org/docs/rules/comma-dangle) that will allow you to enforce your chosen preference throughout your project too.