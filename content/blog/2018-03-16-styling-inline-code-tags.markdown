---
layout: post
title: "Styling inline code tags"
summary: Tips for creating your own CSS style for code tags.
date: 2018-03-16 08:58:21
comments: true
published: true
categories:
- html
- css
- sass
---

I like writing tech-related blog posts (you’re reading one right now!). My posts often contain the &lt;code&gt; tag as I illustrate code examples. The default browser style for this tag can be pretty dull, typically using the system monospace font and a beige background colour. I've added my own custom style to this tag. This is a step-by-step explanation of it, as I'd rather do that than watch some drivel on Netflix today.

## What does the code tag do?

&lt;code&gt; is used to semantically mark a short piece of code inline in HTML. Browsers normally display this with a monospace font. [Read more about the tag on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code).

```html
<p>I often commit <code>console.log()</code> statements!</p>
```

I use [Markdown](https://en.wikipedia.org/wiki/Markdown) to write my blog posts, and the Markdown equivalent to writing the tag is to use a single backtick:

```markdown
I often commit `console.log()` statements!
```

&lt;code&gt; is different from the &lt;pre&gt; tag, which is used to display code blocks preformatted - that is, exactly how it appears in the HTML file, including whitespace. [Here's the MDN link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre). (In Markdown, &lt;pre&gt; tags are represented by three backticks.)

Another difference between &lt;code&gt; and &lt;pre&gt; tags is that &lt;code&gt; displays _inline_ by default, while &lt;pre&gt; has a _block_ display.

## Styling the code tag

This is the style I use currently on this blog.

```sass
$color-code-background: #272822;
$color-code-color: #f8f8f2;

code {
    background-colour: $color-code-background;
    color: $color-code-color;
    border-radius: 0.3em;
    padding: 4px 5px 6px;
    white-space: nowrap;
}
```

Let’s go through this line-by-line.

I use Sass to write CSS, and I like to assign colours to variables. The reasoning behind this is another blog post in itself, but briefly, my Sass linter tells me too, and they are ultimately easier to maintain and keep track of.

The choice of colours is influenced by my overall blog styling. My blog has an almost-white background colour, so the code tag background should also be dark in order to create a strong colour contrast. The text itself then needs to contrast with the dark background to be readable. It’s a good idea to use a colour contrast checker to check how accessible your colour choices are. ([This one from WebAIM is great](https://webaim.org/resources/contrastchecker/).)

The specific colour choices were influenced by my code block styles. I use [Prism](http://prismjs.com/) on my blog for code formatting, but Prism does not highlight inline code tags (hence why I'm styling them myself). I’ve copied the colours from the Okaidia theme, which is what I use.

The border-radius was also copied from the Prism &lt;pre&gt; styles.

The padding values were what I thought looked good on my page. This is dependent on the font-size and line-height of your text. I suggest playing around with this until you think it sits well alongside your other text. Make use of the padding shorthand here if values are duplicated.

Finally, I added `white-space: nowrap` so that if the code block had spaces in it, it wouldn’t wrap onto the next line, as it makes the text less readable to split on whitespace.

## Caution ⚠️

The Prism code formatter creates &lt;code&gt; blocks _within_ &lt;pre&gt; blocks, so the `white-space` rule I use breaks the carriage returns (it makes everything sit on one huge long line). In order to avoid this, either overwrite your new style with a `pre code` rule:

```sass
pre code {
    white-space: pre;
}
```

Or instead of applying the style to a tag, target a class instead, like `.code`. However, if you’re using Markdown to generate your HTML, you'll need to start writing `<code class=“code”>` instead of using the backticks shortcut, which may become tedious.

Anyway, it’s always fun to overthink styles. [Here's a codepen demonstrating this style interactively](https://codepen.io/claireparker/pen/NyyNxw).
