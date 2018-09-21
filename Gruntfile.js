module.exports = function (grunt) {
    //grunt.loadTasks('./grunt/tasks');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            options: {
                transform: [
                    ["babelify"]
                ],
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
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('dev', [
        'browserify',
        'copy:dev',
        'less:dev'
    ]);

    grunt.registerTask('prod', [
        'browserify',
        'uglify',
        'copy:prod',
        'less:prod'
    ]);
};
