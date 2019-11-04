
module.exports.init = function() {
   var postcss = require('gulp-postcss');
   var gulp = require('gulp');
   var concat = require('gulp-concat');
   var nested = require('postcss-nested');
   var hover = require('./postcss-hover');
   var interim = require('./postcss-interim');

   
   gulp.task('css', function () {
      var processors = [
         interim,
         nested,
         hover
      ];
   
      return gulp.src('./src/css/**/*.css')
         .pipe(concat("src.css"))
         .pipe(postcss(processors))
         .pipe(gulp.dest('out'));
   });
}

