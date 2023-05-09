module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [],

  parserOptions: {
    parser: '@babel/eslint-parser',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'linebreak-style': 0,
    'max-len': 'off',
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ]
};
