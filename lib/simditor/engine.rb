module Simditor
  class Engine < ::Rails::Engine
    initializer :assets do |app|
      app.config.assets.precompile += %w( upload-loading.png )
    end
  end
end
