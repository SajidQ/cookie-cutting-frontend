module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "prettier/prettier": ["error", { "singleQuote": true }],
    "semi": ["error", "never"],
    "react/jsx-props-no-spreading": [0]
  },
};
