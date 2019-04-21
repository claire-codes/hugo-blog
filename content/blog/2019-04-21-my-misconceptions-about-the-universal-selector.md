---
title: "My Misconceptions about the Universal Selector in CSS"
date: 2019-04-21T23:31:22+01:00
summary: "Investigating the performance and usage of the universal CSS selector *."
categories:
- css
---

The asterisk `*` is known as the [universal selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors) in CSS. It matches all elements of any type.

```css
* {
    color: red;
}
```

This example would change the colour of all the text on the page to red (as long as there wasn't a more specific rule applied to the  element).

I don't often use the universal selector, because I assumed that selecting *everything* would be bad for page performance and difficult to override. After some research, I proved wrong some misconceptions I had about both the universal selector and my understanding of CSS.

## `*` has a specificity of 0

**Misconception 1: the universal selector has a high specificity.** ❌ Wrong! The specificity of `*` is zero. In fact, quoting [MDN's article on specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#Selector_Types):

> Universal selector (*), combinators (+, >, ~, ' ', ||) and negation pseudo-class (:not()) have no effect on specificity.

Therefore, a rule that only uses the universal selector, like `* { color: red }`, can be overridden by a single element, class or ID selector.

[Estelle Weyl's specifishity page](https://specifishity.com/) is a great visual guide to understanding CSS specificity.

## `*` is inefficient in terms of performance

**Misconception 2: the universal selector performs badly compared to other selectors.** ✅ I was right about this one.

When talking about CSS selector performance, Steve Souder's work is often quoted, particularly his book [Even Faster Websites](http://shop.oreilly.com/product/9780596522315.do) and popular [blog post about CSS selector performance](http://www.stevesouders.com/blog/2009/03/10/performance-impact-of-css-selectors/) both from 2009. He has a handy [CSS test creator](http://stevesouders.com/efws/css-selectors/csscreate.php) on his website for measuring the performance of CSS selectors. The universal selector is clearly one of the worst, alongside attribute selectors (like `[href="#"]`) and pseudo-classes and pseudo-elements (like `:hover`). IDs and classes are the best for speedy performance. (CSS Wizardry summarises the findings in a list in a post about [efficient CSS selectors from 2011](https://csswizardry.com/2011/09/writing-efficient-css-selectors/).)

_However_, these results are for when you use a single selector alone, and not in combination with any others. You can still write  inefficient CSS selectors without `*`. Using lots of child or descendent selectors is one way to achieve this, e.g. `div > ul li > a { color: red; }
`

## CSS selectors are read from right to left by the browser ⬅

**Misconception 3: browsers process CSS selectors from left to right, in the same way that we would read them.** ❌ I was wrong about this which surprised me!

One of these rules is faster for performance than the other:

```css
/* A */
#id > *.

/* B */
* > #id {
    color: red;
}
```

The browser checks the rightmost selector first before moving left. Therefore, selector B is quicker, since the matching elements are narrowed down to those matching the ID, instead of every element in the document like in A.

Therefore, when writing selectors, it's best to put something performant like a class or ID at the end.

## CSS Selector Performance matters

**Misconception 4: it's important to focus on CSS selector efficiency for page performance.** ❌ As I [read](https://meiert.com/en/blog/performance-of-css-selectors-2/) [more](https://www.sitepoint.com/optimizing-css-id-selectors-and-other-myths/) and [more](https://www.telerik.com/blogs/css-tip-star-selector-not-that-bad) about this subject, the overriding opinion was that selector performance isn't something to worry about. Steve Souder even said as much in the first paragraph of the aforementioned [blog on CSS selector performance](http://www.stevesouders.com/blog/2009/03/10/performance-impact-of-css-selectors/). This was written 10 years ago, and since then our browsers have become much more powerful.

However, I still wouldn't recommend writing very overqualified selectors, e.g.

```css
div a [type="text"] .foo #bar {
    color: red;
}
```

Not because of performance (although this will be inefficient) but because it implies that your DOM is structured badly, and Css written like this will be hard to maintain and override. Instead, write selectors that match on ideally one class.

## Would I use `*`?

The universal selector isn't one that I reach for often, but it can be useful. It's common to see browser-reset type selectors like:

```css
* , *:before, *:after {
    box-sizing: border-box;
}
```

The universal selector can also be useful to select all children of an element, or in cases where you don't have direct control over the structure of the page, e.g.

```css
.class > * {
    color: red
}
```

Now I understand how it works more, I wouldn't be afraid to use `*`, especially considered page performance. In a world of weighty hero image PNGs, bloated JavaScript bundles and sluggish API calls, there are more strategic parts of a website to optimise for bigger performance gains.

Instead I would evaluate any uses of the universal selector in terms of whether the CSS is written cleanly, or whether the page structure could be refactored to make it easier to target elements.

Do you use the universal selector often or do you avoid it?
