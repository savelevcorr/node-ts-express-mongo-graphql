const { dest, src } = require("gulp");
const { SRC_FOLDER, DEST_FOLDER } = require("../utils/constants");

/**
 * Just copy files into dest folder
 */
const copy = () => src(`${SRC_FOLDER}/**/*.pug`)
  .pipe(dest(DEST_FOLDER));

module.exports = copy;