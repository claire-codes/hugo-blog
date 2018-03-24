---
layout: post
title: Changing Jekyll&#39;s Permalink
date: 2016-03-08 19:54:26
comments: true
published: true
categories:
- ruby
---

Let's change the permalink format for your Jekyll blog.

# 🔗 What?

In your Jekyll blog, a _permalink_ is the name for the URL that points directly to a specific blog post. It's a _permanent link_ to a page.

# 🔗 Why?

Jekyll uses a really ugly, verbose permalink format by default which includes the date and category of the post:

```bash
/:categories/:year/:month/:day/:title.html
```

Which in the live site for this post would become:

```bash
http://www.claireparker-pen.com/ruby/2016/03/08/changing-jekylls-permalink.html
```

Why do you want all that extra info in your permalink? In my opinion all that's needed is the title to uniquely identify it, and this should also be snappy and to the point (a rule I admittedly don't always follow.). Any metadata such data or category should already be clearly included in the blog post itself.

# 🔗 How?

In the `_config.yml` file, either edit the `permalink` property or add it if it isn't already there. The pattern you provide creates the structure of your permalinks. You can use certain variables that Jekyll recognises that represent metadata for the post. For example, I've got:

```bash
permalink: /blog/:title
```

The `:title` will map to the title of my blog post as taken from its filename and create a permalink that looks something like

```bash
http://www.claireparker-pen.com/blog/changing-jekyll-permalinks
```

You can find the other variables that Jekyll supports listed in [Jekyll's docs](https://jekyllrb.com/docs/permalinks/). Spoiler: there aren't any interesting ones except for `:title`.

Commit, build and push to see your new more succinct permalinks.

## References

[https://jekyllrb.com/docs/permalinks/](https://jekyllrb.com/docs/permalinks/)
