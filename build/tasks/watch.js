module.exports.init = () => {
   const gulp = require('gulp');

   gulp.task('watch', (finishedCallback) => {
      gulp.watch('src/css/**/*.css', gulp.series(['css']));
      gulp.watch('src/ts/**/*.ts', gulp.series(['ts']));
      gulp.watch('src/html/**/*.html', gulp.series(['html']));

      finishedCallback();
   })
};