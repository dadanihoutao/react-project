module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ], 
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "generators": true,
            "experimentalObjectRestSpread": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "class-property"
    ],
    "settings": {
        'import/resolver': {
            webpack: {
                config: './build/webpack.dev.config.js',
            }
        },
    },
    "rules": {
        "indent": ['warn', 4],
        "space-before-function-paren": 1,
        "eol-last": 1,
        "semi": ["error", "never"],
        "eqeqeq": 2,
        "space-before-blocks": ["error", "always"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": ["error", {"int32Hint": true}],
        "spaced-comment": ["error", "always"],
        "switch-colon-spacing": ["error", {"after": true, "before": false}],
        "no-duplicate-imports": "error",
        "eol-last": ["error", "always"],
        "comma-dangle": 1,
        "quotes": [ 0, "single" ],
        "global-strict": 0,
        "no-extra-semi": 1,
        "no-underscore-dangle": 0,
        "no-console": 0,
        "no-undef": "warn",
        "no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false,
                "varsIgnorePattern": "createElement"
            }
        ],
        "no-trailing-spaces": [1, { "skipBlankLines": true }],
        "no-unreachable": 1,
        "no-alert": 0,
        "no-mixed-spaces-and-tabs": 1,
        "no-empty-pattern": 1,
        "no-empty": 1,
        "no-useless-escape": 1,
        "no-case-declarations": 1,
        "no-debugger": 1,
        "react/no-string-refs": 1,
        "react/react-in-jsx-scope": 2,
        "react/no-direct-mutation-state": 1,
        "react/prop-types": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-no-undef": 2,
        "react/display-name": 0,
        "react/no-deprecated": 0,
        "react/no-unescaped-entities": 1,
        "react/jsx-key": 1,
        "react/jsx-no-target-blank": 1,
        "react/no-find-dom-node": 1,
        "experimentalDecorators": 0,
        "react/no-unknown-property": 0
    }
};