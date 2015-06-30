module.exports = function(grunt) {

  grunt.initConfig({

    copy:
    {
      main: {
        files: [
          {
            expand: true, src: ['bower_components/simditor/styles/editor.scss'],
            dest: 'vendor/assets/stylesheets/simditor', flatten: true
          },
          {
            expand: true, src: ['bower_components/simditor/styles/fonticon.scss'],
            dest: 'vendor/assets/stylesheets/simditor', flatten: true
          },
          {
            expand: true, src: ['bower_components/simditor/lib/simditor.js'],
            dest: 'vendor/assets/javascripts/simditor', flatten: true
          },
          {
            expand: true, src: ['bower_components/simple-hotkeys/lib/hotkeys.js'],
            dest: 'vendor/assets/javascripts/simditor', flatten: true
          },
          {
            expand: true, src: ['bower_components/simple-module/lib/module.js'],
            dest: 'vendor/assets/javascripts/simditor', flatten: true
          },
          {
            expand: true, src: ['bower_components/simple-uploader/lib/uploader.js'],
            dest: 'vendor/assets/javascripts/simditor', flatten: true
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.registerTask("default", ["copy:main"]);
};
