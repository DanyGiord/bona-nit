/* eslint-env node */
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    rules: {
      'react/display-name': 'off',
    },
    // Add the import resolver here
    settings: {
      'import/resolver': {
        alias: {
          map: [['@env', './.env']],
          extensions: ['.js', '.ts', '.tsx', '.json'],
        },
      },
    },
  },
]);
