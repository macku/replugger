const path = require('path');
const fs = require('fs');

const linkdedModules = ['replugger'];
const LINKED_MODULES = linkdedModules.map(module => fs.realpathSync(`./node_modules/${module}`));

const PATHS = {
  SRC: path.resolve(__dirname, 'src'),
  MODULES: path.resolve(__dirname, 'node_modules'),
  INDEX: path.resolve(__dirname, 'src/index.jsx'),
  DIST: path.resolve(__dirname, 'dist'),
  LINKED_MODULES
};

module.exports = PATHS;
