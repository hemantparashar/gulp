'use strict';

// grab our packages
var gulp   	     = require('gulp'),
	usemin 	     = require('gulp-usemin'),	
	jshint 		 = require('gulp-jshint'),
	uglify 		 = require('gulp-uglify'),
	concat 		 = require('gulp-concat'),
	clean 		 = require('gulp-clean'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin 	 	 = require('gulp-clean-css'),	
	imagemin 	 = require('gulp-imagemin'),
	pngquant 	 = require('imagemin-pngquant'),
	rev 	     = require('gulp-rev'),
	connect 	 = require('gulp-connect'),
	runSequence  = require('run-sequence');

	
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


	//JS-HINTING
	gulp.task('jshint',function(){
		return gulp.src('./app/js/**/*.js')
				.pipe(jshint())
				.pipe(jshint.reporter('jshint-stylish'));
	});
	
	//IMAGE-MIN
	gulp.task('images',function(){
		return gulp.src('app/images/*.*')
				.pipe(imagemin({
					progressive: true,
					svgoPlugins: [{removeViewBox: false}],
					use: [pngquant()]
				}))
				.pipe(gulp.dest('dist/images'))
				.pipe(connect.reload());
	});
	

	//CLEAN
	gulp.task('clean',function(){
		return gulp.src('dist',{read:false})
				.pipe(clean());
	});


	//COPY
	gulp.task('copy',function(){
		return gulp.src(['app/**','!app/index.html','!app/css/**/*.css','!app/js/**/*.js'])
				.pipe(gulp.dest('dist'));
	});

			
	//WATCH
	gulp.task('watch',function(){
		gulp.watch(['./app/**','!./app/**/*.html','!./app/css/**/*.css','!./app/js/**/*.js'],['build']);
		gulp.watch('./app/**/*.html',['build']);
		gulp.watch('./app/css/**/*.css',['usemin']);
		gulp.watch('./app/js/**/*.js',['jshint','usemin']);
	});


	//CONNECT
	gulp.task('connect', function() {
		  connect.server({
			    root: 'dist',
			    port:8080,
			    livereload: true
		  });
	});


	//CUSTOM-TASKS
	gulp.task('build',function(){
		runSequence('clean','jshint','copy','images','usemin');
	});

	gulp.task('default',['build']);

	gulp.task('serve',function(){
		runSequence('build','connect','watch');
	});



