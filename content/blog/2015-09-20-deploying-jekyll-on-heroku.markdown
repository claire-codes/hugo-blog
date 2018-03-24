---
layout: post
title: "Deploying Jekyll on Heroku"
date: 2015-09-20 00:00:00 +0100
comments: true
categories:
- ruby
- heroku
---

# How I deployed my Jekyll blog to Heroku step-by-step

If you use Jekyll for your blog you'll see that their docs suggest hosting your app on GitHub pages. However, I wanted to host mine on Heroku because - well, just because I could really. I'd used Heroku previously and I knew I wouldn't be restricted in my choice of plug-ins further down the line. Alas, I didn't find a single clear tutorial for setting it up: even the example linked on the Jekyll site didn't run for me! But as you can tell, the story had a happy ending and you are reading the fruit of my labours. 🍎🍏

Here's a guide to the Hows & Whys. You should be able to follow along as long as you're happy with the command line.

## 1. Make a Jekyll blog

Make the skeleton of a blog as per [Jekyll's quick-start docs](http://jekyllrb.com/docs/quickstart/). At your command prompt, type:

```bash
gem install jekyll
jekyll new daftBlog
cd daftBlog
jekyll serve
```

You've installed the Jekyll RubyGem and used it to generate a new blog called 'daftBlog'. You've gone into the new folder that Jekyll created
and asked to Jekyll to run the blog. Now if you open `http://localhost:4000` in your browser you should see Jekyll's Hello World blog pages.

*Note:*  from here onwards create all the files in the root of your blog, i.e. where you should be right now in the terminal.

## 2. Turn the blog into a Rack app

Alas, you can't just add your own blog content and stick this app on Heroku and expect it to run. We need a way to make our blog work with Heroku's webservers, and we do this by creating a Rack app.

Let's get a Gemfile set up with all the stuff you'll need going forwards. Create a `Gemfile` file that includes:

```ruby
source 'https://rubygems.org'
ruby '2.0.0'

gem 'bundler'
gem 'jekyll', '~>2.5.3'
gem 'rack-contrib'
gem 'kramdown'
gem 'puma'
gem 'rake'
```

Run `bundle install` from the command line. As well as the Bundler and Jekyll gems, you've now got a Rack gem, kramdown for parsing Markdown files (assuming your blog posts will be written in Markdown of course) and Puma for our Rack webserver.

We're using `rack-contrib` instead of `rack-jekyll` because of [this](http://mwmanning.com/2011/12/04/Jekyll-on-Heroku-Part-2.html) website and [this website](https://jbhannah.net/blog/2013/01/16/jekyll-on-heroku-without-rack-jekyll-or-custom-buildpacks.html) said so.

Next create a `config.ru` file. This tells Rack how to run your app.

```ruby
require 'rack/contrib/try_static'
require 'rack/contrib/not_found'

use Rack::TryStatic,
  :root => "_site",
  :urls => %w[/],
  :try  => ['index.html', '/index.html']

run Rack::NotFound.new('_site/404.html')
```

Jekyll will have already made an `index.html` file for us, but doesn't give a 404 automatically. Create a file called `404.html` and put some valid HTML in it - just copy the index page's contents if you like for now. Run `jekyll serve` to make sure this page is generated and placed in your `_site` folder. Once it's running locally hit `Ctrl-C` to stop it running and continue following this tutorial 😜

You need to put some extra stuff in the `_config.yml` file, particularly `vendor` so that Jekyll doesn't get confused when it generates your site and looks in the wrong place for stuff. Add this line to the bottom:

```bash
exclude: ['config.ru', 'Gemfile', 'Gemfile.lock', 'vendor', 'Procfile']
```

Make a `Rakefile` and add a task that Heroku will use when building the site:

```ruby
namespace :assets do
  task :precompile do
    puts `bundle exec jekyll build`
  end
end
```

Test your blog works as a Rack app: from the command line run the command `rackup` and open the result in your browser, in my case `localhost:9292`. You should see the same pages as when you did `jekyll serve` before. Congrats, you have a Rack app!

## 3. Get blog on Heroku

Another file for Heroku to know how to run your app. Make a `Procfile` file and put the following in it:

```yaml
web: bundle exec puma -p $PORT config.ru
```

Install Git and the [Heroku toolbelt](https://toolbelt.heroku.com/) (wait, you don't have Git installed already??). Then run the following commands:

```bash
git init
heroku create
git add .
git commit -m 'First commit'
git push heroku master
heroku open
```

You've initialised the directory ready for Git funtimes, created a Heroku app which will also add the relevant stuff to your git config, committed your work to Git and pushed it to Heroku. All that's left to do is to open it from the command line like a boss and marvel in your blog's glory!

See the source code for this very blog [here](https://github.com/claireparker/blog-com) as a working example - how meta!
