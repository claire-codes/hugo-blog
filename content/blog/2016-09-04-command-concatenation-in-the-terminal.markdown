---
layout: post
title: Command concatenation in the terminal
summary: Because I like using as few keystrokes as possible and I love using the word concatenation.
date: 2016-09-04 20:45:17
comments: true
published: true
categories:
- bash
---

You may know that you can chain commands at the terminal. So instead of writing

```bash
$ echo 'foo'
$ echo 'bar'
```

And hitting return after each one, you could type:

```bash
$ echo 'foo' && echo 'bar'
```

And achieve much the same thing - not exactly the same output but often close enough. I frequently use this combination in my JavaScript app development:

```bash
rm -rf node_modules && npm i && say done
```

That's a freebie.

But this is not the only way to chain commands 😮 You can also use semi-colons So what's the difference?

```bash
$ alpha() && beta()
# beta() only executes if alpha() is successful

$ alpha(); beta()
# beta() executes even if alpha() fails
```

What's the difference between a successful and unsuccessful command in *nix? The exit code of course!

* `0` exit code = good ✔️
* `1` or higher exit code = bad ✖️

An exit code of anything greater than `0` means your command failed.

So using `&&` for my example above is good as I don't want the rest of the commands in the chain to execute unless the preceding ones pass.

If you're familiar with logical operators then this should make sense to you. If you're not, then go google logical operators.

Recall `false && true` is false but `false || true` is true.

Remember:

* semi-colons `;` to execute all commands in a chain
* logical-and operator `&&` to ensure the previous commands have executed successfully first

### Postscript

I use the Bash shell in iTerm on my Mac. 💻

### The following StackOverflow posts were upvoted during the making of this blog post:

* [http://unix.stackexchange.com/questions/37069/what-is-the-difference-between-and-when-chaining-commands](http://unix.stackexchange.com/questions/37069/what-is-the-difference-between-and-when-chaining-commands)
* [http://unix.stackexchange.com/questions/100704/difference-between-executing-multiple-commands-with-and
](http://unix.stackexchange.com/questions/100704/difference-between-executing-multiple-commands-with-and
)