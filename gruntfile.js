module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); 
  
  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    }
    options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.sass'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('default', ['sass']);

};
