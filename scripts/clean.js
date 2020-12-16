const del = require("del");
const { DEST_FOLDER } = require("../utils/constants");

const cleanDist = () => del([DEST_FOLDER]);

module.exports = cleanDist;