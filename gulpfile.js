'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    glob = require('glob'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    buffer = require('vinyl-buffer'),
    rename = require('gulp-rename'),
    size = require('gulp-size');

gulp.task('build-mocha-tests', function() {
    var testFiles = glob.sync('./test/*Test.js')
        .filter(function(file) {
            return !/libTest\.js$/.test(file);
        }),
        pack = browserify();

    testFiles.forEach(function(file) {
        pack.add(file);
    });

    return pack
        .bundle()
        .pipe(source('mochaTests.js'))
        .pipe(gulp.dest('test'));
});

gulp.task('browser-build', function() {
    return browserify({
        standalone: 'predicates'
    })
        .add('./index.js')
        .bundle()
        .pipe(source('predicates.js'))
        .pipe(buffer())
        .pipe(size({title: 'predicates.js - development'}))
        .pipe(gulp.dest('browser'))
        .pipe(uglify())
        .pipe(rename('predicates.min.js'))
        .pipe(size({title: 'predicates.min.js - production'}))
        .pipe(size({gzip: true, title: 'predicates.min.js - production'}))
        .pipe(gulp.dest('browser'));
});
