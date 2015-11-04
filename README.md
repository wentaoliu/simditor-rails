# simditor gem

`simditor` gem is a Rails assets wrapper of [Simditor](https://github.com/mycolorway/simditor).

[![Gem Version](https://badge.fury.io/rb/simditor.svg)](https://badge.fury.io/rb/simditor)

## Usage

in Gemfile
```ruby
gem 'simditor'
```

in application.js
```
//= require simditor
```

in application.css
```
 *= require simditor
```

## Initialization

```coffeescript
editor = new Simditor(
  textarea: $('#editor')
  toolbar: [
    'title','bold','italic','underline','strikethrough','color','|'
    'ol','ul','blockquote','code','table','link','image','hr','|'
    'indent','outdent'
  ]
  pasteImage: true
  defaultImage: '<%= image_path "upload-loading.png" %>'
  upload: url: '/upload')
```
