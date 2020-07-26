---
layout: post
title: Semver in package.json
summary: An overview of semantic versioning, as found in `package.json` files.
date: 2016-03-09 21:56:35
comments: true
published: true
categories:
- javascript
---
<div class="c-tldr">
    <h2 class="c-tldr__title">TL;DR</h2>
    <ul>
        <li><strong>Allow only patch changes</strong>: <code>~1.1.3</code>, e.g. >=1.1.3 <1.2.0</li>
        <li><strong>Allow minor changes</strong>: <code>^1.1.3</code>, e.g. >=1.1.3 <2.0.0</li>
   </ul>
</div>

You might have noticed some unexpected characters next to the package versions of the `dependencies` or `devDependencies` properties in your `package.json` file:

```javascript
"dependencies": {
  "backbone": "^1.3.1",
  "express": "~4.13.4"
}
```

## Semver

First of all, let's understand how packages are versioned and what each of those numbers represent.

A piece of software, e.g. a node module, evolves and changes over time. When new features have been added or existing functionality has been modified, new versions of packages are released. This lets the world know that the code has changed in some way. Semantic versioning, or "semver", is a convention introduced to help give users of your package some idea of the changes in this version. A version number is made up of three figures, each of which represent a different type of change:

> MAJOR.MINOR.PATCH

You should increment the version number to indicate what changes you've made in this release. Quoting directly from [semver.org](http://semver.org/), release a:

> * MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Reset the other increments as appropriate: a package on version 1.4.3 releasing a major version would be released as 2.0.0. See the [semver site](http://semver.org/) for more examples of how to correctly version your software.

## Carets & Tildes & Ranges, Oh my! 🐈 🐅 🐻

You've installed a dependency to your app using npm, but you're not too precious about the version of the dependency - it's not critical and it'll probably still work if the version is 0.4.1 or 0.4.2. You can specify how flexible you want to be with versions using special symbols in the `package.json` file. but you want to specify what version is used. Here's a brief primer:

| Symbol        | Meaning           | Example  |
| ------------- |---------------| ------|
| `-` | The hyphen creates an inclusive set | `1.2.0 - 1.3.3` allows versions 1.2.0, 1.3.3 and everything in between |
|`>, <, >=, <=`|Use one or combine a two to create an acceptable range| `>=0.4.1 <0.5.0` allows everything from 0.4.1 up to but not including 0.5.0 |
|`^`|_"Compatible with version"_: allows changes that do not modify the first non-zero version | `^1.2.3` allows 1.x.x but `^0.2.3` will only allow 0.2.x |
|`~`|_"Approximately equivalent to version"_: allows patch level changes if minor provided, allows minor if not | `~1.2.3` the range >=1.2.3 <1.3.0, while `~1` is equivalent to 1.x.x |

__Allow only patch changes:__ `~1.1.3` which is like >=1.1.3 <1.2.0

__Allow minor changes:__ `^1.1.3` which is like >=1.1.3 <2.0.0

## 🐻 Bear in mind ...

Semver is only a convention that developers should follow, and isn't strictly enforceable. While some delightful soul may just bump the minor version whilst adding breaking changes to a pivotal package used by your app, package versioning like this works on the assumption that humans can follow a simple set of rules.

Do your bit: spread the word about semver to your colleagues so that we're all on the same page! 📖

If you really want to lock down the dependency versions in your package.json, consider looking at `npm shrinkwrap`.

### Bumping versions in npm

Is dead easy. Replace `type` with `patch`, `minor` or `major`:

```bash
npm version type -m 'Version %s'
git push && git push --tags
npm publish
```

## References

This is only a brief summary - find out much more info at:

* [docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json)
* [docs.npmjs.com/misc/semver](https://docs.npmjs.com/misc/semver)
