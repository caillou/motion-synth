(function () {
	'use strict';

	var gulp = require('gulp'),
		plugins = require('gulp-load-plugins')({
			pattern: 'gulp{-,.}*',
			replaceString: /gulp(\-|\.)/
		});

	// Connect
	gulp.task('connect', function () {
		plugins.connect.server({
			root: ['.'],
			port: 9000,
			livereload: true
		});
	});

	// Open
	gulp.task('serve', ['connect'], function () {
		//open('http://localhost:9000');
	});

	// Watch
	gulp.task('watch', ['serve'], function () {
		gulp.watch('*.html', function () {
			plugins.connect.reload();
		});
	});
	// Default task
	gulp.task('default', ['watch']);

}());
