const { series, parallel } = require("gulp");
const clean = require("./scripts/clean");
const css = require('./scripts/css');
const buildTs = require("./scripts/build-ts");

exports.default = series(clean, parallel(buildTs, css));