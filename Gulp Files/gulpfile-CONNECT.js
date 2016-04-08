'use strict';

// grab our packages
var gulp   		 =   require('gulp'),
	connect 	 =	 require('gulp-connect');
	


	//CONNECT
	gulp.task('connect', function() {
		  connect.server({
			    root: 'dist',
			    port:8080,
			    livereload: true
		  });
	});

