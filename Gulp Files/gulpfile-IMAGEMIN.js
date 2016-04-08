'use strict';

// grab our packages
var gulp   = require('gulp'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');


	
	gulp.task('images',function(){
		return gulp.src('app/images/*.*')
				.pipe(imagemin({
					progressive: true,
					svgoPlugins: [{removeViewBox: false}],
					use: [pngquant()]
				}))
				.pipe(gulp.dest('dist/images'));
	});
	

