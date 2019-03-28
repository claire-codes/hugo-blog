---
title: "Why my Hugo Archetypes didn't work"
date: 2019-03-28T15:06:50Z
summary: "A short debugging story about Hugo template files and Markdown file extensions."
categories:
  - hugo
  - meta
---

A short story about Hugo template files and Markdown file extensions.

## Brief overview of archetypes in Hugo

The current version of my [personal blog](https://www.clairecodes.com/) is built with [Hugo](https://gohugo.io), a static site generator. Hugo has the concept of [archetypes](https://gohugo.io/content-management/archetypes/), which are template files used to create new content types with the `hugo new` command. It saves you having to copy and paste customised [front matter](https://gohugo.io/content-management/front-matter/) (the YAML, TOML or JSON data at the top of the file) or other custom content every time you create a new post.

Each content type in your Hugo site can have its own archetype template. For example, on my site I create standard blog posts and also custom diary style posts, as content types `blog` and `dev-diary`. When I type the command `hugo new dev-diary/example-post.md` I want the file created to have different YAML fields than one created with `hugo new blog/example-post.md`

The previous version of my blog was built with Jekyll, and I built my own [Yeoman generator](https://github.com/claireparker/generator-clekyll) in order to achieve the same result as Hugo's archetypes feature (plus it was a fun side-project). Archetypes have been a lot simpler to work with than a hand-made Yeoman generator, except for this one problem I was having.

## The issue

I dutifully followed the instructions to create an archetype file from [Hugo’s docs](https://gohugo.io/content-management/archetypes/) and added it in the archetypes directory of my site, so it looked like this:

```sh
archetypes
├── default.md
└── blog.md
```

I used the command `hugo new blog/post.markdown` but my new "blog" archetype wasn't being used. Instead, the new post used the "default" archetype. I was intermittently having success with it using different filenames but couldn’t work out why. I thought using the "-kind" flag helped but it turned out to be a red herring. I abandoned custom archetypes for a time, although still checked my broken attempts into my [blog site repo](https://github.com/claireparker/hugo-blog/tree/master/archetypes) (because why not?).

## The facepalm moment 💡

I recently renamed one of my content types (`interesting` to `dev-diary`) and changed the format of my filenames and magically my archetypes began working! But why?

**The markdown file extension of my new content file wasn’t matching the extension of the archetype 🤦‍♀️**

By using the command `hugo new blog/post.markdown`, the blog archetype wasn't being invoked correctly, because it had a different file extension to the template file, i.e. `archetypes/blog.md`. The mismatch between ".markdown" and ".md" extensions caused the archetypes to fail.

Instead I needed to use `hugo new blog/post.md` and match the markdown file suffixes.

Both ".markdown" and ".md" are valid extensions for [Markdown files](https://en.wikipedia.org/wiki/Markdown) and I use them interchangeably. Perhaps the ".markdown" extension isn't intended to work with archetypes through a choice from the Hugo team, but this definitely stumped me for a while!
