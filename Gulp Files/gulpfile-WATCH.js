'use strict';

// grab our packages
var gulp   = require('gulp');


	//JS-HINT task
	gulp.task('jshint',function(){
				 gulp.src('./app/js/**/*.js')
				.pipe(jshint())
				.pipe(jshint.reporter('jshint-stylish'))
				.pipe(concat('script.min.js'))
				.pipe(uglify())
				.pipe(gulp.dest('dist/js/'));
	});



	//WATCH
	gulp.task('watch',function(){
		gulp.watch('./app/js/**/*.js',['jshint']);
	});


	//DEFAULT
	gulp.task('default',['watch']);

