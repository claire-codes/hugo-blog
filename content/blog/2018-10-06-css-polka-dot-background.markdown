---
title: "CSS Polka Dot Background"
date: 2018-10-10T23:14:56+01:00
summary: Explaining how to create a polka dot effect background pattern in CSS.
categories:
- blogtober
- css
---

## TL;DR

This is what we'll be creating:

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

This is the CSS required to achieve this effect:

```css
body {
  background-image: radial-gradient(#212121 20%, transparent 20%),
      radial-gradient(#fafafa 20%, transparent 20%);
  background-color: #e53935;
  background-position: 0 0, 50px 50px;
  background-size: 100px 100px;
}
```

You can play around with this example by visiting [the CodePen example](https://codepen.io/claireparker/pen/oMmPPZ).

In the rest of the post I'll break down the CSS and explain how it works.

### Make a circle

Let's start with just one circle.

Use a radial-gradient to create a circle pattern by using two colours with two identical colour-stop values. The colour-stops create the sharp border between the two colours. A colour-stop can be a percentage between 0% and 100%, where 0 is the centre of the gradient and 100% is the edge.

Set a height and width to define the circle and make it display nicely - if they aren't even then the circle will appear warped.

```css
body {
    background-image: radial-gradient(#212121 20%, #e53935 20%);
    height: 100px;
    width: 100px;
}
```

<style>
.polka-space-two {
  background-image: radial-gradient(#212121 20%, #e53935 20%);
  height: 100px;
  width: 100px;
}
</style>

<div class="polka-space-two"></div>

_Note_: I'm using the body tag because it's the simplest way to demonstrate in a new webpage. You may not want to apply it to the entire page and only a certain area. In that case, replace `body` with the relevant selector.

### Make the circle repeat

Position the gradient image in the top left of the background with `background-position: 0 0`. The two values represent the x and y coordinates in pixels. We can omit the `px` value because `0px` is the same as `0`.

Give the image a set size of 100px by 100px using the `background-size` property.

Set the height and width of the body container so that we can see the repeating effect of our image.

The image automatically repeats. This is because our container is larger than the image. There is another background-related property called `background-repeat`, whose initial value is `repeat`, which repeats the image along the x and y axes. If we were to change this to `no-repeat`, then we would only see one circle again.

```css
body {
  background-image: radial-gradient(#212121 20%, #e53935 20%);
  background-position: 0 0;
  background-size: 100px 100px;
  height: 200px;
  width: 100%;
}
```

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

### Add a diagonal row

We add a second radial gradient to the `background-image` property by separating them with commas.

We change the second colour of each gradient to `transparent`, and set the `background-color` of the element explicitly. This is in order to see the second gradient - otherwise it would be invisible behind the first one.

Now we have two gradients, we can have two `background-position` values, again separated by commas. By setting them to half of the `background-size`, this creates a diagonal effect with the circles.

```css
body {
  background-image: radial-gradient(#212121 20%, #e53935 20%);
  background-position: 0 0;
  background-size: 100px 100px;
  height: 200px;
  width: 100%;
}
```

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

And there you have it, a polka dot effect created in CSS. You could change the size of the circles, the colours, or even add another row at a different position to create more complex effects.

### `background` and shorthand

The `background` CSS property is shorthand for multiple `background-` prefixed properties. Other shorthands exist, for example `border`, `font` or `margin`. In this example, I've used individual properties such as `background-image` and `background-color`. This is because:

- it's easier to see what's happening in the individual properties instead of trying to work out what each value means in `background`
- when using shorthand, it's easy to accidentally overwrite other properties and cause bugs, when you don't explicitly declare properties (for this reason I always use `background-color` instead of `background`)
- when setting multiple backgrounds it's easier and not always possible to do so with the shorthand

Sometimes a shorthand can be useful, like `margin: 10px 30px 20px 5px`, but with less-common ones like `font` and `background`, I recommend using individual properties so that you can be sure of what's happening in your code.
