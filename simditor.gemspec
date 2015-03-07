# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require 'simditor/version'

Gem::Specification.new do |s|
  s.name          = "simditor"
  s.version       = Simditor::Version::EDITOR
  s.authors       = ["Wentao Liu"]
  s.email         = ["wentaoliu@live.com"]
  s.license       = 'MIT'
  s.homepage      = "https://github.com/wentaoliu/simditor-rails"
  s.summary       = "A simple editor designed by mycolorway http://mycolorway.github.io/simditor/demo.html"
  s.description   = "Rails assets wrapper for https://github.com/mycolorway/simditor"
  s.files         = Dir["{lib,vendor}/**/*"] + ["LICENSE", "README.md"]
  s.platform      = Gem::Platform::RUBY
  s.require_paths = ['lib']
end
