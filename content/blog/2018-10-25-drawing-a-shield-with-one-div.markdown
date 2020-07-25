---
title: "Drawing a Shield with One Div"
date: 2018-10-25T16:57:13+01:00
summary: How to create a shield illustration with one HTML div and lots of CSS.
categories:
- blogtober
- css
---

Have you ever seen [A Single Div](https://a.singlediv.com/) by Lynn Fisher? The following example is in no way as impressive but follows the same concept: drawing an item using CSS and only one HTML div.

I was inspired by seeing [this site](https://9elements.github.io/fancy-border-radius/) explaining the concept of using multiple values in the `border-radius` value. I already knew you could do this, but looking at the shape reminded me of a shield, and things escalated from there.

Final result and CodePen:

<p data-height="300" data-theme-id="0" data-slug-hash="qJLaLN" data-default-tab="css,result" data-user="claireparker" data-pen-title="Shield" class="codepen">See the Pen <a href="https://codepen.io/claireparker/pen/qJLaLN/">Shield</a> by Claire (<a href="https://codepen.io/claireparker">@claireparker</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

In the rest of this post, I'll explain the CSS I used to create this image.

_Note_: I'm using [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) to set colours throughout my examples.

## Draw the shield shape

First create a single div with a class name of 'shield' and set a height and width. Apply a border. Then the fun begins: use border-radius to create the shape. Read [this article](https://medium.com/9elements/css-border-radius-can-do-that-d46df1d013ae) by the creators of the tool I linked above to learn more about how the slash values create this shape.

```css
:root {
  --shield-border-color: #111;
}

.shield {
  height: 200px;
  width: 200px;
  border: 10px solid var(--shield-border-color);
  border-radius: 50% 50% 50% 50% / 12% 12% 88% 88%;
}
```

![Shield outline](/images/shield/shield-shape.png)

## Create the horizontal line of the cross

Use a linear-gradient to create a horizontal line across the middle of the cross shape. At each intersection of the transparent colour and blue cross colour, use an identical percentage for the color-stop value. This creates a hard line between the colours instead of the fading gradient. I've defined the width of the line as 10% of the overall shield. By starting at 35%, I've positioned the cross at a what I think is a pleasing distance partway down the shield instead of exactly halfway.

```css
:root {
  --cross-color: #110078;
  --shield-border-color: #111;
}

.shield {
  height: 200px;
  width: 200px;
  border: 10px solid var(--shield-border-color);
  border-radius: 50% 50% 50% 50% / 12% 12% 88% 88%;
  background-image: linear-gradient(
      transparent 35%,
      var(--cross-color) 35%,
      var(--cross-color) 45%,
      transparent 45%
    );
}
```

![Shield with one line](/images/shield/one-line-shield.png)

## Create the vertical line of the cross

We can apply multiple gradients to the `background-image` property by comma-separating them. For this second gradient, do something similar but add `90deg` as the first argument. This rotates the gradient. Change the percentages of the color-stops so that the line is exactly halfway along the shield area.

```css
:root {
  --cross-color: #110078;
  --shield-border-color: #111;
}

.shield {
  height: 200px;
  width: 200px;
  border: 10px solid var(--shield-border-color);
  border-radius: 50% 50% 50% 50% / 12% 12% 88% 88%;
  background-image: linear-gradient(
      transparent 35%,
      var(--cross-color) 35%,
      var(--cross-color) 45%,
      transparent 45%
    ),
    linear-gradient(
      90deg,
      transparent 45%,
      var(--cross-color) 45%,
      var(--cross-color) 55%,
      transparent 55%
    );
}
```

![Shield with cross design](/images/shield/both-lines-shield.png)

## Add the background

Finally, add a third gradient for the background. This could also be achieved by adding a plain `background-color`, but I wanted to use a gradient to give the shield a little depth.

```css
:root {
  --cross-color: #110078;
  --shield-border-color: #111;
  --background-color: #ff5022;
  --darker-background-color: #bf360c;
}

.shield {
  height: 200px;
  width: 200px;
  border: 10px solid var(--shield-border-color);
  border-radius: 50% 50% 50% 50% / 12% 12% 88% 88%;
  background-image: linear-gradient(
      transparent 35%,
      var(--cross-color) 35%,
      var(--cross-color) 45%,
      transparent 45%
    ),
    linear-gradient(
      90deg,
      transparent 45%,
      var(--cross-color) 45%,
      var(--cross-color) 55%,
      transparent 55%
    ),
    linear-gradient(
      90deg,
      var(--background-color) 50%,
      var(--darker-background-color) 100%
    );
}
```

![Completed shield design](/images/shield/complete-shield.png)

Use your new shield to protect you from bugs in your code!
