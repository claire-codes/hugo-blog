---
layout: post
title: "Reasons not to use IDs in CSS"
summary: Why I prefer to use classes instead of IDs when writing CSS.
date: 2018-03-19 20:54:03
comments: true
published: true
categories:
- css
- html
- sass
---

Sometimes when I’m reviewing code, I advise a colleague not to use IDs for CSS style selectors, and inevitably get asked why. Like standing in queues, making a cup of tea or applying a full face of makeup in the dark at 6am, avoiding IDs in CSS is something I do without thinking. I've been doing it for so long without questioning it, that it takes me a minute before I can explain to other people _why_. So with that in mind, here’s a list of reasons why I avoid using IDs in my stylesheets, and prefer classes instead.

## 1. Class specificity is lower than ID specificity

IDs have a [much higher specificity than classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). A class on its own can't overwrite styles belonging to an ID. To "beat" the ID, you would need either more IDs or to use `!important`, which can begin [specificity wars](https://stuffandnonsense.co.uk/archives/css_specificity_wars.html) in your stylesheets. You may even need to restructure your HTML. Ideally, styles should be easy to override and extend, to make your CSS maintainable and pleasant to work with.

## 2. Classes can be reused

IDs should be unique on a page. This means that if you attach a style to an ID, you won't be able to reuse it within the same webpage. Classes, however, can appear on several HTML elements on the same page. Being able to reuse styles is one of the advantages of CSS. For example, it would be difficult to style a list element `<li>` directly using just IDs. Admittedly, not every style needs to be reused, but it's nice to have the option.

## 3. A consistent convention

It's simpler for developers working in a codebase to know that CSS is attached to classes, and that IDs are used for other purposes. Using only the `class` attribute to define styles is easier for others to understand instead of a combination of the `class` and `id` attributes.

## 4. An element can have several classes, but only one ID

You can add many classes to a HTML element, for example `<div class="text-bold banner-text js-banner-text"></div>`. Here, there are classes for styling, and a class for a JavaScript hook, all grouped together in the class attribute. It's possible to name IDs using these conventions too, but remember that it's not valid to have more than [one ID per element](https://www.w3.org/TR/2011/WD-html5-20110525/elements.html#the-id-attribute). This means that you can't overload ID names like the class example above, e.g. `<div id="text-bold banner-text js-banner-text"></div>`.

Using a combination of classes to style an element is a common pattern. Additionally, it's a good idea to use a naming convention for selectors used only by JavaScript or automated tests. For example, if I see a class prefixed with `js-`, I know that it's used in JavaScript somewhere and isn't responsible for styles and should proceed with caution before editing it. (Commonly the `qa-` prefix is also used as a hook for testing.) I personally like to keep all my hooks and styling classes together in one attribute instead of sharing them between classes and IDs.

## Disclaimer

Of course, this advice comes with the usual disclaimer attached. You understand your code and the context of your problem more than any random blog post, and if you think it makes sense to write CSS with IDs, then go ahead and use an ID. IDs are completely valid to use in CSS stylesheets.

### Note

This is not to say that you shouldn't use IDs in your HTML. IDs have many uses in a webpage aside from being a CSS selector. For example as page anchors, fragment identifiers or to link labels to form fields.

### P.S.

While researching this post, I found [this StackOverflow answer](https://stackoverflow.com/questions/1878810/is-there-any-pros-and-cons-if-i-use-always-css-class-instead-css-id-for-everythi) which _recommends_ using IDs for defining styles - a good reminder that popular opinions in frontend web development can change!
