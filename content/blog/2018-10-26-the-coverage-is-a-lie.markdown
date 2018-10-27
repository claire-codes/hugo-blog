---
title: "The Coverage is a Lie"
date: 2018-10-26T21:39:10+01:00
summary: When test coverage can't be trusted.
categories:
- blogtober
- testing
---

This is something a colleague said to me today and made me laugh. He does have a point though. Just because you have high test coverage, does this mean your codebase is covered by test assertions and safe from bugs? Probably not.

## What is test coverage?

[Wikipedia](https://en.wikipedia.org/wiki/Code_coverage) says it pretty well:

> Test coverage is a measure used to describe the degree to which the source code of a program is executed when a particular test suite runs. A program with high test coverage, measured as a percentage, has had more of its source code executed during testing, which suggests it has a lower chance of containing undetected software bugs compared to a program with low test coverage.

_Note_: the phrases code coverage and test coverage are used interchangably.

See that word "suggests" at the end though? That's what I'm talking about!

## How can you fool test coverage tools?

### Happy Path only

All you need to do to increase the code coverage for a codebase is to write a test that executes a function once. So if you write a happy path test (one that uses perfect input and conditions) then the function is covered in the coverage report. But what about bad input? Have you even written code for these cases? Coverage doesn't encourage you to do so, it only requires you to test the exisitng code.

### `/* instanbul ingore next */`

`/* instanbul ingore next */` is syntax that tells the [Instanbul](https://github.com/gotwarlost/istanbul) code coverage tool to ignore the "next thing" in the source code, i.e. the next function, statement or condition. There will be an equivalent command in your code coverage library of choice.

Sometimes it's necessary to not include code in test coverage: it can be difficult to test (not worth the effort), or very trivial. But sometimes this can be misused to ignore otherwise important code. When this command is used, code is disregarded in the final numbers of the coverage report and doesn't bring the numbers down.

### Don't write a test

Depending on your code coverage library, if you don't write tests for a particular file, then it is ignored in the final coverage percentage and doesn't affect your numbers. If it doesn't have a test, it can't be covered! What I'm saying is, if you don't write any tests, then the coverage tool reports you have 100% test coverage because 0 out of 0 lines are covered by your tests!

### So should I use a code coverage tool?

Yes, they can be very useful in seeing which areas of the codebase aren't covered by tests and so where you need to improve your tests. They give a good indication in how many tests are in the codebase. However, they don't measure how good the tests are. I'm not sure if there is a library that can do that at the moment, and this is up to the individual developer to do this. Code coverage can't make you write code that considers edge cases and bad input: this is something you have to do yourself!
