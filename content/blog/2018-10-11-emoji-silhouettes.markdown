---
title: "Emoji Silhouettes"
date: 2018-10-11T21:38:16+01:00
summary: Explaining how to fill in an emoji with colour in CSS.
categories:
- blogtober
- css
---

To change the colour of text with CSS, we can simply use the `colour` CSS property. However, this doesn’t work on emoji characters. But by using the background-clip property, it's possible to fill the whole emoji shape with a colour, or gradient. This enables us to create text effects like this:

<style>
.silhouette-one {
    font-size: 24px;
    display: inline-block;
    background: -webkit-linear-gradient(to right, #ffea00, #f50057);
  background: linear-gradient(to right, #ffea00, #f50057);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<div class="silhouette-one">🐘 ☘️ ⭐️</div>

## TL;DR

The CSS required to create the silhouettes above looks like this:

```css
.silhouette-wrapper {
  font-size: 24px;
  display: inline-block;
  background: -webkit-linear-gradient(to right, #ffea00, #f50057);
  background: linear-gradient(to right, #ffea00, #f50057);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

This technique can also be applied to text to create a gradient text effect:

<div class="silhouette-one">Banana 🍌</div>

## Support

Although we're using `-webkit-` prefixed properties, this effect is widely supported in browsers and operating systems. [As of October 2018, caniuse stats for `-webkit-background-clip` are at 95.91%](https://caniuse.com/#search=-webkit-background-clip).I tested in a random selection of older browsers in BrowserStack and only found that it wouldn't work in IE11 and Firefox on Windows.

When deciding whether to add this effect, because it can be considered more decorative, and not necessarily critical to the user's web experience (unlike submitting payment details for example) then it should be OK if it doesn't display as intended on a small amount of browsers. However, this is only guidance, and every website is different.

## Choose your emoji wisely

Make sure to choose emoji with recognisable outlines when applying this effect. It’s pretty useless on all the faces since they all have the same shape and the features would be hidden. An emoji like the star is easy to identify.

Also remember to consider how emojis appear differently across different platforms. What may be recognisable as a silhouette on one platform will be a blob on another operating system, for example the roller coaster on Apple and Google:

![Comparison of roller coaster emoji icons between Apple and Google platforms](/images/rollercoaster-emoji.png)

[unicode.org give a comprehensive comparison table of emoji](https://unicode.org/emoji/charts/full-emoji-list.html) and [emojipedia](https://emojipedia.org/) provides detailed information on individual emoji.

Additionally the color or gradient is applied to whatever character your operating system shows when an emoji is unsupported, i.e. the box containing a question mark or cross.

## 🤔 But overall

Filling emoji characters with block colours and gradients can provide a fun decorative effect to your page, particularly if applied to recognisable emoji.
