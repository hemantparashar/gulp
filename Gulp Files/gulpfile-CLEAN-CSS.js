'use strict';

// grab our packages
var gulp   = require('gulp'),
	cssmin = require('gulp-clean-css');

	//CSSMIN
	gulp.task('cssmin',function(){
			return gulp.src('app/css/**/*.css')
			.pipe(cssmin())
			.pipe(gulp.dest('dist/css/'));
	});

