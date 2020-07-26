---
title: "Simple vs clever code style"
date: 2018-10-02T18:02:44+02:00
summary: "Thinking about how using common language features instead of uncommon ones makes good easier to maintain."
categories:
- blogtober
- longread
---

## "Code is written once, but is read over and over again"

> Code is written once, but is read over and over again.

Said some developer somewhere.

In my humble opinion, good code is easy to read and understand. There's lots of factors that contribute to code being readable and easy to maintain, but today I'm going to focus on the choice of idioms and patterns used.

## An example

So your code does The Thing successfully. But there's a hundred different ways to write a function that achieves the same Thing. How does your code do it?

Here's a contrived example written in JavaScript to illustrate this question. Two functions return a string depending on the value of a Boolean parameter. One uses if-statements and traditional function declaration. The other accomplishes the same thing with one-line, using [fat arrow syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) and a ternary checking for a truthy argument. (I know the fat arrow isn't _quite_ the same in terms of scope but that doesn't change the output for this example.)

Which one takes longer to understand? Which one is clearer?

```js
const greetDogLover = isDogLover => isDogLover ? 'woof' : 'miaow';

const greetCatLover = function(isCatLover) {
    if (isCatLover === true) {
        return 'miaow';
    } else {
        return 'woof';
    }
}
```

For me, the version with the explicit if-statements is simpler. The longer `greetCatLover` function spans more lines and doesn't look as elegant, but is clearer in its intention.

Why might you choose one format over the other?

- personal preference
- familiarity and experience with language features
- code style enforced by team or organisation
   - enforced manually with a written styleguide and PR review
   - automated with a linter tool like ESLint or Prettier

## Anyone for a round of code golf?

Code golf is a programming puzzle where the aim is to solve the problem using as few as characters as possible. There's an entire [Stack Exchange site](https://codegolf.stackexchange.com/) dedicated to it.

While code golf is an interesting skill to practice, it's unadvisable to play it on production-standard code, or any code that you expect to read again. Code that uses unfamiliar idioms and patterns in order to save lines or bytes is often difficult to comprehend. Developers want to spend their brain-power solving the current problem, rather than spending unnecessary time working out how the existing code works.

However, as with everything else in software development, the best solution depends entirely on your situation. Using newer or lesser-known features of a programming language can be a good thing. Discovering new concepts and using them is how we learn as developers and improve our craft.

When deciding which syntax to use, pick the solution that helps you solve your problem simply, instead of the one that makes you feel clever.

Another way to think about this, is to write code for the developer of tomorrow: that lucky person who is probably debugging your code. I will leave you with this [oft-quoted programming pearl of wisdom](https://jeremybytes.blogspot.com/2015/03/looking-for-answers-origin-of-homicidal.html):

> Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.
