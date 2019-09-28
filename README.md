# Shorten Me
A simple link shortner application built using Ruby on Rails, React.js and SQLite3.
JavaScript and SCSS are compiled using Webpack.

Demo @ <https://x-shorten-me.herokuapp.com/>

## Requirements
- Ruby 2.6.x with DevKit

## Getting Started
- Clone this repo somewhere
- Install the gems with ```bundle install```
- Run the migrations with ```rake db:migrate```
- Launch a test server with ```rails s```

If you're on Windows x64 you might run into some troubles with the sqlite3 gem when running ```bundle install```. Just install sqlite3 with the command returned by the ```bundle install```, then run ```bundle install``` again and you'll be a-ok.

## How It Works
Simply input a URL you'd like to shorten and submit it. You'll be given a shortned URL that'll redirect to your original one. You can also specify a unique custom hash - that means there can't be two of the same.

## Disclaimer
This app was built as an exercise but at the same time helped develop skills in the given languages. If it serves you as a base then go ahead and use it, it's free. Tests were made on Windows x64 only.

## License (MIT)
Copyright 2019 Ricardo Bucho

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.