module.exports = {
  extends: ['airbnb', 'plugin:require-path-exists/recommended'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  plugins: ['react', 'jsx-a11y', 'import', 'require-path-exists'],
  rules: {
    'comma-dangle': ['error', 'never'],
    radix: 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-prototype-builtins': 'off',
    'react/require-extension': 'off',
    'react/no-unused-prop-types': ['error', { skipShapeProps: true }],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true
      }
    ],
    'jsx-a11y/label-has-for': 'off',
    'space-before-function-paren': 'off',
    'react/jsx-space-before-closing': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true
      }
    ],
    'import/no-unresolved': ['error'],
    'import/named': ['error'],
    'import/export': ['error'],
    'import/default': ['error'],
    'import/namespace': [
      'error',
      {
        allowComputed: true
      }
    ],
    'import/extensions': [
      'error',
      {
        json: 'always',
        less: 'always',
        js: 'never',
        jsx: 'never'
      }
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin', 'external'
        ]
      }
    ],
    'import/newline-after-import': ['error'],
    'require-path-exists/exists': [
      'error',
      {
        extensions: [
          '',
          '.js',
          '.jsx',
          '.json',
          '.less',
          '.css'
        ],
        webpackConfigPath: 'webpack.config.js'
      }
    ],
    'no-debugger': ['error'],
    'no-alert': ['error'],
    'newline-after-var': ['error', 'always'],
    'newline-before-return': ['error'],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'default-case': 'off'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
};
