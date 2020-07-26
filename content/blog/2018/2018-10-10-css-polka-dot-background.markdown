---
title: "CSS Polka Dot Background"
date: 2018-10-10T23:14:56+01:00
summary: Explaining how to create a polka dot effect background pattern in CSS.
categories:
- blogtober
- css
---

## TL;DR

This post explains how to produce this design using CSS:

<style>
.polka-space-one {
  background-image: radial-gradient(#212121 20%, transparent 20%), radial-gradient(#FAFAFA 20%, transparent 20%);
  background-color: #E53935;
  background-position: 0 0, 50px 50px;
  background-size: 100px 100px;
  width: 100%;
  height: 300px;
}
</style>

<div class="polka-space-one"></div>

It can be created with only a single HTML tag and these background-related CSS properties:

```css
body {
  background-image: radial-gradient(#212121 20%, transparent 20%),
      radial-gradient(#fafafa 20%, transparent 20%);
  background-color: #e53935;
  background-position: 0 0, 50px 50px;
  background-size: 100px 100px;
}
```

Below is an explanation of how this works, or you can experiment with the code directly in [this CodePen example](https://codepen.io/claireparker/pen/oMmPPZ):

<p data-height="265" data-theme-id="0" data-slug-hash="oMmPPZ" data-default-tab="css,result" data-user="claireparker" data-pen-title="CSS Polka dot background" class="codepen">See the Pen <a href="https://codepen.io/claireparker/pen/oMmPPZ/">CSS Polka dot background</a> by Claire (<a href="https://codepen.io/claireparker">@claireparker</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


### Step 1 - make a circle

Let’s begin by displaying a single circle.

Use a radial-gradient as a background-image to create a circle pattern. Supply the gradient with two colors that each have identical color-stop values. The color-stops create the sharp border between the two colors, instead of a faded gradient effect. A color-stop can be a percentage between 0% and 100%, where 0 is the centre of the gradient and 100% is the edge.

Give the container element equal height and width to make the circle display nicely. If the element isn’t a square then the circle will appear warped.

At this stage, the CSS will look like this:

```css
body {
    background-image: radial-gradient(#212121 20%, #e53935 20%);
    height: 100px;
    width: 100px;
}
```

Result:

<style>
.polka-space-two {
  background-image: radial-gradient(#212121 20%, #e53935 20%);
  height: 100px;
  width: 100px;
}
</style>

<div class="polka-space-two"></div>

_Note_: I'm using the body tag because it's the simplest tag to demonstrate the effect in a new webpage. This may not be suitable for your use-case, so replace `body` as necessary with another CSS selector - just don't forget to give it a height and width.

### Step 2 - make the circle repeat

Position the circle image in the top left of the background with the `background-position: 0 0` property. The two values represent the x and y coordinates in pixels. We can omit the `px` value, because in CSS, 0 pixels (or ems, or %, etc) is the same as saying 0.

Give the image a set size of 100px by 100px with the `background-size` property.

Set the height and width of the body container larger than the background-size so that we can see the repeating effect of our image. The CSS will now look like this:

```css
body {
  background-image: radial-gradient(#212121 20%, #e53935 20%);
  background-position: 0 0;
  background-size: 100px 100px;
  height: 200px;
  width: 100%;
}
```

Result:

<style>
.polka-space-three {
  background-image: radial-gradient(#212121 20%, #e53935 20%);
  background-position: 0 0;
  background-size: 100px 100px;
  height: 200px;
  width: 100%;
}
</style>

<div class="polka-space-three"></div>

At this point you might ask, why is the image repeating? We haven't set any properties explicitly in the CSS to do this.

There's another background-related property called `background-repeat`. The default value for this property set by the browser is `repeat`, which makes the background-image automatically repeat along both the x and y axes without us having to set it.  Since the containing element (the body tag) is now larger than the 100px by 100px circle background-image, the circle is duplicated in the remaining space.

If we wanted the circles to stop repeating, we could change the value to `background-repeat: no-repeat`.

### Step 3 - add a diagonal row

We add a second radial gradient to the `background-image` property by separating them with commas. I've given the second gradient a different colour for the circle to make it stand out.

We change the second color of each gradient to `transparent`, and set the `background-color` of the element explicitly. This is in order to see the new row of dots - otherwise it would be hidden behind the first one.

Now we have two gradients, we can give them each different `background-position` values, again separated by commas. By giving the new row values that are half of the background size (50px), we create the diagonal spacing effect. The final CSS will look like this:

```css
body {
  background-image: radial-gradient(#212121 20%, transparent 20%),
     radial-gradient(#fafafa 20%, transparent 20%);
  background-color: #e53935;
  background-position: 0 0, 50px 50px;
  background-size: 100px 100px;
  height: 200px;
  width: 100%;
}
```

Final result:

<style>
.polka-space-four {
  background-image: radial-gradient(#212121 20%, transparent 20%), radial-gradient(#FAFAFA 20%, transparent 20%);
  background-color: #e53935;
  background-position: 0 0, 50px 50px;
  background-size: 100px 100px;
  height: 200px;
  width: 100%;
}
</style>

<div class="polka-space-four"></div>

Voilà, polka dots in CSS. You could change the size of the circles, the colors, or even add another row at a different position to create more complex effects.

### A note on `background` and shorthand

The `background` CSS property is shorthand for multiple `background-` prefixed properties. You may have used other CSS shorthands, such as font, margin or border. In this example, I've used individual properties such as `background-image` and `background-color` instead of the shorthand. This is because:

- it's easier to see what's happening in the individual properties instead of trying to work out what each value means in `background`
- when using shorthand, it's easy to accidentally overwrite other properties and cause bugs, since you don't explicitly declare properties (for this reason I always use `background-color` instead of `background`)
- when setting multiple backgrounds it's easier and not always possible to do so with the shorthand

Sometimes a shorthand can be useful, like `margin: 10px 30px 20px 5px`, but with less-common ones like `font` and `background`, I recommend using individual properties so that you can be sure of what's happening in your code.
