module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); 
  
  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    },
    sass: {
      options: {
          sourceMap: true
        },
        dist: {
          files: {
            'css/main.css': 'style.sass'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['sass', 'jshint']);

};
