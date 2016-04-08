'use strict';

// grab our packages
var gulp   		 =   require('gulp'),
	htmlreplace  =   require('gulp-html-replace');



	//PROCESS-HTML
	gulp.task('html',function(){
	  return gulp.src('./app/*.html')
		     .pipe(htmlreplace({
		        'css':'css/styles.min.css',
		        'js': 'js/scripts.min.js'
		    }))
		     .pipe(gulp.dest('dist/'));

	});

