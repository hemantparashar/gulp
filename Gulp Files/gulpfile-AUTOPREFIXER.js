'use strict';

// grab our packages
var gulp   = require('gulp'),
	autoprefixer = require('gulp-autoprefixer');


	//AUTOPREFIXER
	gulp.task('autoprefixer',function(){
		gulp.src('./app/css/**/*.css')
		.pipe(autoprefixer({
				browsers:['last 5 versions','ie 8','ie 9'],
				cascade:false
		}))
		.pipe(gulp.dest('dist/css/'));
	});