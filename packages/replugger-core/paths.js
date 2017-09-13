const path = require('path');

const PATHS = {
  SRC: path.resolve(__dirname, 'src'),
  MODULES: path.resolve(__dirname, 'node_modules'),
  INDEX: path.resolve(__dirname, 'src/index.jsx'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = PATHS;
