---
title: "Why it's important to give your button a type"
date: 2018-04-14T23:56:31+01:00
draft: false
summary: Let's investigate the different values the type attribute can take for a button written in HTML, and what happens if the type attribute is missing.
categories:
- html
---

How do you create a button element with HTML? I often see them written like this:

```html
<button>Press me</button>
```

This code is valid HTML and passes the [W3C markup validation service](https://validator.w3.org/). However, I believe that the `type` attribute should always be included on a button. If this attribute is missing, it can introduce potentially confusing behaviour - and there's enough of that already in web development!

**Note**: I use the `<button>` tag instead of the input tag, e.g. `<input type=“button” />` when building buttons in HTML. I recommend this because the button tag and is semantically correct for this purpose and it can be easier to style than an `input` tag.

## Type attribute values

HTML tags use key-value pairs, or attributes, to modify their functionality. For example, a commonly used attribute is the class attribute, like on this div element: `<div class="foobar"></div>`. Different tags have different sets of valid attributes.

Buttons have an optional type attribute, which is used to define the purpose of the button. [The type attribute can take three values](https://www.w3.org/TR/2011/WD-html5-20110525/the-button-element.html):

1. submit
2. button
3. reset

### "submit"

```html
<button type=“submit”>Press me</button>
```

This button will submit form data. Submit buttons are normally found nested within a form, i.e. a `<form>` tag.

### "button"

```html
<button type=“button”>Press me</button>
```

This button has no default behaviour. JavaScript must be used to define what happens when it's clicked.

### "reset"

```html
<button type=“reset”>Press me</button>
```

When nested within a form, this button resets form controls to their initial values when clicked.

### No type

```html
<button>Press me</button>
```

After reading the previous definitions, how do you think a button with no type attribute will behave? It wasn't what I expected ... **When the type attribute is missing, the button behaves as a _submit_ button**. (That's in bold because it's the major point I want you to learn and takeaway from this post!) This can cause problematic behaviour (i.e. bugs!) in your code if you aren't expecting it.

## Button types in action

The following gif shows a simple form (original Codepen below). When the form is submitted, the background colour of the page is changed using JavaScript, by listening to the `onsubmit` event. Each of the button types mentioned previously are included within the form, and are labelled to show their type value. Let’s see what happens when each one is clicked:

![Different values of type attribute](/images/missing-type.gif "Different values of type attribute")

- The submit-type button changes the background colour and submits the form, as expected.

- The button-type button does nothing, as expected.

- The reset button does nothing, as there aren't any form inputs to reset in this example.

- The button with no explicit type value submits the form and changes the background color!

Try experimenting yourself with the CodePen here:

<p data-height="400" data-theme-id="0" data-slug-hash="JpzwLv" data-default-tab="result" data-user="claireparker" data-embed-version="2" data-pen-title="Missing button type" class="codepen">See the Pen <a href="https://codepen.io/claireparker/pen/JpzwLv/">Missing button type</a> by Claire (<a href="https://codepen.io/claireparker">@claireparker</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Why should you always declare a type attribute?

### 1) Clear definition of what the button does

When a button doesn't have a type attribute, its usage is unclear. It may be obvious to you when writing the code that the button submits the form. But part of being a good software developer is to write code that is easy to maintain and understand for others. By adding the type attribute, future developers and even Future You can easily work out the purpose of the button.

### 2) Avoid bugs

"Why is that form submitting when I click this unrelated button?" Follow this advice and you and anyone who works with your code will never have to solve that bug again:

> For any button that doesn't submit or reset form data, add a type attribute.

If everyone who wrote HTML understood that buttons act as submit buttons by default, then this advice wouldn't be necessary. Unfortunately not everyone does so in the meantime, declare a button type!

Oh and also stop styling links to look like buttons - you know you shouldn't be 😉

Inspired by [wtfhtmlcss](http://wtfhtmlcss.com/#buttons-type).
