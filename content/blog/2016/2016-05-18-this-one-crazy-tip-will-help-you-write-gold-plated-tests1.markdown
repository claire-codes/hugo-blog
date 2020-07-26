---
layout: post
title: This one crazy tip will help you write gold-plated tests!!!1!
summary: Seriously, they'll poop rainbows.
date: 2016-05-18 20:17:36
comments: true
published: true
categories:
- javascript
- testing
---

Here is my top tip to help you write better tests, be they unit tests, integration tests, functional tests or unicorn tests:

Always write a failing test first.

There are three steps to TDD. You may have heard of the 🚦 traffic lights*:

* ❤️ __Red__: write a failing test
* 💛 __Amber__: make the test pass
* 💚 __Green__: improve the code you've just written, refactor

Or maybe red test -> green test -> refactor**. I believe that this first step, to have red test, is important it you're following Test-Driven-Development and writing tests first, or whether you're writing tests after you've already implemented your feature.

The only way you can truly be sure that your code works is to use it to fix a broken test.

When you're getting cocky/confident in your testing ability, you may start writing one or more tests, run them against your code and watch them go green first time. This lulls you into a false sense of achievement, for all you know your code could be returning nulls and failing silently. Instead, you need to have a failing test first _and then_ fix it and commit it.

I need an example to convince you.

<!-- Why do I recommend this? You might be writing the equivalent of `expect(true).toEqual(true)` in your tests, pointless. You might not have tested the feature you think you have. You might have written a lovely test case that doesn't do anything, or doesn't behave as you expect, but because your tests are green you think everything is OK. It's important while you're writing your tests to break them to double check everything is working as you expect. -->

In summary, break your tests! Then fix them and commit them.

<sup>\* I have no reference for this, maybe I made it up.</sup>
<sup>\** A red test is a failing one and a green test is a passing one, because that's the colours used by test runners to indicate this _everywhere_.</sup>