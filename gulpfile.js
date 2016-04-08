'use strict';

// grab our packages
var gulp   		 =   require('gulp'),
	jshint 		 =   require('gulp-jshint'),
	uglify 		 =   require('gulp-uglify'),
	concat 		 =   require('gulp-concat'),
	clean 		 =   require('gulp-clean'),
	autoprefixer =   require('gulp-autoprefixer'),
	cssmin 	 	 =   require('gulp-clean-css'),
	imagemin 	 =   require('gulp-imagemin'),
	pngquant 	 =   require('imagemin-pngquant'),
	htmlreplace  =   require('gulp-html-replace'),
	connect 	 =	 require('gulp-connect'),
	runSequence  =   require('run-sequence');//run the gulp tasks in sequence


	//CSS-STYLESHEETS
	gulp.task('css',function(){
		return gulp.src('./app/css/**/*.css')
				.pipe(concat('styles.min.css'))
				.pipe(autoprefixer({
				browsers:['last 5 versions','ie 8','ie 9'],
				cascade:false
				}))
				.pipe(cssmin())
				.pipe(gulp.dest('dist/css/'))
				.pipe(connect.reload());

	});

	//JS-SCRIPTS
	gulp.task('js',function(){
		return gulp.src('./app/js/**/*.js')
				.pipe(jshint())
				.pipe(jshint.reporter('jshint-stylish'))
				.pipe(concat('scripts.min.js'))
				.pipe(jshint())
				.pipe(jshint.reporter('jshint-stylish'))
				.pipe(uglify())
				.pipe(gulp.dest('dist/js/'))
				.pipe(connect.reload());

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
	

	//PROCESS-HTML
	gulp.task('html',function(){
	  return gulp.src('./app/*.html')
		     .pipe(htmlreplace({
		        'css':'css/styles.min.css',
		        'js': 'js/scripts.min.js'
		    }))
		     .pipe(gulp.dest('dist/'))
		     .pipe(connect.reload());

	});

	//CLEAN
	gulp.task('clean',function(){
		return gulp.src('dist',{read:false})
				.pipe(clean());
	});


	//COPY
	gulp.task('copy',function(){
		return gulp.src(['app/**','!app/css/**/*.css','!app/js/**/*.js'])
				.pipe(gulp.dest('dist'));
	});

			
	//WATCH
	gulp.task('watch',function(){
		gulp.watch(['./app/**','!./app/**/*.html','!./app/css/**/*.css','!./app/js/**/*.js'],['build']);
		gulp.watch('./app/**/*.html',['html']);
		gulp.watch('./app/css/**/*.css',['css']);
		gulp.watch('./app/js/**/*.js',['js']);
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
		runSequence('clean',['css','js'],'copy','images','html');
	});

	gulp.task('default',['build']);

	gulp.task('serve',function(){
		runSequence('build','connect','watch');
	});


