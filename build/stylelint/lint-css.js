
module.exports.init = () => {
   const gulp = require('gulp');

   gulp.task('lint-css', function lintCssTask() {
     const gulpStylelint = require('gulp-stylelint');

     return gulp
       .src('src/css/**/*.css')
       .pipe(gulpStylelint({
         reporters: [
           {formatter: 'string', console: true}
         ]
       }));
   });
}

