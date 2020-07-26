---
title: "Sass or SCSS?"
date: 2018-10-19T21:18:44+01:00
summary: Clearing up confusing acronyms in CSS.
categories:
- blogtober
- css
---

What do you use to style web pages? Do you write CSS or use a preprocessor? Sass is a popular CSS preprocessor, but why do you sometimes see Sass, and other times SCSS? Do you find all these acronyms and file extensions confusing, when all you want to do is make your title text a nice shade of <span style="color: white; background-color: maroon;">maroon</span>?

In this post, I’ll define some of the common abbreviations associated with Sass and explain the difference between Sass and SCSS.

## CSS

CSS stands for Cascading Style Sheets. Files which contain CSS styles and have the ".css" extension are called stylesheets. (Although you can also define styles inline or within `<style>` tags in a HTML document).

The [cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) describes how the styles are applied when more than one rule matches an element. The cascade is the fundamental idea of CSS.

## CSS Preprocessors

(Not an acronym but important to understand.) A preprocessor converts one type of data into another. A CSS preprocessor generates CSS from special syntax. Some of the more well-known preprocessors are including Sass, Less, Stylus and PostCSS. Preprocessors provide features that normal CSS doesn’t, such as loops, file imports, mixins and functions. These features make styles more pleasant to write.

Files written in a preprocessor syntax, like Sass files or Less files, cannot be directly consumed by the browser. They have to be run through a compiler and be converted into CSS before being added to a website.

## Sass

<abbr="Syntactically Awesome StyleSheets">Sass</abbr> stands for Syntactically Awesome StyleSheets. There are **two** syntaxes available for Sass, each of which require different file extensions.

### .sass

The original version of the syntax is characterised by its use of indentation and newlines and no semi-colons. It's written in files with the ".sass" file extension.

Syntax example:

```sass
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: $font-stack
  color: $primary-color
```

Example taken from [https://sass-lang.com/guide](https://sass-lang.com/guide).

### .scss

<abbr title="Sassy CSS">SCSS</abbr> stands for Sassy CSS. Files containing this syntax use the `.scss` file extension.

SCSS looks very similar to CSS: the first step to converting a CSS file to SCSS is just to change the file extension: all CSS is valid SCSS syntax.

Syntax example:

```sass
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: $font-stack;
  color: $primary-color;
}
```

### Sass or SCSS

No matter which syntax you use, developers tend to use the word “sass”, which can be confusing. Certainly in my experience, I’ve only encountered SCSS syntax and files, and always referred to it as "sass".

## Bonus definition: Less

[Less](http://lesscss.org/) is also an acronym, which stands for <abbr title="Leaner CSS">Leaner CSS</abbr>. It's written in files with the `.less` file extension. Whereas Sass is built in Ruby, Less is built in JavaScript.

Syntax example:

```sass
@font-stack: Helvetica, sans-serif;
@primary-color: #333;

body {
  font: @font-stack;
  color: @primary-color;
}
```

## Which preprocessor to use?

The answer to this question would require another blog post. Some people may argue whether you need a preprocessor in 2018, now that it's possible to use variables in vanilla CSS.

I will leave you to make your own mind up with the help of the "Front-End Tooling Survey 2018" results. 65.39% of respondents answered "Sass" when asked "[What is your CSS Processing tool of choice?](https://ashleynolan.co.uk/blog/frontend-tooling-survey-2018-results#css-processors)", with the remaining results split between "None", "Stylus", "Less", "PostCSS" and "Other". Although the results don’t specify which Sass syntax, Sass is clearly more popular in these results.
