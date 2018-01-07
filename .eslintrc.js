module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: [
    "import"
  ],
  rules: {
    "comma-dangle": "off",
    "react/jsx-filename-extension": ["error", { "extensions": ['.jsx', '.js'] }],
    "import/prefer-default-export": "off"
  }
}