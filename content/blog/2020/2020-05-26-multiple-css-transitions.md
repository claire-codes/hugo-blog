---
title: "CSS Transitions for Multiple Properties on One Element"
date: 2020-05-26T21:35:20+01:00
summary: "How to declare more than one transition property in CSS when 'transition: all 1s ease' won't do."
categories:
  - css
---

This caught me out recently so I thought it was worth documenting in a blog post.

How do you define a CSS transition for multiple properties on the same HTML element?

The [CSS `transition` property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) defines the effect between two different states of an element. `transition` is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties), which means it combines other CSS properties in single declaration. The resulting shorthand is simpler to read and write. Other common shorthand properties are `margin`, `background` and `font`.

An example of applying a transition to every transitionable state on an element is:

```css
.menu {
  transition: all 1s ease;
}
```

The `transition` property here includes definitions for `transition-property`, `transition-duration` and `transition-timing-function`. (We could also add `transition-delay`.) Using the shorthand saves us from writing out three separate declarations.

The example above sets a transition for [every animatable property](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) on the element. You may need to be more specific, for example only transitioning the font color:

```css
.menu {
  transition: color 1s ease;
}
```

How do we extend this to transition both the font color and the margin, but with the same duration and timing function?

Even if properties share certain values, they can't be combined in the transition shorthand. Instead, write out each property declaration in full and comma separate each one:

```css
.menu {
  transition: color 1s ease, margin 1s ease;
}
```

An alternative is to write single declarations instead of using the transition shorthand. The following code achieves the same effect as the previous example:

```css
.menu {
  transition-property: color, margin;
  transition-duration: 1s;
  transition-timing-function: ease-out;
}
```

I've created a [CodePen example illustrating both methods for adding transitions](https://codepen.io/clairecodes/pen/YzybKyM?editors=1100) to an element where you can edit the code and experiment further.
