---
title: "Drying Out CSS Selectors with Sass Maps"
date: 2018-04-16T22:31:21+01:00
summary: How to reduce repetition in CSS by using some advanced Sass features
categories:
- css
- sass
---

## Repetitive selectors

I recently wrote some Sass that looked like this:

```sass
$color-apple: green;
$color-lemon: yellow;
$color-strawberry: red;


.apple-button {
  background-color: $color-apple;
}

.strawberry-button {
  background-color: $color-strawberry;
}

.lemon-button {
  background-color: $color-lemon;
}

// This compiles to:

// .apple-button {
//   background-color: green;
// }
//
// .strawberry-button {
//   background-color: red;
// }
//
// .lemon-button {
//   background-color: yellow;
// }
```

At first glance, it looks OK.

But this code is pretty repetitive. The structure of each selector is the same, except for one word in the name and the colour value.

This pattern doesn't scale efficiently. What if I want to add a `blueberry-button` and a `grape-button`? I would write more near-enough identical selectors. What if I want to apply the colour to the font instead of the background instead? I'd have to change the CSS property on multiple lines. This is inefficient!

How could we rewrite this code to be dryer? That is, to follow the [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) of _don't repeat yourself_? Like this:

## Dry selectors

```sass
$fruit-map: (
  apple: green,
  lemon: yellow,
  strawberry: red
);

@each $fruit, $fruit-colour in $fruit-map {
  .#{$fruit}-button--dry {
    background-color: #{$fruit-colour};
  }
}

// This compiles to:

// .apple-button--dry {
//   background-color: green;
// }
//
// .lemon-button--dry {
//   background-color: yellow;
// }
//
// .strawberry-button--dry {
//   background-color: red;
// }
```

A [Sass map](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) is a collection of key-value pairs, much like an object in JavaScript. In this example, `$fruit-map` is a map. The fruit name is the key, and the colour is the value.

We then use the [Sass each directive](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#each-directive) to iterate over each pair. We assign the key and value to variables, which we can use to construct our selector using [variable interpolation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_) (i.e. this syntax `#{$foobar}`).

This code scales well. If we want to generate a new selector, we only need to add a new key-value pair to the map, e.g. "blueberry: blue". If we want to assign the colour to the font instead of the background, we only need to change the CSS property on one line instead of many. Great!

## Multiple values

But wait, we can take this further! Now each of the fruit-themed buttons has a different border style. How can we adapt our map to contain multiple values for each key? Try this:

```sass
$fruitier-map: (
  apple: (green, 1px solid black),
  lemon: (yellow, 2px dashed grey),
  strawberry: (red, 3px dotted orange)
);

@each $fruit, $fruit-colours in $fruitier-map {
  $bg-colour: nth($fruit-colours, 1);
  $border-style: nth($fruit-colours, 2);

  .#{$fruit}-button--fruitier {
    background-color: #{$bg-colour};
    border: #{$border-style};
  }
}

// This compiles to:

// .apple-button--fruitier {
//   background-color: green;
//   border: 1px solid black;
// }
//
// .lemon-button--fruitier {
//   background-color: yellow;
//   border: 2px dashed grey;
// }
//
// .strawberry-button--fruitier {
//   background-color: red;
//   border: 3px dotted orange;
// }
```

- Convert the value for each key to a map.
- Access each map element using the [nth function](http://sass-lang.com/documentation/Sass/Script/Functions.html#nth-instance_method) and assign them to variables.
- Use these variables to create our dynamic CSS selector with interpolation.

The result is Sass that is easy to extend and maintain and also dry.

You may not use Sass functions and directives every day, but when you do the comprehensive [Sass documentation](http://sass-lang.com/documentation/) will have you covered.
