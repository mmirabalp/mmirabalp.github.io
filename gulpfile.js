/* File: gulpfile.js */
// npm install --save-dev
// first run server on port 3000:
// $ http-server -p 3000
// $ gulp

'use strict';

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass  = require('gulp-sass'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

// gulp sass | compiles sass to destination folder
gulp.task('sass', function() {
<<<<<<< HEAD
    gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
=======
    gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/assets/css'));
>>>>>>> 1c869c61ce035046e6e812210a29cbb64416cd5d
});

// gulp watch | runs browser sync
gulp.task('watch', function() {
<<<<<<< HEAD
    browserSync.init({
        server: './'
    });

    // watches for changes on scss and html files
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch(['scss/*.scss', './*.html', './*.htm']).on('change', reload);
=======
    // browserSync.init({
    //     server: './'
    // });

    // watches for changes on scss and html files
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch(['src/scss/*.scss', './*.html', './*.htm']).on('change', reload);
>>>>>>> 1c869c61ce035046e6e812210a29cbb64416cd5d
});

// gulp | default runs sass and watch
gulp.task('default', ['sass', 'watch']);
