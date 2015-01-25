module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'gruntFile.js',
                'src/**/*.js',
                '!src/vendor/*'
            ]
        },
        concat: {
            scripts: {
                src: [
                    'src/app.module.js',
                    'src/app.config.js',
                    'src/app.routes.js',
                    'src/**/*.js'
                ],
                dest: 'dist/app.js'
            }
        },
        copy: {
            index: {
                src: 'src/index.html',
                dest: 'dist/index.html'
            },
            views: {
                expand: true,
                flatten: true,
                src: ['src/**/*.html'],
                dest: 'dist/views/'
            },
            styles: {
                expand: true,
                flatten: true,
                src: ['src/styles/*.css'],
                dest: 'dist/styles/'
            },
            fonts: {
                expand: true,
                flatten: true,
                src: ['src/fonts/*'],
                dest: 'dist/fonts/'
            },
            vendor: {
                expand: true,
                flatten: true,
                src: ['src/vendor/*'],
                dest: 'dist/vendor/'
            },
            data: {
                src: ['data/*.json'],
                dest: 'dist/'
            }
        },
        watch: {
            build: {
                files: 'src/**/*',
                tasks: 'build'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['jshint', 'concat', 'copy']);
};
