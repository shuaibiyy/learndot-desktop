var gulp = require( 'gulp' );

gulp.task( 'compile', [
	'browserify',
	'through',
	'css',
	'install'
] );
