
module.exports.init = () => {
   const postcss = require('gulp-postcss');
   const gulp = require('gulp');
   const concat = require('gulp-concat');
   const nested = require('postcss-nested');
   const hover = require('./postcss-hover');
   const interim = require('./postcss-interim');

   gulp.task('css-compile', () => {
      const processors = [
         interim,
         nested,
         hover
      ];
   
      return gulp.src('./src/css/**/*.css')
         .pipe(concat("src.css"))
         .pipe(postcss(processors))
         .pipe(gulp.dest('out'));
   })

   gulp.task('css', gulp.series('lint-css', 'css-compile'));
}

