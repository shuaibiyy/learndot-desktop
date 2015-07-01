var gulp = require( 'gulp' );
var minifyCss = require( 'gulp-minify-css' );

gulp.task( 'css', function () {
	return gulp.src( './style/**/*.css' )
		.pipe( minifyCss() )
		.pipe( gulp.dest( './compile/style' ) );
} );
