---
layout: post
title: So you think you know how clear works?
date: 2016-05-02 23:03:12
summary: Of course you understand the `clear` property in CSS ... nah I didn't either.
comments: true
published: true
categories:
- css
---
<div class="c-tldr">
    <h2 class="c-tldr__title">TL;DR</h2>
    <ul>
        <li>Clears floating elements <strong>preceding</strong> the one it's applied to</li>
        <li>Whether you need <code>clear: left</code> or <code>clear: right</code> depends on the direction the element is floating</li>
   </ul>
</div>

I thought I understood the `clear` property in CSS, but it turns out I didn't.

Take 3 divs. Let's float them side-by-side (excuse the pseudo-HTML):

```html
<style>
.left {
    float: left;
}
</style>
<div class="left">ALPHA</div>
<div class="left">BETA</div>
<div class="left">GAMMA</div>
```

They will now look something like this on the screen:

```html
ALPHABETAGAMMA
```

Now let's clear BETA:

```html
<style>
.left {
    float: left;
}
.cleared {
    clear: both;
}
</style>
<div class="left">ALPHA</div>
<div class="left cleared">BETA</div>
<div class="left">GAMMA</div>
```

How do expect the divs to display now? Think about it for a second before scrolling down ...

...

If you think that they will all be on different lines, then you're wrong! In fact, they now look like this:

```html
ALPHA
BETAGAMMA
```

Play along at home in JSBin or JSFiddle if you don't believe me. So why is this? The answer is given in the [MDN docs](https://developer.mozilla.org/en/docs/Web/CSS/clear):

> The clear CSS property specifies whether an element can be next to floating elements that precede it or must be moved down (cleared) below them. The clear property applies to both floating and non-floating elements.

See it? It's that word __precede__. Applying the clear property to an element means that it doesn't want floats in front of it. It doesn't care if the element immediately after it floats, hence why BETA and GAMMA are adjacent. So the `clear: both` is a slight red herring in that it will only apply in one direction. Using `both` is like safe-guarding in case you don't know whether your element is floating to the left or the right.

Why wouldn;t you know which side the preceding element is? Well, remember that 'preceding' looks different depending which direction you're floating in: let's float the boxes right and see what happens now:

```html
<style>
.right {
    float: right;
}
.cleared {
    clear: both;
}
</style>
<div class="right">ALPHA</div>
<div class="right cleared">BETA</div>
<div class="right">GAMMA</div>

<!-- Now look like: -->

                 ALPHA
             GAMMABETA
```

The order is due to the divs being floated right, and BETA still only cares about preceding elements, i.e. ALPHA. In the both examples, try changing `clear:both` to `clear: left` to get a clearer picture.