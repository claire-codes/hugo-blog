---
title: "Displaying Column Card Counts in Trello"
date: 2018-10-04T22:32:00+01:00
summary: Exploring different methods to display a the total number of cards in a Trello board list
categories:
- blogtober
- longread
---

I'm currently enjoying using Trello to manage daily tasks and jobs. [Trello](https://trello.com/) is a free web application for project management. A project is represented by a board, which contains columns (e.g. "To-do", "Doing", "Done") and cards representing tasks, that can be moved between columns. It can be used to organise pretty much anything. I'm using a board for managing blog post ideas and finding it very helpful. But I’m missing one feature: I’d like to know how many cards are in each list.

This is how my board looks with no numbers:

![Trello board, columns and lists with no count](/images/trello-no-count.png)

I started looking at how I could do this and fell into my usual rabbit-hole. Here are some different methods I discovered for adding a card count at the top of each column.

## Use the card filter

[As suggested by Trello themselves in this tweet](https://twitter.com/trello/status/601037166462898177?lang=en).

Click `Show Menu` > `Filter Cards`, then type `*` as the search term. This searches for everything, and displays the card totals at the top of each column. You can close the menu to continue to see the totals as long as you don't remove filtering. The totals will update if you move the cards between columns.

![Trello board, columns and lists with filter menu](/images/trello-filter.png)

## Be a hacker

The card count information we've displayed previously is already on the page, it’s just hidden until the filter is activated. After a little bit of investigation in the Dev Tools console, I discovered that Trello has the jQuery library loaded on the page with the `$` dollar syntax, and helpfully uses human-friendly classnames. This means we can type one line of code into the browser's console and hit return to show the count:

```js
$('.js-num-cards').show()
```

We could also use vanilla JavaScript to achieve this. I've tried something a little different though, and removed the classname that is applying the `display: none` CSS:

```js
document.querySelectorAll('.js-num-cards').forEach(function(list) {
    list.classList.remove('hide');
})
```

![Trello board, columns and lists with count](/images/trello-jquery.png)

## Make a bookmarklet

It’s a little tedious having to open the Dev Tools to execute this. We could make a bookmarklet instead to execute this code for us!

To learn more about bookmarklets, [this page is a useful place to start](https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1). Very simply, we:

- create a bookmark as usual in the browser
- instead of a URL, begin with `javascript:` so the browser knows it's about to execute some code
- wrap the code in an IIFE block so it's immediately invoked
- put the code you want to run in the IIFE block and save the bookmark

When you click the bookmark from your bookmarks bar, the code is executed in the context of the open page. So to use the vanilla JavaScript example from above, we would use the following as the code:

```js
javascript:(function(){document.querySelectorAll('.js-num-cards').forEach(function(list) { list.classList.remove('hide'); })})();
```

The jQuery version will work too!

The card count will update if you move cards between columns. However, if you refresh the page, the numbers will vanish unless you click the bookmarklet again.

## Taking it further with browser extensions

Isn’t clicking the bookmarklet every time you navigate to the page annoying? We could create a browser extension to run this code every time we’re on a "trello.com" webpage. Extensions are browser specific so you’ll need to develop for one at a time. I leave this as an exercise to the interested reader to complete 🙃

What do you know! There’s already a Chrome extension that does this! (Go to the Chrome store and search for "Trello card counter" to see the many results.) But where’s the fun in using someone else’s code when you can do it yourself?

## Conclusion

Bookmarklets are incredibly useful and in my opinion underappreciated.

Webpages can be manipulated by users to behave in ways not originally intended by their authors. This short exploration shows how to tweak web experiences to suit personal preferences with a some web development knowledge, or google-foo.

_Note_: This has been tested in Chrome 69 only.
