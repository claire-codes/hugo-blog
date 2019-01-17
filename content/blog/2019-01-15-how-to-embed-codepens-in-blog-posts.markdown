---
title: "How to Embed CodePens in Blog Posts on dev.to and Medium"
date: 2019-01-15T08:43:58Z
summary: A quick code snippet I always forget.
categories:
  - meta
---

CodePens are a great way to interactively demonstrate a code concept in a blog post. However, I spend more time than I wish to admit googling how to embed a [CodePen](https://codepen.io/) into my posts, both on [Medium](https://medium.com/) and [dev.to](https://dev.to/). Here are the current methods to achieve this on both platforms.

## dev.to

Copy the url of your CodePen and add it to a Liquid tag like this:

```js
{% codepen https://codepen.io/claireparker/pen/oMmPPZ %}
```

Paste the Liquid tag directly into the page. Do not surround it with any other Markdown code formatting tags like the triple or single backticks.

## Medium

Press enter for a new line. The plus icon in a circle will appear to the left of the line. Click this and choose the embed option icon, which is the angle brackets like this: `<>`. Paste the url for your CodePen, then press enter afterwards. Pressing enter is important even if you immediately delete the line, otherwise the CodePen won't load into the page.

![Gif demonstrating how to add a CodePen to a Medium article](/images/medium-codepen.gif)

## HTML

If your site supports HTML tags, for example on a site using Hugo, Gatsby, Jekyll, etc,, then you can use the HTML that CodePen provides and paste it directly into your page. There is an "Embed" button at the bottom of the screen in the CodePen's edit view that opens a pop-up, allowing you to customise the panes that are displayed and the size of the CodePen window.

## Caveats

On both Medium and dev.to, you can't customise the panes that appear, change the size of the embedded pen and can only display the "Result" pane. To see the HTML, CSS or JS panes, the user has to click on them to expand them.

Additionally the ability to edit the pen within the embed is only available for paid "Pro" Codepen members. For those on a free account, only the "Result" pane is interactive, and not the HTML, CSS or JS code panes.

## Result

And this is what an embedded CodePen looks like in a blog post:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="claireparker" data-slug-hash="Zvwzby" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Gradient Text">
  <span>See the Pen <a href="https://codepen.io/claireparker/pen/Zvwzby/">
  Gradient Text</a> by Claire (<a href="https://codepen.io/claireparker">@claireparker</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
