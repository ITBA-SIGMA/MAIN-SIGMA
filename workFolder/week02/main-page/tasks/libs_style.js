const {
  src,
  dest
} = require('gulp');
const sass = require('gulp-sass');
const bulk = require('gulp-sass-bulk-importer');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');
const multiDest = require('gulp-multi-dest');

module.exports = function style() {
  return src('src/bower/foundation/scss/foundation.scss')
    .pipe(map.init())
    .pipe(bulk())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(concat('libs.min.css'))
    .pipe(map.write('../sourcemaps/'))
    .pipe(multiDest(['build/css/', './../../../build/css/']))
    .pipe(bs.stream())
}
