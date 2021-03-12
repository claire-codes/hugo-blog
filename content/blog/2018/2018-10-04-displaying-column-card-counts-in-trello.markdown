---
title: "Displaying Column Card Counts in Trello"
date: 2018-10-04T22:32:00+01:00
summary: Exploring different methods to display a the total number of cards in a Trello board list
categories:
- blogtober
- javascript
---

*Updated March 2020 to reflect Trello's latest design*.

My current favourite tool for managing tasks is Trello. [Trello](https://trello.com/) is a free web application for project management. You can use a Trello board to organise pretty much anything, for example I have a board for managing blog post ideas. But it's missing one feature for me: I’d like to see the total number of cards in each list displayed at the top of the column.

This is how the board looks initially, with no totals:

![Trello board, columns and lists with no count](/images/trello/trello-no-count.png)

Turns out there are a few easy methods to display this information.

## 1) Use the card filter

[As suggested by Trello themselves in this tweet](https://twitter.com/trello/status/601037166462898177?lang=en).

- Click "Show Menu" in the top right of the screen
- Click "Search Cards" three options down
- Type "*" as the search term

The Search Cards feature displays the number of cards that match your query at the top of each column. The asterisk "*" searches for everything, so the number here is the total in each list. When the menu is closed, the totals continue to show as long as you don't remove filtering. The totals will update if you move the cards between columns.

![The Trello menu pop-out on the right of the screen](/images/trello/trello-menu.png)

![Trello board, columns and lists with filter menu](/images/trello/trello-filter.png)

**Tip**: this adds the filter to the URL, so if you save this as a bookmark, every time you visit this Trello board using the bookmark you will always see the column totals.

## 2) Write some code

It turns out that the card totals are already on the page, but hidden by CSS until the filter is applied. By writing some JavaScript and executing it in the page, we should be able to make them appear. Trello uses human-friendly classnames and has jQuery loaded on the page. By selecting the correct class, we can use the jQuery `show` function to display the hidden totals. Open up the Developer Console in your web browser and paste the following code, then hit Enter:

```js
$('.js-num-cards').show();
```

We could also use vanilla JavaScript to achieve the same thing. A different approach is to remove the classname that is applying the `display: none` CSS. This is how to do that with plain JavaScript:

```js
document.querySelectorAll('.js-num-cards').forEach(function(list) {
    list.classList.remove('hide');
});
```

![Trello board, columns and lists with count](/images/trello/trello-jquery.png)

## 3) Make a bookmarklet

It’s a little tedious having to open the Dev Tools to run this code each time. Instead we could use a bookmarklet to execute the code at the click of a button.

To learn more about bookmarklets, [this page is a useful place to start](https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1). An overview of the process is:

- create a bookmark as usual in the browser
- instead of a URL, begin with `javascript:` so the browser knows it's about to execute some code
- use an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) (Immediately Invoked Function Expression) block to immediately invoke the code
- wrap the code snippet from above in the IIFE block and save the bookmark

When you click the bookmark from your bookmarks bar, the code is executed in the context of the open page. So using the vanilla JavaScript example from above, the bookmarklet content would be:

```js
javascript:(function(){document.querySelectorAll('.js-num-cards').forEach(function(list) { list.classList.remove('hide'); })})();
```

The jQuery version will work too!

The card count will update if you move cards between columns. However, if you refresh the page, the numbers will vanish unless you click the bookmarklet again.

## Taking it further with browser extensions

There's probably a browser extension for this. But where’s the fun in using someone else’s code when you can do it yourself?
