---
title: "Font-face and Styled Components"
date: 2021-02-01T14:01:55Z
summary: "A method to add a font using font-face to a React app using styled-components."
categories:
- javascript
- css
---

A method to add a font using font-face to a React app using styled-components.

Adding a Google font to your project using a `<link>` tag is quick and easy, but you may want to self-host these files instead, perhaps for performance reasons. Or maybe your project uses a non-Google font! How can you add font files with `@font-face` to a project that uses styled components?

The first step is to obtain your font files. You may already have them, or you can use a tool like [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/fonts) to download the font files for Google web fonts. It can be difficult to decide which file formats you need, so use this very helpful [CSS Tricks article](https://css-tricks.com/snippets/css/using-font-face/) to help. I'm going to use the woff and woff2 formats of 'Roboto Condensed' for this example.

Now you have your fonts, place them in your app, for example in a folder called `src/fonts`.

Next create a [global style](https://scalablecss.com/styled-components-global-styles/) using styled-components. We'll call this file `fontStyles.js` and place it in the `src/` file of our React app. The global style contains the font-face declaration and looks something like this:

```js
import { createGlobalStyle } from "styled-components";
import RobotoWoff from "./fonts/roboto-condensed-v19-latin-regular.woff";
import RobotoWoff2 from "./fonts/roboto-condensed-v19-latin-regular.woff2";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto Condensed';
  src: url(${RobotoWoff2}) format('woff2'),
       url(${RobotoWoff}) format('woff');
}
`;

export default FontStyles;
```

Note that the import variable for the font can be called anything you like - it doesn't have to match the display name of the font.

Apply this GlobalStyle to your app. If you're using create-react-app as a project starter, then this goes in `index.js`:

```js
/* ... other imports ... */
import FontStyles from "./fontStyles";

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

Now we can declare the font family wherever needed. You could do this back in `fontStyles.js`, or perhaps in another GlobalStyle component, for example:

```js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Roboto Condensed', sans-serif;
}
`;

export default GlobalStyle;
```

If you're using create-react-app, your homepage should look like this:

![Create-react-app homepage using Roboto Condensed font](/images/create-react-app-roboto-font.png)