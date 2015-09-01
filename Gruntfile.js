
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'medium',
            width: 250,
            suffix:'_med' ,
            quality: 50
           
          }
          ,{
            name: 'large',
            width: 250,
            suffix: '_large',
            quality: 50
          }
          ,{
            name: 'small',
            width: 250,
            suffix: '_small',
            quality: 30
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
          cwd: 'images/original-images/logo',
          dest: 'images/'
        }]
      }
    },

  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
