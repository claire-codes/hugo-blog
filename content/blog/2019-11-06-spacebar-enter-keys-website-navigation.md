---
title: "The Roles of the Spacebar and Enter key when navigating a website with the keyboard"
date: 2019-11-06T22:54:12Z
summary: "When navigating a website using the keyboard, what functions can you expect the spacebar and enter key to perform?"
categories:
- a11y
---

Have you heard, that not everyone uses a mouse to navigate the world wide web? It's something to bear in mind when you're building a new custom component. I often forget whether to use the spacebar or enter key when interacting with an element, and don't know which one to use, so here's a quick reminder.

| Key | Expected functions |
| --- | --- |
| Spacebar | <ul><li>activate buttons</li><li>check/uncheck checkbox</li><li>scroll down the page</li><li>expand a dropdown menu</li></ul> |
| Enter | <ul><li>activate buttons</li><li>open links</li><li>open menus</li></ul> |

Or the key bit I always forget:

| Element to access | Key |
| --- | --- |
| Link | <ul><li>Enter</li></ul> |
| Button | <ul><li>Enter</li><li>Spacebar</li></ul> |

## Will this always work?

This isn't always going to work, because that thing that looks like a link is actually a span with an underline applied to it and the developer hasn't attached replacement key events or aria roles to it. But this what to expect in a perfect, fully accessible world wide web.

Reference: [Keyboard Accessibility](https://webaim.org/techniques/keyboard/) on WebAIM