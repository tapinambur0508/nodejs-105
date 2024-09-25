import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.node },
    rules: {
      semi: 'error',
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
  },
];
