const { watch } = require("gulp");
const {TS_SRC_FILES, PUG_SRC_FILES, CSS_SRC_FILES} = require('../utils/constants');
const buildTs = require("./build-ts");
const copy = require("./copy");
const css = require('./css');

const getWatchConfig = () => ({ events: 'all' });

const watchFiles = () => {
  watch(TS_SRC_FILES, getWatchConfig(), buildTs);
  watch(PUG_SRC_FILES, getWatchConfig(), copy);
  watch(CSS_SRC_FILES, getWatchConfig(), css)
};

module.exports = watchFiles;