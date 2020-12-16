const { series, parallel } = require("gulp");
const transpileTs = require("./transpile-ts");
const clean = require("./clean");
const copy = require("./copy");
const css = require('./css');

const build = () => series(clean, parallel(transpileTs, css, copy));

module.exports = build;