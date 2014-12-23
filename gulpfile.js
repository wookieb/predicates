'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    glob = require('glob'),
    source = require('vinyl-source-stream');

gulp.task('build-mocha-tests', function() {
    var testFiles = glob.sync('./test/*Test.js')
            .filter(function(file) {
                return !/libTest\.js$/.test(file);
            });

    return browserify(testFiles)
        .bundle()
        .pipe(source('mochaTests.js'))
        .pipe(gulp.dest('test'));
});