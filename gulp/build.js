var gulp = require( 'gulp' );

gulp.task( 'copy-ld-icon', function() {
    return gulp.src('./atom.icns')
               .pipe(gulp.dest('./build/v0.26.0/darwin-x64/Electron.app/Contents/Resources/'));
});

gulp.task( 'build', [ 'atom' ]);
