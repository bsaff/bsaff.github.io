module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "Vue": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        quotes: ["error", "single"],
        indent: ["error", 2],
        "no-console": ["error"],
        'object-curly-spacing': ["error", "always"]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
