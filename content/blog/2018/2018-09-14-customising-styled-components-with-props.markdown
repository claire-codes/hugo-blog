---
title: "Customising styled components with props"
date: 2018-09-14T17:35:27+01:00
summary: "A quick recipe for adjusting the CSS of React components with prop values."
categories:
- javascript
- css
---

How do you change the style and appearance of a React styled component the value of a prop?

Define the component in your app and pass the prop. (Setting a prop with no value as I do below implicitly passes a boolean `true`.) I'm using a boolean to keep things simple.

```js
<Widget invisible>Hello World</Widget>
```

Next, in your component, pass the prop to the styled component wrapper. We can access the props within the styled component's tagged template literal. Therefore, we can conditionally output CSS within an interpolated expression that uses the prop values.

Here I'm demonstrating using both a ternary and a logical `&&` to set properties in two different ways:

```js
const StyledWidget = styled.div`
    background-color: ${props => (props.invisible ? '#afafaf' : 'red')};
    ${props => props.invisible && 'box-shadow: grey 5px 5px;'};
`;

const Widget = ({ children, invisible }) => (
    <StyledWidget invisible={invisible}>{children}</StyledWidget>
);
```

[There are lots of other useful tips and tricks in this markdown file on the styled-components repo](https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md).

If you want to take this further, [this repo contains lots of more complex functions for using in CSS-in-JS libraries](https://github.com/diegohaz/styled-tools), including switches.
