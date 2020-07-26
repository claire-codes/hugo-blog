---
layout: post
title: Why the title attribute is pointless in HTML5
summary: 
date: 2017-01-31 22:29:26
comments: true
published: true
categories:
- html5
---

I’ve been working a lot with Magento 2 recently (lucky me 😑) and I've noticed the `title` attribute used heavily across the HTML and PHTML template files. I found examples on `<input>`, `<a>` , `<textarea>`, `<p>` and especially `<div>` tags, e.g.

```html
<div title="<?php /* @escapeNotVerified */ echo __(‘Buy me')?>">
    <?php /* @escapeNotVerified */ echo __(‘Buy me') ?>
</div>
```

This is the pattern I've seen used: the title attribute is used to repeat the text within the div or an equivalent “useful” value for other tags.

This isn’t an attribute I've come across much in the wild, which intrigued me: are the Magento team writing accessible, semantically correct HTML that I should copy? (Spoiler alert: no) So I investigated further.

<div class="c-tldr">
    <h2 class="c-tldr__title">TL;DR</h2>
    <ul>
    <li>The title attribute creates a tooltip of its value when the element it belongs to is hovered over</li>
    <li>👉 Don’t use tooltips!</li>
    <li><pre>
if (informationIsImportant === true) {
   print directly to screen;
else (informationIsNotThatImportant === true) {
   don’t include it in your page;
}</pre></li>
</ul></div>

## What does the title attribute do?

The string provided to the title attribute is presented as a tooltip whenever the element is hovered over by the cursor. So in theory it contains supplementary information about the element it’s attached to. Try hovering over this example (if you’re on a device that allows you to hover of course!):

<div title="You'll only see me if you hover" style="margin: 15px; border: 5px dashed dark-gray; padding: 15px;">
    <strong>Hover your cursor over me</strong>
</div>

If it isn’t given an attribute itself but a parent element is, then it inherits and will show that instead.

## Which elements can you use it on?

In HTML5, it’s valid on any element.

## Why would I use it?

To create a simple tooltip.

## Do I want to create a tooltip?

No. For starters, the HTML spec discourages the use of the title attribute for this purpose. You should not be storing potentially important, useful information in a tooltip, as certain user groups can’t access it:

- smartphone and tablet users are unable to hover
- the title attribute is ignored by screen readers and not read out

## But what about images?

You're getting confused with the `alt` attribute. It's still valid HTML5 syntax to include a `title` attribute on an image, but again it won't be read out by screen reader software. If the image doesn't render on your page, then it's the text contained in the `alt` attribute that appears on the screen, not the `title` attribute text. The `alt` text is also the content read out by screen readers.

## What alternatives are there?

When building a web page, you should include clear, concise instructions and labels. A well-crafted web app won't need tooltips to assist the user. Ask yourself:

* **Is the information useful and does a user need to see it?** If yes, then it should be clearly visible on the screen and not hidden.

* **Is the information non-essential?** If not, then you should question whether it's necessary to include it on the page.

For more information on this topic, I highly recommend any of the articles by the [Paciello Group](https://www.paciellogroup.com).

Next time I work on a Magento 2 template and see the title attribute I’ll take pleasure in hitting the delete button and keeping my markup free of unnecessary attributes. 🔥