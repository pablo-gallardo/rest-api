module.exports = {
  env: {
    es2020: true,
    node: true,
    mocha: true
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    "comma-dangle": 0
  },
};
