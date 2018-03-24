---
layout: post
title: "Reasons not to use IDs in CSS"
summary: Why I prefer to use classes instead of IDs when writing CSS.
date: 2018-03-19 20:54:03
comments: true
published: true
categories:
- css
- sass
- html
---

Sometimes when I’m reviewing code, I advise a colleague not to use IDs for CSS styles, and inevitably get asked why. Like standing in queues, making a cup of tea or applying a full face of makeup in the dark at 6am, avoiding IDs in CSS is something I do without thinking. It takes me a minute before I can explain to other people why I do it. So with that in mind, here’s a list of reasons I avoid using IDs in my stylesheets, and prefer classes instead.

1. IDs have a [much higher specificity than classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). A class on its own can't overwrite styles belonging to an ID. To "beat" the ID, you would need either more IDs or `!important`, which can begin (specificity wars)[https://stuffandnonsense.co.uk/archives/css_specificity_wars.html] in your stylesheets. You may even need to restructure your HTML. Styles should be easy to override and extend, to make your CSS maintainable and pleasant to work with.
2. IDs should be unique on a page. If you attach a style to an ID, it won't be able to reuse it within the same HTML page. Being able to reuse styles is one of CSS's adavantages. Admittedly, not every style needs to be reused, but it's nice to have the option.
3. There aren’t any advantages of an ID over a class, unless you count the higher specificity. You can do anything with a class that you can do with an ID. Plus classes provide the option to reuse the style as mentioned above.
4. It's a good idea to use a naming convention for selectors used only by JavaScript or automated tests. For example, if I see a class prefixed with `js-`, I know that it's used in JavaScript somewhere and isn't responsible for styles. (Commonly the `qa-` prefix is also used as a hook for testing.) You can add many classes to a HTML element, which means you could have `<div class="text-bold banner-text js-banner-text"></div>`. There are classes for styling, and a class for a JavaScript hook, with a clear distinction, all grouped together in the class attribute. It's possible to name your IDs using these conventions too, but remember that it's not valid to have more than [one ID per element](https://www.w3.org/TR/2011/WD-html5-20110525/elements.html#the-id-attribute). This means that you can't overload ID names like the class example above, e.g. `<div id="text-bold banner-text js-banner-text"></div>`. I personally like to keep all my hooks and styling classes together in one attribute instead of share them between classes and IDs.

Of course, the usual disclaimer applies in these situations. You understand your code more than any random blog post, and if you think it makes sense to write CSS with IDs, then go ahead and use an ID. IDs are completely valid to use in CSS styles.

### Note

This is not to say that you shouldn't use IDs in your HTML. IDs have many uses in a webpage aside from being a CSS selector. For example as page anchors or fragment identifiers and also linking labels to form fields.

### P.S.

I enjoyed reading [this StackOverflow answer](https://stackoverflow.com/questions/1878810/is-there-any-pros-and-cons-if-i-use-always-css-class-instead-css-id-for-everythi) which _recommends_ using IDs - a good reminder that popular opinions in frontend web development can change!

### Read a Little Bit More

[CSS Wizardry always has something useful to say](https://csswizardry.com/2011/09/when-using-ids-can-be-a-pain-in-the-class/).
