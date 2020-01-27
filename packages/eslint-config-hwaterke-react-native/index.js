module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.ios.js'],
      },
    },
  },
  rules: {
    curly: ['error', 'all'],
    'linebreak-style': ['error', 'unix'],
    eqeqeq: 'error',
    'prefer-const': 'error',
    'no-console': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/default-props-match-prop-types': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-typos': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-will-update-set-state': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-native/no-raw-text': 'error',
  },
}
