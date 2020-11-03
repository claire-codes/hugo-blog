---
title: "Which Way Round Should OK and Cancel Buttons Go?"
date: 2020-10-29T13:21:06Z
summary: "Overthinking the order of the Cancel and OK buttons on modal dialogs and forms."
categories:
- ux
- blogtober
---

A very common user interface pattern is a modal or form with two options: "OK" and "Cancel". The question is, how should we position the buttons? "OK" then "Cancel", or "Cancel" followed by "OK"?

<div class="c-example-modal">
Are you sure about that?
<div>
<button type="button">OK</button>
<button type="button">Cancel</button>
</div>
</div>

<div class="c-example-modal">
Are you sure about that?
<div>
<button type="button">Cancel</button>
<button type="button">OK</button>
</div>
</div>

Questions like these are the minutiae of user interface design. Who cares, right? Well, when you're the one designing the app and are responsible for the position of every element, (like me) you begin to care deeply!

As always, we try to find a solution on the first page of search results, but in this case it doesn't help! There's no definitive answer. Many articles flat-out state that button order doesn't matter to users. But that doesn't help this would-be designer in the meantime.

Let's look at how other people do it for inspiration. Operating systems are a good place to start. But there's no unifying pattern here either: Windows uses "OK - Cancel", while Mac goes "Cancel - OK". Of course, for an app designed to run on a specific platform, then definitely follow the conventions of your chosen operating system. But where does this leave those of us building web apps? (me again!)

There are lots of common sense arguments for both directions. Here's a couple. "OK - Cancel" follows sentence structure in English, where normally the positive option comes first. But "Cancel - OK" works too because the action to continue the user journey appears at the end of the dialog. In a left-to-right reading direction, this is a logical place to find the next element to interact with.

What was my final decision then? I went with my personal preference, which is "OK - Cancel". For me though, the main thing is to ensure the button order is consistent throughout the rest of my app designs. Once you've made a decision, stick to it.

Now I've decided on the placement of my buttons, I can obsess over whether "OK" and "Cancel" are the best copy for them next!