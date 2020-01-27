module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  settings: {
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
  },
}
