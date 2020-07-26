---
layout: post
title: "Paths in Ruby"
date: 2016-01-01 14:30:01 +0000
comments: true
categories:
- ruby
published: true
---


You've got a file, but where does it live? Which directory are _you_ in? Where am I? What's my name?

For the following examples, imagine:

* you're executing a file called `foo.rb`
* which lives in the file system at `/Users/me/myDir/foo.rb`
* you're located in `/Users/me/myDir`
* you've executed the command `ruby foo.rb` from the terminal

Remember:

* _absolute path_ - the full path of the file in the file system: it starts with the root directory and includes all the directories between it and the file in question.
* _relative path_ - a partial representation of the absolute path because it starts from some other directory. An example would be `../myDir/foo.rb`.

### WTF is `__FILE__`

You've probably seen this keyword used in Ruby. `__FILE__` is a constant that represents the name of the file that is currently executing. In our example it's `foo.rb`.

### How do I get the absolute pathname of the currently executing file?

Now we know the name of the currently executing file, we can pass it to the `expand_path` method of the `File` class.

`expand_path` returns the absolute pathname of the file provided as an argument.

```ruby
File.expand_path(__FILE__)
  => "/Users/my/myDir/foo.rb"
```

N.B. It can also take relative pathnames.

### How do I find the absolute directory name of the currently executing file?

If you aren't interested in the pathname and want the file's absolute directory without the filename, combine the previous method with the `dirname` method.

```ruby
File.dirname(File.expand_path(__FILE__))
# Or also ...
File.expand_path(File.dirname(__FILE__))
# Or even ...
File.dirname(File.realpath(__FILE__))
  => "/Users/my/myDir"
```

### But `__dir__`?

If you only have to worry about supporting Ruby 2.0.0 and above, you can use the `__dir__` constant instead.

### What's the working directory and how do I find it?

This is the folder you are currently in - nothing to do with the file that is executing. Use `Dir.pwd` to get it.

### OMG I've always wanted to know - what's the best way to make a pathname out of lots of different strings??

Well you might have tried `['a','b','c'].join('/')`, but you'd be wrong!

What you really need is `File.join()`: this method concatenates arguments with a single slash, and will ensure that there is only one slash between each argument. You'd have to do this cleanup yourself if you used `.join('/')`

```ruby
File.join('a','b')      => 'a/b'
File.join('a/','b')     => 'a/b'
File.join('a/','/b')    => 'a/b'

['a/','b'].join('/')    => 'a//b'
['a/','/b'].join('/')   => 'a///b'
```

### `expand_path` bonus time!

So you already know that `File.expand_path` returns the absolute path of the 1st argument. But if you provide a 2nd argument it will find the absolute path of the 1st argument _relative_ to the 2nd argument. Get that?

So `File.expand_path('../lib', __FILE__)` gets the path to the lib directory _relative_ to the currently executing file, meaning you don't have to worry about where you actually are when finding paths.

### How do I know that you're not talking baloney? 💩

Whip up a quick rb file and put the following:

```ruby
puts "__FILE__ = #{__FILE__}"
puts "Absolute pathname = #{File.expand_path(__FILE__)}"
puts "Absolute directory = #{File.dirname(File.expand_path(__FILE__))}"
puts "Alternative absolute directory = #{File.expand_path(File.dirname(__FILE__))}"
puts "Another absolute directory = #{File.dirname(File.realpath(__FILE__))}"
puts "Working directory = #{Dir.pwd}"
```

Execute and see you for yourself.

#### The following StackOverflow answers were upvoted during the making of this blog post:
* [http://stackoverflow.com/questions/4474918/file-expand-path-gemfile-file-how-does-this-work-where-is-the-fil](http://stackoverflow.com/questions/4474918/file-expand-path-gemfile-file-how-does-this-work-where-is-the-fil)
* [https://tomafro.net/2010/01/tip-relative-paths-with-file-expand-path](https://tomafro.net/2010/01/tip-relative-paths-with-file-expand-path)
* [http://stackoverflow.com/questions/9416578/relative-path-to-your-project-directory](http://stackoverflow.com/questions/9416578/relative-path-to-your-project-directory)
