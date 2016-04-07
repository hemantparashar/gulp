'use strict';

// grab our packages
var gulp   = require('gulp'),
	jshint = require('gulp-jshint');



//JS-HINT task
gulp.task('jshint',function(){
	return gulp.src('./app/js/**/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('jshint-stylish'));
});


// configure which files to watch and what tasks to use on file changes
gulp.task('watch',function(){
	gulp.watch('./app/js/**/*.js',['jshint']);
});


// define the default task and add the watch task to it
gulp.task('default',['watch']);

