---
layout: post
title: "Scraping Sites That Use Ajax"
date: 2015-09-05 16:08:43 +0100
comments: true
categories:
- ruby
---

## Or, where's the rest of my HTML??

<div class="c-tldr">
    <h2 class="c-tldr__title">TL;DR</h2>
    <ul>
        <li>If the website you're scraping uses Ajax to load content, open-uri and Nokogiri won't cut it</li>
        <li>Use Watir WebDriver (+ PhantomJS) instead</li>
    </ul>
</div>


I recently wanted to do a one-off web-scrape of a single page to get the hrefs of the 100+ `<a>` tags within it. A cursory google suggested Nokogiri and open-uri would do the trick, so off I went:

```ruby
require 'open-uri'
require 'nokogiri'

page = Nokogiri::HTML(open("http://www.foobar.com/"))
links = page.css('a')
puts links.size
```

... 0. There was nothing in the website given to Nokogiri that matched an a tag selector. WTF?

I fired up Chrome dev tools and did a visual sanity check that the links existed as expected - they did. A simple jQuery `$('a')` from the console returned an array of 142 elements. What was going on? Why wasn't Nokogiri finding any `<a>` tags?

I poked around in the page scripts and finally realised that all the links were loaded from an Ajax call to a JSON file, then inserted after the inital page load: I needed to allow chance for this JavaScript code to be executed _before_ starting to  scrape. Open-uri's `open` method was too quick for me and only returned the initial page structure.

Instead I needed to load up the web page using a web driver which would give the scripts time to do their thing. I ended up using Waitr WebDriver as in [this](http://stackoverflow.com/questions/13492449/watir-webdriver-phantomjs-and-ghostdriver) StackOverflow answer. For bonus points I used PhantomJS as it was tidier and less annoying than having Firefox pop up when I ran the script (yup even though it's an ad-hoc task I'll never run again!).

```ruby
require 'watir-webdriver'

browser = Watir::Browser.new :phantomjs
browser.goto("http://www.foobar.com/")
hrefs = browser.links.map { |link| link.href }

browser.close
```

`links` is a Watir method used to get all the ... you've guessed it ... links from the page, as `Watir::Anchor` objects. Then I just grab hrefs and map them into array in one single line. Woop!


### Gotchas
* Install PhantomJS using brew:

`brew update` followed by `brew install phantomjs`

* Make sure to close your browser instance when you're done with it or you'll run into problems the next time you want to open one, as well as taking up memory unnecessarily.
* You can pass `browser.html` to Nokogiri if you feel more comfortable using it to query HTML, and this is fine from irb, but you'll need a `sleep` method if you use it in a script as there will still be a timing issue as the JavaScript executes slower than Nokogiri does.


#### Useful links
* [http://ruby.bastardsbook.com/chapters/html-parsing/](http://ruby.bastardsbook.com/chapters/html-parsing/)
* [http://watirmelon.com/2013/02/05/watir-webdriver-with-ghostdriver-on-osx-headless-browser-testing/](http://watirmelon.com/2013/02/05/watir-webdriver-with-ghostdriver-on-osx-headless-browser-testing/)
* [http://watirwebdriver.com/web-elements/](http://watirwebdriver.com/web-elements/)
