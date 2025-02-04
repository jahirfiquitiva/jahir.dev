import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    ignores: [
      'node_modules',
      '.pnp',
      '**/.pnp.js',
      'coverage',
      'build',
      '**/.DS_Store',
      '**/.env.local',
      '**/.env.development.local',
      '**/.env.test.local',
      '**/.env.production.local',
      '**/npm-debug.log*',
      '**/yarn-debug.log*',
      '**/yarn-error.log*',
      '**/serviceWorker.js',
      '**/deploy',
      '**/public',
      '**/build',
      '**/posts',
      '**/node_modules',
      '**/.next',
      '**/.idea',
      '**/public',
      '**/dist',
      '**/storybook',
      'scripts/*.js',
      'scripts/**.js',
      'scripts/**/*.js',
      'public/pwa/*.min.js',
      'src/blur',
    ],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ),
  {
    plugins: {
      '@stylistic': stylistic,
      '@typescript-eslint': typescriptEslint,
      prettier,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: './tsconfig.json',
      },
    },

    rules: {
      semi: ['error', 'always'],

      quotes: [
        'error',
        'single',
        {
          allowTemplateLiterals: false,
          avoidEscape: true,
        },
      ],

      'no-empty': [
        'error',
        {
          allowEmptyCatch: true,
        },
      ],

      '@stylistic/max-len': [
        'error',
        {
          code: 100,
          comments: 92,
          ignoreUrls: true,
          ignoreRegExpLiterals: true,
        },
      ],

      'max-lines': [
        'error',
        {
          max: 300,
          skipBlankLines: true,
        },
      ],

      'arrow-parens': [
        'error',
        'always',
        {
          requireForBlockBody: true,
        },
      ],

      'import/order': [
        'warn',
        {
          groups: [
            'object',
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },

          'newlines-between': 'always',
        },
      ],

      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'always',
        },
      ],

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-unnecessary-condition': ['error'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^(_|e)$',
          caughtErrorsIgnorePattern: '^(_|e)$',
          destructuredArrayIgnorePattern: '^(_|e)$',
          varsIgnorePattern: '^(_|e)$',
        },
      ],

      '@typescript-eslint/no-inferrable-types': [
        'error',
        {
          ignoreParameters: true,
          ignoreProperties: true,
        },
      ],
    },
  },
];
