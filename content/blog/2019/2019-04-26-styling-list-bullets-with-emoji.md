---
title: "Styling list bullets with emoji"
date: 2019-04-26T11:48:09+01:00
summary: "Explaining two methods for styling the bullets in an HTML list with emoji: the counter-style at-rule and the before pseudo-element."
categories:
- emoji
- css
---

The available styles of bullet points for HTML unordered lists `<ul>` are limited. Using CSS, they can be changed to something more exciting, like emoji! 🎉👯‍♂️✨

In this post, I'll show you two methods to replace them: `@counter-style`, which is concise and flexible (but your browser probably doesn’t support it), and the more tried-and-tested technique of using the `::before` pseudo-element.

We will transform an unordered list with unstyled counters from this:

![Unstyled list of six items](/images/emoji-bullet-points/no-styling.png)

To this:

![Cat, dog and unicorn emoji in cyclical pattern for six list counters](/images/emoji-bullet-points/counter-rule-repeating.png)

__Note__: the following code examples are written in Sass to utilise nesting, in order to keep them short.

## Method 1: `@counter-style` at-rule

CSS [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule) are statements that instruct CSS how to behave, for example `@import`, `@font-face` or `@media`.

The [`@counter-style` at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style) was proposed in order to provide more options and functionality to the existing set of bullet styles in HTML lists.

[`@counter-style` is a level 3 proposal](https://drafts.csswg.org/css-counter-styles-3/), at Candidate Recommendation stage, which means that the spec is stable enough to be implemented by browsers. However, as of April 2019 it is only supported by Firefox ([caniuse stats for `@counter-style`](https://caniuse.com/#feat=css-at-counter-style)). Example output in this post is provided as an image, although the code for all examples is available in the [CodePen at the bottom of the page](#codepen).

### Counter-style rule example

To use counter-style, write a rule then declare is as the value of the [`list-style-type` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type) on a `<ul>` or `<ol>` tag. The syntax for a counter-style rule has several optional descriptors, as listed on the [MDN documentation page](https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style#Syntax). MDN also provide an [interactive demo](
https://mdn.github.io/css-examples/counter-style-demo/) of different counter-style variants (best viewed in a supported browser like Firefox).

In order to replace the bullet points with an emoji, we need to give options to the "system", "symbols" and "suffix" descriptors. Choose the "cyclic" system and provide the unicode code points for the desired emoji symbols. Note that you need to use the unicode code point to represent the emoji rather than just the character, e.g. "\1F431" instead of 🐱. Find a complete list [on the unicode website](https://unicode.org/emoji/charts/full-emoji-list.html). Setting "suffix" to " " means that no other characters like a period appear after the counter.

The "symbols" descriptor can accept a space-separated set of symbols. Combined with the "cyclic" system option, this means that our final bullet points design will rotate through all provided symbols.

```sass
@counter-style repeating-emoji {
  system: cyclic;
  symbols: "\1F431" "\1F436" "\1F984"; // unicode code point
  suffix: " ";
}

// Add this class to the ul or ol element
.repeating-counter-rule {
  list-style-type: repeating-emoji;
}
```

![Cat, dog and unicorn emoji in cyclical pattern for six list counters](/images/emoji-bullet-points/counter-rule-repeating.png)

## Method 2: `::before` pseudo-element

This method can be used replace the standard discs with images, and not just emoji. The downside of it is that it doesn't provide the flexibility of `@counter-style`.

Begin by setting `list-style: none` on the parent list element, `<ul>` or `<ol>`, and then adjusting padding and margin for the list item elements `<li>`. The icon used for the bullet point is added using the `::before` pseudo-element.

To replace the default discs with the same emoji, the following code could be used, where the `.emoji-list` class is added to the `<ul>` element:

```sass
.single-before {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding-left: 1rem;
    text-indent: -0.7rem;
  }

  li::before {
    content: "🐻 ";
  }
}
```

![Bear emoji for list counters](/images/emoji-bullet-points/nth-child-single.png)

In order to replicate the repeating pattern of three emoji bullet points from the counter-style example above, we need to use the `:nth-child` pseudo-class. For example:

```sass
.repeating-before {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding-left: 1rem;
    text-indent: -0.7rem;
  }

  li:nth-child(3n+1)::before {
    content: "🐱 ";
  }

  li:nth-child(3n+2)::before {
    content: "🐶 ";
  }
  
  li:nth-child(3n)::before {
    content: "🦄 ";
  }
}
```

![Cat, dog and unicorn emoji in cyclical pattern for six list counters](/images/emoji-bullet-points/nth-child-repeating.png)

Although initially straightforward, this method can become more complex depending on the pattern of emoji to be implemented. However, this technique has the benefit of being [well-supported across browsers](https://caniuse.com/#feat=css-gencontent).

## Conclusion

The `@counter-style` at-rule provides a lot of flexibility when styling list counters, but its limited browser support makes it unsuitable for most production sites. Using pseudo-elements is reliable but cumbersome for more intricate layouts. However, if the style of list bullets is an optional design feature rather than a critical part of the page design, then consider combining `@counter-style` with the [`@supports` at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) and provide an acceptable fallback design, perhaps using pseudo-elements.

## <span id="codepen">Emoji Bullet Point CodePen Example</span>

<p class="codepen" data-height="433" data-theme-id="0" data-default-tab="css,result" data-user="clairecodes" data-slug-hash="moNmXp" style="height: 433px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="@counter-style rule demo">
  <span>See the Pen <a href="https://codepen.io/clairecodes/pen/moNmXp/">
  @counter-style rule demo</a> by Claire (<a href="https://codepen.io/clairecodes">@clairecodes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
