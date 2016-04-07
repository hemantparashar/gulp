'use strict';

// grab our packages
var gulp   = require('gulp'),
	uglify = require('gulp-uglify');


	//UGLIFY
	gulp.task('uglify',function(){
		gulp.src('app/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
	});
			

