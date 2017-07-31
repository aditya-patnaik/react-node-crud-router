var gulp = require('gulp');
var webpack = require('webpack-stream');
var less = require('gulp-less');
var path = require('path');

gulp.task('webpack', function(){
	return gulp.src('./src/**/*.js')
				.pipe(webpack(require('./webpack.config.js')))
				.pipe(gulp.dest('./dist'));
});

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./resources/css'));
});

gulp.task('watch', function(){
	gulp.watch('./src/**/*.js', ['webpack']);
	gulp.watch('./less/**/*.less', ['less']);
});

gulp.task('default', ['webpack', 'less', 'watch']);
