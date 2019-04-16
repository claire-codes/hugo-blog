---
title: "2019 04 16 Hugo Page Build Failure"
date: 2019-04-16T22:45:00+01:00
summary: ""
categories:
- markdown
---

Just a quick debugging post today. I had an example of a Liquid tag in a blog post in a <pre> and <code> tag, within some Markdown code fences. Everytime I pushed to Git and GitHub I received a page build error that looked like this:

It took me quite a bit of targetted Googling to work out the solution to this one but eventually got it:

```js
{% codepen https://codepen.io/claireparker/pen/oMmPPZ %}
```

This is some serious code-ception to write as a post!

My current blog setup is: