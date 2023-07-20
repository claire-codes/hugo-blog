---
title: "How to Group Hugo Posts by Year"
date: 2023-07-20T15:50:10+01:00
summary: "A code snippet to group posts by year in Hugo using groupbydate"
categories:
- hugo
---

Here's how to group and count posts by year in Hugo, using the `GroupByDate` function.

Within a `list.html` layout template:

```html
<ul>
    {{ range .Pages.GroupByDate "2006" }}
        <li>There were {{ len .Pages }} posts in the year {{ .Key }}</li>
        <!-- You can add another range here to get individual posts, for example: -->
        <!--  {{ range .Pages.ByTitle }} -->
    {{ end }}
</ul>
<div>There are {{ len .Pages }} total posts.</div>
```

This code will output a list, something like:

- There were 20 posts in the year 2022
- There were 6 posts in the year 2021

It will skip any years that don't have posts.

You aren't limited to just year: `"2006"` can be swapped for other date formats and layouts, for example:

- `"2006-01"` which will group posts by month per year
- `"January 2006"` which will also group posts by month per year but will format the date differently

Check [this Hugo docs page for other date layouts](https://gohugo.io/functions/format/#hugo-date-and-time-templating-reference).

Posts will be sorted in descending order by default (the latest date first) but can be swapped to the oldest first by adding `asc`: `{{ range .Pages.GroupByDate "2006" "asc" }}`.

Check [this Hugo docs page for more information about grouping and ordering posts](https://gohugo.io/templates/lists/#by-date-1).