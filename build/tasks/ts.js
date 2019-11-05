module.exports.init = () => {
   const gulp = require('gulp');
   const ts = require('gulp-typescript');
   const tsProject = ts.createProject('src/tsconfig.json');
   const concat = require('gulp-concat');

   gulp.task('ts', () => {
      return tsProject.src()
         .pipe(tsProject())
         .js.pipe(concat("src.js"))
         .pipe(gulp.dest('out'));
   });
}