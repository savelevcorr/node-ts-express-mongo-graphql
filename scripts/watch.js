const { watch } = require("gulp");
const {TS_SRC_FILES, PUG_SRC_FILES, CSS_SRC_FILES} = require('../utils/constants');
const buildTs = require("./build-ts");
const copy = require("./copy");
const css = require('./css');

const watchFiles = () => {
  watch(TS_SRC_FILES, buildTs);
  watch(PUG_SRC_FILES, copy);
  watch(CSS_SRC_FILES, css)
};

module.exports = watchFiles;