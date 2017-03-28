module.exports = function (grunt) {
  //项目配置
  grunt.initConfig({
    //配置任务
    concat : {
      release : {
        src : ['js/values.js', 'js/prompt.js'],
        dest : 'release/main.js'
      }
    },

    copy : {
      release : {
        src : 'manifest.json',
        dest : 'release/manifest.json'
      }
    },

    jshint : {
      files : ['js/values.js', 'js/prompt.js']
    },

    watch : {
      files : ['<%= jshint.files %>', 'manifest.json'],
      tasks : ['default']
    }
  });

  //加载插件
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //注册任务
  grunt.registerTask('default', ['jshint', 'concat', 'copy']);
};
