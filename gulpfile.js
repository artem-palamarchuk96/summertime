var browser = require('browser-sync');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var rigger = require('gulp-rigger');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var imageminpng = require('imagemin-pngquant');
var mainBowerFiles = require('main-bower-files');


gulp.task('less', function() {
	return gulp.src('src/css/style.css')
			.pipe(less())
			.pipe(autoprefixer())
			.pipe(cleancss())
			.pipe(gulp.dest('dist/css/'))
			.pipe(browser.reload({
				stream: true
			}))
})

gulp.task('html', function() {
	return gulp.src('src/index.html')
			.pipe(gulp.dest('dist'))
})

gulp.task('browser', function() {
	browser.init({
		server: {
			baseDir: 'dist'
		},
		notify: false
	});
})

gulp.task('watch', ['html', 'less', 'browser'], function() {
	gulp.watch('src/css/*.css', ['less']);
})