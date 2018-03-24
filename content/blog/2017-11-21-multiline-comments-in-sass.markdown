---
layout: post
title: "Multiline comments in Sass"
summary: Digging deeper into the "no-css-comments" linter rule and why single-line comments can be preferable to multiline comments in Sass files.
date: 2017-11-21 21:35:19
comments: true
published: true
categories:
- css
- sass
---

_Note_: These rules are specifically for [sass-lint](https://github.com/sasstools/sass-lint), because that's my linter of choice. However, equivalent rules will (probably) exist for other linters such as styelint or csslint. (provide links)

If you lint your Sass code using an automated tool like sass-lint, you might have encountered the rule: `no-css-comments`. Depending on the severity level in your linter config, this will trigger an error or a warning when it encounters comments like this `/* I am a CSS style comment */`. The first time I saw this rule, I was confused - why shouldn't I be using comments like this:

```css
/**************
 *  Example
 **************/
```

[The documentation for the `no-css-comments` rule](https://github.com/sasstools/sass-lint/blob/develop/docs/rules/no-css-comments.md) is unbiased and simply explains how to enforce the rule, rather than why it's a good idea to use. This is expected, as it’s not the linter’s job to decide how your code should be laid out, only to help you enforce consistent style. And so I fell down another rabbit hole one evening, investigating the pros and cons of multiline CSS comments.

## A quick reminder of comment types in CSS and Sass

### 1 Multiline comments

There is only one type of valid comment in vanilla CSS:

```css
/*
 You can fit
 carriage returns between the opening
 and closing comment tags
*/

/*****
 ** The extra asterisks are purely decorative here
 ****/

/* Comments can also just span one line too */

.my-selector {
    font-size: 28px; /* (1) */
}
```

This is referred to as a multiline comment because it can span multiple lines before being closed.

### 2 Single-line comments

If you use Sass, you can also use single-line comments like this:

```sass
// A comment on one line
.my-selector {
    // they can appear anywhere
    font-size: 28px; // even on the same line after code
}
```

This comment style is invalid in CSS.

## Why are multiline comments not recommended?

* They can accidentally close other comments if incorrectly nested. For example:

```css
/*
 The beginning of a comment
/* I'm unexpectedly closing this comment */
The end of a comment - this code will error
*/
```

And also:

```css
/* Just a single-line comment /* cuckoo */ oh no */
```

These examples will cause errors in both CSS and Sass.

* Because they can [break error messages](https://css-tricks.com/sass-style-guide/#comment-450812)

## Why use single-line comments?

* It's simpler and sometimes quicker to comment or uncomment single lines using this syntax, as your change only affects one line. If you have many lines to comment out, then your editor shortcut for commenting (normally `Cmd + /`) should apply single-line comments even if you have many lines selected.

* They aren't output in compiled code. Comments like `/***** Card Component *****/`, or `/* IE11 fix */` should only be seen by other developers in the source code.

## However!

The Sass guidelines do recommend using multiline comments, mainly for DocBlock type information at the top of a section. See the [SASS guidelines documemtation](https://sass-guidelin.es/#commenting).

## Workaround

If you’re willing to type a few extra keystrokes you can still have a good-looking (IMHO), stand-out title block without multiline comments:

```sass
//////////////////////////////
// A nice title
//////////////////////////////

//* A faux multiline comment *//
```

## Conclusion

Personally, I've decided to enforce this rule with a setting of 2 in my `sass-lint.yml` config file:

```yaml
rules:
  no-css-comments: 2
```

Now my linter forces me to use single-line style comments in my Sass files. This means I can protect myself from preventable bugs caused by accidental comment nesting, and I'm happy now that I've found an alternative layout for header blocks using single-line comments.

As with everything in programming, there is always more than one solution (and opinion!). It’s up to you to decide whether this rule makes sense within your project.
