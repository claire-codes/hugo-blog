---
title: "Missing Emoji"
date: 2018-10-24T22:30:05+01:00
summary: Why an emoji displays as missing and a few methods you can use as a developer to avoid it happening in your app.
categories:
- blogtober
- emoji
---

It's happened to all of us: you're reading an article online or a message from a friend on your phone, and where the author intended to display an emoji, all you see is an empty rectangle. This is your device's way of saying it doesn't have support for that emoji.

## Why is an emoji missing on my operating system?

This is very complex (and interesting!) subject so I'm going to try and give a high-level overview.

To answer this we have to briefly cover what an emoji is. Unicode is a collection of characters and is theoretically supposed to contain all characters required on the web: not just the Latin alphabet, but punctuation, other languages, any symbol you can think of. From [the answer to what is Unicode on the Unicode Consortium's website](http://unicode.org/standard/WhatIsUnicode.html):

> Unicode provides a unique number for every character, no matter what the platform, no matter what the program, no matter what the language.

This number is called a code point and it's up to vendors to interpret this appropriately. The visual representation is provided by a glyph in a font. For example, the letter 'a' has a Unicode value of `U+0041`. The computer sees this code point and finds the corresponding glyph for this and displays the `a` on screen.

The same thing happens for emoji. However, emoji are less well-supported than the Latin alphabet, especially newer versions. Much like CSS font-families, a computer operating system has a list of fallback fonts that it can try if the first one doesn't have support for the emoji code point. Ultimately, if it doesn't have a glyph for that code point, it will display an icon to indicate that the symbol isn't available.

## How can we avoid displaying missing emoji as web developers?

- Choose a web font that contains emoji for our intended characters
    - use something like [Twemoji](https://github.com/twitter/twemoji)
- Use safer, older emoji that more users are likely to have devices that support it
- Consider whether you could use another visual representation to communicate your idea:
    - an emoticon :-)
    - an SVG icon
    - an HTML entity like `&larr;` &larr;
    - an image
- Avoid using emoji in your content

Another thing to bear in mind when using emoji is that vendors can choose to represent them very differently. What may appear OK in context viewed on MacOS may look different on a Windows machine or Samsung phone.

To learn more about emoji and how they're rendered, [this Smashing Magazine article](https://www.smashingmagazine.com/2016/11/character-sets-encoding-emoji/) is very comprehensive (if a little long-winded).
