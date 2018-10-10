---
title: "Displaying Column Card Counts in Trello"
date: 2018-10-04T22:32:00+01:00
summary: Exploring different methods to display a the total number of cards in a Trello board list
categories:
- blogtober
- javacript
---

My current favourite tool for managing daily tasks and jobs is Trello. [Trello](https://trello.com/) is a free web application for project management. You can use a Trello board to organise pretty much anything. I have a board for managing blog post ideas and finding it very helpful. But I’m missing one feature: I’d like to see the total number of cards in each list displayed at the top of each column.

This is how the board looks initially, with no totals:

![Trello board, columns and lists with no count](/images/trello-no-count.png)

So I started investigating how I could add this information in myself. Here are some of the different methods I discovered for displaying the column card total.

## Use the card filter

[As suggested by Trello themselves in this tweet](https://twitter.com/trello/status/601037166462898177?lang=en).

Click `Show Menu` > `Filter Cards`, then type `*` as the search term. This searches for everything, and displays the card totals at the top of each column. You can close the menu to continue to see the totals as long as you don't remove filtering. The totals will update if you move the cards between columns.

![Trello board, columns and lists with filter menu](/images/trello-filter.png)

## Be a hacker

It turns out that the card totals are already on the page, but hidden by CSS until the filter is applied. By writing some JavaScript, we should be able to make them appear. Trello uses human-friendly classnames and jQuery. By selecting the correct class, we can use the jQuery `show` function to display the hidden totals:

```js
$('.js-num-cards').show()
```

We could also use vanilla JavaScript to achieve the same thing. A different approach is to remove the classname that is applying the `display: none` CSS. This is how to do that with plain JavaScript:

```js
document.querySelectorAll('.js-num-cards').forEach(function(list) {
    list.classList.remove('hide');
})
```

![Trello board, columns and lists with count](/images/trello-jquery.png)

## Make a bookmarklet

It’s a little tedious having to open the Dev Tools to run this code each time. Instead we could use a bookmarklet to execute the code at the click of a button.

To learn more about bookmarklets, [this page is a useful place to start](https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1). My high-level overview goes like this:

- create a bookmark as usual in the browser
- instead of a URL, begin with `javascript:` so the browser knows it's about to execute some code
- use an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) block to immediately invoke the code
- wrap the code snippet from above in the IIFE block and save the bookmark

When you click the bookmark from your bookmarks bar, the code is executed in the context of the open page. So to use the vanilla JavaScript example from above, we would use the following as the code:

```js
javascript:(function(){document.querySelectorAll('.js-num-cards').forEach(function(list) { list.classList.remove('hide'); })})();
```

The jQuery version will work too!

The card count will update if you move cards between columns. However, if you refresh the page, the numbers will vanish unless you click the bookmarklet again.

## Taking it further with browser extensions

Isn’t clicking the bookmarklet every time you navigate to the page annoying? We could create a browser extension to run this code automatically every time we’re on a "trello.com" webpage. Extensions are browser specific so you’ll need to create one per broswer. I leave this as an exercise to the interested reader to complete 🙃

What do you know! There’s already a Chrome extension that does this! (Go to the Chrome store and search for "Trello card counter" to see the many results.) But where’s the fun in using someone else’s code when you can do it yourself?

## Conclusion

Users can manipulate webpages to behave differently to how their authors intended. Bookmarklets are a useful and under-appreciated way to do that.

This short exploration shows that the experience original experience of a webpage can be customised, using a some googling and web development knowledge.

_Note_: This has been tested in Chrome 69 only.
