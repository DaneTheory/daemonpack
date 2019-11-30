const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    commonjs: true,
    jest: true,
    browser: false,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
}
