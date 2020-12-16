const { src, dest } = require("gulp");
const { CSS_SRC_FILES, DEST_FOLDER } = require("../utils/constants");
const isProduction = require("../utils/isProduction");
const cssOptimizer = require("gulp-csso");
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const gulpIf = require('gulp-if');


const css = () => src([CSS_SRC_FILES])
  // if not in production mode
  .pipe(gulpIf(!isProduction(), sourcemaps.init()))
  .pipe(autoprefixer())
  // if in production mode
  .pipe(gulpIf(isProduction(), cssOptimizer()))
  // if not in production mode
  .pipe(gulpIf(!isProduction(), sourcemaps.write()))
  .pipe(dest(DEST_FOLDER));

module.exports = css;