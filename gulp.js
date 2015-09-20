var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function () {
  var tsResult = gulp.src('scripts/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'output.js'
      }));
  return tsResult.js.pipe(gulp.dest('scripts'));
});