'use strict';

// grab our packages
var gulp   	     = require('gulp'),
	usemin 	     = require('gulp-usemin'),	
	uglify 		 = require('gulp-uglify'),
	concat 		 = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin 	 	 = require('gulp-clean-css'),	
	rev 	     = require('gulp-rev');


	
	//USEMIN
	gulp.task('usemin', function () {
		  return gulp.src('./app/index.html')
		     .pipe(usemin({
			      //css tasks --  concat happens automatically	
			      css: [ autoprefixer,cssmin,rev],
			      //js tasks  --  concat happens automatically
			      js: [ uglify({mangle:false}), rev ],
		    }))
		      .pipe(gulp.dest('dist/'))
		      .pipe(connect.reload());
	});	




