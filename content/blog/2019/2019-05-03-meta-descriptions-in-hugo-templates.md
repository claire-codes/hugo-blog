---
title: "Meta Descriptions in Hugo Templates"
date: 2019-05-03T15:35:48+01:00
summary: "How to add meta description content to a Hugo page template."
aliases:
  - /blog/2019/2019-05-03-meta-descriptions-in-hugo-templates/
categories:
  - hugo
  - meta
---

## What is a meta description?

A meta description is a summary of a webpage set in an HTML meta tag. It's often displayed by search engines in their results as the page description, so it can have an impact on the page's click-through rate. A relevant meta description can help improve your page's SEO.

`<meta>` tags are placed within the `<head>` tag of the document. Order of other meta tags doesn't matter. The syntax of the meta description for the [MDN page about meta tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) looks like this:

```html
<meta
  name="description"
  content="The HTML meta element represents metadata that cannot be represented by other HTML meta-related elements, like base, link, script, style or title."
/>
```

The image below shows how the meta description text appears in the Google results for the same page:

![Google search result for meta tag page using meta description text.](/images/meta-description-search-result.png)

## Adding a meta description to a Hugo page layout

### Where to put the meta tag

Each of your pages should already have a [title tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) within the head. This is likely to be custom per page, just like the meta description can be. This makes it a good location for the meta description tag. Within the layout for each page, add the meta description tag in the `<head>`.

Perhaps you use a partial for some of the tags in your site's `<head>`: content that will be common across all pages, such as meta viewports, UTF-8 encoding, common stylesheets or Google Analytics tags. Since a meta description is custom to the content of each page, it's unlikely that placing it in this partial will be good enough, since any value you set will be the same across every page. (However, if this is enough for your site, then go ahead!)

```html
<head>
  <title>{{ .Site.Title }} - My Page Title</title>
  <meta name="description" content="My amazing meta description" />
  {{ partial "head.html" . }}
</head>
```

### Content for a meta description

A meta description should summarise the contents of a page. Since search engines change their algorithms all the time, search for the latest advice and revisit your descriptions every now and again to check they still adhere to best practices.

When you've decided what the description should be, there are different options for where to set it depending on the page type.

1. Hardcode the text

   You can simply write the content by hand in the template.

2. Use a sitewide parameter

   For a more generic page, use a value set in the config file for your site. If your config file is written in TOML, the value can be set with:

   ```toml
   [params]
     Description = "The personal website, blog and dev diary of clairecodes"
   ```

   And then in the template file, this can be used with the syntax:

   ```html
   <meta name="description" content="{{ .Site.Params.Description }}" />
   ```

3. Use a value set in front matter for content type templates

   For blog posts and other content types, you can add a value in the front matter of each content file and use that.

   Consider a content file with front matter like this:

   ```toml
   ---
   layout: post
   title: "My awesome blog post"
   date: 2015-12-15 00:00:01
   description: "An insightful description for this page that Google will like"
   ---
   ```

   The template for this content type could be `themes/your-theme/layouts/_default/single.html`. The Add the meta tag in the file with:

   ```html
   <meta
     name="description"
     content="{{ if .Params.summary }}{{ .Params.summary }}{{ end }}"
   />
   ```

   Note the use of the if-statement to check that the parameter exists before trying to use it. This means that if the file doesn't have the parameter then it will still render without issue.

4. Combine the methods above

   It's best to provide a backup. Use if-else statements to cover cases where a parameter isn't set. For example:
   **Test this**

   ```html
   <meta
     name="description"
     content="{{ if .Params.summary }}{{ .Params.summary }}{{ else if .Site.Params.Description }}{{ .Site.Params.Description }}{{ else }}Something hardcoded{{ end }}"
   />
   ```

---

The hardest part of meta descriptions is writing the content. Hugo's template functions and variables system simplifies the process of adding it to the different page types around a large site.
