---
layout: post
title: How to chain functions in JavaScript
date: 2016-04-26 20:21:04
summary: Two examples of the chaining design pattern. Spoiler return `this`.
comments: true
published: true
categories:
- javascript
---

The chaining design pattern is lovely. 🌅 It means we can call several object methods in one line of code. You see this pattern used in jQuery a lot.

Instead of several repetitive lines (A) we have a cleaner one-liner (B) 🍰:

```javascript
// (A)
let sponge = new Cake();
sponge.mix();
sponge.bake();
sponge.eat();

// (B)
let sponge = new Cake().mix().bake().eat();
```


## But how?

You can't just randomly start chaining methods and hope they work. Chaining works on the methods of an individual object. Each of these methods need to return `this`, a reference to the object we're calling the method, i.e. what we want to call the subsequent method on. Here's two approaches for implementing the pattern:

1. methods within an object
2. adding methods to a prototype

Our object contains an internal property that we'll modify with our chianed methods. In addition it will have a method that takes a parameter to actually do something useful with, and a final method that returns this value - this function won't need to return `this` as it won't have any other methods chaining off it.

## 1. Use an object

Create an object in the usual way. Include an internal variable you'll be amending as well as all your functions.

```javascript
let chainObj = {
    phrase: "",

    // the setter
    setPhrase: function(noun) {
        this.phrase = noun;
        return this;
    },

    shoutIt: function() {
        if (this.phrase) {
            this.phrase = this.phrase.toUpperCase();
        }
        return this;
    },

    makeItRed: function() {
        this.phrase = "red " + this.phrase;
        return this;
    },

    // the getter - will be called last and not chained,
    //+so it doesn't need to return `this`
    val: function() {
        var tmp = this.phrase;
        this.phrase = "";
        return tmp;
    }
};

// Example usage:
let chainFoo = chainObj.setPhrase("foo").makeItRed().shoutIt().val();
// "RED FOO"
```

## 2. Use a prototype

The thought of using a prototype frighten me a bit. But this approach is still valid.

```javascript
// Define the internal property to modify
let ChainPrototype = function() {
    this.phrase = "";
};

// Add a load of functions to the object's prototype
ChainPrototype.prototype.setPhrase = function(noun) {
    this.phrase = noun;
    return this;
};

ChainPrototype.prototype.makeItRed = function() {
    if (this.phrase) {
        this.phrase = "red " + this.phrase;
    }
    return this;
};

ChainPrototype.prototype.shoutIt = function() {
    if (this.phrase) {
        this.phrase = this.phrase.toUpperCase();
    }
    return this;
};

// in this example we won't return `phrase` from a method,
//+we'll just call the property directly
let chainFoo = new ChainPrototype.setPhrase('foo').makeItRed().shoutIt().phrase;
// 'RED FOO'
```

In summary: make an object, make the methods, make them all return `this`. Boom. 👊💥