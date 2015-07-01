var gulp = require( 'gulp' );
var requireDir = require( 'require-dir' );
var runSequence = require('run-sequence');

requireDir( './gulp' );

function watchAndRebuild() {
    gulp.watch( ['./compile/**/*'], [ 'build' ] );
}

function watchAndRecompile() {
    gulp.watch( './component/**/*', [ 'browserify' ] );
    gulp.watch( [ './index.html', './index.js' ], [ 'through' ] );
    gulp.watch( './style/**/*', [ 'css' ] );
}

gulp.task('copy-ld-icon', function() {
    gulp.src('./learndot.icns')
    .pipe(gulp.dest('./build/v0.26.0/darwin-x64/Electron.app/Contents/Resources/'));
});

gulp.task( 'watch-all', function () {
    watchAndRecompile();
    watchAndRebuild();
} );

gulp.task( 'watch-compile-build', runSequence('compile', 'build', 'watch-all') );

gulp.task( 'watch-compile', [ 'build' ], watchAndRecompile );
gulp.task( 'watch-build', [ 'build' ], watchAndRebuild );

gulp.task( 'default', [ 'watch-compile-build' ] );
