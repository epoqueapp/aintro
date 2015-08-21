var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function () {
  var tsResult = gulp.src('server/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        module: 'commonjs',
        out: 'output.js'
      }));
  return tsResult.js.pipe(gulp.dest('built/server'));
});
