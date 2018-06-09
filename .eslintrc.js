module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 7,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jest/globals": true,
  },
  "globals": {
    "document": true,
    "window": true,
    "process": true
  },
  "extends": [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:flowtype/recommended",
    "plugin:security/recommended",
    "plugin:jest/recommended"
  ],
  "plugins": [
    "react",
    "prettier",
    "flowtype",
    "security",
    "jest"
  ],
  "rules": {
    "semi": ["error", "never"],
    "no-console": 0,
    "jsx-a11y/anchor-is-valid": ["off"],
    "react/jsx-filename-extension": ["error",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/display-name": [2],
    "react/prop-types": [0],
    "prettier/prettier": ["error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "semi": false
      }
    ]
  }
}
