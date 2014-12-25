'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    glob = require('glob'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    buffer = require('vinyl-buffer'),
    rename = require('gulp-rename'),
    size = require('gulp-size'),
    mocha = require('gulp-mocha'),
    eslint = require('gulp-eslint'),
    cover = require('gulp-coverage'),
    jsdoc2md = require("jsdoc-to-markdown"),
    fs = require('fs');

gulp.task('build-mocha-tests', function() {
    var testFiles = glob.sync('./test/*Test.js');

    return browserify(testFiles)
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

gulp.task('test', function() {
    return gulp.src(['test/*Test.js', 'test/areAllFunctionsIncluded.js'])
        .pipe(mocha({
            ui: 'bdd'
        }));
});

gulp.task('coverage', function() {
    require('blanket')({
        pattern: 'src'
    });
    return gulp.src(['test/*Test.js', 'test/areAllFunctionsIncluded.js'], {read: false})
        .pipe(cover.instrument({
            pattern: 'src/**/*.js'
        }))
        .pipe(mocha({
            ui: 'bdd',
            reporter: 'dot'
        }))
        .pipe(cover.report({
            outFile: 'coverage.html'
        }))
        .pipe(cover.enforce({
            statements: 99,
            lines: 100
        }))
});

gulp.task('docs', function() {
    return jsdoc2md.render('src/*.js', {
        partial: [
            'jsdoc2md/throws.hbs',
            'jsdoc2md/fields.hbs',
            'jsdoc2md/name-prefix.hbs'
        ],
        plugin: [
            'dmd-examples-highlight'
        ]
    })
        .pipe(fs.createWriteStream('docs/api.md'));
});

gulp.task('lint', function() {
    return gulp.src(['src/**/*.js'])
        .pipe(eslint('./.config/eslint.yaml'))
        .pipe(eslint.format());
});