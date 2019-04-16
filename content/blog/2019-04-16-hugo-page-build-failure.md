---
title: "2019 04 16 Hugo Page Build Failure"
date: 2019-04-16T22:45:00+01:00
summary: ""
categories:
- markdown
---

Just a quick debugging post today. I had an example of a Liquid tag in a blog post in a <pre> and <code> tag, within some Markdown code fences. Everytime I pushed to Git and GitHub I received a page build error that looked like this:

Unable to build page. Please try again later.

This wasn't helpful at all!

It took me quite a bit of targetted Googling and this issue on the Jekyll repo https://github.com/jekyll/jekyll/issues/6217#issuecomment-363785632 to work out the solution to this one but eventually got it:

```js
{% assign favorite_food = 'apples' %}
```

This is some serious code-ception to write as a post!

My current blog setup is: