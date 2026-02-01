import { reactConfig } from './react.js';
import { defineConfig } from 'eslint/config';
import pluginNext from '@next/eslint-plugin-next';

export const nextConfig = defineConfig([
  ...reactConfig,
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
]);
