var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnext = require('cssnext');
var csswring = require('csswring');
var lost = require('lost');

gulp.task('css', function() {
	var processors = [
		precss,
		cssnext,
		csswring,
		lost,
		autoprefixer
	];

	return gulp.src('assets/all.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./css'));
});

gulp.task('default', function() {
	gulp.watch('assets/**/*.css', ['css']);
});
