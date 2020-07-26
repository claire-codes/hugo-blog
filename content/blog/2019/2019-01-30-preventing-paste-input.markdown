---
title: "How to prevent pasting into input fields"
date: 2019-01-30T11:39:54Z
summary: A short JavaScript snippet for stopping users from pasting into form fields.
categories:
- javascript
- html
---

In some forms, the “Confirm email address” or “Confirm password” fields don't allow users to paste text into them. The idea is to make users type their email or password twice to help catch any typos they might have made in those important "Email" and "Password" values.

How is this functionality achieved? How can you stop your users from pasting content into a HTML input field?

We can use JavaScript to target an input field’s [paste event](https://developer.mozilla.org/en-US/docs/Web/Events/paste) and change how it works:

```html
<input type="text" id="no-paste" />

<script>
  const pasteBox = document.getElementById("no-paste");
  pasteBox.onpaste = e => {
    e.preventDefault();
    return false;
  };
</script>
```

This code cancels the default behaviour of the paste event (i.e. pasting the contents of the clipboard into the input element). When the user tries to paste content into the field, using either a keyboard shortcut or [context menu](https://en.wikipedia.org/wiki/Context_menu), nothing will happen.

Try it out in the CodePen example below:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="claireparker" data-slug-hash="XOmwqy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Preventing pasting into an input field">
  <span>See the Pen <a href="https://codepen.io/claireparker/pen/XOmwqy/">
  Preventing pasting into an input field</a> by Claire (<a href="https://codepen.io/claireparker">@claireparker</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

There are also events for the [cut](https://developer.mozilla.org/en-US/docs/Web/Events/cut) and [copy](https://developer.mozilla.org/en-US/docs/Web/Events/copy) action.

There is good support for the paste event in modern browsers. These events are part of the [Clipboard API](https://www.w3.org/TR/clipboard-apis/#the-paste-action). The Clipboard API also includes accessing the contents of the clipboard, which has varying levels of support. See the [caniuse table for the Clipboard API](https://caniuse.com/#feat=clipboard) for more information.

## Should you disable the paste function?

Now you know how to change the expected behaviour of the paste event in your webpage, the question is whether you should. The answers to this [StackOverflow question about the paste event] (https://stackoverflow.com/questions/1226574/disable-pasting-text-into-html-form/1226721) discourage developers from tampering with default browser behaviour. The posters argue against changing expected browser behaviour because it will confuse users. Additionally, if the user decides to copy and paste data into a form field at the risk of it containing typos, then we should allow them to do this.

Each website is different, so there is no definitive answer. It's a good idea to consider questions like this when building your site in order to provide the best experience for your users.