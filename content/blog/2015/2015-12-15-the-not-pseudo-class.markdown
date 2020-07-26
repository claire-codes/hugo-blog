---
layout: post
title: "The :not() pseudo-class"
date: 2015-12-15 00:00:01 +0000
comments: true
categories:
- css
published: true
---
How do you use CSS to style a particular element differently from other similar elements? You'd stick a class or ID on it, like so:

```html
<style>
.special {
    color: red;
}
</style>

<p>Normal</p>
<p>Normal</p>
<p class="special">Special</p>
<p>Normal</p>
<p>Normal</p>
```

<style>
.code-example, .code-example-two {
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    padding: 15px;
    font-family: serif;
    font-size: 16px;
}
.code-example .special {
    color: red;
}
</style>

<div class="code-example">
<p>Normal</p>
<p>Normal</p>
<p class="special">Special</p>
<p>Normal</p>
<p>Normal</p>
</div>
<br />

But what if you have the opposite problem - you want to _exclude_ an element from a particular style?

Maybe you'd try and override your styling with another class, but why not use the handy `:not()` CSS pseudo-class instead:

```html
<style>
p:not(.special) {
    color: red;
}
</style>

<p>Normal</p>
<p>Normal</p>
<p class="special">Special</p>
<p>Normal</p>
<p>Normal</p>
```

<style>
.code-example-two p:not(.special) {
    color: red;
}
</style>

<div class="code-example-two">
<p>Normal</p>
<p>Normal</p>
<p class="special">Special</p>
<p>Normal</p>
<p>Normal</p>
</div>
<br />

In one selector you can apply a style to all the elements except for ones that match the selector within the `:not()`.

A pseudo-class is a keyword that you add to CSS selector that makes it more specific to the state of the element: other pseudo-classes are `:hover` and `:focus`.

Try using this when you're thinking of styling a table with a `:last-child` selector.

### Moar

* [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Anot)
* [CSS-Tricks](https://css-tricks.com/almanac/selectors/n/not/)
