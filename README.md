# Blog

Claire's blog repo.

## What are all those emojis in your commits?

A random emoji is prefixed to every commit message I write as a pre-commit hook. The hook is installed by this amazing Ruby gem [emoji-commit](https://github.com/claireparker/emoji-commit) (that I wrote 😊). The emoji choice is random but often weirdly suited to the contents of the commit message ... 👽🔮

## Developing

`hugo server` locally. Push changes and Netlify takes care of the rest.

## Sass

Run `npm run dev` in one terminal tab and `hugo server` in another. The npm tasks will automatically recompile the Sass, and the Hugo task will pick up on the CSS and reload the page.

## Theme

I use the [Ted](https://github.com/claireparker/hugo-ted) theme. I built the theme from scratch instead of overwriting an existing one. It's not in a state where it can be used yet because I need to move certain files out of the main blog and into the theme, but it's on the To-Do list.

The name comes from my beautiful ~~son~~ dog, Ted.
