const { series } = require("gulp");
const clean = require("./scripts/clean");
const buildTs = require("./scripts/build-ts");

exports.default = series(clean, buildTs);