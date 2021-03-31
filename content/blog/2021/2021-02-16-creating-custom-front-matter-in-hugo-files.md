---
title: "Creating Custom Front Matter in Hugo Files"
date: 2021-02-19T13:53:44Z
summary: "How to add your own fields to a Hugo archetype file"
categories:
- hugo
---

Front matter is metadata found at the top of each Markdown post in a [Hugo](https://gohugo.io/) site. Front matter captures data associated with the post and is a powerful tool for personalising your Hugo site. This article explains how to customise the fields in the front matter.

Let's define some Hugo terminology first:

* **content type**  - how Hugo defines and organises your content. For example, creating a file with the command `hugo new posts/my-first-post.md`, gives it a content type of "posts". The file "my-first-posts.md" is placed in the "content/posts" folder. A Hugo site can have as many content types as required.

* **archetype** - a template used to create a new content type. In a new Hugo site, the archetype file "default.md" is used for all post types. It contains minimal front matter and lives in the "archetypes" folder at the project root. This is how "default.md" appears in a site created with Hugo (version 0.79):

```yaml
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
---
```

* **front matter** - the metadata associated with a content file. Front matter can be TOML, YAML or JSON format. The examples in this post use YAML, so the front matter is enclosed in `---`. Front matter defines how a post appears throughout your site. Fields in front matter can include title, categories, dates, ratings and more: front matter can be customised as needed for your content type.

## How to edit front matter

Front matter is set in an archetype file, so to edit front matter, we should edit the archetype for the relevant content type. If an archetype doesn't exist for the content type, it will fall back to using "default.md". Editing this file is fine but having a specific archetype template per content type offers more control.

For example, you're creating a website to display profiles of cats. Your content type will be "cat-profile" (hyphens are fine in content type names). Create a file called "cat-profile.md" in the "archetypes" folder at the project root. The filename should match the content type. Fill this file with your required front matter.

Fields in front matter can be many types: strings, numbers, Booleans, lists of values, etc. They can also use site variables. The [Hugo documentation site](https://gohugo.io/) explains in more detail what's available. This example for "archetypes/cat-profile.md" illustrates some of the different types:

```yaml
---
title: "Profile for {{ replace .Name "-" " " | title }}"
date: {{ .Date }}
rating: 4
comments: true
features:
-
---
```

Once you're happy with the fields, test it out. Save the file, then at the terminal execute the command:

```sh
hugo new cat-profile/jim-bob.md
```

This will create a new post called "content/cat-profile/jim-bob.md" with front matter that looks like:

```md
---
title: "Profile for Jim Bob"
date: 2021-02-17T12:30:23Z
rating: 4
comments: true
features:
-
---
```

## Troubleshooting

If your archetype doesn't get applied, make sure you're using the correct file extension. If your archetype has extension ".md" but you try to create a file with ".markdown", the archetype will not be applied. [I cover this in more detail in a different blog post](/blog/2019-03-28-why-my-hugo-archetypes-didnt-work/).
