// module.exports = function(grunt) {

//     grunt.initConfig({
//         karma: {
//             unit: {
//                 configFile: 'config/karma.conf.js',
//                 background: true
//             }
//         },
//         watch: {
//             karma: {
//                 files: ['src/**/*.js', 'test/unit/**/*.js'],
//                 tasks: ['karma:unit:run']
//             }
//         }
//     });

//     grunt.loadNpmTasks('grunt-contrib-watch');
//     grunt.loadNpmTasks('grunt-karma');

//     grunt.registerTask('devmode', ['karma:unit', 'watch']);
// };


module.exports = function(grunt) {
    grunt.initConfig({
        karma: {
            unit: {
                // ...
            },
            // Add a new travis ci karma configuration
            // configs here override those in our existing karma.conf.js
            travis: {
                configFile: 'config/karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },
        watch: {
          // ...
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('devmode', ['karma:unit', 'watch']);

    // Add a new task for travis
    grunt.registerTask('test', ['karma:travis'])
};


