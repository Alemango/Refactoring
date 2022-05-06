module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    },
    "scripts": {
        "test": "node ./node_modules/.bin/jest",
        "linter": "node ./node_modules/eslint/bin/eslint.js .",
        "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"
      }
};
