# Shorten Me
A simple link shortner application built using Ruby on Rails, React.js and SQLite3.
JavaScript and SCSS are compiled using Webpack.

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