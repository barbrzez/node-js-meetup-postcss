module.exports.init = function () {
   var gulp = require('gulp');
   var webserver = require('gulp-webserver');

   gulp.task('http', function() {
      return gulp.src('out')
        .pipe(webserver({
          livereload: true,
          directoryListing: false,
          open: false
        }));
    });
};