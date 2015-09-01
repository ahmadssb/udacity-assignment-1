
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'medium',
            width: 750,
            suffix:'_med' ,
            quality: 30
           
          }
          ,{
            name: 'large',
            width: 750,
            suffix: '_large',
            quality: 50
          }
          ,{
            name: 'small',
            width: 750,
            suffix: '_small',
            quality: 20
          }
          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,jpeg}'],
          cwd: 'images/original-images/featured',
          dest: 'images/'
        }]
      }
    },

  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
