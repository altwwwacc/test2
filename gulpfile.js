var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');


gulp.task('watch', function () {
    gulp.watch('css/sass/*.scss',['sass']);
    gulp.watch('css/sass_css/*.css',['onecss']);
});
gulp.task('onecss', function () {
    gulp.src('css/sass_css/*.css')
        .pipe(autoprefixer('last 100 versions'))
        .pipe(concatCss(''))
        .pipe(minifyCss(''))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('css/'));
});
gulp.task('sass', function () {
    gulp.src('css/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        //.pipe(minifyCss(''))
        .pipe(concatCss('style.css'))
        .pipe(rename('sass.css'))
        .pipe(gulp.dest('css/sass_css/'));

});

