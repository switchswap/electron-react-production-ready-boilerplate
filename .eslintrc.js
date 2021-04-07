module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": ["plugin:react/recommended", "prettier", "plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "typescript": true
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "@typescript-eslint/ban-ts-ignore": 0,
    "comma-dangle": ["warn", "only-multiline"],
    "eol-last": ["error", "always"],
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "no-extra-semi": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
    "object-curly-spacing": ["error", "always"],
    "react/jsx-uses-vars": 1,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
