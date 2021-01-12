const { watch } = require("gulp");
const nodemon = require("gulp-nodemon");
const { TS_SRC_FILES, VIEW_SRC_FILES, CSS_SRC_FILES, DEST_FOLDER } = require("../utils/constants");
const buildTs = require("./build-ts");
const copy = require("./copy");
const css = require("./css");

const getWatchConfig = () => ({ events: "all" });
const devServer = (cb) => {
  nodemon({
    watch: [
      "dist/"
    ],
    script: "dist/app.js",
    ext: "js ejs css",
    env: { "NODE_ENV": "development" },
    done: cb
  });
};

const watchFiles = (cb) => {
  watch(TS_SRC_FILES, getWatchConfig(), buildTs);
  watch(VIEW_SRC_FILES, getWatchConfig(), copy);
  watch(CSS_SRC_FILES, getWatchConfig(), css);

  devServer(cb);
};

module.exports = watchFiles;