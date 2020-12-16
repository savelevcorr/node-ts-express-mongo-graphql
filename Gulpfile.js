const { series, parallel } = require("gulp");
const buildTs = require("./scripts/build-ts");
const clean = require("./scripts/clean");
const copy = require("./scripts/copy");
const css = require("./scripts/css");
const watchFiles = require("./scripts/watch");

exports.watchFiles = series(clean, parallel(buildTs, css, copy), watchFiles);
exports.default = series(clean, parallel(buildTs, css, copy));