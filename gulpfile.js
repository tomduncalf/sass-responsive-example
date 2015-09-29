'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  gulp.src('./src/sass/style.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [require('node-reset-scss').includePath, 'node_modules/sass-rem']
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(concat('style.css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});
