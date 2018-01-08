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
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": "off",
    "react/jsx-filename-extension": ["error", { "extensions": ['.jsx', '.js'] }],
    "import/prefer-default-export": "off"
  }
}