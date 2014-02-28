// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('assets/scss/*.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest('assets/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);