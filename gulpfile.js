var gulp = require('gulp'),
  connect = require('gulp-connect');
gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});
gulp.task('html', function () {
  gulp.src('./**')
    .pipe(connect.reload());
});
gulp.task('watch', function () {
  gulp.watch(['*.*'], ['html']);
});

gulp.task('default', ['connect', 'watch'],function(){
	gulp.watch(['./**/**'], ['html']);
});
