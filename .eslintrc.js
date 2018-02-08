module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  env: {
    "jest": true
  },
  plugins: [
    "import"
  ],
  rules: {
    "arrow-parens": "off",
    "comma-dangle": "off",
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": ["error", { "extensions": ['.jsx', '.js'] }],
    "import/prefer-default-export": "off",
    "object-curly-newline": "off",
    "arrow-body-style": "off",
    "react/sort-comp": "off",
    "react/prefer-stateless-function": "off",
    "react/no-multi-comp": "off",
    "no-restricted-syntax": "off",
    "guard-for-in": "off"
  }
}
