/**
 * Created by syedf on 1/30/2016.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');

gulp.task('default', function () {
    gulp.src(['public/js/controllers/app.js','public/js/**/*.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/build'));
});
