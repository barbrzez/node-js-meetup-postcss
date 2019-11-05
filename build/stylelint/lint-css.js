
module.exports.init = () => {
   const gulp = require('gulp');

   gulp.task('lint-css', () => {
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

