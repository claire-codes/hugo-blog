---
title: "Liquid Tag Page Build Failure Debug"
date: 2019-04-17T22:45:00+01:00
summary: "A quick explanation of a bug fix for a build error I received working on this site, related to Liquid tags and Jekyll."
categories:
- markdown
---

A quick bug-fix post today.

In a [previous blog post](/blog/2019-01-15-how-to-embed-codepens-in-blog-posts/) I'd written an example of a Liquid tag and nested it within `<pre>` and `<code>` tags, using the standard some Markdown code fences of three backticks <code>```</code>. It looked like this:

<!-- {% raw %} -->
````js
```js
{% codepen https://codepen.io/claireparker/pen/oMmPPZ %}
```
````
<!-- {% endraw %} -->

Everytime I pushed to Git and GitHub I received a page build error that looked like this:

> Unable to build page. Please try again later.

This wasn't helpful at all!

If the tag contains a valid Liquid tag then there is no error. If I put complete rubbish in the example tag, like <!-- {% raw %} -->`{% baby shark doo doo doo %}`<!-- {% endraw %} -->, then I receive a more useful error of:

> The tag `baby` on line 25 in `content/blog/filename.md` is not a recognized Liquid tag. For more information, see https://help.github.com/en/articles/page-build-failed-unknown-tag-error.

Don't get me wrong - the site still builds OK and I can deploy to Netlify no problem, but it was annoying to receive this email everytime I pushed to my blog repo and to see the small red crosses next to commits indicating CI failures.

I knew the tag was the issue but didn't know how to escape it, or particularly why this was causing a problem since I don't use Jekyll to build my site! It took me quite a bit of targeted Googling but eventually this issue on the Jekyll repo https://github.com/jekyll/jekyll/issues/6217#issuecomment-363785632 resolved my problem. I needed to wrap the Markdown code fences and the Liquid tag within the "raw" Liquid tags. That way the Liquid tag parser ignored my example tag. The final code I used in y blog post file looked like:

<!-- {% raw %} -->
````js
<!-- {% raw %} -->
```js
{% codepen https://codepen.io/claireparker/pen/oMmPPZ %}
```
<!-- {% endraw %} -->
````
<!-- {% endraw %} -->

(The Markdown to write this post is some serious code-ception by the way!)

I'm not 100% sure what caused this but this is my best guess.

My blog is built using Hugo and deployed using Netlify. It has nothing to do with Jekyll. However, the repo on GitHub is set up as a GitHub Pages site with a custom domain, which is the one deployed to Netlify. I'm assuming the GitHub Pages stuff notices the Liquid tag and thinks I'm doing something with Jekyll and gets in a mess because it's just a random tag.

🛡⚔️🐛