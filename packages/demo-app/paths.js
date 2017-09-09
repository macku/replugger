const path = require('path');
const fs = require('fs');

const linkdedModules = [
  'replugger',
  'replugger-demo-plugin-bar',
  'replugger-demo-plugin-foo'
];
const LINKED_MODULES = linkdedModules.map(module => fs.realpathSync(`./node_modules/${module}`));
const EXCLUDED_MODULES = linkdedModules.map(module => new RegExp(`${module}/node_modules`));

const PATHS = {
  SRC: path.resolve(__dirname, 'src'),
  MODULES: path.resolve(__dirname, 'node_modules'),
  INDEX: path.resolve(__dirname, 'src/index.jsx'),
  DIST: path.resolve(__dirname, 'dist'),
  LINKED_MODULES,
  EXCLUDED_MODULES
};

module.exports = PATHS;
