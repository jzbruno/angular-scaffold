module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'gruntFile.js',
                'src/**/*.js'
            ]
        },
        concat: {
            scripts: {
                src: [
                    'src/app.module.js',
                    'src/app.config.js',
                    'src/app.routes.js',
                    'src/common/*.js',
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
                src: [
                    'src/**/*.html',
                    '!src/index.html'
                ],
                dest: 'dist/views/'
            },
            styles: {
                expand: true,
                flatten: true,
                src: ['src/styles/*.css'],
                dest: 'dist/styles/'
            },
            data: {
                src: ['data/*.json'],
                dest: 'dist/'
            }
        },
        uglify: {
            options: {
                mangle: false,
                sourceMap: true,
                sourceMapName: 'dist/app.map'
            },
            app: {
                files: {
                    'dist/app.js': ['dist/app.js']
                }
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['jshint', 'concat', 'copy', 'uglify']);
};
