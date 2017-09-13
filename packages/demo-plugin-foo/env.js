const TARGET = process.env.npm_lifecycle_event;
let env = 'development';

switch (TARGET) {
  case 'build':
  case 'build:prod':
    env = 'production';
    break;

  case 'start':
  default:
    env = 'development';
}

module.exports = env;
