---
layout: post
title: "Coding After Codecademy"
date: 2015-11-10 00:00:16 +0100
comments: true
categories:
- longread
---

Last month, I gave a lightning talk called ["Coding After Codecademy"](https://www.youtube.com/watch?v=Ofo6NvZtz3A&feature=youtu.be) which was inspired by people asking me how to improve their newly acquired web development skills, now they've completed some Codecademy/Udacity/Code School courses. They've got basic HTML, CSS and JavaScript syntax, so what are some good things to start building or learning next? I know how daunting it can be to be faced with a blank editor at that stage, so in my talk I gave some common-sense advice that I would have appreciated when I was in that position myself.

Here's some of the points I mentioned in my talk. This isn't a list of tutorials or a syllabus of concepts that you should know. (If you want that, check out this [fantastic book](https://www.gitbook.com/book/frontendmasters/front-end-handbook/details).) Instead it's some high-level guidance and words of encouragement.

## Build something & write code

It's scary leaving the comfort blanket of guided tutorials and earning badges each time you write a function, but you have to take the plunge eventually. Think of a simple app and start googling: adding search terms like 'example', 'how to' or 'tutorial' can lead you in the right direction. What's a simple app? The trusty To-Do List app is dull but great practice for standard tasks like creating, deleting and editing data and interacting with the DOM. A multiple choice quiz is another old faithful, like in this [excellent tutorial](http://javascriptissexy.com/how-to-learn-javascript-properly/).

But once you've got an idea of what you want to achieve, don't get trapped in a cycle of reading endless tutorials or textbooks or watching videos, remember to write some code! When you're following an example, start up the dev console in the broswer or open a new file and try the code out yourself so you ensure you're actively learning what you're reading about.

Don't know where to start? Break the task down into tiny steps, for example:

  * Create a HTML page that says 'Hello World' and display it in your browser.
  * Add a button to the page that says 'Click me!'.
  * Attach an event to the button, so that when you click it, it logs a message to the console.
  * Change the button event to change the text on the screen to 'Goodbye World'. And so on.

Don't forget to put your project on GitHub! You can learn about source control AND have a public record of your skills as a developer.

## Write bad code

You will have to Google everything you do at this point, but that's OK! We devs spend a lot of pur time on StackOverflow. Avoid mindlessly copying-and-pasting: at least understand what the code is doing before hitting Control+V.

When you're coding, experiment and break the code examples: what happens if you pass a string in instead of a number to that method? Become familiar with error messages and don't be scared of broken code!

## Write better code

Go over what you've written once it works and see if you can improve it. For example, can you make the variable names more semantic and descriptive? Can your comments be more helpful?

```javascript
// bad
function convert(x) {
  y = x * 2.2;
  return y;
}
// better
function kilosToPounds(kilos) {
  return kilos * 2.2;
}
```

Could you use a map or apply function instead of a for-loop? Could you make your web app load faster if you minified your resources or didn't use a CDN for that font? _Do you even need jQuery??_

If possible, get a more experienced developer to review your code to learn functional improvements and also stylistic improvements, because there is always more than one way to do it when you're writing code.

## Code efficiently

How quick can you code? This is dependent on learning the syntax (which you're already doing) and also some more practical skills.

1. Learn to type! Can you type quickly? Can you type _code_ quickly with all the special characters? Can you touch type? It's a no-brainer that being able to type well will save you time not only when coding but when using a computer in general.     
2. Choose an editor and learn to use it well: learn all the keyboard shortcuts so that you don't have to take your hands off the keyboard to accomplish your tasks.

Now you can just concentrate on the screen without looking at the keyboard or moving your hands away.

## Blog about coding

Blogging is brill. That should be a hashtag. It:

* _gives back to Open Source community_ -> someone out there will appreciate your insight, no matter how small
* _helps you learn how to write down at explaining your ideas to either technical or non-technical readers_ -> (depending on the subject) which is a hugely important, underrated skill for software developers
* _launches you into the World Wide Web_ -> obviously a great base for a portfolio or online presence

Don't think you've got anything to blog about? What about:

+ that pesky bug you've struggled over all evening and finally solved
+ that productivity technique you've just tried and how you found it
+ that IDE you're learning to use and the good/bad bits of it
+ that meet-up you went to last night
+ that tutorial/textbook/video you've just read/watched and what you thought of it

If you write tutorials then you've also got the added bonus of always knowing where to find that piece of info later on.

## Write code

And finally, the only way to get better at something is to practice. Software development isn't something you study for a couple of months and declare you're fully qualified: you need to be continually learning in order to stay up to date with the latest technologies, but that's part of why it's so fun! Just keep coding.
