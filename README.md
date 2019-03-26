# Blog

Claire's blog repo.

## What are all those emojis in your commits?

A random emoji is prefixed to every commit message I write as a pre-commit hook. The hook is installed by this amazing Ruby gem [emoji-commit](https://github.com/claireparker/emoji-commit) (that I wrote 😊). The emoji choice is random but often weirdly suited to the contents of the commit message ... 👽🔮

## Developing

Install hugo with `brew install hugo`. Install node packages with `npm i`.

Run `hugo server` locally and go to `http://localhost:1313/`. Push changes and Netlify takes care of the rest.

## Sass

Run `npm run dev` in one terminal tab and `hugo server` in another. The npm tasks will automatically recompile the Sass, and the Hugo task will pick up on the CSS and reload the page.

## Theme

I use the [Ted](https://github.com/claireparker/hugo-ted) theme. I built the theme from scratch instead of overwriting an existing one. It's not in a state where it can be used yet because I need to move certain files out of the main blog and into the theme, but it's on the To-Do list.

The name comes from my beautiful ~~son~~ dog, Ted.

## Archetypes

Two templates for front matter (a.k.a. archetypes) exist: `blog` and `dev-diary`. To use them, create a new file like: `hugo new dev-diary/2018-10-02.md` or `hugo new blog/post.md`.

Ensure the file suffix matches the one used in the archetype, i.e. my archetypes are `.md` files, so if I did `hugo new blog/post.markdown` the archetype wouldn't be used.

## Dev Diary

I post this once a week. To generate a new one, type `hugo new dev-diary/2019-02-05-dev-diary.markdown` at the command line, replacing the date in the title. The YAML should be `title`, `date` and `interests` (this field name is a hangover from when the page used to be called "Interesting" and it still sounds best to me). `interests` is a list (bullets are hyphens). Content of the post is posted at the top, followed by the `interests` list.
