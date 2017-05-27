module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    }
    sass: {
      options: {
        sourceMap: true
    },
      dist: {
      files:{
        'css/style.css': 'style.css'
        } 
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['sass', 'jshint']);

};
