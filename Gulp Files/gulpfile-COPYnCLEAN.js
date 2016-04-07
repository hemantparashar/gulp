'use strict';

// grab our packages
var gulp   = require('gulp'),
	clean  = require('gulp-clean');


	//COPY
	gulp.task('copy',function(){
		gulp.src('./app/**')
		.pipe(gulp.dest('dist'));
	});

	//CLEAN
	gulp.task('clean',function(){
		gulp.src('dist',{read:false})
		.pipe(clean());
	});

			
