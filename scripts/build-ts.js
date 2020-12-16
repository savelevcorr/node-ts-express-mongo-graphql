const ts = require("gulp-typescript");
const { src, dest } = require("gulp");
const { DEST_FOLDER, SRC_FOLDER, TS_SRC_FILES } = require("../utils/constants");

const tsProject = ts.createProject({
  "target": "es2018",
  "module": "commonjs",
  "moduleResolution": "node",
  "strict": true,
  "esModuleInterop": true,
  "forceConsistentCasingInFileNames": true
});
const buildTs = () => src([TS_SRC_FILES, `!${SRC_FOLDER}/types/**.ts`])
  .pipe(tsProject())
  .js
  .pipe(dest(DEST_FOLDER));

module.exports = buildTs;