const {
  src,
  dest
} = require('gulp');
const include = require('gulp-file-include');
const bs = require('browser-sync');
const multiDest = require('gulp-multi-dest');

module.exports = function html() {
  return src(['src/**/*.html', '!src/components/**/*.html'])
    .pipe(include())
    .pipe(multiDest(['build', './../../../build']))
    .pipe(bs.stream())
}
