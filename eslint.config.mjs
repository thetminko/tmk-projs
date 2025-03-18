import nx from '@nx/eslint-plugin';
import eslintConfigPrettier from 'eslint-plugin-prettier/recommended';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  eslintConfigPrettier,
  {
    ignores: ['**/dist', '**/vite.config.*.timestamp*', '**/vitest.config.*.timestamp*']
  },
  // {
  //   files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
  //   rules: {
  //     '@nx/enforce-module-boundaries': [
  //       'error',
  //       {
  //         enforceBuildableLibDependency: true,
  //         allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
  //         depConstraints: [
  //           {
  //             sourceTag: '*',
  //             onlyDependOnLibsWithTags: ['*'],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts', '**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    // Override or add rules here
    rules: {}
  }
];
