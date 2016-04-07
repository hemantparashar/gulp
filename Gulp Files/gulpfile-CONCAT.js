'use strict';

// grab our packages
var gulp   = require('gulp'),
	concat = require('gulp-concat');


	//CONCAT
	gulp.task('concat',function(){
		 
		 gulp.src('app/js/**/*.js')
		.pipe(concat('script.min.js'))
		.pipe(gulp.dest('dist/js/'));

	});
			
			

