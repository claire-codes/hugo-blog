---
title: "The Coverage is a Lie"
date: 2018-10-26T21:39:10+01:00
summary: When test coverage can't be trusted.
categories:
  - blogtober
  - testing
---

This is something a colleague said today and made me laugh. He does have a point though. Just because you have high test coverage, does this mean your codebase is covered by test assertions and safe from bugs? Probably not.

## What is test coverage?

[Wikipedia](https://en.wikipedia.org/wiki/Code_coverage) explains it pretty well:

> Test coverage is a measure used to describe the degree to which the source code of a program is executed when a particular test suite runs. A program with high test coverage, measured as a percentage, has had more of its source code executed during testing, which suggests it has a lower chance of containing undetected software bugs compared to a program with low test coverage.

_Note_: the phrases "code coverage" and "test coverage" are used interchangeably.

See that word "suggests" in the definition though? That's what I mean! There are several ways to game code coverage stats.

## How can you fool test coverage tools?

### Happy Path only

All you need to do to achieve code coverage for a function is to write a test that executes it once. So if you write a happy path test (one that uses perfect input and conditions) then the function is covered in the coverage report and the overall coverage percentage goes up. But what about bad input? Will your code handle these cases gracefully or will they cause your app to crash? To have a strong test suite you should write tests for all types of input. However, coverage reports don't encourage you to do so.

### `/* istanbul ignore next */`

`/* istanbul ignore next */` is syntax that tells the [Istanbul](https://github.com/gotwarlost/istanbul) code coverage tool to ignore the "next thing" in the source code, i.e. the next function, statement or condition. There will be an equivalent command in your code coverage library of choice.

Sometimes it's necessary to not include code in test coverage: it can be difficult to test (not worth the effort), or very trivial. But sometimes this can be misused to ignore otherwise important code. When this command is used, code is ignored in the final numbers of the coverage report and doesn't bring the stats down, giving you false confidence that all the code is covered.

### Don't write a test

Depending on your code coverage library, if you don't write tests for a particular file, then it is ignored in the final coverage percentage and doesn't affect your numbers. If it doesn't have a test, it can't be covered! What I mean is, if you don't write any tests at all, then the coverage tool reports you have 100% test coverage because 0 out of 0 lines are covered by your tests!

### So should I use a code coverage tool?

Yes, they can be useful in seeing which areas of the codebase aren't covered by tests, and therefore where you need to improve your tests. They give a good indication of how many tests are in the codebase. However, they don't measure how good or robust the tests are. I'm not sure if there is a library that can do that at the moment. Code coverage can't make you write code that considers edge cases and bad input: this is something you have to do yourself as a conscientious developer.

Don't forget that the tests covered by test coverage are often unit tests. Unit tests are necessary in a healthy codebase, but are complemented by other type of tests. Do you have automated integration tests? Manual tests? Browser compatibility tests (for your web app)? Unit tests and code coverage are only a facet of testing and shouldn't be relied on as the only indicator of how well tested your codebase is.

A code coverage report is a useful indicator in how healthy your test suite is, but should not be used as the only metric of how good your tests are.
