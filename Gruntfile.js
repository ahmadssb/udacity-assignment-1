
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [
          {
            width: 1024,
            suffix: '_large',
            quality: 90
          }
          ,{
            width: 750,
            suffix:'_medium' ,
            quality: 70
           
          }
          ,{
            width: 750,
            suffix: '_small',
            quality: 50
          }
          ]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,jpeg}'],
          cwd: 'images/food-pics',
          dest: 'images/'
        }]
      }
    },

  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
