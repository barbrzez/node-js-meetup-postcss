module.exports.init = () => {
   const gulp = require('gulp');
   const webserver = require('gulp-webserver');

   gulp.task('http', () => {
      return gulp.src('out')
        .pipe(webserver({
          livereload: true,
          directoryListing: false,
          open: false
        }));
    });
};