---
layout: post
title: x reasons to write tests
date: 2016-03-24 20:19:08
comments: false
published: false
categories:
- tdd
---

# x reasons to write tests

Why you should write unit tests for your JavaScript code - although this applies to any language. These are short and sweet reasons off the top of my head, there are many more reasons to write tests, and particulary to practice Test-Driven-Development. (lmgtfy)

1. Document code (better than docs)
2. Help you and other people understand the code
3. Force you to write better code (SRP, modular)

A function that's doing multiple tasks is a nightmare to test - to make it easier to test, break it down into smaller functions that each have a single responsibilty. Guess what the side-effect of this is? Your code is now easy to understand.

4. Regression testing
5. Help you design the API
