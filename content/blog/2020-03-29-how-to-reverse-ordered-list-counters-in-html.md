---
title: "How to Reverse Ordered List Counters in HTML"
date: 2020-03-29T23:15:30Z
summary: "An explanation of the reversed attribute for ordered lists in HTML."
categories:
  - html
---

An [ordered list in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) uses ascending numbers to display list items, beginning at number 1. The code:

```html
<ol>
  <li>Don't Stop Me Now</li>
  <li>Under Pressure</li>
  <li>We Are the Champions</li>
  <li>Bohemian Rhapsody</li>
</ol>
```

produces the following list:

<ol>
  <li>Don't Stop Me Now</li>
  <li>Under Pressure</li>
  <li>We Are the Champions</li>
  <li>Bohemian Rhapsody</li>
</ol>

It's possible to reverse the order of the counters with only HTML - no CSS or JavaScript required!

Add a HTML attribute called `reversed` to the `<ol>` tag.

The same code as above, only now with the `reversed` attribute:

```html
<ol reversed>
  <li>Don't Stop Me Now</li>
  <li>Under Pressure</li>
  <li>We Are the Champions</li>
  <li>Bohemian Rhapsody</li>
</ol>
```

produces a list with descending counters:

<ol reversed>
  <li>Don't Stop Me Now</li>
  <li>Under Pressure</li>
  <li>We Are the Champions</li>
  <li>Bohemian Rhapsody</li>
</ol>

Note that this only reverses the sequence of the numbers, and not the position of the list items contained with the `<li>` tags.

Where could you use this technique? The only situation I can think of is in a countdown, and perhaps this is why I'd never encountered this attribute before!

The reverse attribute is supported in all modern browsers but has no support in IE. See the [caniuse table for the reverse attribute](https://caniuse.com/#search=ordered%20list%20reverse) for more details.

I've created a [Codepen demo](https://codepen.io/clairecodes/pen/OJVaNGO) of the reverse attribute which you can play with below:

<p class="codepen" data-height="429" data-theme-id="dark" data-default-tab="html,result" data-user="clairecodes" data-slug-hash="OJVaNGO" style="height: 429px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Ordered List Reverse Attribute Example">
  <span>See the Pen <a href="https://codepen.io/clairecodes/pen/OJVaNGO">
  Ordered List Reverse Attribute Example</a> by Claire (<a href="https://codepen.io/clairecodes">@clairecodes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
