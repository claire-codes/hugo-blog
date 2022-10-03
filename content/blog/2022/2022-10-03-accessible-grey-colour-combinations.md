---
title: "Accessible Grey Colour Combinations"
date: 2022-10-03T22:01:26+01:00
summary: "A cheatsheet of grey and white colour combinations that meet WCAG guidelines for colour contrast ratios"
categories:
- blogtober
---

It's important to build accessible web experiences, and while there is no substitute for in person, manual accessibility testing, there are certain metrics that tools like Google Lighthouse and [WAVE](https://wave.webaim.org/) expect to be satisfied. One of these is colour contrast ratios. If a background and foreground colour combination doesn't reach a certain ratio then it's considered to fail WCAG compliance, which is bad. 🙅‍♀️ (N.B. this post won't cover the maths or the reasoning behind these calculations.)

I often build designs using a lot of grey against pure white (#ffffff in hex notation). An easy definition of a grey hexadecimal colour is one that uses the same hexadecimal number for the red, blue and green values, like #454545 or #afafaf . So what's the lightest grey I can get away with for WCAG AA compliance? The following table lists the grey required to meet each WCAG standard for colour contrast when used with white #ffffff.

| Element | Ratio Needed | Grey Hex | Grey HSL | Grey RGB | Example |
| --- | --- | --- | --- | --- | --- |
| Normal Text WCAG AA | 4.5:1 | #767676 | hsl(0deg 0% 46%) | rgb(118 118 118) | <div class="white-grey grey-76">Example</div>
| Normal Text WCAG AAA | 3:1 | #949494 | hsl(0deg 0% 58%) | rgb(148 148 148) | <div class="white-grey grey-94">Example</div>
| Large Text WCAG AA | 7:1 | #595959 | hsl(0deg 0% 32%) | rgb(81, 81, 81) | <div class="white-grey grey-59">Example</div>
| Large Text WCAG AAA | 4.5:1 | #767676 | hsl(0deg 0% 46%) | rgb(118 118 118) | <div class="white-grey grey-76">Example</div>
| Graphical Interfaces & User Interface Components WCAG AA | 3:1 | #949494 | hsl(0deg 0% 58%) | rgb(148 148 148) | <div class="white-grey grey-94">Example</div>

You can test these out yourself using the excellent [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) and learn more about contrast ratios while you're there.

Sorry if this looks rubbish on smaller screens - tables in Markdown are tricky!

