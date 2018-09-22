---
title: "Testing text with Jest snapshots"
date: 2018-09-19T22:41:54+01:00
summary: "Snapshot tests can be useful outside of React components."
categories:
- javascript
- testing
---

_Note: this article discusses snapshot testing with Jest, but other test libraries also offer snapshotting features._

Snapshot tests are ubiquitous in testing React components. But have you ever considered using them elsewhere? This post explores using snapshots to test functions that return lots of text.

## What do snapshots do?

When you run a snapshot test against a React component, it generates a “snapshot” of the rendered output in a test file. The next time the test is run, a new snapshot is generated and compared against the old one. If the versions match, the test passes. When the versions don't match, the test will fail. This indicates something has changed in the component's code. For an expected change, replace the snapshot file with the new version. If the change is unexpected, then congratulations, you’ve found a bug! Fix it and make the test pass again.

[This test from the Jest docs site is a good example of the syntax](https://jestjs.io/docs/en/snapshot-testing):

```js
import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```

And the accompanying snapshot file will look like:

```js
exports[`renders correctly 1`] = `
<a
  className="normal"
  href="http://www.facebook.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  Facebook
</a>
`;
```

## When snapshots can help

Snapshot tests generate test data in a special `.js.snap` file. This file is stored in a `__snapshot__` folder, within the same directory as the test. The file is pretty-printed in a human-readable format to make it easy to review. Generating and storing large amounts of test data like this is really useful for React components, but we can also reap these benefits in other places. Consider how you would test:

- a logging function that outputs long messages
- a function that returns a template literal containing many lines, (e.g. a GraphQL query)

You could test these with either a regular expression, or type out the exact expected output into the test file. This can become painstakingly brittle, especially with newline characters and dangling commas involved. And will that regular expression you've built reliably catch a bug? Is it clear what the expected output should even look like in your test? A snapshot removes this hassle.

For example:

```js
test('old method', () => {
    expect(functionToTest().replace(/\s/g, ''))
        .toContain('imagine,a,long{string}that(becomes),difficult,to;read');
});


test('using snapshot', () => {
    expect(functionToTest()).toMatchSnapshot();
});
```

Cool! 😎

## Caveats: use snapshots with care

However, snapshots won’t solve all your problems. Some points to keep in mind when deciding whether to use a snapshot:

- Snapshot tests are not designed for test driven development (TDD). They test whether the output of a function has changed, not as a guide for ideal output.
- Commit snapshot files to source control. But inspect them thoroughly on first commit, because this version will represent the source of truth.
- Choose what to snapshot carefully. Developers are less likely to find out why a snapshot test has failed if:
   - the snapshot file is very large
   - the snapshot file is changing too often
   - many snapshot files change every time they run tests
- Developers will start to update the snapshot files with the new changes, just to get the tests to pass without checking what or why they've changed. The tests then become useless!

[Kent Dodds covers more of the issues with snapshot testing in this great post](https://blog.kentcdodds.com/effective-snapshot-testing-e0d1a2c28eca).

Snapshot tests don’t replace your existing tests, but can be useful and time-saving if used selectively.
