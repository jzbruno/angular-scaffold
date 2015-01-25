module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'gruntFile.js',
                'src/**/*.js'
            ]
        },
        watch: {
            jshint: {
                files: 'src/**/*.js',
                tasks: 'jshint'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
