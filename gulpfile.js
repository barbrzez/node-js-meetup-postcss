const gulp = require('gulp');

require('./build/stylelint/lint-css').init();
require('./build/tasks/css').init();
require('./build/tasks/ts').init();
require('./build/tasks/html').init();
require('./build/tasks/watch').init();
require('./build/tasks/http').init();

gulp.task('default', gulp.series( [ gulp.parallel('html', 'css', 'ts'), 'watch', 'http' ] ));