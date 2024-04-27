import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  {
    env: {
      commonjs: false,
      es2021: true,
      node: true,
    },
    extends: ['prettier'],
    parserOptions: {
      ecmaVersion: 'latest',
    },

    rules: {},
  },
  pluginJs.configs.recommended,
];
