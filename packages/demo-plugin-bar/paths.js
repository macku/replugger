const path = require('path');
const fs = require('fs');

const linkedModules = [
  'replugger'
];
const LINKED_MODULES = linkedModules.map(module => fs.realpathSync(`./node_modules/${module}`));
const EXCLUDED_MODULES = linkedModules.map(module => new RegExp(`${module}/node_modules`));

const PATHS = {
  SRC: path.resolve(__dirname, 'src'),
  MODULES: path.resolve(__dirname, 'node_modules'),
  INDEX: path.resolve(__dirname, 'src/index.jsx'),
  DIST: path.resolve(__dirname, 'dist'),
  LINKED_MODULES,
  EXCLUDED_MODULES
};

module.exports = PATHS;
