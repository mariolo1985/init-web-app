module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            options: {
                transform: [
                    ["babelify"]
                ]
            },
            dist: {
                src: ['src/js/master.js'],
                dest: 'build/js/master.min.js'
            }
        },
        uglify: {
            build: {
                src: 'build/js/master.min.js',
                dest: 'dist/js/master.min.js'
            }
        },
        less: {
            dev: {
                files: {
                    'dist/css/master.min.css': 'src/less/master.less'
                }
            },
            prod: {
                options: {
                    compress: true,
                    sourceMap: true
                },
                files: {
                    'dist/css/master.min.css': 'src/less/master.less'
                }
            }
        },
        clean: {
            data: ['dist/data'],
            dev: ['dist'],
            html: ['dist/*.html'],
            js: ['dist/js'],
            prod: ['dist']
        },
        copy: {
            dev: {
                files: [
                    { expand: true, cwd: 'src/', src: '*.html', dest: 'dist/' },
                    { expand: true, cwd: 'src/', src: 'data/*', dest: 'dist/' },
                    { expand: true, cwd: 'src/', src: 'images/*', dest: 'dist/' },
                    { expand: true, cwd: 'build/', src: 'js/master.min.js', dest: 'dist/' }
                ]
            },
            prod: {
                files: [
                    { expand: true, cwd: 'src/', src: '*.html', dest: 'dist/' },
                    { expand: true, cwd: 'src/', src: 'data/*', dest: 'dist/' },
                    { expand: true, cwd: 'src/', src: 'images/*', dest: 'dist/' }
                ]
            }
        },
        watch: {
            data: {
                files: ['src/data/*.json'],
                tasks: ['clean:data', 'copy:dev']
            },
            less: {
                files: ['src/less/*.less'],
                tasks: ['less:dev']
            },
            js: {
                files: ['src/js/*.js', 'src/components/**'],
                tasks: ['browserify', 'clean:js', 'copy:dev']
            },
            html: {
                files: ['src/*.html'],
                tasks: ['clean:html', 'copy:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', [
        'browserify',
        'clean:dev',
        'copy:dev',
        'less:dev',
        'watch'
    ]);

    grunt.registerTask('prod', [
        'browserify',
        'clean:prod',
        'uglify',
        'copy:prod',
        'less:prod'
    ]);
};
