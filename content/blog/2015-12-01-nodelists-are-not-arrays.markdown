---
layout: post
title: "NodeLists are not Arrays"
date: 2015-12-01 00:00:16 +0000
comments: true
categories:
- javascript
published: true
---

When you're working with the DOM, it's tempting to think that when you select a group of elements from the page that you've got an array. Right? Wrong! It might look like a duck and walk like a duck, but it moos like a cow. Just what is this monster?! It's a NodeList.

Try this in your browser console:

```bash
> var whoami = document.querySelectorAll('div');
> Object.getPrototypeOf(whoami)
NodeList {}
```

Compare this with:

```bash
> var standardArray = [1,2,3];
> Object.getPrototypeOf(standardArray);
Array {}
```

The `Object.getPrototypeOf()` method returns the next object in the prototype chain, i.e. the object your current variable directly inherited all it's methods and properties from. You can call this method repeatedly to reach Object (everything inherits from Object) and finally null. So this gives two prototype chains that look like:

```bash
whoami -> NodeList.prototype -> Object.prototype -> null

standardArray -> Array.prototype -> Object.prototype -> null
```

NodeLists have nothing to do with arrays in JavaScript, and this means that you can't use any of the lovely array methods like filter and map and even forEach loops on them. If you want to do anything to a NodeList you'll need to use a standard for-loop.

Remember you can see what methods a particular object inherits from its prototype with `Object.getOwnProperties(foo.prototype)` - compare the difference for Array and NodeList and weep.

### What is a NodeList and what can I do with it?

A NodeList is a collection of HTML nodes. There's only a few useful things you can with one.

* `whoami.length` - you can see how many nodes are in the NodeList by calling length on it.
* `whoami.item(n)` or `whoami[n]` to access a certain item in the NodeList by its index.

You can combine both these magical methods to iterate using a boring old for-loop.

```javascript
for (var i=0; i < whoami.length; i++) {
   console.log(whoami[i]);
}
```

### Workarounds

All is not lost though. Simply convert the NodeList to an array and you can use all whizzy Array.prototype methods you like.

```javascript
var pseudoArrayThing = Array.prototype.slice.call(whoami);
// or
var otherArrayThing = Array.from(whoami);
```

### ES6 Workarounds

Convert to an array using the spread operator.

```javascript
var spreadArrayThing = [...whoami];
```

#### P.S.

Find the type of a object foo using:
`Object.prototype.toString.call(foo)`

### Further Reading

[https://developer.mozilla.org/en/docs/Web/API/NodeList](https://developer.mozilla.org/en/docs/Web/API/NodeList)
